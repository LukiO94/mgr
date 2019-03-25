import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import styles from '../styles/Styles';



export default createStackNavigator({
    Home: { screen: HomeScreen, navigationOptions: { 'title': 'Strona główna', headerStyle: styles.headerStyle } },
    Profile: { screen: ProfileScreen, navigationOptions: { 'title': 'Profil', headerStyle: styles.headerStyle } },
    Settings: { screen: SettingsScreen, navigationOptions: { 'title': 'Register', headerStyle: styles.headerStyle } }
});