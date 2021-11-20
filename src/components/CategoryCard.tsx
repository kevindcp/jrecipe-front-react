import {
    Text,
    Image,
    LinkOverlay,
    LinkBox,
} from "@chakra-ui/react";
import { FC } from "react";
import { CategoryCardContent } from "../types/category";

const CategoryCard: FC<CategoryCardContent> = ({name, image, link}) =>{
    return (
            <LinkBox h='auto' >
                <LinkOverlay href={link} h="auto">
                    
                    <Image src={image} fallbackSrc={'../assets/images/defaultImage.png'} w='100%' h='100%' top='10%' maxH='200px' minH='200px' rounded='md' position='relative' filter='blur(2px)'/>
                    <Text 
                        position='relative' 
                        fontSize='2em' 
                        top='-40%' 
                        align='center' 
                        color='white' 
                        fontWeight='800' 
                        textShadow="3px 3px black"
                    >
                        {name}
                    </Text>
                </LinkOverlay>
            </LinkBox>
    )
}

export default CategoryCard