import { Th, Tr } from '@chakra-ui/react'
import React from 'react'
import { Product } from '../utils/types'

interface ProductCategoryRowProps {
  category: Product['category']
}

export const ProductCategoryRow = ({ category }: ProductCategoryRowProps) => {
  return (
    <Tr>
      <Th color="green" textAlign="center">
        {category}
      </Th>
    </Tr>
  )
}
