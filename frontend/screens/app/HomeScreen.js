import React, { Component } from 'react';
import { Button, Text, View, DrawerLayoutAndroid } from 'react-native';

import styles from '../../styles/Styles';


export default class HomeScreen extends React.Component {

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
                    <Text style={styles.outputText}>Witaj, {this.props.screenProps.userName}</Text>
                    <View style={styles.elemContainer}>
                        <Text style={styles.outputText}>Jako zawodnik</Text>
                        <View style={styles.elemContainer}>
                            <Button color={styles.defaultButton.color} onPress={() => navigate('Trainings')} title="Treningi" />
                        </View>
                        <View style={styles.elemContainer}>
                            <Button color={styles.defaultButton.color} onPress={() => navigate('TrainingGroup')} title="Grupa treningowa" />
                        </View>
                    </View>
                    <View style={styles.elemContainer}>
                        <Text style={styles.outputText}>Jako trener</Text>
                        <View style={styles.elemContainer}>
                            <Button color={styles.defaultButton.color} onPress={() => navigate('TrainingGroups')} title="Grupy treningowe" />
                        </View>
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
