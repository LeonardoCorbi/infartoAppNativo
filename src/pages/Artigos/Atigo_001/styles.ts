import styled from 'styled-components/native';

import arrowLeft from '../../../assets/images/arrow-left-circle.svg'
import share from '../../../assets/share.svg'

import { Platform } from 'react-native'

export const HeaderContainer = styled.View`
  position: relative;
  height: 264px;
`

export const BackButton = styled(arrowLeft)`
  position: absolute;

  width: 32px;
  height: 32px;

  top: 28px;
  left: 24px;

  z-index: 20;
`;

export const ArticleImage = styled.Image`
  position: absolute;

  width: 100%;
  height: 264px;

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

  padding: 0 24px;
  padding-top: 40px;


`
export const ShareButtonContainer = styled.View`
  position: absolute;

  right: 54;
  top: 0;

  background-color: #0E446E;

  border-radius: 50;

  transform: translate(31px,-31px);

  elevation: 10;

  shadowOpacity: 1;
  shadowColor: #00000029;
  shadowOffset: 0 8px;
  shadowRadius: 6px;

  z-index: 11;
`

export const ShareButton = styled(share)`
 
`

export const TitleArticle = styled.Text`
  font-family: NoirPro_Medium;
  color: #0E446E;
  font-size: ${Platform.select({ios: 29, android: 24})};
  line-height: 34;
`

export const Article = styled.Text`
  font-family: NoirPro_Light;
  color: #606369;
  font-size: ${Platform.select({ios: 18, android: 15})};
  line-height: 21;

  margin-top: 8px;
`

export const AuthorTitle = styled.Text`
  margin-top: 18px;

  font-family: NoirPro_Medium;
  font-size: ${Platform.select({ios: 19, android: 16})};
  color: #0E446E;
  line-height: 23;
`

export const AuthorContainer = styled.View`
  margin-top: 10px;

  display: flex;

  flex-direction: row;
`

export const AuthorImage = styled.Image`
  width: 54px;
  height: 54px;

  border-radius: 50;
`

export const AuthorData = styled.View`
  justify-content: center;

  margin-top: 7px;

  height: 54px;
`

export const AuthorName = styled.Text`
  font-family: NoirPro_Light;
  color: #353941;
  font-size: ${Platform.select({ios: 19, android: 16})};

  margin-left: 11px;
`

export const AuthorVocation = styled.Text`
  font-family: NoirPro_Light;
  color: #353941;
  font-size: ${Platform.select({ios: 19, android: 16})};

  margin-left: 11px;
`