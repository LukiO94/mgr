import React, { Component } from 'react';
import { Button, Text, View, DrawerLayoutAndroid } from 'react-native';

import styles from '../../styles/Styles';
import BasicScreen from './BasicScreen';


export default class PlayersScreen extends BasicScreen {
    _specificView = () => {
        return(
            <View style={styles.mainContainer}>
                <Text style={styles.outputText}>Witaj, {this.props.screenProps.userName}</Text>
                <View style={styles.elemContainer}>
                    <Text style={styles.outputText}>Overrided basic screen</Text>
                </View>
            </View>
        );
    };
}
