import React, { Component } from 'react';
import {Alert, Button, Text, View, TextInput } from 'react-native';
import styles from '../../styles/Styles'


export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            email: '',
            errorText: ''
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.appContainer}>
                <Text style={styles.outputTextError}>{this.state.errorText}</Text>
                <View style={styles.elemContainer}>
                    <TextInput type="TextInput" name="userName" style={styles.inputText} placeholder="Login*" onChangeText={(userName) => this.setState({ userName })} />
                </View>
                <View style={styles.elemContainer}>
                    <TextInput type="TextInput" name="password" style={styles.inputText} placeholder="Hasło*" secureTextEntry={true} onChangeText={(password) => this.setState({ password })} />
                </View>
                <View style={styles.elemContainer}>
                    <TextInput type="TextInput" name="confirmPassword" style={styles.inputText} placeholder="Powtórz hasło*" secureTextEntry={true} onChangeText={(confirmPassword) => this.setState({ confirmPassword })} />
                </View>
                <View style={styles.elemContainer}>
                    <TextInput type="TextInput" name="firstName" style={styles.inputText} placeholder="Imię*" onChangeText={(firstName) => this.setState({ firstName })} />
                </View>
                <View style={styles.elemContainer}>
                    <TextInput type="TextInput" name="lastName" style={styles.inputText} placeholder="Nazwisko*" onChangeText={(lastName) => this.setState({ lastName })} />
                </View>
                <View style={styles.elemContainer}>
                    <TextInput type="Email" name="email" style={styles.inputText} placeholder="Email*" onChangeText={(email) => this.setState({ email })} />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={this._handleRegisterRequest} title="Zarejestruj" />
                </View>
            </View>
        );
    }

    _handleRegisterRequest = () => {
        let userName = this.state.userName;
        let password = this.state.password;
        let confirmPassword = this.state.confirmPassword;
        let firstName = this.state.firstName;
        let lastName = this.state.lastName;
        let email = this.state.email;
        fetch('https://ozdar-test-app.herokuapp.com/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: userName,
                password: password,
                firstName: firstName,
                lastName: lastName,
                email: email
            })
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON);
                if(responseJSON.status === 200){
                    this.setState({
                        errorText: ''
                    });
                    this._createAlert(true);
                }
                else {
                    this._createAlert(false);
                    this.setState({
                        errorText: 'Błąd rejestracji, spróbuj ponownie!'
                    });
                }
            });
    };

    _createAlert = (success) => {
        if(success){
            Alert.alert(
                'Utworzono konto',
                'Przejdź do strony logowania, aby się zalogować.',
                [
                {text: 'OK', onPress: () => this.props.navigation.navigate('Login')}
                ]
            );
        }
        else {
            Alert.alert(
                'Błąd przy tworzeniu konta.',
                'Spróbuj wypełnić formularz ponownie.',
                [
                {text: 'OK'}
                ]
            );
        }
    };
}
