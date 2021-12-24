import styled from 'styled-components';

export const Image = styled.img`
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '100%'};
    object-fit: cover;
    border-top-left-radius: ${props => props.card && '20px'};
    border-top-right-radius: 20px;
`;