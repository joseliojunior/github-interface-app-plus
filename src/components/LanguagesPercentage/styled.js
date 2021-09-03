/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com> joseliojunior
 * @copyright Josélio de S. C. Júnior - 2021
 * @license MIT
*/
import styled from 'styled-components';
import corner from '../../assets/corner.svg';

export const StatisticsBarWrapper = styled.div`
    position: relative;
    display: flex;
    margin: 4px 0;
    width: 80%;
`;

export const DisplayBox = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const DisplayBoxLeftCorner = styled.div`
    background-image: url(${corner});
    width: 14px;
    height: 14px;
    margin: -2px 0 -2px -2px;
`;

export const DisplayBoxRightCorner = styled(DisplayBoxLeftCorner)`
    transform: rotate(180deg);
    margin: -2px -2px -2px 0;
`;

export const PercentageWrapper = styled.div`
    display: flex;
    height: 10px;
    width: 100%;
`;

export const LanguagesDescriptionWrapper = styled.div`
    width: 80%;
`;