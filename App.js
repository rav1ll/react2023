
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Button, StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, SafeAreaView} from 'react-native';
import * as React from 'react';
import AboutScreen from './screens/AboutScreen';
import TodoScreen from './screens/TodoScreen';
import TaskScreen from './screens/TaskScreen';
import PostRequestScreen from './screens/PostRequestScreen';
import RequestScreen from './screens/RequestScreen';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native' ;
import {createNativeStackNavigator} from '@react-navigation/native-stack' ;
import {DeepLinking} from "./navigation/DeepLinking";
import Navigation from "./base/Navigation";



const Stack = createNativeStackNavigator();

const App = () => {
    return (

        <GestureHandlerRootView style={{flex: 1}}>
            <NavigationContainer linking={DeepLinking.linking} ref={Navigation.navigationRef}>
                <Stack.Navigator>
                    <Stack.Screen name={'Home'} component={HomeScreen}/>
                    <Stack.Screen name={'About'} component={AboutScreen}/>
                    <Stack.Screen name={'Tasks'} component={TaskScreen}/>
                    <Stack.Screen name={'Requests'} component={RequestScreen}/>
                    <Stack.Screen name={'Todo'} component={TodoScreen}/>
                    {/*<Stack.Screen name={'Post'} component={PostRequestScreen}/>*/}

                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
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

