//react
import React from 'react'

//redux-hooks
import { useSelector, useDispatch } from 'react-redux'

//store
import { RootState } from './store';
import { languageActions } from './store/slices/languageSlices';

//commons
import { LANGUAGES_CODE } from './common/constants/languages';

function App() {
  const data = useSelector<RootState, string>((data)=> data.languages.code);
  const dispatch = useDispatch();


  const languageHandler = () => {
    dispatch(languageActions.setLanguage(LANGUAGES_CODE.EN))
  }

  return (
    <div>
      <p>{data}</p>
      <button onClick={languageHandler}></button>
    </div>
  );
}

export default App;
