
import {
    Box,
    List,
    ListIcon,
    VStack,
    ListItem,
    Stat,
    StatLabel,
    StatNumber,
    HStack,
    Text,
    Badge,
} from "@chakra-ui/react";
import { 
    ChevronRightIcon
} from '@chakra-ui/icons'
import { FC } from "react";
import { Recipe } from "../types/recipes";

const RecipeCard : FC <Recipe> = ({title, cookTime, prepTime, ingredients, steps, category}) => {
    const ingredientList = ingredients.split('/')
    const stepsList = steps.split('/')
    return (
        <VStack
            spacing = '1em'
            w = '60vw'
            h = '100%'
            borderRight='1px'
            borderLeft='1px'
        >
            <Box w = '50vw'>
                <Text textAlign='left' fontSize= {['30px', '35px', '40px', '45px', '45px']} fontWeight='600'>
                    {title}
                </Text>
                <Badge>
                    {category}
                </Badge>
            </Box>
            <Box w = '50vw'>
                <Text textAlign='left' fontSize='1.5em' fontWeight='400' > Cooking Time </Text>
            </Box>
            <HStack w = '50vw' spacing='8vw'>
                <Box w='15vw'>
                    <Stat>
                        <StatLabel>Prep Time:</StatLabel>
                        <StatNumber fontSize='1.2em' fontWeight='400'>{prepTime} min</StatNumber>
                    </Stat>
                </Box>
                <Box w='15vw'>
                    <Stat >
                        <StatLabel>Cook Time:</StatLabel>
                        <StatNumber fontSize='1.2em' fontWeight='400' >{cookTime} min</StatNumber>
                    </Stat>
                </Box>
                <Box>
                    <Stat >
                        <StatLabel>Total Time:</StatLabel>
                        <StatNumber fontSize='1.2em' fontWeight='400' >{cookTime + prepTime} min</StatNumber>
                    </Stat>
                </Box>
            </HStack>
            <Box w='50vw'>
                <Text fontSize='1.5em' fontWeight='400' > Ingredients </Text>
                <List fontSize='1.2em' fontWeight='300'>
                    {ingredientList.map( (ingredient, index )=> {
                        return <ListItem key= {index}> 
                            <ListIcon as={ChevronRightIcon} color="blue.500" />
                                {ingredient}
                            </ListItem>
                    })}
                </List>
            </Box>
            <Box w = '50vw'>
                <Text fontSize='1.5em' fontWeight='400' > Steps </Text>
                <List fontSize='1.2em' fontWeight='300'>
                    {stepsList.map( (step, index )=> {
                        return <ListItem key= {index}> 
                                <Box pb = '2'>
                                    <Box 
                                        backgroundColor='blue.700' 
                                        color='white' 
                                        borderRadius='18px' 
                                        w='28px' h='28px' 
                                        textAlign='center' 
                                        float='left' 
                                        fontWeight='100'
                                        fontFamily='Montserrat'
                                    > 
                                        {index + 1} </Box>
                                    <Box pl='40px'> {step} </Box>
                                </Box>
                            </ListItem>
                    })}
                </List>
            </Box>
        </VStack>
    )
}

export default RecipeCard