import styled from 'styled-components';

export const Container = styled.div`
    max-width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 100px;
    background: #000000;
    background: -webkit-linear-gradient(to right, #000000, #271A00);
    background: linear-gradient(to right, #000000, #271A00);
    margin-top: 50px;

    h1{
        font-size: 42px;
        color: #fff;
    }

    b{
        color: #FFAC12;
    }

    button {
        margin-top: 30px;
    }
`;

export const ColumnHeading = styled.div`
    width: 130px;
    display: flex;
    flex-direction: column;

    h4{
        color: #fff;
    }

    span{
        color: #fff;
        margin-top: 10px;
    }
`;

export const ContentLogo = styled.div`
    width: 40%;
    height: 50px;
`;

export const ContainerFirstSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: ${props => props.top ? props.top : '0px'};
    border-bottom: ${props => props.borderBottom && '1px solid #6363639b'};
    padding-bottom: ${props => props.borderBottom && '50px'};
`;

export const ContentMedia = styled.div`
    width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;