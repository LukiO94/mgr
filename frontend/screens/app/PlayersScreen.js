import React, { Component } from 'react';
import { Button, Text, View, DrawerLayoutAndroid } from 'react-native';

import styles from '../../styles/Styles';


export default class PlayersScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            training: ''
        };
    }

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
