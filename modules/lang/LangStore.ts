import LangService from './LangService';
import {LangType} from './LangType';

export class LangStore {
    langService;
    lang = null;
    isLoading = false;

    constructor() {

        this.langService = new LangService();
    }

    setLang = (lang: any): void => {
        this.lang = lang;
    };

    changeLang = async (value: LangType) => {
        this.setIsLoading(true);
        this.langService
            .changeLang(value)
            .then(() => this.setLang(value))
            .finally(() => {
                this.setIsLoading(false);
            });
    };

    getLang = async () => {
        this.setIsLoading(true);

        this.langService
            .getLang()
            .then(result => {
                this.setLang(result);
                this.changeLang(result);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.setIsLoading(false);
            });
    };

    setIsLoading = (val: boolean): void => {
        this.isLoading = val;
    };
}
