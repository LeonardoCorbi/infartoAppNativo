import styled from 'styled-components/native'
import Svg from '../../assets/logo.svg'

export const Container = styled.View`
  width: 100%;
  height: 100%;

  display: flex;

  background-color: #0E446E;
`

export const Logo = styled(Svg)`
  position: absolute;
  transform: scale(.8);
`