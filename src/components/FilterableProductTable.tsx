import { Center, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { PRODUCTS } from '../utils/data'
import { ProductTable } from './ProductTable'
import { SearchBar } from './SearchBar'

export const FilterableProductTable = () => {
  const [text, setText] = React.useState('')
  const [isStocked, setIsStocked] = React.useState(false)

  const handleChecked = (checked: boolean) => {
    setIsStocked(checked)
  }
  const handleSearchText = (text: string) => {
    setText(text)
  }

  const searchedProducts = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(text.toLowerCase()),
  )

  const filterStocked = PRODUCTS.filter(p => p.stocked)

  const filterSearchStockProducts = searchedProducts.filter(p => p.stocked)

  // const filterSearched = text ? searchedProducts : PRODUCTS

  // const stockedProducts = isStocked ? filterStocked : PRODUCTS

  function getProducts() {
    if (text !== '' && isStocked) {
      return filterSearchStockProducts
    }
    if (text !== '' && !isStocked) {
      return searchedProducts
    }
    if (isStocked && text === '') {
      return filterStocked
    } else {
      return PRODUCTS
    }
  }

  return (
    <Flex direction="column">
      <Center>
        <Heading as="h3" size="lg" mt="10px" mb="50px">
          Thinking in React
        </Heading>
      </Center>
      <SearchBar onChecked={handleChecked} onSearchText={handleSearchText} />
      <ProductTable products={getProducts()} />
    </Flex>
  )
}
