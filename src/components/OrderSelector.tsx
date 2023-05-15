import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

function OrderSelector() {
  return (
    <Menu>
  <MenuButton as={Button} rightIcon={<BsChevronDown />}>
    Label
  </MenuButton>
  <MenuList>
    <MenuItem>NONE</MenuItem>
    <MenuItem>EXPLICIT</MenuItem>
  </MenuList>
</Menu>
  )
}

export default OrderSelector