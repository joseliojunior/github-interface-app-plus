import styled from 'styled-components';
import leftCorner from '../../assets/corner.svg';

export const StatisticsBarWrapper = styled.div`
    position: relative;
    display: flex;
    margin: 4px 0;
    width: 80%;
    height: 12px;
`;

export const DisplayBox = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: calc(100% - 1px);
    height: 10px;
    border: solid 1px ${props => props.theme.color.graffitiBlue1};
`;

export const DisplayBoxLeftCorner = styled.div`
    background-image: url(${leftCorner});
    background-size: contain;
    width: 5px;
    height: 10px;
`;

export const DisplayBoxRightCorner = styled(DisplayBoxLeftCorner)`
    transform: rotate(180deg);
`;

export const PercentageWrapper = styled.div`
    display: flex;
    height: 12px;
    width: 100%;
`;

export const LanguagesDescriptionWrapper = styled.div`
    width: 80%;
`;