//static
import flagTr from '../../static/images/turkey.png'
import flagEn from '../../static/images/united-kingdom.png'

//third-party
import { createSlice } from '@reduxjs/toolkit';

//commons
import { LANGUAGES_CODE } from '../../common/constants/languages';
import { LANGUAGE } from '../../common/interfaces/languages';


const LANGUAGES: Array<LANGUAGE> = [
    { code: LANGUAGES_CODE.TR, flag: flagTr },
    { code: LANGUAGES_CODE.EN, flag: flagEn }
]

const LOCAL_STORAGE_LANGUAGES_KEY = {
    language: "languages"
}

const ReturnLocalStorageCodeType = () => {
    if(localStorage.getItem(LOCAL_STORAGE_LANGUAGES_KEY.language) === LANGUAGES_CODE.TR){
        return LANGUAGES_CODE.TR
    }
    if(localStorage.getItem(LOCAL_STORAGE_LANGUAGES_KEY.language) === LANGUAGES_CODE.EN){
        return LANGUAGES_CODE.EN
    }
}

const initialLanguagesStates: LANGUAGE = {
    code: ReturnLocalStorageCodeType() || LANGUAGES_CODE.TR,
    flag: localStorage.getItem(LOCAL_STORAGE_LANGUAGES_KEY.language) === LANGUAGES_CODE.TR ? flagTr : flagEn,
}

const languagesSlices = createSlice({
    name:'language-slices',
    initialState: initialLanguagesStates,
    reducers: {
        setLanguage(state, action) {
            const payload: LANGUAGES_CODE = action.payload;
            state.code = payload;
            state.flag = LANGUAGES.find((language)=> language.code === payload)!.flag;

            localStorage.setItem(LOCAL_STORAGE_LANGUAGES_KEY.language, payload)
        }
    }
});

export const languageActions = languagesSlices.actions;
export default languagesSlices.reducer;