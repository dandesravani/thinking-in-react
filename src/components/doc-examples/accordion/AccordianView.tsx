import { Heading, Container, Box, Center, Button, Text } from '@chakra-ui/react'
import React from 'react'

interface AccordianViewProps {
  showEty: boolean
  showAbout: boolean
  onAboutClick(): void
}

export const AccordionView = ({
  showAbout,
  showEty,
  onAboutClick,
}: AccordianViewProps) => {
  return (
    <>
      <Heading as="h3" size="md" mt="20px" mb="20px">
        <Center>Almaty, Kazakhstan</Center>
      </Heading>
      <Container w="2xl">
        <Box padding="4" bg="gray.100" maxW="3xl">
          <Heading as="h4" size="sm">
            About
          </Heading>
          {showAbout ? (
            <Text>
              a population of about 2 million, Almaty is Kazakhstan's largest
              city. From 1929 to 1997, it was its capital city.
            </Text>
          ) : (
            <Button colorScheme="blackAlpha" mt="10px" onClick={onAboutClick}>
              show
            </Button>
          )}
        </Box>
      </Container>
      <Container w="2xl" mt="40px">
        <Box padding="4" bg="gray.100" maxW="3xl">
          <Heading as="h4" size="sm">
            Etymology
          </Heading>
          {showEty ? (
            <Text>
              The name comes from алма, the Kazakh word for "apple" and is often
              translated as "full of apples". In fact, the region surrounding
              Almaty is thought to be the ancestral home of the apple, and the
              wild Malus sieversii is considered a likely candidate for the
              ancestor of the modern domestic apple.
            </Text>
          ) : (
            <Button colorScheme="blackAlpha" mt="10px" onClick={onAboutClick}>
              show
            </Button>
          )}
        </Box>
      </Container>
    </>
  )
}
