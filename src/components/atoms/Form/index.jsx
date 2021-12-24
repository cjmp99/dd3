import styled from 'styled-components';

export const Form = styled.form`
    width: ${props => props.width ? props.width: '300px'};
    height: 400px;
    border-radius: 25px;
    box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.1);
    margin-top: 100px;
    background: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;