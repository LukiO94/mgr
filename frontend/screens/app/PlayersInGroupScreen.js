import React from 'react';
import { Button, View } from 'react-native';

import styles from '../../styles/Styles';
import BasicScreen from './BasicScreen';


export default class PlayersScreen extends BasicScreen {

    constructor(props) {
        super(props);
        this.state = {
            training: ''
        };
    }

    _specificView = () => {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={() => navigate('Player')} title="Zawodnik I" />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={() => navigate('Player')} title="Zawodnik II" />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={() => navigate('Player')} title="Zawodnik III" />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={() => navigate('Player')} title="Zawodnik IV" />
                </View>
            </View>
        );
    };
}
