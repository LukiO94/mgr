import React from 'react';
import { Button, TextInput, View } from 'react-native';

import styles from '../../styles/Styles';
import BasicScreen from './BasicScreen';


export default class CreateTrainingScreen extends BasicScreen {

    constructor(props) {
        super(props);
        this.state = {
            training: ''
        };
    }
    _specificView = () => {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View style={styles.elemContainer}>
                    <TextInput style={styles.inputTextMultiline} multiline={true} numberOfLines={10} onChangeText={(training) => this.setState({ training })} />
                </View>
                <View style={styles.elemContainer}>
                    <Button color={styles.defaultButton.color} onPress={this._testFunction} title="Dodaj trening" />
                </View>
            </View>
        );
    };
}
