import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { FC} from 'react'
import { MenuProps } from '../types/menu'
const Menu: FC <MenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton/>
          <DrawerHeader borderBottomWidth='1px'>
            Jrecipe
          </DrawerHeader>
          <DrawerBody>
            <p>Categories</p>
            <p>Your cookbok</p>
            <p>Random recipe</p>
            <p>Log Out</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
  }

  export default Menu