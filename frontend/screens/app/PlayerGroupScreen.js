import React from 'react';
import { Button, Text, View } from 'react-native';

import styles from '../../styles/Styles';
import BasicScreen from './BasicScreen';


export default class TrainingGroupScreen extends BasicScreen {


    _specificView = () => {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.outputText}>Nazwa: Sredniozaawansowana</Text>
                <Text style={styles.outputText}>Trener: Jan Kowalski</Text>
                <Text style={styles.outputText}>Opis: </Text>
                <Text style={styles.outputText}>Zawodnicy: </Text>
                <Text style={styles.outputText}>zaw1</Text>
                <Text style={styles.outputText}>zaw2</Text>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={this._testFunction} title="Zaproszenia do grup" />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={this._testFunction} title="Opuść grupę" />
                </View>
            </View>
        );
    };
}
