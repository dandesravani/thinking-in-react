import {
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
} from '@chakra-ui/react'
import React from 'react'
import { Sculpture } from '../../../utils/types'

interface CarouselProps {
  sculpture: Sculpture
  showDetails: boolean
  onNextClick(): void
  onShowDetails(): void
}

export const CarouselView = ({
  sculpture,
  showDetails,
  onNextClick,
  onShowDetails,
}: CarouselProps) => {
  return (
    <Center>
      <Flex direction="column" w="300px" mt="30px">
        <Button onClick={onNextClick}>Next</Button>
        <Heading as="h3" size="md" mt="10px" mb="10px">
          {sculpture.name}
        </Heading>
        <Flex direction="column">
          <Button mb="10px" onClick={onShowDetails}>
            {showDetails ? 'Hide details' : 'Show details'}
          </Button>
          {showDetails ? (
            <Container>
              <p>{sculpture.description}</p>
              <Image src={sculpture.url} alt={sculpture.alt} />
            </Container>
          ) : (
            <Image src={sculpture.url} alt={sculpture.alt} />
          )}
        </Flex>
      </Flex>
    </Center>
  )
}
