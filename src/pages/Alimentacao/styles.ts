import styled, { css } from 'styled-components/native'
import { Button, Image, TextInput, TouchableOpacity } from 'react-native'


export const Container = styled.View`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;

`

const defalt = css`
  margin: 20px 0; 
`

export const Input = styled(TextInput)`
  ${defalt}
  background-color: #DDD;
`

export const Botao = styled(Button)`
  ${defalt}

  display: flex;

  justify-content: center;
  align-items: center;

  background-color: transparent;
`

export const BotaoOpacity = styled(TouchableOpacity)`
  ${defalt}

  display: flex;

  justify-content: center;
  align-items: center;

  background-color: #AAA;
`

export const Texto = styled.Text`
  ${defalt}

  text-align: center;
`

export const Imagem = styled(Image)`
  ${defalt}

  margin-left: auto;
  margin-right: auto;
`