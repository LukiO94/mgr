import React from 'react';
import { Button, View } from 'react-native';

import styles from '../../styles/Styles';
import BasicScreen from './BasicScreen';


export default class TrainingGroupsScreen extends BasicScreen {
    constructor(props) {
        super(props);
        this.state = {
            groups: [],
            errorText: ''
        };
    }
    _specificView = () => {
        const { navigate } = this.props.navigation;
        const groups = this.state.groups.map((elem) =>
            <View style={styles.elemContainer} key={elem.id}>
                <Button color={styles.defaultButton.color} onPress={() => navigate('CoachGroup')} title={elem.name} />
            </View>
        );
        return (
            <View>
                {groups}
            </View>
        );
    }
    componentWillMount() {
        fetch('https://ozdar-test-app.herokuapp.com/groups/getCoachTrainingGroups', {
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
                //if(responseJSON.status === 200){
                this.setState({
                    groups: responseJSON
                });
                // }
                // else {
                //     this.setState({
                //         errorText: 'Błąd pobierania grup!'
                //     });
                // }
            });
    };
}
