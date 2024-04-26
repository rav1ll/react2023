import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    level_container:
        {

            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',

            gap: 10,
            fontFamily: 'manrope_bold',
            fontWeight: 900,

            backgroundColor:
                '#f3f3f3',

        },
    custom_button:
        {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderRadius: 10,
            backgroundColor: '#5c74ff',
            padding: 3,
            height: 50,
            width: 350,
            fontFamily: 'Manrope',

        },
    custom_button_disabled:
        {
            flexDirection: 'row',

            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: '#383d54',
            padding: 3,
            height: 50,
            width: 250,
            fontFamily: 'Manrope',

        },
    button_container: {
        fontSize: 15,
        color: 'black',

        marginBottom: 16,
        fontFamily: 'Manrope',
        fontWeight: '100',

    },

    container: {

        flex: 1,
        alignItems: 'center',

        backgroundColor:
            '#f3f3f3',
        gap: 15,
        fontFamily: 'manrope_bold',
        fontWeight: 900
    },
    row: {

        position: "absolute",

        gap: 10,
        marginTop: 588,
        marginRight: 15,
        marginLeft: 15
    },
    wordcontainer: {
        width: 355,
        marginTop: 30,
        gap: 20,
        padding: 13,
        backgroundColor: '#f2fed1',
        borderRadius: 11,
        borderWidth: 1.2,
        borderColor: '#000000'
    },

    button: {
        backgroundColor: '#abf600',
        padding: 10,
        gap: 11,
        borderRadius: 11,
        borderWidth: 1.2,
        fontFamily: 'Manrope',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        color: 'black'
    },

    buttonText: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
    },
    inactiveButton: {
        backgroundColor: 'black',
        padding: 10,
        gap: 11,
        borderRadius: 11,
        borderWidth: 1.2,
        fontFamily: 'Manrope',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    inactiveText: {
        color: 'white',
    },

    learnword: {
        fontSize: 30,
        color: 'black',
        backgroundColor: '#fafafa',
        borderRadius: 12,
        borderColor: '#000000',
        borderWidth: 1.3,
        justifyContent: 'center',
        textAlign: 'center'
    },

    translation: {
        fontSize: 30,
        color: 'black',
        backgroundColor: '#fafafa',
        borderRadius: 12,
        borderColor: '#000000',
        borderWidth: 1.3,
        justifyContent: 'center',
        textAlign: 'center',
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


export default styles;
