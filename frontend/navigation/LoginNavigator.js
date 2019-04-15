import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/login/RegisterScreen';
import styles from '../styles/Styles';

export default createStackNavigator({
    Login: { screen: LoginScreen, navigationOptions: { 'title': 'Logowanie', headerStyle: styles.headerStyle } },
    Register: { screen: RegisterScreen, navigationOptions: { 'title': 'Rejestracja', headerStyle: styles.headerStyle } }
});