import { LANGUAGES_CODE } from "../../constants/languages";

export interface LANGUAGE_FILE {
  code: LANGUAGES_CODE;
  t: Record<string, Record<string, string>>;
}
