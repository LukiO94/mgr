import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/app/HomeScreen';
import PlayerTrainingsScreen from '../screens/app/PlayerTrainingsScreen';
import PlayerTrainingScreen from '../screens/app/PlayerTrainingScreen';
import PlayerGroupScreen from '../screens/app/PlayerGroupScreen';
import CoachGroupsScreen from '../screens/app/CoachGroupsScreen';
import CoachGroupScreen from '../screens/app/CoachGroupScreen';
import PlayersInGroupScreen from '../screens/app/PlayersInGroupScreen';
import CreateTrainingScreen from '../screens/app/CreateTrainingScreen';
import PlayerScreen from '../screens/app/PlayerScreen';
import ProfileScreen from '../screens/app/ProfileScreen';
import SettingsScreen from '../screens/app/SettingsScreen';
import styles from '../styles/Styles';

export default createStackNavigator({
    Home: { screen: HomeScreen, navigationOptions: { 'title': 'Strona główna', headerStyle: styles.headerStyle } }, //ekran glowny aplikacji
    Player: { screen: PlayerScreen, navigationOptions: { 'title': 'Zawodnik - dziedziczenie', headerStyle: styles.headerStyle } }, //wyswietla dane zawodnika
    PlayerTrainings: { screen: PlayerTrainingsScreen, navigationOptions: { 'title': 'Treningi', headerStyle: styles.headerStyle } }, //wyswietla treningi zawodnika
    PlayerTraining: { screen: PlayerTrainingScreen, navigationOptions: { 'title': 'Trening', headerStyle: styles.headerStyle } }, //wyswietla trening zawodnika
    PlayerGroup: { screen: PlayerGroupScreen, navigationOptions: { 'title': 'Grupa treningowa', headerStyle: styles.headerStyle } }, //wyswietla informacje o grupie zawodnika
    CoachGroups: { screen: CoachGroupsScreen, navigationOptions: { 'title': 'Grupy treningowe', headerStyle: styles.headerStyle } }, //wyswietla grupy przypisane do trenera
    CoachGroup: { screen: CoachGroupScreen, navigationOptions: { 'title': 'Grupa treningowa', headerStyle: styles.headerStyle } }, //wyswiela informacje o wybranej grupie
    PlayersInGroup: { screen: PlayersInGroupScreen, navigationOptions: { 'title': 'Zawodnicy', headerStyle: styles.headerStyle } }, //wyswietla zawodnikow przypisanych do grupy
    CreateTraining: { screen: CreateTrainingScreen, navigationOptions: { 'title': 'Tworzenie treningu', headerStyle: styles.headerStyle } }, //tworzy trening
    Profile: { screen: ProfileScreen, navigationOptions: { 'title': 'Profil', headerStyle: styles.headerStyle } },
    Settings: { screen: SettingsScreen, navigationOptions: { 'title': 'Ustawienia', headerStyle: styles.headerStyle } }
});