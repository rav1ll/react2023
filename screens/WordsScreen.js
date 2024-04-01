import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Realm from 'realm';
import Word from '../words/Word.ts'; // Импортируем модель Word.ts


const WordScreen = () => {

    const [wordsData, setWordsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const wordsPerPage = 3;

    useEffect(() => {
        const realm = new Realm({schema: [Word]});
        const words = realm.objects('Word').filtered('level = 1');
        setWordsData(words);
    }, []);

    const goToNextPage = () => {
        if ((currentPage + 1) * wordsPerPage < wordsData.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const markAsLearned = (word) => {
        const realm = new Realm({schema: [Word]});
        realm.write(() => {
            word.isLearned = !word.isLearned;
        });
    };


    return (
        <View style={styles.container}>
            {wordsData.slice(currentPage * wordsPerPage, (currentPage + 1) * wordsPerPage).map((word, index) => (
                <View key={index} style={{alignItems: 'center', marginTop: 10}}>
                    <Text style={styles.learnword}>{word.word}</Text>
                    <Text style={styles.translation}>{word.translation}</Text>
                    <TouchableOpacity onPress={() => markAsLearned(word)} style={styles.button}>
                        <Text
                            style={styles.buttonText}>{word.isLearned ? 'Отметить как не пройденное' : 'Отметить как пройденное'}</Text>
                    </TouchableOpacity>
                </View>
            ))}
            <View style={styles.row}>
                <TouchableOpacity
                    onPress={goToPreviousPage}
                    disabled={currentPage === 0}
                    style={[styles.button, currentPage === 0 && styles.disabledButton]}
                >
                    <Text style={[styles.buttonText, currentPage === 0 && styles.disabledText]}>Предыдущая
                        страница</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={goToNextPage}
                    disabled={(currentPage + 1) * wordsPerPage >= wordsData.length}
                    style={[styles.button, (currentPage + 1) * wordsPerPage >= wordsData.length && styles.disabledButton]}
                >
                    <Text
                        style={[styles.buttonText, (currentPage + 1) * wordsPerPage >= wordsData.length && styles.disabledText]}>Следующая
                        страница</Text>
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
