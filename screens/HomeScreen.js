import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Icon} from '../components/icons/Icon' ;


const HomeScreen = ({navigation}) => {

    return (

        <View style={styles.container}>


            {/*<TouchableOpacity style={styles.custom_button} onPress={() => navigation.navigate('Requests')}>*/}
            {/*    <Text style={styles.header}>Weather Requests</Text>*/}
            {/*    <Icon name={'ic_fluent_umbrella_20_regular'} size={24} color={'white'}/>*/}
            {/*</TouchableOpacity>*/}

            {/*<TouchableOpacity title="Tasks" style={styles.custom_button} onPress={() => navigation.navigate('Tasks')}>*/}
            {/*    <Text style={styles.header}>Tasks</Text>*/}
            {/*    <Icon name={'ic_fluent_album_add_20_regular'} size={24} color={'white'}/>*/}
            {/*</TouchableOpacity>*/}

            <TouchableOpacity style={styles.custom_button} onPress={() => navigation.navigate('Level Choose')}>
                <Text style={styles.header}>Изучение слов</Text>
                <Icon name={'ic_fluent_clipboard_letter_20_regular'} size={24} color={'black'}/>
            </TouchableOpacity>


            {/*<TouchableOpacity style={styles.custom_button} onPress={() => navigation.navigate('Completed Tasks')}>*/}
            {/*    <Text style={styles.header}>Completed Words</Text>*/}
            {/*    <Icon name={'ic_fluent_album_add_20_regular'} size={24} color={'white'}/>*/}
            {/*</TouchableOpacity>*/}


            <TouchableOpacity style={styles.custom_button_disabled} onPress={() => navigation.navigate('AddWord')}>
                <Text style={styles.disabled_header}>Добавить слова</Text>
                <Icon name={'ic_fluent_add_circle_20_regular'} size={24} color={'white'}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.custom_button} onPress={() => navigation.navigate('About')}>
                <Text style={styles.header}>О приложении</Text>
                <Icon name={'ic_fluent_info_20_regular'} size={24} color={'black'}/>
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
                '#f3f3f3',
            gap: 10,
            fontFamily: 'manrope_bold',
            fontWeight: 900
        },
    custom_button:
        {
            flexDirection: 'row',

            justifyContent: 'center',
            backgroundColor: '#abf600',
            padding: 3,
            height: 50,
            width: 250,
            fontFamily: 'Manrope',
            gap: 8,
            borderRadius: 11,
            borderWidth: 1.2,
            color: 'black'
        },

    custom_button_disabled:
        {
            flexDirection: 'row',

            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: 'black',
            padding: 3,
            height: 50,
            width: 250,
            fontFamily: 'Manrope',
            gap: 8
        },
    header: {
        fontSize: 15,
        color: 'black',
        alignItems: 'center',
        marginBottom: 20,
        fontFamily: 'Manrope',
        fontWeight: '100'
    },
    disabled_header: {
        fontSize: 15,
        color: 'white',
        alignItems: 'center',
        marginBottom: 20,
        fontFamily: 'Manrope',
        fontWeight: '100'
    },
});

export default HomeScreen;
