import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const TaskScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Task screen</Text>
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
            '#8d30ff',

    },
    header: {
        fontSize: 34,
        alignItems: 'center',
        marginBottom: 20,
        color: 'white',
    },
});

export default TaskScreen;
