import React, { useEffect, useState } from 'react'
import { ActivityIndicatorBase, Text, View } from 'react-native/'
import { useSelector } from 'react-redux'
import Background from '../../components/BackGround'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Container, Title, Left, Avatar, Info, Name, List, FlatList } from './style'
import Appointment from '../../components/Appointment'
import api from '../../services/api'


const data = [1, 2, 3, 4, 5]
export default function Main() {



  return (
    <Background>
      <Container>
        <Title>
          Rick And Morty
        </Title>

        <List data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) =>
            <Appointment data={item} />}
        />


      </Container>
    </Background >


  )


}


