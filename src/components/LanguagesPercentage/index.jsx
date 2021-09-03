/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com> joseliojunior
 * @copyright Josélio de S. C. Júnior - 2021
 * @license MIT
*/
import React, { useState, useEffect } from 'react';
import * as $ from './styled';
import Colors from '../Colors';
import ColorsDescription from '../ColorsDescription';
import { githubColors, getReposLang } from '../../services/githubColors';

const LanguagesPercentage = ( props ) => {

    const [colors, setColors] = useState([]);
    const [reposLang, setReposLang] = useState({});

    useEffect(() => {
        githubColors(setColors);
        getReposLang(props.languages, setReposLang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        Object.keys(reposLang).length > 0 ?
        <>
        <$.StatisticsBarWrapper>
            <$.PercentageWrapper>
                <Colors colors={colors} languages={reposLang} />
            </$.PercentageWrapper>
            <$.DisplayBox>
                <$.DisplayBoxLeftCorner /><$.DisplayBoxRightCorner />
            </$.DisplayBox>
        </$.StatisticsBarWrapper>
        <$.LanguagesDescriptionWrapper>
            <ColorsDescription colors={colors} languages={reposLang} />
        </$.LanguagesDescriptionWrapper>
        </>: <></>
    );
};

export default LanguagesPercentage;