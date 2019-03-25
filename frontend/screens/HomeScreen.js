import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import styles from '../styles/Styles'


export default class HomeScreen extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        let date = new Date();
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.outputText}>Coach Assistant - {date.getTime()}</Text>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={() =>
                        navigate('Profile')
                    } title="Go to profile" />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={this._testFunction} title="Test Button" />
                </View>
            </View>
        );
    }
    _testFunction = () => {
        this.props.screenProps.token = "homeToken"
        console.log(this.props.screenProps);
    };
}
