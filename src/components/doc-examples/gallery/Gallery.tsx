import { Flex } from '@chakra-ui/react'
import React from 'react'
import { People } from '../../../utils/types'
import { PersonView } from './Person'

interface GalleryProps {
  people: People
}
export const Gallery = ({ people }: GalleryProps) => {
  return (
    <Flex>
      <h1>Amazing scientists</h1>
      {people.map(person => (
        <PersonView key={person.id} person={person} />
      ))}
    </Flex>
  )
}
