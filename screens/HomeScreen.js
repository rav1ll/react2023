import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';


const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Home screen</Text>
            <Button
                title="navigate to about screen"
                onPress={() => navigation.navigate('About')}
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
        marginBottom: 20,
        fontSize: 34,
        color: 'white'
    },
});

export default HomeScreen;
