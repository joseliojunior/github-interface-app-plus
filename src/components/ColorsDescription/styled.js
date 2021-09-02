import styled from 'styled-components';

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    font-size: .8em;

    div {
        display: flex;
        align-items: center;
    }
`;

export const LangWrapper = styled.div`
    margin: 2px 6px;
`;

export const LangCircle = styled.div.attrs(props => ({
    background: props.background
}))`
    margin-right: 4px;
    width: 10px;
    height: 10px;
    border-radius: 10px;
`;

export const LangName = styled.div`
    margin-right: 4px;
    font-weight: bold;
`;

export const LangPercentage = styled.div`
    color: ${props => props.theme.color.graffitiBlue3};
`;