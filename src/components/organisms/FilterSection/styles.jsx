import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;

    @media (max-width: 978px){
        margin-top: 50px;
    }
`;

export const HeaderSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 978px){
        flex-direction: column;
        justify-content: center;
    }
`;

export const Title = styled.h1`
    color: #000;
    font-size: 50px;
`;

export const ContentInput = styled.div`
    display: flex;
`;

export const ContentFilter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ContentItemsCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media (max-width: 978px){
        width: 100%;
        margin: auto;

        div{
            margin: auto;
            margin-top: 40px;
        }
    }

    
`;

export const ContentInfo = styled.div`
    padding: 20px;

    @media (max-width: 978px){
        position: relative;
        top: -40px;

    }
`;