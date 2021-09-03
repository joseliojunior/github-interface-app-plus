/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com> joseliojunior
 * @copyright Josélio de S. C. Júnior - 2021
 * @license MIT
*/
import React from 'react';
import * as $ from './styled';

const Colors = (props) => {
    const { languages, colors } = props;
    const response = [];
    const langList = Object.values(languages);
    const totalPercentage = langList.length > 1 ? langList.reduce((a, b) => +a + +b) : langList;
    const percentage = x => x * 10e3 / totalPercentage;

    Object.entries(languages).forEach(e => {
        colors.forEach(f => {
            if (e[0] === f[0]) {
                response.push(
                    <div key={f[0]}
                        style={{
                            background: f[1],
                            width: `${percentage(e[1])}%`,
                            height: '100%'
                        }}></div>
                );
            }
        });
    });

    return <$.PercentageBar>{response}</$.PercentageBar>;
};

export default Colors;