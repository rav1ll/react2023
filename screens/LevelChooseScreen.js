
import {View, TouchableOpacity, Text} from 'react-native';
import {Icon} from '../components/icons/Icon' ;

import styles from '../styles'

const LevelChooseScreen = ({navigation}) => {


    const handleButtonPress = (number) => {
        navigation.navigate('Words', number);
    };
    return (

        <View style={styles.level_container}>


            <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(1)}>
                <Text style={styles.button_container}>Изучение слов A1</Text>
                <Icon name={'ic_fluent_clipboard_letter_20_regular'} size={24} color={'black'}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(2)}>
                <Text style={styles.button_container}>Изучение слов B1</Text>
                <Icon name={'ic_fluent_clipboard_letter_20_regular'} size={24} color={'black'}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(3)}>
                <Text style={styles.button_container}>Изучение слов B2</Text>
                <Icon name={'ic_fluent_clipboard_letter_20_regular'} size={24} color={'black'}/>
            </TouchableOpacity>


        </View>
    );
}


export default LevelChooseScreen;
