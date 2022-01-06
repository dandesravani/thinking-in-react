import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { FilterableProductTable } from './components/FilterableProductTable'

export const App = () => {
  return (
    <ChakraProvider>
      <FilterableProductTable />
    </ChakraProvider>
  )
}
