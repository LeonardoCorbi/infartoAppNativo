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

export const List = styled.View`
  width: 100%;
  height: auto;

  background-color: #FFF;

  border-top-left-radius: 80;

  margin-top: 24px;

  padding-top: 32;
`

export const ArticleContainer = styled.View`
  display: flex;
  flex-direction: row;

  width: 88%;
  height: 144px;

  background-color: #FFF;

  margin-bottom: 32;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;

  border-radius: 20;

  shadowColor: #1476A04A;
  shadowRadius: 20;
  shadowOffset: 6px 7px;
  shadowOpacity: 1;
  elevation: 20;
`

export const ArticleImage = styled.Image`
  height: 100%;
  width: 128px;

  border-radius: 20;

  overflow: hidden;

  resize-mode: cover;
  height: 100%;
`

export const ContentContainer = styled.View`
  height: 100%;
  width: 57%;

  margin-left: 16;

  flex-direction: column;
  align-content: space-between; 
`

export const ArticleTitle = styled.Text`
  width: 100%;
  height: 33%;
  min-height: 48;
  margin-top: 1%;

  font-family: NoirPro_Medium;
  color: #0E446E;
  font-size: ${Platform.select({ios: 20, android: 16})};
  line-height: 23;

  align-content: center;
  display: flex;
`

export const ArticleSummary = styled.Text`
  width: 100%;
  height: 66%;

  font-family: NoirPro_Light;
  color: #353941;
  font-size: ${Platform.select({ios: 20, android: 16})};
  line-height: ${Platform.select({ios: 20, android: 22})};

  display: flex;
`