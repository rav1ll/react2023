import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from '../components/icons/Icon' ;


const HomeScreen = ({navigation}) => {
    return (


        <View style={styles.container}>
            <TouchableOpacity style={styles.custom_button}>
                <Button
                    title="Todo"
                    onPress={() => navigation.navigate('Todo')}
                />
                <Icon name={'ic_fluent_album_add_20_regular'} size={24} color={'white'}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.custom_button}>
                <Button
                    title="Requests"
                    onPress={() => navigation.navigate('Requests')}
                />
                <Icon name={'ic_fluent_umbrella_20_regular'} size={24} color={'white'}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.custom_button}>
                <Button
                    title="Tasks"
                    onPress={() => navigation.navigate('Tasks')}
                />
                <Icon name={'ic_fluent_album_add_20_regular'} size={24} color={'white'}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.custom_button}>
                <Button
                    title="About"

                    onPress={() => navigation.navigate('About')}

                />
                <Icon name={'ic_fluent_info_20_regular'} size={24} color={'white'}/>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    container:
        {

            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:
                '#8d30ff',
            gap: 10,
            fontFamily: 'manrope_bold',
            fontWeight: 900
        },
    custom_button:
        {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            backgroundColor: '#5c74ff',
            padding: 10,
            width: 150,
            fontFamily: 'Manrope',
            gap: 13
        },
    header: {
        fontSize: 34,
        alignItems: 'center',
        marginBottom: 20,
        fontFamily: 'Manrope',
        fontWeight: '100'
    },
});

export default HomeScreen;
