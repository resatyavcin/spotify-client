import { useSelector } from "react-redux"
import { RootState } from "../store"

//common
import { LANGUAGES_CODE } from "../common/constants/languages"
import { LANGUAGE_FILE } from "../common/interfaces/languages/lang-files"

const useLanguage = () => {
    
    const langCode = useSelector<RootState, LANGUAGES_CODE>(data=>data.languages.code)

    const LANG_FILES: Array<LANGUAGE_FILE> = [
        { code: LANGUAGES_CODE.TR, t: require('../common/locales/tr/tr.json') },
        { code: LANGUAGES_CODE.EN, t: require('../common/locales/en/en.json') }
    ]

    const texts = LANG_FILES.find(f => f.code === langCode)!.t;

    
    return {
        code: langCode,
        t: texts
    }

}

export default useLanguage