import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Background from '../../components/BackGround'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Title, List, Form, Input, SubmitButton, ContainerInput } from './style'
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
        <Form>
          <ContainerInput>
            <Input
              autoCorret={false}
              placeholder="Digite o nome do personagem">
            </Input>
          </ContainerInput>

          <SubmitButton>
            <Icon name="search" size={20} color="#000"></Icon>
          </SubmitButton>
        </Form>



        <List data={data}
          keyExtractor={item => String(item)}
          onPress={() => this._onPress(item)}

          renderItem={({ item }) =>
            <Appointment data={item} />}
        />


      </Container>
    </Background >


  )


}


