import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { Path, Svg, Circle, Ellipse } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native'
import {  } from 'react-native-gesture-handler'

import {RectButton} from './styles'


const colors = {
  primary: '#0E446E',
  textContent: '#353941',
  shadow: '#1476A04A',
  red: '#EA3D65'
}

export interface Props {
  infarto?: boolean
  alimentacao?: boolean
  imc?: boolean
  exercicio?: boolean
  tratamento?: boolean
}
const TabIcons: React.FC<Props> = ({
  infarto,
  alimentacao,
  imc,
  exercicio,
  tratamento
}) => {  
  const navigation = useNavigation()

  function handleTouchInfarto() {
    navigation.navigate('Infarto')
  }
  function handleTouchAlimentacao() {
    navigation.navigate('Alimentacao')
  }
  function handleTouchImc() {
    navigation.navigate('Imc')
  }
  function handleTouchExercicio() {
    navigation.navigate('Exercicio')
  }
  function handleTouchTratamento() {
    navigation.navigate('Tratamento')
  }

  
  return (

    <> 
      <View style={styles.tabContainer}>

          {/*----------------------BOTÃO INFARTO-------------------------*/}
          
        <RectButton
        accessible={true}
        accessibilityTraits="button"
        accessibilityComponentType="button"
        accessibilityLabel={
          Platform.select({ios: (
            (infarto) ? 'Aba Atual . Infarto' : "Ir para . Aba Infarto."
          ), android: (
            (infarto) 
            ? 'Você está na aba de Infarto. Aba atual . Aba infarto.'
            : (alimentacao)
            ? 'Você está na aba de Alimentação. Ir para . Aba infarto.'
            : (imc)
            ? 'Você está na aba de i emi cê. Ir para . Aba infarto.'
            : (exercicio)
            ? 'Você está na aba de Exercícios. Ir para . Aba infarto.'
            : (tratamento)
            ? 'Você está na aba de Tratamento. Ir para . Aba infarto.'
            : undefined
          )})
          
        }
        activeOpacity={1} rippleColor={'rgba(0,0,0,0)'} onPress={handleTouchInfarto}>
          <Svg width="41" height="34.14" style={styles.infarto}>
            <Path fill={infarto ? colors.red : colors.primary} d="M21.18,33.49a5.09,5.09,0,0,1-3-1.32l-1-.89c-2.47-2.21-9-8.09-11.79-11.51C1.47,14.88.84,8.64,3.89,4.58,6.57,1,11.12.65,13,.65a12.83,12.83,0,0,1,3.65.5A13.6,13.6,0,0,1,20.7,3.23l.46.37.41-.41A10.64,10.64,0,0,1,28.71.66c3.12,0,7.37.62,9.91,3.59,1.94,2.28,3,8.47-1,14.52-3,4.61-7.71,8.49-11.12,11.32-1,.8-1.85,1.53-2.59,2.19a5.54,5.54,0,0,1-2.52,1.2Z"/>
            <Path fill={infarto ? colors.red : '#FFF'} d="M11.64,2.5h0a10.93,10.93,0,0,1,3.11.42,12,12,0,0,1,3.47,1.75L20,6.12l1.6-1.61a8.74,8.74,0,0,1,5.84-2c2.73,0,6.42.51,8.5,3,1.36,1.59,2.42,6.84-1.17,12.29-2.89,4.39-7.25,8-10.76,10.92-.95.8-1.86,1.55-2.63,2.23a3.93,3.93,0,0,1-1.49.74,3.52,3.52,0,0,1-1.69-.83l-1-.9c-2.44-2.19-8.92-8-11.6-11.3-3.43-4.23-4-9.54-1.5-12.91,2.17-2.89,6-3.2,7.59-3.2m0-2.5C8.3,0,4.4,1.08,2.05,4.19c-3.25,4.32-2.57,10.9,1.56,16,3.3,4.07,11.73,11.43,12.84,12.46a5.73,5.73,0,0,0,3.41,1.5h.24A6.1,6.1,0,0,0,23,32.77c3.46-3.07,9.89-7.67,13.82-13.64,4.25-6.45,3.06-12.86,1-15.3C35.17.76,30.84,0,27.39,0a11.18,11.18,0,0,0-7.6,2.72,14,14,0,0,0-4.3-2.2A13.36,13.36,0,0,0,11.64,0Z"/>
            <Path fill={infarto ? colors.primary : '#FFF'} translateY="5" d="M40.05,11.63H30c-.33,0-.63,1.1-.73,1.42l-.75,2.3L26.87,3.14a.76.76,0,0,0-.73-.64.79.79,0,0,0-.8.57L23.13,12.9l-1.3-6.29a.79.79,0,0,0-1-.55.78.78,0,0,0-.54.52l-2.39,8.18L16.74.69A.77.77,0,0,0,16.06,0a.78.78,0,0,0-.83.49L10.67,11.94l-9.9-.22c-.41,0-.77.75-.77,1.16s.36,1.23.78,1.23H11.59a.75.75,0,0,0,.73-.5l3.25-8.79,1.24,15a.76.76,0,0,0,.7.68h.07a.76.76,0,0,0,.75-.55L21,9.81l1.36,6.54a.78.78,0,0,0,.76.58h0a.78.78,0,0,0,.75-.58l2-9.08,1.57,11.6a.76.76,0,0,0,.71.64A.77.77,0,0,0,29,19l1.6-5H40c.42,0,.75-1,.75-1.44s-.34-.95-.75-.95Z"/>
          </Svg>
        </RectButton>

          {/*----------------------BOTÃO ALIMENTAÇÃO-------------------------*/}

        <RectButton
        accessible={true}
        accessibilityTraits="button"
        accessibilityComponentType="button"
        accessibilityLabel={(alimentacao) ? 'Aba Atual . Alimentação' : "Ir para . Aba Alimentação."}
        activeOpacity={1} rippleColor={'rgba(0,0,0,0)'} onPress={handleTouchAlimentacao}>
          <Svg width="32" height="32">
            <Path fill={ alimentacao ? colors.red : colors.primary} d="M15.36,11s-3.62-2.2-4.69-2.26-6,.24-6.6,1.42S.92,16,1.28,17.44s.77,7.6,2.08,9.33,4.16,4.63,6,4.69,4.22-1.42,6-.95,6.47,1.43,8.32.48,7.66-7.07,6.89-13-.49-7.32-6.66-8.8L21.36,8.7l-3.57,1.61Z"/>
            <Path fill={ alimentacao ? colors.red : "#FFF"} d="M25.13,8c-2.93-.65-6,0-7.73,1.57a1.48,1.48,0,0,1-.29.22c.37-3.35,3.57-6,7.43-6a1,1,0,0,0,1.07-.94,1,1,0,0,0-1.07-1A10.08,10.08,0,0,0,16.9,5.27,7.33,7.33,0,0,0,9.6,0H5.33A1,1,0,0,0,4.26,1c0,3.67,3.35,6.65,7.47,6.65h3.75A7.72,7.72,0,0,0,15,9.82a1.52,1.52,0,0,1-.35-.26A8.53,8.53,0,0,0,7,7.85,8.28,8.28,0,0,0,.7,13.22a16.47,16.47,0,0,0-.38,8A17.66,17.66,0,0,0,3.93,29c1.88,2.23,4.12,3.46,6.3,3.46a5.69,5.69,0,0,0,2.5-.57,7.55,7.55,0,0,1,6.53,0,5.72,5.72,0,0,0,2.5.57c2.19,0,4.43-1.23,6.3-3.46a17.47,17.47,0,0,0,3.62-7.75,16.52,16.52,0,0,0-.3-7.75A8.07,8.07,0,0,0,25.13,8ZM11.73,5.7A5.21,5.21,0,0,1,6.5,1.9H9.6a5.24,5.24,0,0,1,5.23,3.8ZM29.58,20.88a15.61,15.61,0,0,1-3.22,6.93c-1.44,1.72-3.11,2.7-4.59,2.7a3.18,3.18,0,0,1-1.48-.34,10,10,0,0,0-8.57,0,3.31,3.31,0,0,1-1.48.34c-1.48,0-3.16-1-4.6-2.7a15.59,15.59,0,0,1-3.21-6.93,14.76,14.76,0,0,1,.32-7.14,6.15,6.15,0,0,1,4.8-4,6.29,6.29,0,0,1,5.5,1.16A4.31,4.31,0,0,0,16,12h0A4.34,4.34,0,0,0,19,10.87c1.16-1.1,3.49-1.52,5.66-1A6.05,6.05,0,0,1,29.32,14,14.9,14.9,0,0,1,29.58,20.88Z"/>
          </Svg>
        </RectButton>

          {/*----------------------BOTÃO IMC-------------------------*/}

        <RectButton 
        accessible={true}
        accessibilityTraits="button"
        accessibilityComponentType="button"
        accessibilityLabel={
          Platform.select({ios: (
            (infarto) 
            ? 'Você está na aba de Infarto. Ir para . Aba i emi cê.'
            : (alimentacao)
            ? 'Você está na aba de Alimentação. Ir para . Aba i emi cê.'
            : (imc)
            ? 'Você está na aba de i emi cê. Aba atual . Aba i emi cê.'
            : (exercicio)
            ? 'Você está na aba de Exercícios. Ir para . Aba i emi cê.'
            : (tratamento)
            ? 'Você está na aba de Tratamento. Ir para . Aba i emi cê.'
            : undefined
          ), android: (
            (imc) ? 'Aba Atual . i emi cê' : "Ir para . Aba i emi cê."
          )})
        }
        activeOpacity={1} rippleColor={'rgba(0,0,0,0)'} style={styles.imc} onPress={handleTouchImc}>
          <Svg width="65" height="65">
            <Circle fill={colors.primary} cx="32.5" cy="32.5" r="32.5"/>
            <Ellipse fill={imc ? "#FFF" : colors.primary} cx="32.5" cy="30.36" rx="23.88" ry="24"/>
            <Path fill="#FFF" d="M32.5,7.36a23,23,0,1,1-22.88,23,23,23,0,0,1,22.88-23m0-2a25,25,0,1,0,24.88,25,24.94,24.94,0,0,0-24.88-25Z"/>
            <Path fill={imc ? colors.red : "#FFF"} d="M19.83,36.41H17.52V24.31h2.31Z"/>
            <Path fill={imc ? colors.red : "#FFF"} d="M34.23,24.31,36,36.41H33.51l-1-7.9-3.16,7.9H28.18L25,28.49l-1,7.92H21.56l1.72-12.1h2.23l3.21,7.87,3.2-7.87Z"/>
            <Path fill={imc ? colors.red : "#FFF"} d="M43.59,34.39a4,4,0,0,0,3-1.24l.89,2.09a5.65,5.65,0,0,1-1.82,1.07A6.36,6.36,0,0,1,39,34.83a6.23,6.23,0,0,1,0-8.94A6.23,6.23,0,0,1,43.55,24a6.32,6.32,0,0,1,2.11.38,5.45,5.45,0,0,1,1.82,1.06l-.89,2.09a4.14,4.14,0,0,0-3-1.22,4.07,4.07,0,0,0-3,1.18,3.92,3.92,0,0,0,0,5.7A4.07,4.07,0,0,0,43.59,34.39Z"/>
          </Svg>
        </RectButton>

          {/*----------------------BOTÃO EXERCÍCIO-------------------------*/}

        <RectButton 
        accessible={true}
        accessibilityTraits="button"
        accessibilityComponentType="button"
        accessibilityLabel={(exercicio) ? 'Aba Atual . Exercício' : "Ir para . Aba Exercício."}
        activeOpacity={1} rippleColor={'rgba(0,0,0,0)'} onPress={handleTouchExercicio}>
          <Svg width="32" height="32">
            <Path fill={exercicio ? colors.red : colors.primary} d="M265.9,27.2a1.521,1.521,0,0,1,0,2.151l-2.236,2.236a1.521,1.521,0,0,1-2.151,0l-9.355-9.355a1.521,1.521,0,0,1,0-2.151l2.236-2.236a1.521,1.521,0,0,1,2.151,0Z" transform="translate(-235.464 -17.1)"/>
            <Path fill={exercicio ? colors.red : colors.primary} d="M31.584,261.516a1.521,1.521,0,0,1,0,2.151L29.348,265.9a1.521,1.521,0,0,1-2.151,0l-9.355-9.355a1.521,1.521,0,0,1,0-2.151l2.236-2.236a1.521,1.521,0,0,1,2.151,0Z" transform="translate(-16.308 -236.313)"/>
            <Path fill={exercicio ? colors.red : "#FFF"} d="M30.139,9.335l1.113-1.121a2.6,2.6,0,0,0,0-3.647L27.469.755a2.549,2.549,0,0,0-3.62,0L22.736,1.877,21.714.847a2.549,2.549,0,0,0-3.62,0L15.836,3.121a2.591,2.591,0,0,0,0,3.648l2.257,2.274L8.974,18.229,6.717,15.956a2.545,2.545,0,0,0-3.62,0L.839,18.23a2.6,2.6,0,0,0,0,3.648l1.022,1.03L.749,24.029a2.6,2.6,0,0,0,0,3.647l3.783,3.811a2.549,2.549,0,0,0,3.62,0l1.113-1.121,1.022,1.03a2.55,2.55,0,0,0,3.62,0l2.258-2.275a2.591,2.591,0,0,0,0-3.648L13.908,23.2l9.118-9.187,2.257,2.274a2.545,2.545,0,0,0,3.62,0l2.258-2.275a2.6,2.6,0,0,0,0-3.647ZM25.3,2.214a.51.51,0,0,1,.724,0L29.8,6.025a.519.519,0,0,1,0,.73L28.69,7.876,24.184,3.335ZM6.7,30.028a.51.51,0,0,1-.724,0L2.2,26.217a.519.519,0,0,1,0-.73L3.31,24.367l4.507,4.541Zm8.013-2.366-2.258,2.275a.51.51,0,0,1-.724,0L2.288,20.419a.519.519,0,0,1,0-.73c2.451-2.469,2.331-2.426,2.62-2.426.321,0-.373-.589,9.809,9.669a.519.519,0,0,1,0,.73ZM12.46,21.741l-2.038-2.053L19.54,10.5l2.038,2.053Zm17.253-9.188c-2.451,2.469-2.331,2.426-2.62,2.426s-.135.078-3.343-3.154c-6.967-7.019-6.616-6.574-6.616-6.88,0-.288-.051-.162,2.408-2.639a.508.508,0,0,1,.362-.151c.3,0-.532-.75,9.809,9.669a.519.519,0,0,1,0,.73Z" transform="translate(0 -0.001)"/>
          </Svg>
        </RectButton>

          {/*----------------------BOTÃO TRATAMENTO-------------------------*/}

        <RectButton 
        accessible={true}
        accessibilityTraits="button"
        accessibilityComponentType="button"
        accessibilityLabel={(tratamento) ? 'Aba Atual . Tratamento' : 'Ir para . Aba Tratamento.'}
        activeOpacity={1} rippleColor={'rgba(0,0,0,0)'} onPress={handleTouchTratamento}>
          <Svg width="32" height="32">
            <Path fill={tratamento ? colors.red : '#FFF'} d="M21.24,21.3l7.59-7.58A7.34,7.34,0,0,0,18.45,3.34l-7.59,7.58Z"/>
            <Path fill={tratamento ? colors.red : '#FFF'} d="M8.47,32.17a8.47,8.47,0,0,1-6-14.46l7.58-7.58a1.15,1.15,0,0,1,1.6,0L22,20.51a1.12,1.12,0,0,1,0,1.59h0l-7.58,7.58a8.42,8.42,0,0,1-6,2.48Zm2.39-19.65L4.08,19.31a6.21,6.21,0,0,0,8.71,8.85l.07-.07,6.79-6.79Z"/>
            <Path fill={tratamento ? colors.red : '#FFF'} d="M21.24,22.43a1.15,1.15,0,0,1-.8-.33L10.07,11.72a1.11,1.11,0,0,1,0-1.59h0l7.58-7.58A8.47,8.47,0,1,1,29.74,14.4l-.11.11L22,22.1a1.14,1.14,0,0,1-.8.33ZM12.46,10.92l8.78,8.79L28,12.92a6.21,6.21,0,1,0-8.71-8.85.46.46,0,0,0-.07.07Z"/>
          </Svg>
        </RectButton>
        
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: colors.primary,

    width: '100%',
    height: 60,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imc: {
    position: 'relative',
    top: -5,
    transform: [{scale: 1.1}],
  },
  infarto: {
    height: 90,
  }
})



export default TabIcons