import { Center, Checkbox, Flex, Input } from '@chakra-ui/react'
import React from 'react'

interface SearchBarProps {
  onSearchText(text: string): void
  onChecked(checked: boolean): void
}

export const SearchBar = ({ onSearchText, onChecked }: SearchBarProps) => {
  return (
    <Center mb="20px">
      <Flex direction="column">
        <Input
          id="search"
          type="text"
          onChange={evt => onSearchText(evt.target.value)}
          placeholder="Search..."
        />
        <Checkbox
          colorScheme="red"
          onChange={evt => onChecked(evt.target.checked)}
        >
          Only show products in stock
        </Checkbox>
      </Flex>
    </Center>
  )
}
