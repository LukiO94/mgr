import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import styles from '../styles/Styles'

export default class ProfileScreen extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.outputText}>Profile Screen!!!</Text>
                <View style={styles.elemContainer}>
                    <Button onPress={() =>
                        navigate('Settings')
                    } title="Settings" />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={this._testFunction} title="Test Button2" />
                </View>
            </View>
        );
    }
    _testFunction = () => {
        this.props.screenProps.token = "profileToken"
        console.log(this.props.screenProps);
    };
}
