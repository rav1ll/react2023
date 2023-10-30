import {Button, StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import axios from "axios";
const RequestScreen = () => {
    const [weatherData, setWeatherData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                params: {
                    q: 'Москва',
                    appid: '-',
                    units: 'metric'
                }
            });
            setWeatherData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Загрузить данные" onPress={fetchData} />
            {weatherData && (
                <View>
                    <Text>Температура: {weatherData.main.temp}</Text>
                    <Text>Скорость ветра: {weatherData.wind.speed}</Text>

                </View>
            )}
        </View>
    );
};

export default RequestScreen;


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
