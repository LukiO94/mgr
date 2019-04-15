import React, { Component } from 'react';
import { Button, Text, View, DrawerLayoutAndroid } from 'react-native';
import styles from '../../styles/Styles'


export default class TrainingsScreen extends React.Component {

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
                        <Button color={styles.defaultButton.color} onPress={() => navigate('Training')} title="Siła - 01.04.2019" />
                    </View>
                    <View style={styles.elemContainer}>
                        <Button color={styles.defaultButton.color} onPress={() => navigate('Training')} title="Szybkość - 02.04.2019" />
                    </View>
                    <View style={styles.elemContainer}>
                        <Button color={styles.defaultButton.color} onPress={() => navigate('Training')} title="Tempo - 03.04.2019" />
                    </View>
                    <View style={styles.elemContainer}>
                        <Button color={styles.defaultButton.color} onPress={() => navigate('Training')} title="Wytrzymałość szybkościowa - 04.07.2019" />
                    </View>
                    <View style={styles.elemContainer}>
                        <Button color={styles.defaultButton.color} onPress={() => navigate('Training')} title="Siła - 05.04.2019" />
                    </View>
                </View>
            </DrawerLayoutAndroid>
        );
    }
    _logout = () => {
        this.props.screenProps.handleLogout();
    };

    componentWillMount(){
        console.log("Pojawienie sie ekranu xd");
    };

    _testFunction = () => {
        console.log(this.props.screenProps);
    };
}
