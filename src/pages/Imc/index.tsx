import React, { useState, useEffect } from 'react'
import { ScrollView,  } from 'react-native'
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
  Btn,
  TextBtnView,
  BtnText,
  CalcImg,
  TextTitle,
  ImcResult,
  ImcTextResult,
  Hints,
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

  const [menu, setMenu] = useState(true)

  const [filled, setFilled] = useState(false)

  const [peso, setPeso] = useState<number>(0) 
  const [altura, setAltura] = useState<number>(0)
  const [imc, setImc] = useState<number>(0)

  function handleTouchButton() {
    setResultado(!resultado)
    if(!resultado) {
      setImc((peso / (altura * altura) * 10000).toFixed(2))
    }else {
      setAltura(0)
      setPeso(0)
    }
  }

  function handleInputPeso(event: number) {
    setPeso(event)
  }
  
  function handleInputAltura(event: number) {
    setAltura(event)
  }

  
  useEffect(() => {
    if(peso != 0 && altura != 0) {
      setFilled(true)
    }else {
      setFilled(false)
    }

  }, [peso, altura])

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
              <ImcInfo
                accessible={true}
                accessibilityLabel="Informações da página"
              >
                IMC é o Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
              </ImcInfo>
              <ImcForm>

                <PesoContainer>

                  <TipoText>
                    Peso:
                  </TipoText>
                  <RightSide>
                    <PesoInput 
                    onChangeText={handleInputPeso}
                    keyboardType="numeric"
                    maxLength={3}
                    onBlur={() => {setMenu(true)}}
                    onFocus={() => {setMenu(false)}}
                    />
                    <TipoText>
                      kg
                    </TipoText>
                  </RightSide>   

                </PesoContainer>
                <AlturaContainer>

                  <TipoText>
                    Altura:
                  </TipoText>
                  <RightSide>

                    <AlturaInput 
                    onChangeText={handleInputAltura}
                    keyboardType="numeric"
                    maxLength={3}
                    onBlur={() => {setMenu(true)}}
                    onFocus={() => {setMenu(false)}}
                    />
                    <TipoText>
                      cm
                    </TipoText>

                  </RightSide>

                </AlturaContainer>

              </ImcForm>
            </>
          ) : (
            <>
              <CalcImg />
              <TextTitle>
                Seu IMC é
              </TextTitle>
              <ImcResult>
                {imc}
              </ImcResult>
              <ImcTextResult imc={imc}>
                {(imc > 25) 
                ? 'Você está com sobrepeso!' 
                
                : (imc < 18.5) 
                ? 'Você está abaixo do peso!' 
                : 'Você está com peso normal!'}
              </ImcTextResult>
              <Hints imc={imc}>
                {( imc < 18.5 || imc > 25) 
                ? 'Alguns hábitos precisam ser mudados, confira nossas dicas de alimentação saudável e exercícios físicos.' 
                : 'Continue tendo hábitos saudáveis e aproveite para aprender mais sobre como prevenir o infarto no app.' }
              </Hints>
            </>
          )}
          
            <Btn
              onPress={(filled) ? handleTouchButton : undefined } 
              activeOpacity={.5}
              resultado={resultado}
              >
              
              <TextBtnView>

                <BtnText>
                  {(!resultado) ? 'Calcular' : 'Calcular Novamente'}
                </BtnText>
              
              </TextBtnView>

            </Btn>
            
          </Main>
        </Container>  
      </ScrollView>
      {menu ? <TabIcons imc /> : undefined }
    </>    
  )
}

export default Imc