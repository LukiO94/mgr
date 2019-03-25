import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Form from 'react-native-form'
import AppNavigator from './navigation/AppNavigator';
import { AppLoading } from 'expo';
import styles from './styles/Styles'


export default class FirstApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoadingComplete: false,
            isLoggedIn: false,
            username: '',
            password: '',
            token: ''
        };
    }

    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } else {
            if (this.state.isLoggedIn) {
                return (
                    <View style={styles.appContainer}>
                        <AppNavigator screenProps={{ token: this.state.token, username: this.state.username }} />
                        <View style={styles.elemContainer}>
                            <Button color={styles.defaultButton.color} onPress={this._handleLoggOut} title="Log out" />
                        </View>
                    </View>
                );
            }
            else {
                return (
                    <View style={styles.appContainer}>
                        <Text style={styles.outputText} ref="exampleText">JOŁ</Text>
                        <View style={styles.elemContainer}>
                            <TextInput type="TextInput" name="username" style={styles.inputText} placeholder="email" onChangeText={(username) => this.setState({ username })} keyboardType="email-address" />
                        </View>
                        <View style={styles.elemContainer}>
                            <TextInput type="TextInput" name="password" style={styles.inputText} placeholder="password" secureTextEntry={true} onChangeText={(password) => this.setState({ password })} />
                        </View>
                        <View style={styles.elemContainer}>
                            <Button color={styles.defaultButton.color} onPress={this._handleLoggIn} title="Log in" />
                        </View>
                    </View>
                );
            }

        }
    }
    _loadResourcesAsync = async () => {
        return Promise.all([
        ]);
    };
    _handleLoadingError = error => {
        console.warn(error);
    };
    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };
    _handleLoggIn = () => {
        let username = this.state.username;
        let password = this.state.password;
        fetch('https://ozdar-app.herokuapp.com/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON);
                this.setState({
                    token: responseJSON.token,
                    isLoggedIn: true
                })

            });
    };
    _handleLoggOut = () => {
        this.setState({ isLoggedIn: false });
    };
}

