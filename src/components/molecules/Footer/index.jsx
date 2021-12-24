import { Button } from "../../atoms/Button";
import { ColumnHeading, Container, ContainerFirstSection, ContentLogo, ContentMedia } from "./styles";
import { Icon } from "../../atoms/Icon";
import { Image } from "../../atoms/Image";
import arrow from '../../../assets/arrow-white.svg';
import logo from '../../../assets/tree.svg';
import facebook from '../../../assets/facebook.svg';
import twitter from '../../../assets/twitter.svg';
import instagram from '../../../assets/instagram.svg';

const Footer = () => {
    return (
        <Container>
            <ContainerFirstSection borderBottom>
                <h1>Make your dreams a <b>reality</b></h1>

                <Button>Work with us {" "}<Icon src={arrow} /></Button>
            </ContainerFirstSection>

            <ContainerFirstSection top='80px'>
                <ContentLogo>
                    <Image
                        src={logo}
                        width='100px'
                    />
                    <ContentMedia>
                        <Icon width='10px' src={facebook} />
                        <Icon width='22px' src={twitter} />
                        <Icon width='19px' src={instagram} />
                    </ContentMedia>
                </ContentLogo>


                <ColumnHeading>
                    <h4>Column Heading</h4>
                    <span>Link goes here</span>
                    <span>Link goes here</span>
                    <span>Link goes here</span>
                    <span>Link goes here</span>
                </ColumnHeading>

                <ColumnHeading>
                    <h4>Column Heading</h4>
                    <span>Link goes here</span>
                    <span>Link goes here</span>
                    <span>Link goes here</span>
                    <span>Link goes here</span>
                </ColumnHeading>

                <ColumnHeading>
                    <h4>Column Heading</h4>
                    <span>Link goes here</span>
                    <span>Link goes here</span>
                    <span>Link goes here</span>
                    <span>Link goes here</span>
                </ColumnHeading>


            </ContainerFirstSection>
        </Container>
    )
}

export default Footer;