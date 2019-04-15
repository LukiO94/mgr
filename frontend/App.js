import React, { Component } from 'react';
import { View, Button } from 'react-native';

import AppNavigator from './navigation/AppNavigator';
import LoginNavigator from './navigation/LoginNavigator';
import { AppLoading } from 'expo';
import styles from './styles/Styles'


export default class FirstApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoadingComplete: false,
            isLoggedIn: false,
            userName: '',
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
                        <AppNavigator screenProps={{ token: this.state.token, userName: this.state.userName, handleLogout: this._handleLogout }} />
                    </View>
                );
            }
            else {
                return (
                    <View style={styles.appContainer}>
                        <LoginNavigator screenProps={{ token: this.state.token, userName: this.state.userName, handleLogin: this._handleLogin }} />
                    </View>
                );
            }
        }
    }
    _loadResourcesAsync = async () => {
        return Promise.all([]);
    };
    _handleLoadingError = error => {
        console.warn(error);
    };
    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };
    _handleLogin = (token, userName) => {
        this.setState({ 
            isLoggedIn: true,
            token: token,
            userName: userName
        });
    };
    _handleLogout = () => {
        this.setState({
            isLoggedIn: false,
            userName: '',
            token: ''
        });
    };
}

