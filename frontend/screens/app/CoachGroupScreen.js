import React from 'react';
import { Button, View } from 'react-native';

import styles from '../../styles/Styles';
import BasicScreen from './BasicScreen';


export default class CoachGroupScreen extends BasicScreen {

    _specificView = () => {
        const { navigate } = this.props.navigation;
        const groupId = this.props.navigation.getParam("groupId");
        return (
            <View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={() => navigate('PlayersInGroup', {groupId: groupId})} title="Zawodnicy" />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={() => navigate('Trainings', {groupId: groupId})} title="Treningi" />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={() => navigate('CreateTraining', {groupId: groupId})} title="Dodaj trening" />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={this._testFunction} title="Usuń grupę" />
                </View>
            </View>
        );
    }
}
