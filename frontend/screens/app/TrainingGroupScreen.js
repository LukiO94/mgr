import React, { Component } from 'react';
import { Button, Text, View, DrawerLayoutAndroid } from 'react-native';

import styles from '../../styles/Styles';


export default class TrainingGroupScreen extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        let navigationView = (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Text style={styles.outputText}>Menu</Text>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={() => navigate('Settings')} title="Ustawienia" />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={this._logout} title="Wyloguj się" />
                </View>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <View style={styles.mainContainer}>
                    <Text style={styles.outputText}>Nazwa: Sredniozaawansowana</Text>
                    <Text style={styles.outputText}>Trener: Jan Kowalski</Text>
                    <Text style={styles.outputText}>Opis: </Text>
                    <Text style={styles.outputText}>Zawodnicy: </Text>
                    <Text style={styles.outputText}>zaw1</Text>
                    <Text style={styles.outputText}>zaw2</Text>
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={this._testFunction} title="Zaproszenia do grup" />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={this._testFunction} title="Opuść grupę" />
                </View>
            </DrawerLayoutAndroid>
        );
    }
    _testFunction = () => {
        console.log(this.props.screenProps);
    };

    _logout = () => {
        this.props.screenProps.handleLogout();
    };
}
