import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (



        <View style={styles.container}>

            <Button
                title="Todo"
                onPress={() => navigation.navigate('Todo')}
            />

            <Button
                title="Requests"
                onPress={() => navigation.navigate('Requests')}
            />
            <Button
                title="Tasks"
                onPress={() => navigation.navigate('Tasks')}
            />
            <Button
                title="About"
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
            '#8d30ff',
        gap: 10
    },
    header: {
        fontSize: 34,
        alignItems: 'center',
        marginBottom: 20,

    },
});

export default HomeScreen;
