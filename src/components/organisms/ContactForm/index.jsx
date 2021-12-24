import { Button } from "../../atoms/Button";
import { ColOrRow } from "../../atoms/ColOrRow";
import { Form } from "../../atoms/Form";
import { ContainerInfo, HeaderForm } from "../../atoms/HeaderForm";
import { Icon } from "../../atoms/Icon";
import { Image } from "../../atoms/Image";
import { Input } from "../../atoms/Input";
import { Textarea } from "../../atoms/Textarea";
import arrow from '../../../assets/arrow-yellow.svg'
import avatar from '../../../assets/avatar.png'

const ContactForm = () => {
    return (
        <ColOrRow width='50%'>
            <Form>
                <HeaderForm>
                    <Image width='40px' height='40px' src={avatar} />
                    <ContainerInfo>
                        <label>Kayley Hall</label>
                        <label className='yellow'>view profile</label>
                    </ContainerInfo>
                </HeaderForm>
                <Input placeholder='Name' />
                <Input placeholder='Phone' />
                <Input placeholder='Email' />
                <Textarea placeholder='Hello, I am interested in...' />
                <Button width='90%' bg='#000' color='#fff' mleft='0px' margin mtop='20px'>Learn more {" "} <Icon src={arrow} /></Button>
            </Form>
        </ColOrRow>
    )
}

export default ContactForm;