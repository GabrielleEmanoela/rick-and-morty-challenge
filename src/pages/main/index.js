import React from 'react'
import { Text, View } from 'react-native'
import Background from '../../components/BackGround'
import { Container, Title } from './style'

export default function Main() {

  return (
    <Background>
      <Container>
        <Title>
          Rick And Morty
        </Title>
      </Container>
    </Background>
  )

}


