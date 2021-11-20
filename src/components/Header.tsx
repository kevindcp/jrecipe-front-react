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
    SearchIcon,
    HamburgerIcon
} from '@chakra-ui/icons'
import { FC, useState } from "react";
import Menu from "./Menu";

const Header: FC = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <HStack backgroundColor='white' h='80px' w='100%' pos='fixed' zIndex='1' top='0' boxShadow='0 0 6px rgba(0, 0, 0, 1)' spacing='46vw'>
            <HStack>
                <Button 
                    leftIcon={<HamburgerIcon mt='1vh' h='3vh' w='auto' color='black'/>} 
                    onClick ={onOpen} 
                    h='5vh' w='auto' ml='10vw'
                    backgroundColor='white' 
                    _hover={{bg:'white'}} 
                    _active={{bg:'white'}}
                    _focus={{bg:'white'}}
                >
                </Button>
            </HStack>
            <Menu isOpen={isOpen} onClose={onClose}/>
            <Text fontWeight='800' pos='fixed'>Jrecipe</Text>
        </HStack>
    )
}

/** Searchbar code
 * 
    const [searchbar, setSearchbar] = useState('')
 *  const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.code === "Enter") {
            console.log(searchbar)
            setSearchbar('')
        }
    }
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="black" />}
                />
                <Input w ='50vw' maxWidth='500px' placeholder='Search a recipe' borderRadius='15px' pr='50px' value = {searchbar} onChange = {(event) => setSearchbar(event.target.value)} onKeyPress={handleKeyPress}/>
            </InputGroup > 
*/

export default Header