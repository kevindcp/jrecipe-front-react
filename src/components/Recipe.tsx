
import {
    Box,
    List,
    ListIcon,
    VStack,
    ListItem,
    HStack,
    Text,
    Badge,
    Image
} from '@chakra-ui/react';
import { 
    ChevronRightIcon
} from '@chakra-ui/icons'
import { FC } from 'react';
import { Recipe } from '../types/recipes';

const Recipe : FC <Recipe> = ({title, cookTime, prepTime, ingredients, steps, category, image}) => {
    const ingredientList = ingredients.split('/')
    const stepsList = steps.split('/')
    return (
        <VStack
            spacing = '1em'
            h = '100%'
        >
            <Box w = '60vw'>
                <Text textAlign='left' fontSize= {['30px', '35px', '40px', '45px', '45px']} fontWeight='400'>
                    {title}
                </Text>
                <Badge>
                    {category}
                </Badge>
            </Box>
            <Box w = '60vw'>
                <Image src = {image} fallbackSrc= {'../assets/images/defaultImage.png'} w='100%' h='auto' borderRadius='10px'/>
            </Box>
            <Box w = '60vw'>
                <Text textAlign='left' fontSize='1.5em' fontWeight='400'> Cooking Time </Text>
            </Box>
            <HStack w = '60vw' spacing='1vw'>
                <Box w='30vw' top='1'>
                    <Text fontSize='0.8em' fontWeight='400'>Prep Time:</Text>
                    <Text fontSize='1.2em' fontWeight='400'>{prepTime} min</Text>
                </Box>
                <Box w='30vw'>
                    <Text fontSize='0.8em' fontWeight='400'>Cook Time:</Text>
                    <Text fontSize='1.2em' fontWeight='400' >{cookTime} min</Text>
                </Box>
                <Box w='30vw'>
                    <Text fontSize='0.8em' fontWeight='400'>Total Time:</Text>
                    <Text fontSize='1.2em' fontWeight='400' >{cookTime + prepTime} min</Text>
                </Box>
            </HStack>
            <Box w='60vw'>
                <Text fontSize='1.5em' fontWeight='400' > Ingredients </Text>
                <List fontSize='1.2em' fontWeight='300'>
                    {ingredientList.map( (ingredient, index )=> {
                        return <ListItem key= {index}> 
                                <HStack alignItems='start'>
                                    <Box> <ListIcon as={ChevronRightIcon} color='blue.500' /> </Box>
                                    <Box> <Text w='60vw'> {ingredient} </Text> </Box>
                                </HStack>
                            </ListItem>
                    })}
                </List>
            </Box>
            <Box w = '60vw'>
                <Text fontSize='1.5em' fontWeight='400' > Steps </Text>
                <List fontSize='1.2em' fontWeight='300'>
                    {stepsList.map( (step, index )=> {
                        return <ListItem key= {index}> 
                                <HStack alignItems='start'>
                                   <Box> <ListIcon as={ChevronRightIcon} color='blue.500' /> </Box>
                                   <Box> <Text w='60vw'>{step} </Text> </Box>
                                </HStack>
                            </ListItem>

                    })}
                </List>
            </Box>
        </VStack>
    )
}

export default Recipe