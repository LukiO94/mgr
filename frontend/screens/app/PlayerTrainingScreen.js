import React from 'react';
import { Text, View } from 'react-native';

import styles from '../../styles/Styles';
import BasicScreen from './BasicScreen';


export default class TrainingScreen extends BasicScreen {

    _specificView = () => {
        const { navigate } = this.props.navigation;
        const training = this.props.navigation.getParam("training");
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.outputText}>{training.title} - {training.date}</Text>
                <Text>{training.content}</Text>
            </View>
        );
    };
}