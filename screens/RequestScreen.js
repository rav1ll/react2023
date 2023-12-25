import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import axios from "axios";

import API_TOKEN from "../conf.js"
import {useTranslation} from "react-i18next";
import {Icon} from "../components/icons/Icon";

const RequestScreen = () => {
    const {t} = useTranslation();



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

            <TouchableOpacity style={styles.custom_button}>
            <Button title="Загрузить данные" onPress={fetchData} color={'#5c74ff'}/>
            <Icon name={'ic_fluent_send_20_regular'} size={24} color={'white'}/>
            </TouchableOpacity>

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
    },
    custom_button:
        {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            backgroundColor: '#5c74ff',
            padding: 10,
            width: '100%',
            fontFamily: 'Manrope',
            gap: 13
        },
});
