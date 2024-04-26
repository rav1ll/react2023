import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>About this app</Text>

            <Text style={styles.text}> Project for learning english words</Text>

            <Text style={styles.text}> 2024</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:
            '#f3f3f3',
    },
    text: {
        color: 'black',
        marginTop: 100,
        fontSize: 22
    },
    header: {
        fontSize: 34,
        alignItems: 'center',
        marginBottom: 20,
        color: 'black',
        borderRadius: 11,
        backgroundColor: '#f2fed1',
        padding: 11,
        borderColor: 'black',
        borderWidth: 1.2
    },
});

export default AboutScreen;
