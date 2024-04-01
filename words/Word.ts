import Realm, {ObjectSchema} from 'realm';


export default class Word extends Realm.Object<Word> {

    static schema: ObjectSchema = {
        name: 'Word',
        primaryKey: 'id',
        properties: {
            id: {type: 'int', indexed: true},
            english: 'string',
            translation: 'string',
            level: 'int',
            isLearned: {type: 'bool', default: false},
        },
    };
}


