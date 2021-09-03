/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com> joseliojunior
 * @copyright Josélio de S. C. Júnior - 2021
 * @license MIT
*/
import React from 'react';
import translation, { strings } from '../../services/translation';
import * as $ from './styled';

export const InvalidSearch = () => {
    return (
        <$.Wrapper>
            <$.MessageWrapper>
                <$.UnknowUser />
                <h1>
                    {translation(strings.invalidSearch)}
                </h1>
            </$.MessageWrapper>
        </$.Wrapper>
    );
};