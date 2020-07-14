import styled from 'styled-components/native';
import { Platform } from 'react-native'

export const Container = styled.View`
  flex: 1;

  background-color: #0E446E;
`

export const HeaderContainer = styled.View`
  margin-top: 88px;
  margin-left: 32px;
`

export const Title = styled.Text`
  color: #FFF;
  font-family: NoirPro_Medium;
  font-size: ${Platform.select({ ios: '32', android: '24'})};
  line-height: 34;
`

export const Main = styled.View`
  width: 100%;
  height: auto;

  background-color: #FFF;

  border-top-left-radius: 80;

  margin-top: 24px;

  padding: 0 24px;
`

export const ImcInfo = styled.Text`
  margin-top: 25px;

  text-align: right;
  font-family: NoirPro_Light;
  font-size: ${Platform.select({ ios: '19', android: '16'})};
  color: #353941;
`

export const ImcForm = styled.View`
  margin-top: 48;
`

export const PesoContainer = styled.View`

`
export const PesoText = styled.View`

`
export const PesoInput = styled.View`

`
export const AlturaContainer = styled.View`

`
export const AlturaText = styled.View`

`
export const AlturaInput = styled.View`

`