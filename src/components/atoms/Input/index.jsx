import styled from 'styled-components';

export const Input = styled.input`
    width: ${props => props.width ? props.width : '90%'};
    height: ${props => props.height ? props.height : '60px'};;
    margin: auto;
    border: none;
    border-radius: 10px;
    border: 1px solid #EBEBEB;
    outline: none;
    padding-left: ${props => props.pleft ? props.pleft : '10px'};
    margin-top: 20px;
`;