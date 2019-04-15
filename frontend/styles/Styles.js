import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    appContainer: {
        flex: 2
    },
    headerStyle: {
        backgroundColor: '#FAFAFA'
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#DDDDDD'
    },
    outputText: {
        padding: 10,
        textAlign: 'center',
        fontSize: 24,
        color: '#000000'
    },
    outputTextError: {
        padding: 10,
        textAlign: 'center',
        fontSize: 24,
        color: '#FF0000'
    },
    elemContainer: {
        padding: 10
    },
    defaultButton: {
        color: '#123123'
    },
    inputText: {
        padding: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    inputTextMultiline: {
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1
    }
});