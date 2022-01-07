import { Td, Tr } from '@chakra-ui/react'
import React from 'react'
import { Product } from '../../utils/types'

interface ProductRowProps {
  product: Product
}

export const ProductRow = ({ product }: ProductRowProps) => {
  return (
    <Tr>
      {!product.stocked ? (
        <Td color="red">{product.name}</Td>
      ) : (
        <Td>{product.name}</Td>
      )}
      <Td>{product.price}</Td>
    </Tr>
  )
}
