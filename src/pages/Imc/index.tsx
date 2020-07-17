import React, { useState } from 'react'
import { Text, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Logo from '../../components/Logo/index'
import TabIcons from '../../components/TabIcons/index'
// import ImcForm from '../../components/ImcForm/index'

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
  Btn,
  BtnText,
} from './styles'

const colors = {
  primary: '#0E446E',
  textContent: '#353941',
  shadow: '#1476A04A',
  red: '#EA3D65'
}

const Imc: React.FC = () => {
  const navigation = useNavigation()

  const [resultado, setResultado] = useState(false)

  const [peso, setPeso] = useState<number>(0) 
  const [altura, setAltura] = useState<number>(0)
  const [imc, setImc] = useState<number>(0)

  function handleTouchButton() {
    setResultado(!resultado)
    if(!resultado) {
      setImc((peso / (altura * altura) * 10000).toFixed(2))
    }
  }

  function handleInputPeso(event: Object) {
    setPeso(event.nativeEvent.text)
    console.log(peso)
  }
  
  function handleInputAltura(event: Object) {
    setAltura(event.nativeEvent.text)
    console.log(altura)
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
          
          {(!resultado) ? (
            <>
              <ImcInfo>
                IMC é o Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
              </ImcInfo>
              <ImcForm>

                <PesoContainer>

                  <TipoText>
                    Peso:
                  </TipoText>
                  <RightSide>
                    <PesoInput onChange={handleInputPeso}/>
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

                    <AlturaInput onChange={handleInputAltura}/>
                    <TipoText>
                      cm
                    </TipoText>

                  </RightSide>

                </AlturaContainer>

              </ImcForm>
            </>
          ) : (
            <>
              <Text> Seu imc é de {imc}</Text>
            </>
          )}
          
            <Btn 
            onPress={handleTouchButton} 
            activeOpacity={.5}>

              <BtnText>
                {(!resultado) ? 'Calcular' : 'Calcular Novamente'}
              </BtnText>

            </Btn>
            
          </Main>
        </Container>  
      </ScrollView>
      <TabIcons imc />
    </>    
  )
}

export default Imc