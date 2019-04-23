import React from 'react';
import { Button, View } from 'react-native';
import styles from '../../styles/Styles'
import BasicScreen from './BasicScreen';


export default class PlayerTrainingsScreen extends BasicScreen {
    constructor(props) {
        super(props);
        this.state = {
            trainings: []
        };
    }
    _specificView = () => {
        const { navigate } = this.props.navigation;
        const trainings = this.state.trainings.map((elem) =>
            <View key={elem.id} style={styles.elemContainer}>
                <Button color={styles.defaultButton.color} title={elem.title + " - " + elem.date} onPress={() => navigate('PlayerTraining', {training: elem})} />
            </View>
        );
        return (
            <View style={styles.mainContainer}>
                {trainings}
            </View>
        );
    };
    componentWillMount() {
        fetch('https://ozdar-test-app.herokuapp.com/trainings/getPlayerTrainings', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.props.screenProps.token
            }
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON);
                if (responseJSON.status === 200) {
                    this.setState({
                        trainings: responseJSON.trainings
                    });
                }
            });
    };
}
