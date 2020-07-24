import styled from 'styled-components/native'
import { Platform } from 'react-native'

export const Container = styled.View`
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