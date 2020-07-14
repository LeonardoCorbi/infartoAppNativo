import React from 'react'
import { Text, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Logo from '../../components/Logo/index'
import TabIcons from '../../components/TabIcons/index'

import {
  Container,
  HeaderContainer,
  Title,
  Main,
  ImcInfo,
  ImcForm,
  PesoContainer,
  PesoText,
  PesoInput,
  AlturaContainer,
  AlturaText,
  AlturaInput,
} from './styles'

const colors = {
  primary: '#0E446E',
  textContent: '#353941',
  shadow: '#1476A04A',
  red: '#EA3D65'
}

const Infarto = () => {
  const navigation = useNavigation()

  return (
    <>
      <Logo />
      <ScrollView>
        <Container>
          <HeaderContainer>
            <Title>Calcule seu IMC</Title> 
          </HeaderContainer>
          <Main>
            <ImcInfo>
              IMC é o Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
            </ImcInfo>

            <ImcForm>
              <PesoContainer>
                <PesoText>

                </PesoText>
                <PesoInput />
              </PesoContainer>
              <AlturaContainer>
                <AlturaText>

                </AlturaText>
                <AlturaInput />
              </AlturaContainer>
            </ImcForm>
          </Main>
        </Container>  
      </ScrollView>
      <TabIcons imc />
    </>    
  )
}

export default Infarto