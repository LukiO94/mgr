import React from 'react';
import { Text, View } from 'react-native';

import styles from '../../styles/Styles';
import BasicScreen from './BasicScreen';


export default class TrainingScreen extends BasicScreen {

    _specificView = () => {
        const { navigate } = this.props.navigation;
        return (
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
        );
    };
}