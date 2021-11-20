import {
    HStack,
    Text,
    useDisclosure,
    Button,
    useColorMode,
    IconButton,
    Flex,
} from '@chakra-ui/react';
import { 
    SearchIcon,
    HamburgerIcon,
    MoonIcon,
    SunIcon,
} from '@chakra-ui/icons'
import { FC, useState } from 'react';
import Menu from './Menu';

const Header: FC = () =>{
    const { toggleColorMode, colorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex h='8vh' w='100%' pos='fixed' zIndex='1' top='0' backgroundColor= {colorMode === 'light'? 'white':'gray.800'} dir='column'>
            <HStack>
                <Button 
                    leftIcon={<HamburgerIcon mt='1vh' h='3vh' w='auto'/>} 
                    onClick ={onOpen} 
                    h='0' w='auto'
                    backgroundColor= {colorMode === 'light'? 'white':'gray.800'} 
                    _focus = {{outline:'none', boxShadow:'none'}}
                    _hover = {{outline:'none', boxShadow:'none'}}
                />
                <Text fontWeight='800' pt='5px' fontSize='2.5em'>Jrecipe</Text>
            </HStack>
            <IconButton 
                aria-label='night mode' 
                icon={colorMode === 'light' ? <MoonIcon h='3vh'  mt='10vh' w='auto'/> : <SunIcon h='3vh'  mt='10vh' w='auto'/>} 
                onClick={toggleColorMode} 
                pr='3vw'
                ml='auto'
                h='0' w='auto'
                backgroundColor= {colorMode === 'light'? 'white':'gray.800'}
                outline='none'
                boxShadow='none'
                _focus = {{outline:'none', boxShadow:'none'}}
                _hover = {{outline:'none', boxShadow:'none'}}
            />
            <Menu isOpen={isOpen} onClose={onClose}/>
        </Flex>
    )
}

/** Searchbar code
 * 
    const [searchbar, setSearchbar] = useState('')
 *  const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.code === 'Enter') {
            console.log(searchbar)
            setSearchbar('')
        }
    }
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='black' />}
                />
                <Input w ='50vw' maxWidth='500px' placeholder='Search a recipe' borderRadius='15px' pr='50px' value = {searchbar} onChange = {(event) => setSearchbar(event.target.value)} onKeyPress={handleKeyPress}/>
            </InputGroup > 
*/

export default Header