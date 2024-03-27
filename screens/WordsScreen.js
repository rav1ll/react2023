import React, {useState} from 'react';
import {View, Text,  TouchableOpacity, StyleSheet} from 'react-native';
import wordsData from '../words/wordsdata';

import {Image} from 'react-native';

const WordScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextWord = () => {
        if (currentIndex < wordsData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const goToPreviousWord = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center', marginTop: 20, gap: 15}}>
                <Image source={wordsData[currentIndex].image} style={{width: 300, height: 400, borderRadius: 15}}/>
                <Text style={styles.learnword}>{wordsData[currentIndex].word}</Text>
                <Text style={styles.translation}>{wordsData[currentIndex].translation}</Text>
            </View>
            <View style={styles.container}>


                <View style={styles.row}>
                    <TouchableOpacity
                        onPress={goToPreviousWord}
                        disabled={currentIndex === 0}
                        style={[styles.button, currentIndex === 0 && styles.disabledButton]}
                    >
                        <Text style={[styles.buttonText, currentIndex === 0 && styles.disabledText]}>Предыдущее
                            слово</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={goToNextWord}
                        disabled={currentIndex === wordsData.length - 1}
                        style={[styles.button, currentIndex === wordsData.length - 1 && styles.disabledButton]}
                    >
                        <Text style={[styles.buttonText, currentIndex === wordsData.length - 1 && styles.disabledText]}>Следующее
                            слово</Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Отметить как пройденное</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:
        {

            flex: 1,
            alignItems: 'center',

            backgroundColor:
                '#071825',
            gap: 15,
            fontFamily: 'manrope_bold',
            fontWeight: 900
        },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: 10,
        marginTop: 5,
        marginRight: 15,
        marginLeft: 15
    },
    button: {
        backgroundColor: 'blue',
        padding: 8,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    disabledButton: {
        backgroundColor: 'gray',
    },
    disabledText: {
        color: 'lightgray',
    },
    learnword: {
        fontSize: 30, color: 'white', backgroundColor: '#2f29fc', borderRadius: 15, borderColor: '#2f29fc',
        borderWidth: 8, borderRightWidth: 45, justifyContent: 'center', textAlign: 'center',
    },
    translation: {
        fontSize: 30, color: 'white', backgroundColor: '#605fa6', borderRadius: 15, borderColor: '#605fa6',
        borderWidth: 8, borderRightWidth: 45, justifyContent: 'center', textAlign: 'center',
    },
});
export default WordScreen;
