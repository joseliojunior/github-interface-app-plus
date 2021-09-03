import axios from 'axios';
import api from './api';
/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com> joseliojunior
 * @copyright Josélio de S. C. Júnior - 2021
 * @license MIT
 * This is a adaptation from that project below:
 * @link https://github.com/joseliojunior/github-colors/blob/main/js/services/GithubColors.js
 */
export const githubColors = (callback) => {
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
            callback(art);
        });
};

export const getReposLang = (languages, callback) => {
    api.get(`repos/${languages[0]}/${languages[1]}/languages`)
        .then(({ data }) => callback(data));
};