import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { AiOutlineMenu } from "react-icons/ai"

function MenuBar() {
  return (
    <Menu>
       <MenuButton as={Button}><AiOutlineMenu /></MenuButton>
       <MenuList>
              <MenuItem>
          
              </MenuItem>
        </MenuList>
    </Menu>
  )
}

export default MenuBar