import React, { Component } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import styles from '../styles/Styles'

export default class SettingsScreen extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.outputText}>Settings Screen!!!</Text>
                <View style={styles.elemContainer}>
                    <Button onPress={() =>
                        navigate('Home')
                    } title="Back to home" />
                </View>
            </View>
        );

    }
}