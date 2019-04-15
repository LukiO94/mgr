import React, { Component } from 'react';
import { Text, TextInput, Button, View, DrawerLayoutAndroid } from 'react-native';
import styles from '../../styles/Styles'

export default class SettingsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            email: ''
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
                        <TextInput type="TextInput" name="userName" style={styles.inputText} placeholder="login" onChangeText={(userName) => this.setState({ userName })} />
                    </View>
                    <View style={styles.elemContainer}>
                        <TextInput type="TextInput" name="firstName" style={styles.inputText} placeholder="Imie" onChangeText={(userName) => this.setState({ userName })} />
                    </View>
                    <View style={styles.elemContainer}>
                        <TextInput type="TextInput" name="lastName" style={styles.inputText} placeholder="Nazwisko" onChangeText={(password) => this.setState({ password })} />
                    </View>
                    <View style={styles.elemContainer}>
                        <TextInput type="TextInput" name="email" style={styles.inputText} placeholder="Email" onChangeText={(password) => this.setState({ email })} />
                    </View>
                    <View style={styles.elemContainer}>
                        <Button color={styles.defaultButton.color} onPress={this._testFunction} title="Zmień dane" />
                    </View>
                </View>
            </DrawerLayoutAndroid>
        );

    }
    _logout = () => {
        this.props.screenProps.handleLogout();
    };

    _testFunction = () => {
        this.props.screenProps.token = "profileToken"
        console.log(this.props.screenProps);
    };
}