import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Realm from 'realm';
import Word from '../words/Word.ts'; // Импортируем модель Word.ts
import styles from "../styles";

const WordScreen = (route) => {

    const [wordsData, setWordsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const wordsPerPage = 2;
    const lvl = route['route']['params']

    useEffect(() => {
        const realm = new Realm({schema: [Word]});
        const words = realm.objects('Word').filtered('level = $0', lvl);
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

                <View key={index} style={styles.wordcontainer}>
                    <Text style={styles.learnword}>{word.english} 🇬🇧</Text>
                    <Text style={styles.translation}>{word.translation} 🇷🇺</Text>
                    <TouchableOpacity onPress={() => markAsLearned(word)}
                                      style={[styles.button, !word.isLearned && styles.inactiveButton]}>
                        <Text
                            style={[styles.buttonText, !word.isLearned && styles.inactiveText]}>{word.isLearned ? 'Отметить как не пройденное' : 'Отметить как пройденное'}</Text>
                    </TouchableOpacity>


                </View>


            ))}


            <View style={styles.row}>
                <TouchableOpacity
                    onPress={goToPreviousPage}
                    disabled={currentPage === 0}
                    style={[styles.button, currentPage === 0 && styles.inactiveButton]}
                >
                    <Text style={[styles.buttonText, currentPage === 0 && styles.inactiveText]}>Предыдущая
                        страница </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={goToNextPage}
                    disabled={(currentPage + 1) * wordsPerPage >= wordsData.length}
                    style={[styles.button, (currentPage + 1) * wordsPerPage >= wordsData.length && styles.inactiveButton]}
                >
                    <Text
                        style={[styles.buttonText, (currentPage + 1) * wordsPerPage >= wordsData.length && styles.inactiveText]}>Следующая
                        страница</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default WordScreen;
