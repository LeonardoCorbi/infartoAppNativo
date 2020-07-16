import React, { useState } from 'react'
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
  TipoText,
  PesoInput,
  AlturaContainer,
  AlturaInput,
  RightSide,
  BtnCalcular,
  BtnText,
} from './styles'

const colors = {
  primary: '#0E446E',
  textContent: '#353941',
  shadow: '#1476A04A',
  red: '#EA3D65'
}

const Infarto = () => {
  const navigation = useNavigation()

  const [resultado, setResultado] = useState(false)

  function handleTouchCalcular() {
    setResultado(true)
  }

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

            {(!resultado) ? console.log('nao calc') : console.log('calc')}
            
            <ImcForm>

              <PesoContainer>

                <TipoText>
                  Peso:
                </TipoText>

                <RightSide>
                  <PesoInput />
                  <TipoText>
                    Kg
                  </TipoText>
                </RightSide>   

              </PesoContainer>

              <AlturaContainer>
                <TipoText>
                  Altura:
                </TipoText>

                <RightSide>
                  <AlturaInput />
                  <TipoText>
                    cm
                  </TipoText>
                </RightSide>

              </AlturaContainer>

              <BtnCalcular onPress={handleTouchCalcular} activeOpacity={.5}>
                <BtnText>
                  Calcular
                </BtnText>
              </BtnCalcular>

            </ImcForm>
          </Main>
        </Container>  
      </ScrollView>
      <TabIcons imc />
    </>    
  )
}

export default Infarto