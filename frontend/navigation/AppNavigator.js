import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/app/HomeScreen';
import TrainingsScreen from '../screens/app/TrainingsScreen';
import TrainingScreen from '../screens/app/TrainingScreen';
import TrainingGroupScreen from '../screens/app/TrainingGroupScreen';
import TrainingGroupsScreen from '../screens/app/TrainingGroupsScreen';
import GroupScreen from '../screens/app/GroupScreen';
import PlayersScreen from '../screens/app/PlayersScreen';
import CreateTrainingScreen from '../screens/app/CreateTrainingScreen';
import ProfileScreen from '../screens/app/ProfileScreen';
import SettingsScreen from '../screens/app/SettingsScreen';
import styles from '../styles/Styles';

export default createStackNavigator({
    Home: { screen: HomeScreen, navigationOptions: { 'title': 'Strona główna', headerStyle: styles.headerStyle } },
    Trainings: { screen: TrainingsScreen, navigationOptions: { 'title': 'Treningi', headerStyle: styles.headerStyle } },
    Training: { screen: TrainingScreen, navigationOptions: { 'title': 'Trening', headerStyle: styles.headerStyle } },
    TrainingGroup: { screen: TrainingGroupScreen, navigationOptions: { 'title': 'Grupa treningowa', headerStyle: styles.headerStyle } },
    TrainingGroups: { screen: TrainingGroupsScreen, navigationOptions: { 'title': 'Grupy treningowe', headerStyle: styles.headerStyle } },
    Group: { screen: GroupScreen, navigationOptions: { 'title': 'Grupa treningowa', headerStyle: styles.headerStyle } },
    Players: { screen: PlayersScreen, navigationOptions: { 'title': 'Zawodnicy', headerStyle: styles.headerStyle } },
    CreateTraining: { screen: CreateTrainingScreen, navigationOptions: { 'title': 'Tworzenie treningu', headerStyle: styles.headerStyle } },
    Profile: { screen: ProfileScreen, navigationOptions: { 'title': 'Profil', headerStyle: styles.headerStyle } },
    Settings: { screen: SettingsScreen, navigationOptions: { 'title': 'Ustawienia', headerStyle: styles.headerStyle } }
});