import { Center, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { PRODUCTS } from '../../utils/data'
import { ProductTable } from './ProductTable'
import { SearchBar } from './SearchBar'

export const FilterableProductTable = () => {
  const [text, setText] = React.useState('')
  const [isStocked, setIsStocked] = React.useState(false)

  const searchProducts =
    text.trim() === ''
      ? PRODUCTS
      : PRODUCTS.filter(p => p.name.toLowerCase().includes(text.toLowerCase()))

  const inStockProducts = isStocked
    ? searchProducts.filter(p => p.stocked)
    : searchProducts

  return (
    <Flex direction="column">
      <Center>
        <Heading as="h3" size="lg" mt="10px" mb="50px">
          Thinking in React
        </Heading>
      </Center>
      <SearchBar onChecked={setIsStocked} onSearchText={setText} />
      <ProductTable products={inStockProducts} />
    </Flex>
  )
}
