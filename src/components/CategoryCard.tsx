import {
    Text,
    Image,
    LinkOverlay,
    LinkBox,
} from '@chakra-ui/react';
import { FC } from 'react';
import { CategoryCardContent } from '../types/category';

const CategoryCard: FC<CategoryCardContent> = ({name, image, link}) =>{
    return (
            <LinkBox h='400px' borderWidth='1px' rounded='md'>
                <LinkOverlay href={link} h='auto'>
                    <Image 
                        src={image} 
                        fallbackSrc={'../assets/images/defaultImage.png'} 
                        w='100%' h='400px' 
                        top='10%' 
                        rounded='md' 
                        filter='blur(2px)'
                    />
                </LinkOverlay>
                <Text 
                        position='relative' 
                        fontSize='2em' 
                        top='-55%' 
                        align='center' 
                        color='white' 
                        fontWeight='800' 
                        textShadow='3px 3px black'
                >
                        {name}
                </Text>
            </LinkBox>
    )
}

export default CategoryCard