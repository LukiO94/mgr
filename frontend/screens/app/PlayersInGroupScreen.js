import React from 'react';
import { Button, View } from 'react-native';

import styles from '../../styles/Styles';
import BasicScreen from './BasicScreen';


export default class PlayersScreen extends BasicScreen {

    constructor(props) {
        super(props);
        this.state = {
            errorText: '',
            players: []
        };
    }

    _specificView = () => {
        const { navigate } = this.props.navigation;
        const players = this.state.players.map((elem) =>
            <View style={styles.elemContainer} key={elem.id}>
                <Button color={styles.defaultButton.color} onPress={() => navigate('Player', {playerId: elem.id})} title={elem.firstName + " " + elem.lastName} />
            </View>
        );
        return (
            <View>
                {players}
            </View>
        );
    };

    componentWillMount() {
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
                if(responseJSON.status === 200){
                this.setState({
                    players: responseJSON.users
                });
                }
                else {
                    this.setState({
                        errorText: 'Błąd pobierania grup!'
                    });
                }
            });
    };
}
