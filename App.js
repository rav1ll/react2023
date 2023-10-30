import {StatusBar} from 'expo-status-bar';

import {Button, StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, SafeAreaView} from 'react-native';
import * as React from 'react';
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
import TaskScreen from './screens/TaskScreen';

import {NavigationContainer} from '@react-navigation/native' ;
import {createNativeStackNavigator} from '@react-navigation/native-stack' ;


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={HomeScreen}/>
                <Stack.Screen name={'About'} component={AboutScreen}/>
                <Stack.Screen name={'Tasks'} component={TaskScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );


};
export default App;

const styles = StyleSheet.create({
    input: {
        padding: 15,
        width: 250,
        height: 50,
        backgroundColor:
            '#ffffff'
    }
    ,
    button: {
        width: 150,
        height: 50,
        justifyContent:
            "center",
        alignItems:
            "center",
        backgroundColor:
            '#4362fd',
    },
    head: {
        width: "100%",
        height: 30,
        justifyContent:
            "center",
        alignItems:
            "left   ",
        paddingLeft: 30,
        backgroundColor:
            '#ffffff',
    }
    ,
    container: {
        backgroundColor: '#a1d2ff',
        height: '100%'

    }
    ,
    appButtonText: {
        color: 'white',
        fontSize: 17,
    }
    ,
    content: {
        alignItems: 'center',
    }
    ,
})

