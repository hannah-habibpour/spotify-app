import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
  onFilter: (filter: string) => void
}

function OrderSelector({ onFilter }: Props) {
  return (
    <Menu>
  <MenuButton as={Button} rightIcon={<BsChevronDown />}>
    Label
  </MenuButton>
  <MenuList>
    <MenuItem onClick={() => onFilter('NONE')}>NONE</MenuItem>
    <MenuItem onClick={() => onFilter('EXPLICIT')}>EXPLICIT</MenuItem>
  </MenuList>
</Menu>
  )
}

export default OrderSelector