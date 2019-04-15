import React, { Component } from 'react';
import { Button, Text, View, DrawerLayoutAndroid } from 'react-native';

import styles from '../../styles/Styles';


export default class TrainingScreen extends React.Component {

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
                    <Text style={styles.outputText}>Tytuł treningu - data</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Sit amet luctus venenatis lectus magna fringilla urna porttitor. 
                        Purus ut faucibus pulvinar elementum integer enim neque volutpat. 
                        Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. 
                        Dapibus ultrices in iaculis nunc sed augue. Sed velit dignissim sodales ut eu sem integer. 
                        Condimentum mattis pellentesque id nibh tortor. 
                        Sed enim ut sem viverra aliquet eget sit amet tellus. 
                        Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. 
                        Mauris augue neque gravida in fermentum et. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. 
                    </Text>
                    
                </View>
            </DrawerLayoutAndroid>
        );
    }
    _testFunction = () => {
        console.log(this.props.screenProps);
    };

    _logout = () => {
        this.props.screenProps.handleLogout();
    };
}
