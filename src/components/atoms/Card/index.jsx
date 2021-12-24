import styled from 'styled-components';

export const Card = styled.div`
    width: ${props => props.width ? props.width : '300px'};
    height: ${props => props.height ? props.height : 'auto'};
    border-radius: ${props => props.radius ? props.radius : '25px'};
    background: #fff;
    margin-top: ${props => props.top ? props.top : '0px'};
    padding: ${props => props.padding ? props.padding : '0px'};
    cursor: ${props => props.cursor && 'pointer'};
    transition: .3s all ease;

    :hover{
        transition: .3s all ease;
        box-shadow: 2px 4px 2px 4px rgba(0,0,0,0.2);
    }
`;