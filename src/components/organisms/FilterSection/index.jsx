import { Container, ContentFilter, ContentInfo, ContentInput, HeaderSection, Title, ContentItemsCard } from "./styles";
import { Image } from "../../atoms/Image";
import { Input } from "../../atoms/Input";
import { Icon } from "../../atoms/Icon";
import { Select } from "../../atoms/Select";
import { useContext, useEffect } from "react";
import Dd3Context from "../../../context/context";
import { Card } from "../../atoms/Card";
import { ContentItems } from '../../atoms/ContentItems';
import border from '../../../assets/border-top.svg';
import search from '../../../assets/search.svg';
import filter from '../../../assets/filter.svg';
import vehicle from '../../../assets/vehicle.svg';
import bath from '../../../assets/bath.svg';
import grid from '../../../assets/grid.svg';

const FilterSection = () => {
    const { filterData, listProperties, getListroperties, selectedProperty, filterProperties, onChange } = useContext(Dd3Context);

    useEffect(() => {
        getListroperties()
        //eslint-disabled-next-line
    }, [])

    return (
        <Container>
            <HeaderSection>
                <div>
                    <Image width='160px' height='5px' src={border} />
                    <Title>Similar listings</Title>
                </div>

                <ContentFilter>
                    <ContentInput>
                        <Icon src={search} relative top='10px' left='30px' />
                        <Input value={filterData.text} name='text' onChange={onChange} placeholder='Search list...' height='40px' pleft='35px' />
                    </ContentInput>

                    <ContentInput>
                        <Icon src={filter} relative top='10px' left='30px' />
                        <Select value={filterData.type} name='type' placeholder='Type' height='40px' pleft='35px' onChange={onChange}>
                            <option value="">Type</option>
                            <option value="cost">Cost</option>
                            <option value="bedrooms">Bedrooms</option>
                            <option value="bathroom">Bathrooms</option>
                            <option value="year">Year</option>
                            <option value="slot">Slots</option>
                            <option value="mts">Mts</option>
                        </Select>
                    </ContentInput>
                </ContentFilter>
            </HeaderSection>

            <ContentItemsCard>
                {listProperties.slice(0, 3).map(((property, key) => (
                    <Card key={key} width='300px' height='420px' radius='25px' cursor onClick={() => selectedProperty(property)}>
                        <Image height='260px' src={property.src} card />

                        <ContentInfo>
                            <h3>{property.name}</h3>

                            <ContentItems>
                                <span>
                                    <Icon src={vehicle} /> {property.slot}
                                </span>
                                <span>
                                    <Icon src={bath} /> {property.bathroom}
                                </span>
                                <span>
                                    <Icon src={grid} /> {property.bedrooms}
                                </span>
                            </ContentItems>
                        </ContentInfo>
                    </Card>
                )))}
            </ContentItemsCard>
        </Container>
    )
}

export default FilterSection;
