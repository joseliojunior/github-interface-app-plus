import React from 'react';
import * as $ from './styled';
import LanguagesPercentage from '../LanguagesPercentage';

export const RepositoryItem = ({ name, fullName, reposLink, languages }) =>
<$.Repository>
    <h2>{name}</h2>
        <a href={`https://github.com/${reposLink}`} target="_blank" rel="noreferrer">{fullName}</a>
        <LanguagesPercentage languages={languages}/>
</$.Repository>;