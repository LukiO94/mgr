import React from 'react';
import { Button, Text, View, DrawerLayoutAndroid } from 'react-native';

import styles from '../../styles/Styles';


export default class BasicScreen extends React.Component {

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
                {this._specificView()}
            </DrawerLayoutAndroid>
        );
    }
    _specificView = () => {
        return(
            <View style={styles.mainContainer}>
                <Text style={styles.outputText}>Bazowy widok, do nadpisania w klasie potomnej.</Text>
            </View>
        );
    };
    _testFunction = () => {
        console.log(this.props.screenProps);
    };
    _logout = () => {
        this.props.screenProps.handleLogout();
    };
}
