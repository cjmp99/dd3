import { Image } from "../../atoms/Image";
import { NavLink } from "../../atoms/NavLink";
import { Button } from "../../atoms/Button";
import logo from '../../../assets/tree.svg';
import arrow from '../../../assets/arrow-white.svg';
import { Container, ContentLinks, NavbarSpaceBetween } from "./styles";
import { Icon } from "../../atoms/Icon";
import Dd3Context from "../../../context/context";
import { useContext } from "react";

const Navbar = () => {
    const { property } = useContext(Dd3Context);

    return (
        <>
            <Container>
                <NavbarSpaceBetween>
                    <Image
                        src={logo}
                        width='120px'
                    />

                    <ContentLinks>
                        <NavLink>Nav Link</NavLink>

                        <NavLink left='40px'>Nav Link</NavLink>

                        <NavLink left='40px'>Nav Link</NavLink>

                        <NavLink left='40px'>Nav Link</NavLink>

                        <Button>Work with us {" "}<Icon src={arrow} /></Button>
                    </ContentLinks>
                </NavbarSpaceBetween>
            </Container>
            {property?.name &&
                <Container height='100px'>
                    <NavbarSpaceBetween padding='0px 100px 0px 100px'>
                        <h1>{property?.name}</h1>

                        {property?.cost && <h1>$ {property?.cost}</h1>}
                    </NavbarSpaceBetween>
                </Container>
            }
        </>
    )
}

export default Navbar;