import { Card } from "../../atoms/Card";
import { ColOrRow } from "../../atoms/ColOrRow";
import { ContentItems } from "../../atoms/ContentItems";
import { Icon } from "../../atoms/Icon";
import { Image } from "../../atoms/Image";
import image from '../../../assets/image.png'
import vehicle from '../../../assets/vehicle.svg'
import bath from '../../../assets/bath.svg'
import grid from '../../../assets/grid.svg'
import garage from '../../../assets/garage.svg'
import calendar from '../../../assets/calendar.svg'
import Dd3Context from "../../../context/context";
import { useContext } from "react";
import { NonData } from "../../atoms/NonData";
import { FaClock } from 'react-icons/fa';

const SelectedProperty = () => {
    const { property } = useContext(Dd3Context);
    return (
        <ColOrRow width='50%' padding='100px' direction='column'>
            {!property?.src ?
                <NonData height='500px'>
                    <h2>Select a property to view its properties</h2>
                    {' '} <FaClock size='30' /></NonData>
                : <Image height='500px' src={property?.src} />}

            <Card width='90%' height='140px' top='30px' padding='40px'>
                <h2>Details</h2>

                <ContentItems>
                    <span>
                        <Icon src={vehicle} /> {property?.slot ? property?.slot : <FaClock />}
                    </span>
                    <span>
                        <Icon src={bath} /> {property?.bathroom ? property?.bathroom : <FaClock />}
                    </span>
                    <span>
                        <Icon src={grid} /> {property?.mts ? property?.mts : <FaClock />}
                    </span>
                    <span>
                        <Icon src={garage} /> {property?.slot ? property?.slot : <FaClock />}
                    </span>
                    <span>
                        <Icon src={calendar} /> {property?.year ? property?.year : <FaClock />}
                    </span>
                </ContentItems>
            </Card>
        </ColOrRow>
    )
}

export default SelectedProperty;