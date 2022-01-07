import { Center, Flex, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { categorizedProducts } from '../../utils/dataTransform'
import { Product, Products } from '../../utils/types'
import { ProductCategoryRow } from './ProductCategoryRow'
import { ProductRow } from './ProductRow'

interface ProductTableProps {
  products: Products
}

export const ProductTable = ({ products }: ProductTableProps) => {
  const categoryProducts = Object.entries<Products>(
    categorizedProducts(products),
  )
  console.log(categoryProducts)
  return (
    <Center>
      <Flex>
        <Table variant="unstyled" size="sm">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {categoryProducts.map((cp, index) => (
              <React.Fragment key={index}>
                <ProductCategoryRow category={cp[0] as Product['category']} />
                <>
                  {cp[1].map(p => (
                    <ProductRow key={p.name} product={p} />
                  ))}
                </>
              </React.Fragment>
            ))}
          </Tbody>
        </Table>
      </Flex>
    </Center>
  )
}
