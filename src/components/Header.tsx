import {
    Input,
    HStack,
    Text,
    Image,
    InputGroup,
    InputLeftElement,
    useMediaQuery,
    useDisclosure,
    Button,
} from "@chakra-ui/react";
import { 
    SearchIcon
} from '@chakra-ui/icons'
import { FC, useState } from "react";
import Menu from "./Menu";

const Header: FC = () =>{
    const [searchbar, setSearchbar] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)")
    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.code === "Enter") {
            console.log(searchbar)
            setSearchbar('')
        }
    }
    return (
        
        <HStack backgroundColor='white' h='80px' w='100%' pos='fixed' zIndex='1' top='0' boxShadow='0 0 6px rgba(0, 0, 0, 1)' spacing={ isLargerThan1000? '25vw':'10vw' }>
            <HStack ml='7%'>
                <Button 
                    leftIcon={<Image mt='1vh' h='5vh' w='auto' src={'../assets/images/logoBlack.png'} />} 
                    onClick ={onOpen} 
                    h='5vh' w='auto' 
                    backgroundColor='white' 
                    _hover={{bg:'white'}} 
                    _active={{bg:'white'}}
                    _focus={{bg:'white'}}
                >
                    <Text fontWeight='800'>Jrecipe</Text>
                </Button>
            </HStack>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="black" />}
                />
                <Input w ='50vw' maxWidth='500px' placeholder='Search a recipe' borderRadius='15px' pr='50px' value = {searchbar} onChange = {(event) => setSearchbar(event.target.value)} onKeyPress={handleKeyPress}/>
            </InputGroup > 
            <Menu isOpen={isOpen} onClose={onClose}/>
        </HStack>
    )
}

export default Header