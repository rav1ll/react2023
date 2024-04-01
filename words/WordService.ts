import {RealmClient} from "./RealmClient";
import Word from "./Word";

export default class WordService {
    getWords = () => {
        return RealmClient.objects(Word);
    };

    createWord = (data: object) => {
        RealmClient.write(() => {
            RealmClient.create(Word, data);
        });
    };

    updateWord = (word: Word, values: object) => {
        RealmClient.write(() => {
            Object.assign(word, values);
        });
    };

    deleteWord = (word: Word) => {
        RealmClient.write(() => {
            RealmClient.delete(word);
        });
    };
}

