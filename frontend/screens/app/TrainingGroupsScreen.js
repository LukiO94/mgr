import React, { Component } from 'react';
import { Button, Text, View, DrawerLayoutAndroid } from 'react-native';

import styles from '../../styles/Styles';


export default class TrainingGroupsScreen extends React.Component {

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
                        <Button color={styles.defaultButton.color} onPress={() => navigate('Group')} title="Zaawansowana" />
                    </View>
                    <View style={styles.elemContainer}>
                        <Button color={styles.defaultButton.color} onPress={() => navigate('Group')} title="Średniozaawansowana" />
                    </View>
                    <View style={styles.elemContainer}>
                        <Button color={styles.defaultButton.color} onPress={() => navigate('Group')} title="Początkująca" />
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
