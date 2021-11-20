import {
    Input,
    HStack,
    Text,
    Image,
    InputGroup,
    InputLeftElement,
    useMediaQuery,
    LinkBox,
    Heading,
    LinkOverlay,
    Box,
    Badge,
} from "@chakra-ui/react";
import { 
    SearchIcon
} from '@chakra-ui/icons'
import { FC, useState } from "react";
import { RecipeCardContent } from "../types/recipes";

const RecipeCard: FC<RecipeCardContent> = ({title, cookTime, prepTime, category, image, link}) =>{
    return (
        <Box p="1" borderWidth="1px" rounded="md">
            <Image src={image} rounded='md'/>
            <Heading size="1.5em" my="2">
                <LinkOverlay href={link}>
                    {title}
                </LinkOverlay>
            </Heading>
            <Badge>
                {category}
            </Badge>
            <Text fontSize='1em' align='center' fontWeight='600' size='md'>Time: {prepTime + cookTime} min</Text>
        </Box>
    )
}

export default RecipeCard