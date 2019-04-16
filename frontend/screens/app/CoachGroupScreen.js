import React from 'react';
import { Button, View } from 'react-native';

import styles from '../../styles/Styles';
import BasicScreen from './BasicScreen';


export default class CoachGroupScreen extends BasicScreen {

    _specificView = () => {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={() => navigate('Players')} title="Zawodnicy" />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={() => navigate('Trainings')} title="Treningi" />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={() => navigate('CreateTraining')} title="Dodaj trening" />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={this._testFunction} title="Usuń grupę" />
                </View>
            </View>
        );
    }
}
