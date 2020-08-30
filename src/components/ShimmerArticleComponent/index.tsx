import React from 'react'
import { View  } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { 
  ArticleImage, 
  HeaderContainer, 
  BackButton,
  ContentContainer, 
  TitleArticle, 
  ArticleLine,
  AuthorContainer,
  AuthorTitle,
  AuthorImage,
  AuthorName,
  AuthorVocation,
  AuthorData
} from './styles'

const ShimmerArticleComponent = () => {
  const navigation = useNavigation()

  return (
    <View>
      <HeaderContainer>
      
        <BackButton 
        onPress={() => navigation.goBack()} 
        width="40" height="40"/>
        
        <ArticleImage />

      </HeaderContainer>

      <ContentContainer>

        <TitleArticle />

        <ArticleLine length={70}/>
        <ArticleLine length={70}/>
        <ArticleLine length={70}/>
        <ArticleLine length={70}/>
        <ArticleLine length={70}/>
        <ArticleLine length={70}/>
        <ArticleLine length={70}/>
        <ArticleLine length={70}/>
        <ArticleLine length={70}/>
        <ArticleLine length={70}/>
        <ArticleLine length={70}/>
        <ArticleLine length={70}/>
        <ArticleLine length={70}/>
        <ArticleLine length={70}/>
        <ArticleLine length={70}/>
        <ArticleLine length={70}/>
        <ArticleLine length={70}/>
        <ArticleLine length={70}/>

        <AuthorTitle />

        <View>

          <AuthorContainer>

            <AuthorImage />

            <AuthorData>

              <AuthorName />

              <AuthorVocation />

            </AuthorData> 

          </AuthorContainer>

        </View>

      </ContentContainer> 
    </View>
  )
}

export default ShimmerArticleComponent