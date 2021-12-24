import styled from 'styled-components';

export const ColOrRow = styled.div`
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '100%'};
    display: flex;
    flex-direction: ${props => props.direction ? props.direction : 'row'};
    justify-content: ${props => props.jusitfy ? props.jusitfy : 'center'};
    padding: ${props => props.padding ? props.padding : '0px'};

    @media (max-width: 978px){
        width: 90%;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        padding: 0px;
    }
`;