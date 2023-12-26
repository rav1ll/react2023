import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const AboutScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>About this app</Text>

            <Text style={styles.text}>this is edu project based on react native. 2023</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:
            '#071825',
    },
    text: {
        color: 'white',
        marginTop: 100,
        fontSize: 12
    },
    header: {
        fontSize: 34,
        alignItems: 'center',
        marginBottom: 20,
        color: 'white',
    },
});

export default AboutScreen;
