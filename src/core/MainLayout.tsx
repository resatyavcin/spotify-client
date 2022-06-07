import React from 'react'

// import flagTurkey from '../static/images/turkey.png'
// import flagUnitedKingdom from '../static/images/united-kingdom.png'

// import { useDispatch } from 'react-redux';
// import { languageActions } from '../store/slices/languageSlices';

type Props = {
    children?: React.ReactNode;
};

const MainLayout = (props: Props) => {
    const { children } = props;
    
    // const dispatch = useDispatch();

    // const changeLanguageTR = () => {
    //     dispatch(languageActions.setLanguage('tr'))
    // }
    // const changeLanguageEN = () => {
    //     dispatch(languageActions.setLanguage('en'))
    // }
    
    return (
        <div>
            {children}
        </div>
    )
}

export default MainLayout