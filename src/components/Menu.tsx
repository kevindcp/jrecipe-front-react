import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerFooter,
  } from '@chakra-ui/react'
import { FC} from 'react'
import { MenuProps } from '../types/menu'
const Menu: FC <MenuProps> = ({ isOpen, onClose }) => {
  return (
      <Drawer placement='left' onClose={onClose} isOpen={isOpen} size='md'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader mt='3vh' borderBottomWidth='1px' fontSize='2em' fontWeight='800'>
            Jrecipe
          </DrawerHeader>
          <DrawerBody fontSize='1.3em'>
            <p>Search</p>
            <p>Add Recipe</p>
            <p>Categories</p>
            <p>Your recipes</p>
            <p>Random recipe</p>
            <p>Log Out</p>
          </DrawerBody>
          <DrawerFooter >
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  )
  }

  export default Menu