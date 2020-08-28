import React, { useState, useEffect, useRef } from 'react'
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

  const alturaRef = useRef(AlturaInput)

  return (
    <>
      <Logo />
      <ScrollView>
        <Container>
          <HeaderContainer>
            <Title
            accessible
            >
              Calcule seu IMC
            </Title> 
          </HeaderContainer>
          <Main>
          
          {(!resultado) ? (
            <>
              <ImcInfo
              accessible
              >
                IMC é o Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
              </ImcInfo>
              <ImcForm>

                <PesoContainer>

                  <TipoText 
                  accessible={false}
                  importantForAccessibility="no"
                  >
                    Peso:
                  </TipoText>
                  <RightSide >
                    <PesoInput 
                    returnKeyType="next"
                    accessible
                    accessibilityLabel="Informe seu peso."
                    onChangeText={handleInputPeso}
                    keyboardType="numeric"
                    maxLength={5}
                    onBlur={() => {setMenu(true)}}
                    onFocus={() => {setMenu(false)}}
                    onSubmitEditing={() => alturaRef.current.focus()}
                    />
                    <TipoText
                    accessible={false}
                    importantForAccessibility="no"
                    >
                      kg
                    </TipoText>
                  </RightSide>   

                </PesoContainer>
                <AlturaContainer >

                  <TipoText
                  accessible={false}
                  importantForAccessibility="no"
                  >
                    Altura:
                  </TipoText>
                  <RightSide>

                    <AlturaInput 
                    ref={alturaRef}
                    accessible
                    accessibilityLabel="Informe sua altura."
                    onChangeText={handleInputAltura}
                    keyboardType="numeric"
                    maxLength={3}
                    onBlur={() => {setMenu(true)}}
                    onFocus={() => {setMenu(false)}}
                    onSubmitEditing={(filled) ? handleTouchButton : undefined } 

                    />
                    <TipoText                  
                    accessible={false}
                    importantForAccessibility="no"
                    >
                      cm
                    </TipoText>

                  </RightSide>

                </AlturaContainer>

              </ImcForm>
            </>
          ) : (
            <>
              <CalcImg />
              <TextTitle
              accessible={true}
              accessibilityLabel={`Seu i emi cê é ${imc}`}
              >
                Seu IMC é
              </TextTitle>
              <ImcResult
              accessible={false}
              importantForAccessibility="no"
              >
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