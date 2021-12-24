import styled from 'styled-components';

export const Button = styled.button`
    width: ${props => props.width ? props.width : '200px'};
    height: 50px;
    background: ${props => props.bg ? props.bg : '#FFAC12'};
    color: ${props => props.color ? props.color : '#000'};;
    border-radius: 0px 18px 0px 0px;
    border: none;
    cursor: pointer;
    margin-left: ${props => props.mleft ? props.mleft : '20px'};
    margin-top: ${props => props.mtop ? props.mtop : '0px'};
    font-weight: bold;
    margin: ${props => props.margin && 'auto'};
`;