import styled from 'styled-components/native';

import backBtn from '../../assets/images/arrow-left-circle.svg'

interface LineWidthProp {
  length: number
}

function lineLength(nmb: number) {
  return nmb +
  Math.random() * 9 + 
  Math.random() * 13 + 
  Math.random() * 1 + 
  Math.random() * 2 + 
  Math.random() * 1 + 
  Math.random() * 2 + 
  Math.random() * 3 + 
  Math.random() * 2 + 
  Math.random() * 2 + 
  Math.random() * 1 + 
  Math.random() * 1 + 
  Math.random() * 20
}

export const HeaderContainer = styled.View`
  position: relative;
  height: 264px;
`

export const BackButton = styled(backBtn)`
  position: absolute;

  top: 28px;
  left: 24px;

  width: 32;
  height: 32;

  z-index: 20;
`

export const ArticleImage = styled.View`
  position: absolute;

  width: 100%;
  height: 264px;

  background-color: lightgray;

  z-index: 10;
`

export const ContentContainer = styled.View`
  width: 100%;
  height: auto;
  
  position: relative;
  top: -69px;

  border-top-left-radius: 80px;

  background-color: #FFF;

  z-index: 40;

  padding: 0 32px;
  padding-top: 40px;
`

export const TitleArticle = styled.View`
  background-color: lightgray;
  height: 30px;
  margin-bottom: 8px;
`

export const ArticleLine = styled.View`
  width: ${(props: LineWidthProp) =>  lineLength(props.length) + `%`};
  max-width: 100%;

  background-color: lightgray;
  height: 11px;
  margin-top: 8px;
`

export const AuthorTitle = styled.View`
  margin-top: 25px;
  width: 150px;
  height: 11px;

  background-color: lightgray;

`

export const AuthorContainer = styled.View`
  margin-top: 10px;

  display: flex;
  align-items: center;

  flex-direction: row;

`

export const AuthorImage = styled.View`
  width: 54px;
  height: 54px;

  background-color: lightgray;

  border-radius: 50;
`

export const AuthorData = styled.View`
  display: flex;
  justify-content: center;


  height: 54px;

`

export const AuthorName = styled.Text`
  width: 130px;
  height: 11px;

  background-color: lightgray;

  margin-left: 11px;
`

export const AuthorVocation = styled.Text`
  width: 150px;
  height: 11px;

  background-color: lightgray;

  margin-top: 10px;
  margin-left: 11px;
`