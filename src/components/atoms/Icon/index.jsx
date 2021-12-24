import styled from 'styled-components';

export const Icon = styled.img`
    width: ${props => props.width ? props.width : '20px'};
    position: ${props => props.relative && 'relative'};
    left: ${props => props.left ? props.left : '0px'};
    right: ${props => props.right ? props.right : '0px'};
    top: ${props => props.top ? props.top : '0px'};
    bottom: ${props => props.bottom ? props.bottom : '0px'};
`;