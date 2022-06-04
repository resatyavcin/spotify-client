import { useSelector } from "react-redux"
import { LANGUAGES_CODE } from "../common/constants/languages"
import { LANGUAGE_FILE } from "../common/interfaces/languages/lang-files"
import { RootState } from "../store"

const useLanguage = (fileName: string): LANGUAGE_FILE  => {
    
    const langCode = useSelector<RootState, LANGUAGES_CODE>(data=>data.languages.code)

    const LANG_FILES: Array<LANGUAGE_FILE> = [
        { code: LANGUAGES_CODE.TR, t: require(`../locales/en/${fileName}.json`) },
        { code: LANGUAGES_CODE.TR, t: require(`../locales/en/${fileName}.json`) }
    ]

    const texts = LANG_FILES.find(f => f.code === langCode)!.t;

    return {
        code: langCode,
        t: texts
    }

}

export default useLanguage