import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import base64 from 'react-native-base64';
import styles from '../../styles/Styles';


export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            token: ''
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.appContainer}>
                <Text style={styles.outputText} ref="exampleText">Witaj w aplikacji</Text>
                <Text style={styles.outputTextError} ref="errorInfo">{this.state.errorText}</Text>
                <View style={styles.elemContainer}>
                    <TextInput type="TextInput" name="userName" style={styles.inputText} placeholder="login" onChangeText={(userName) => this.setState({ userName })} />
                </View>
                <View style={styles.elemContainer}>
                    <TextInput type="TextInput" name="password" style={styles.inputText} placeholder="hasło" secureTextEntry={true} onChangeText={(password) => this.setState({ password })} />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={this._handleLogin} title="Zaloguj się" />
                </View>
                <View style={styles.elemContainer}>
                    <Button onPress={() => navigate('Register')} title="Rejestracja" />
                </View>
            </View>
        );
    }
    _handleLogin = () => {
        this.setState({
            errorText: ''
        });
        let userName = this.state.userName;
        let password = this.state.password;
        let encryptedCredentials = base64.encode(userName + ":" + password);
        fetch('https://ozdar-test-app.herokuapp.com/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + encryptedCredentials
            },
            body: JSON.stringify({})
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                if(responseJSON.status === 200){
                    this.props.screenProps.handleLogin(encryptedCredentials, userName);
                }
                else {
                    this.setState({
                        errorText: 'Błąd logowania!'
                    });
                }
            });
    };
}
