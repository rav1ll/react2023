import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import axios from "axios";

import API_TOKEN from "../conf.js"


const RequestScreen = () => {

    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const token = API_TOKEN;
    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                params: {
                    q: city,
                    appid: token
                }
            });
            setWeatherData(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const handleInputCity = (text) => {
        setCity(text);
    };
    return (
        <View style={{backgroundColor: '#0c0d1e'}}>
            <View style={styles.header}>

                <Text style={{color: "white", margin: 10}}> В поле ниже необходимо ввести название города, для которого
                    нужно узнать погоду, например, Moscow</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Введите название"
                    onChangeText={handleInputCity}
                    value={city}
                />
            </View>


            <Button title="Загрузить данные" onPress={fetchData}/>

            {weatherData && (
                <View style={styles.weather_container}>
                    <Text style={{color: "#f59c44"}}>Город: {weatherData.name}</Text>
                    <Text style={{color: "white"}}>Влажность: {weatherData.main.humidity}</Text>
                    <Text style={{color: "white"}}>Температура: {weatherData.main.temp}</Text>
                    <Text style={{color: "white"}}>Скорость ветра: {weatherData.wind.speed}</Text>

                </View>
            )}
        </View>
    );
};

export default RequestScreen;


const styles = StyleSheet.create({
    container: {

        color: "white",
        justifyContent: "center"

    },
    header: {


        backgroundColor: '#0c0d1e',


    },
    weather_container: {
        fontSize: 20,
        alignItems: 'center',
        margin: 20,
        padding: 30,
        color: 'white',
        backgroundColor: '#0c0d1e'
    },
    input: {
        padding: 15,
        width: 250,
        height: 50,
        marginTop: 50,
        marginBottom: 50,
        alignSelf: 'center',
        backgroundColor:
            '#ffffff'
    }
});
