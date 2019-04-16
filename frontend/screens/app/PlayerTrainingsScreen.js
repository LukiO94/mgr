import React from 'react';
import { Button, View } from 'react-native';
import styles from '../../styles/Styles'
import BasicScreen from './BasicScreen';


export default class PlayerTrainingsScreen extends BasicScreen {

    _specificView = () => {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={() => navigate('PlayerTraining')} title="Siła - 01.04.2019" />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={() => navigate('PlayerTraining')} title="Szybkość - 02.04.2019" />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={() => navigate('PlayerTraining')} title="Tempo - 03.04.2019" />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={() => navigate('PlayerTraining')} title="Wytrzymałość szybkościowa - 04.07.2019" />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={() => navigate('PlayerTraining')} title="Siła - 05.04.2019" />
                </View>
            </View>
        );
    };
}
