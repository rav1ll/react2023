import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const AboutScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>About screen</Text>
            <Button
                title="Return to main screen"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:
            '#758eff',


    },
    header: {
        fontSize: 34,
        alignItems: 'center',
        marginBottom: 20,
        color: 'white',
    },
});

export default AboutScreen;
