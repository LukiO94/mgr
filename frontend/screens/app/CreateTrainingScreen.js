import React from 'react';
import { Alert, Button, Picker, TextInput, View } from 'react-native';
import DatePicker from 'react-native-datepicker';

import styles from '../../styles/Styles';
import BasicScreen from './BasicScreen';


export default class CreateTrainingScreen extends BasicScreen {

    constructor(props) {
        super(props);
        this.state = {
            players: [],
            title: '',
            content: '',
            date: '2000-01-01',
            playerId: null,
        };
    }
    _specificView = () => {
        const { navigate } = this.props.navigation;
        const players = this.state.players.map((elem) =>
            <Picker.Item key={elem.id} label={elem.firstName + " " + elem.lastName} value={elem.id} />
        );
        return (
            <View>
                <View style={styles.elemContainer}>
                    <Picker style={styles.pickerInput} prompt="Wybierz zawodnika" selectedValue={this.state.playerId} onValueChange={(id) => this.setState({ playerId: id })}>
                        {players}
                    </Picker>
                </View>
                <View style={styles.elemContainer}>
                    <DatePicker
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2000-01-01"
                        confirmBtnText="Zatwierdz"
                        cancelBtnText="Wstecz"
                        onDateChange={(date) => { this.setState({ date: date }) }}
                    />
                </View>
                <View style={styles.elemContainer}>
                    <TextInput style={styles.inputText} placeholder="tytuł" onChangeText={(title) => this.setState({ title })} />
                </View>
                <View style={styles.elemContainer}>
                    <TextInput style={styles.inputTextMultiline} placeholder="treść treningu" multiline={true} numberOfLines={10} onChangeText={(content) => this.setState({ content })} />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={this._createTreningRequest} title="Dodaj trening" />
                </View>
            </View>
        );
    };
    _createTreningRequest = () => {
        let title = this.state.title;
        let content = this.state.content;
        let playerId = this.state.playerId;
        let date = new Date(this.state.date).getTime();
        let groupId = this.props.navigation.getParam("groupId");
        console.log(this.state.date);
        fetch('https://ozdar-test-app.herokuapp.com/trainings/createTrainingForPlayer', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date: date,
                title: title,
                content: content,
                playerId: playerId,
                groupId: groupId
            })
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON);
                if (responseJSON.status === 200) {
                    this.setState({
                        errorText: ''
                    });
                    this._createAlert(true);
                }
                else {
                    this._createAlert(false);
                }
            });
    };

    componentWillMount() {
        let dateString = '';
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        dateString += date.getFullYear() + "-";
        if(month < 10) dateString += "0" + month + "-";
        else dateString += month + "-";
        if(day < 10) dateString += "0" + day;
        else dateString += day;
        this.setState({
            date: dateString
        });
        fetch('https://ozdar-test-app.herokuapp.com/groups/getPlayersInTrainingGroup?groupId=' + this.props.navigation.getParam("groupId"), {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.props.screenProps.token
            }
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON);
                if (responseJSON.status === 200) {
                    this.setState({
                        players: responseJSON.users
                    });
                    if (responseJSON.users.length > 0) {
                        this.setState({
                            playerId: responseJSON.users[0].id
                        });
                    }
                }
            });
    };

    _createAlert = (success) => {
        if (success) {
            Alert.alert(
                'Utworzono trening.',
                'Utworzono trening możesz go teraz zobaczyć w treningach zawodnika.',
                [
                    { text: 'OK', onPress: () => navigate('CoachGroup', { groupId: elem.id }) }
                ]
            );
        }
        else {
            Alert.alert(
                'Błąd przy tworzeniu treningu.',
                'Spróbuj wypełnić formularz ponownie.',
                [
                    { text: 'OK' }
                ]
            );
        }
    };
};
