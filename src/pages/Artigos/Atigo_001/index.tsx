import React from 'react'
import { ScrollView  } from 'react-native'
import StatusViewer from '../../../components/StatusViewer'
import { useNavigation } from '@react-navigation/native'

import { 
  BackButton, 
  ArticleImage, 
  HeaderContainer, 
  ContentContainer, 
  TitleArticle, 
  ShareButton,
  ShareButtonContainer,
  Article,
  AuthorContainer,
  AuthorTitle,
  AuthorImage,
  AuthorName,
  AuthorVocation,
  AuthorData
} from './styles'

import Img from '../../../assets/images/img_art_001_Infato.png'

const Artigo_001 = () => {
  const navigation = useNavigation()

  return (
    <>
      <StatusViewer />
      <ScrollView>
        <HeaderContainer>
          <BackButton 
          onPress={() => navigation.goBack()} 
          width="32" height="32"/>
          <ArticleImage source={Img} />
        </HeaderContainer>
        <ContentContainer>
          <ShareButtonContainer>
            <ShareButton onPress={() => {console.log('Shared')}} width="62" height="62"/>
          </ShareButtonContainer>
          <TitleArticle>
            Quando é indicado fazer uma cirurgia
          </TitleArticle>
          <Article>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea. Stet clita kasd gubergren, no sea. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.
          </Article>
          <AuthorTitle>Artigo escrito por:</AuthorTitle>
          <AuthorContainer>
            <AuthorImage source={require('../../../assets/images/userImage.png')}/>
            <AuthorData>
              <AuthorName>Ana Medeiros</AuthorName>
              <AuthorVocation>Estudante de Medicina</AuthorVocation>
            </AuthorData>  
          </AuthorContainer>
        </ContentContainer>
      </ScrollView>
    </>
  )
}

export default Artigo_001