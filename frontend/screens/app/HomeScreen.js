import React from 'react';
import { Button, Text, View } from 'react-native';

import styles from '../../styles/Styles';
import BasicScreen from './BasicScreen';


export default class HomeScreen extends BasicScreen {

    _specificView = () => {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text style={styles.outputText}>Witaj, {this.props.screenProps.userName}</Text>
                <View style={styles.elemContainer}>
                    <Text style={styles.outputText}>Jako zawodnik</Text>
                    <View style={styles.elemContainer}>
                        <Button color={styles.defaultButton.color} onPress={() => navigate('PlayerTrainings')} title="Treningi" />
                    </View>
                    <View style={styles.elemContainer}>
                        <Button color={styles.defaultButton.color} onPress={() => navigate('PlayerGroup')} title="Grupa treningowa" />
                    </View>
                </View>
                <View style={styles.elemContainer}>
                    <Text style={styles.outputText}>Jako trener</Text>
                    <View style={styles.elemContainer}>
                        <Button color={styles.defaultButton.color} onPress={() => navigate('CoachGroups')} title="Grupy treningowe" />
                    </View>
                </View>
            </View>
        );
    }
}
