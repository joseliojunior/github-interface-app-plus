/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com> joseliojunior
 * @copyright Josélio de S. C. Júnior - 2021
 * @license MIT
*/
import React from 'react';
import * as $ from './styled';

const ColorsDescription = (props) => {
    const { languages, colors } = props;
    const response = [];
    const langList = Object.values(languages);
    const totalPercentage = langList.length > 1 ? langList.reduce((a, b) => +a + +b) : langList;
    const percentage = x => x * 100 / totalPercentage;

    Object.entries(languages).forEach(e => {
        colors.forEach(f => {
            if (e[0] === f[0]) {
                response.push(
                    <$.LangWrapper key={f[0]}>
                        <$.LangCircle style={{ background: f[1] }}></$.LangCircle>
                        <$.LangName>{f[0]}</$.LangName>
                        <$.LangPercentage>{percentage(e[1]).toFixed(1)}%</$.LangPercentage>
                    </$.LangWrapper>
                );
            }
        });
    });

    return <$.DescriptionWrapper>{response}</$.DescriptionWrapper>;
};

export default ColorsDescription;