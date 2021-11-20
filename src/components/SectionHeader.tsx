import {
    Text,
    Image,
    Box,
    Heading,
} from '@chakra-ui/react';
import { FC } from 'react';
import { SectionContent } from '../types/section';

const SectionHeader: FC<SectionContent> = ({name}) =>{
    return (
                <Heading
                    justify='center'
                    mt='7vh' mb='5vh'
                    fontSize='3em' 
                    border = '1px black'
                    w = '83vw' 
                    align ='left'
                >
                        {name}
                </Heading>
    )
}

export default SectionHeader