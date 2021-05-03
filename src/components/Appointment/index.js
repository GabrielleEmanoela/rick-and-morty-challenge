import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, Left, Avatar, Name, Info, } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar source={{ uri: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg' }} />
        <Info>
          <TouchableOpacity onPress={() => { }}>
            <Name>
              Gabrielle
      </Name>
          </TouchableOpacity>

        </Info>
      </Left>

      {/* <Icon name="event-busy" size={20} color="#000" /> */}

    </Container>

  )
}

