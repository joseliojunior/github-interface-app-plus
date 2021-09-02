import axios from 'axios';
import api from './api';

export const githubColors = (colorSet) => {
    axios.get('https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml')
        .then(({ data }) => {
            const art = `${data
                .replace(/^(#.*|---|\s{2}(?!color).*)/gm, '')
                .replace(/color|[:"]/gm, '')
                .replace(/^\n/gm, '')
                .replace(/\n\s{2}/gm, ',')
                }`
                .split('\n')
                .map(e => e.split(',').map(e => e.trim()))
                .filter(e => e.length > 1);

            colorSet(art);
        });
};


export const getReposLang = (languages, setLang) => {
    api.get(`repos/${languages[0]}/${languages[1]}/languages`)
        .then(({ data }) => setLang(data));
};