import React, { useEffect, useRef } from 'react'
import { ScrollView, Text, AccessibilityInfo } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Logo from '../../components/Logo/index'
import TabIcons from '../../components/TabIcons/index'

import {
  Container,
  Input,
  Botao,
  Texto,
  Imagem,
  BotaoOpacity,
} from './styles'


const Alimentacao = () => {
  const navigation = useNavigation()
  
  return (
    <>
      {/* <Logo /> */}
      <ScrollView>
        <Container>
            
          <Texto
          accessible={true}
          >
            Isso é um teste de texto
          </Texto>

          <Input             
          accessible={true}
          accessibilityLabel="Digite seu peso." 
          />
          
          <Input             
          accessible={true}
          accessibilityLabel="Digite sua altura." 
          />

          <Botao
          accessible={true}
          accessibilityLabel="Botão para Calcular í emi cê"  
          title="Calcular"
          onPress={() => {alert('clicked')}} 
          />
          
          <BotaoOpacity
          accessible={true}
          accessibilityLabel="Botão para Calcular í emi cê"  
          title="Calcular"
          onPress={() => {alert('clicked')}}
          >
            <Text>
             Olá
            </Text>
          </BotaoOpacity>

          <Imagem 
          accessible={true}
          accessibilityRole="image"
          source={require('../../assets/images/userImage.png')}
          alt="Foto de médica com aparelho para ouvir coração"
          />

        </Container>
      </ScrollView>
      <TabIcons alimentacao />
    </>
  )
}


export default Alimentacao