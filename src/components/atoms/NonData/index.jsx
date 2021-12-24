import styled from 'styled-components';

export const NonData = styled.div`
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '100%'};
    border-top-left-radius: ${props => props.card && '20px'};
    display: flex;
    justify-content: center;
    align-items: center;
`;