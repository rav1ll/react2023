import Realm from 'realm';
import Word from "./Word";

export const RealmClient = new Realm({schema: [Word.schema]})


