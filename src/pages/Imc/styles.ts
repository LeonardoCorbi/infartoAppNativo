import styled from 'styled-components/native';
import { Platform, TextInput, TouchableOpacity } from 'react-native'
import Calculator from '../../assets/images/calculator.svg'

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
  height: 800px;

  background-color: #FFF;

  border-top-left-radius: 80;

  margin-top: 24px;

  padding: 0 24px;
`



// ---------------FORM--------------------




export const ImcInfo = styled.Text`
  width: 95%;

  margin-left: 5%;
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
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-content: center;

  margin-bottom: 32;
`
export const AlturaContainer = styled.View`
display: flex;

flex-direction: row;
justify-content: space-between;
align-content: center;
`

export const TipoText = styled.Text`
  font-family: NoirPro_Medium;
  color: #0E446E;
  font-size: 24;
`

export const PesoInput = styled(TextInput)`
background-color: #DBE8FC;

width: 81%;
height: 40px;

border-radius: 12;

padding: 0 8px;
`

export const AlturaInput = styled(TextInput)`
  background-color: #DBE8FC;

  width: 81%;
  height: 40px;

  border-radius: 12;

  padding: 0 8px;
`

export const RightSide = styled.View`
  width: 66%;
  
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`


// --------------------RESULT--------------------------



export const CalcImg = styled(Calculator)`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
`

export const TextTitle = styled.Text`
  text-align: center;
  font-size: 24;
  font-family: NoirPro_Medium;
  color: #0E446E;

  margin-top: 8;
`

export const ImcResult = styled.Text`
  text-align: center;
  font-size: 32;
  font-family: NoirPro_Medium;
  color: #0E446E;

  margin-top: 5;

`

export const ImcTextResult = styled.Text`
  text-align: center;
  font-size: 24;
  font-family: NoirPro_Medium;
  color: #0E446E;

  margin-top: 14;

`

export const Hints = styled.Text`
  text-align: center;
  font-size: 16;
  font-family: NoirPro_Light;
  color: #353941;
  line-height: 22;

  margin-top: 14;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
`




// ----------------BUTTON--------------------




export const Btn = styled(TouchableOpacity)`
  width: 80%;
  height: 40px;

  background-color: #0E446E;

  border-radius: 15;

  margin-top: 88;
  margin-left: auto;
  margin-right: auto;
`
export const TextBtnView = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
`

export const BtnText = styled.Text`
  color: #FFF;
  font-family: NoirPro_Medium;
  font-size: ${Platform.select({ ios: '30', android: '24'})};
  text-align: center;
  ${Platform.select({ ios: 'line-height: 50;'})}
`