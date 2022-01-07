import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
// import { Accordian } from './components/doc-examples/accordion/Accordion'
import { Carousel } from './components/doc-examples/caurosel/Carousel'
// import { Gallery } from './components/doc-examples/gallery/Gallery'
import { sculptureList } from './utils/data'
// import { FilterableProductTable } from './components/thinking-in-react/FilterableProductTable'

export const App = () => {
  return (
    <ChakraProvider>
      {/* <FilterableProductTable /> */}
      {/* <Gallery people={people} /> */}
      <Carousel sculptures={sculptureList} />
      {/* <Accordian /> */}
    </ChakraProvider>
  )
}
