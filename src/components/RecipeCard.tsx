import {
    Text,
    Image,
    Heading,
    LinkOverlay,
    Badge,
    LinkBox,
} from '@chakra-ui/react';
import { FC } from 'react';
import { RecipeCardContent } from '../types/recipes';

const RecipeCard: FC<RecipeCardContent> = ({title, cookTime, prepTime, category, image, link}) =>{
    return (
        <LinkBox p='1' borderWidth='1px' rounded='md' h='auto' border =' 10px'>
            <Image 
                src={image} 
                fallbackSrc={'../assets/images/defaultImage.png'} 
                w='100%' h='25vh' 
                rounded='md'
            />
            <Heading size='1.5em' my='2'>
                <LinkOverlay href={link}>
                    {title}
                </LinkOverlay>
            </Heading>
            <Badge>
                {category}
            </Badge>
            <Text fontSize='1em' align='center' fontWeight='600' size='md'>
                Time: {prepTime + cookTime} min
            </Text>
        </LinkBox>
    )
}

export default RecipeCard