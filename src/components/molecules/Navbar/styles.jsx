import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: ${props => props.height ? props.height : '230px'};
    display: flex;
    background: #000000;
    background: -webkit-linear-gradient(to right, #000000, #271A00);
    background: linear-gradient(to right, #000000, #271A00);
`;

export const NavbarSpaceBetween = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: ${props => props.padding ? props.padding : '100px'};

    h1{
        color: #fff;
    }
`;

export const ContentLinks = styled.div`
    display: flex;
    align-items: center;
`;