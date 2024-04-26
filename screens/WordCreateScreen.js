import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import Word from "../words/Word";
import Realm from 'realm';

const realm = new Realm({schema: [Word]});


// Функция для проверки уникальности слова по полю 'english'
function isEnglishUnique(englishValue) {
    const existingWord = realm.objects('Word').filtered("english = $0", englishValue);
    return existingWord.length === 0;
}


// Добавление нового слова с проверкой уникальности
function addWord(english, translation, level, isLearned) {
    if (isEnglishUnique(english)) {
        realm.write(() => {
            const lastId = realm.objects('Word').max('id') || 0;
            const newId = lastId + 1;

            realm.create('Word', {
                id: newId,
                english,
                translation,
                level,
                isLearned,
            });
        });
        console.log('Слово успешно добавлено', english, translation);
    } else {
        console.log('Слово с таким значением уже существует', english,);
    }
}

function addWordsFromJson() {
    const wordsFromJson = require('../words/words.json');


    wordsFromJson.forEach(word => {
        addWord(word.english, word.translation, word.level, word.isLearned);
    });
}


function deleteWord(id) {
    const wordToDelete = realm.objectForPrimaryKey('Word', id); // Получаем объект по id

    if (wordToDelete) {
        realm.write(() => {
            realm.delete(wordToDelete); // Удаляем объект из базы данных
            console.log('слово удалено, id:', id);
        });
    } else {
        console.log('слово не найдено, id:', id);
    }
}

const WordCreateScreen = () => {


    const savedWords = realm.objects('Word').map(word => ({
        id: word.id,
        english: word.english,
        translation: word.translation,

    }));

    const [english, setEnglish] = useState('');
    const [translation, setTranslation] = useState('');
    const [level, setLevel] = useState('');
    const [id, setId] = useState('');
    const handleAddWord = () => {
        addWord(english, translation, parseInt(level), false);
    };
    const handleDeleteWord = () => {
        deleteWord(parseInt(id));
    };

    const handleAddManyWords = () => {
        addWordsFromJson()
    };

    const handleAllWord = () => {
        console.log(savedWords);

    };

    return (
        <View>
            <TextInput
                placeholder="English"
                value={english}
                onChangeText={setEnglish}
            />
            <TextInput
                placeholder="Translation"
                value={translation}
                onChangeText={setTranslation}
            />
            <TextInput keyboardType={"numeric"}
                       placeholder="Level"
                       value={level}
                       onChangeText={setLevel}
            />
            <Button title="Add Word" onPress={handleAddWord}/>
            <Button title="Вывести в консоль все слова" onPress={handleAllWord}/>

            <TextInput keyboardType={"numeric"}
                       placeholder=" Id слова которое нужно удалить"
                       value={id}
                       onChangeText={setId}
            />
            <Button title="Удалить слово" onPress={handleDeleteWord}/>

            <Button title="Добавить слова из файла" onPress={handleAddManyWords}/>

        </View>
    );
};

export default WordCreateScreen;

