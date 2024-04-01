import {GestureHandlerRootView} from 'react-native-gesture-handler';
import * as React from 'react';
import AboutScreen from './screens/AboutScreen';
import TaskScreen from './screens/TaskScreen';
import RequestScreen from './screens/RequestScreen';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native' ;
import WordScreen from "./screens/WordsScreen";
import {createNativeStackNavigator} from '@react-navigation/native-stack' ;
import {DeepLinking} from "./navigation/DeepLinking";
import Navigation from "./base/Navigation";
import WordCreateScreen from "./screens/WordCreateScreen";


const Stack = createNativeStackNavigator();

const App = () => {


    return (

        <GestureHandlerRootView style={{flex: 1}}>
            <NavigationContainer linking={DeepLinking.linking} ref={Navigation.navigationRef}>
                <Stack.Navigator>

                    <Stack.Screen name={'Home'} component={HomeScreen}/>
                    <Stack.Screen name={'Words'} component={WordScreen}/>
                    <Stack.Screen name={'About'} component={AboutScreen}/>
                    <Stack.Screen name={'Tasks'} component={TaskScreen}/>
                    <Stack.Screen name={'Requests'} component={RequestScreen}/>
                    <Stack.Screen name={'AddWord'} component={WordCreateScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );


};
export default App;
