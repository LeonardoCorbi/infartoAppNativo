import React, { useEffect, useState } from 'react'
import { ScrollView, View  } from 'react-native'
import StatusViewer from '../StatusViewer'
import { useNavigation, useRoute } from '@react-navigation/native'

import api from '../../services/api'

import { 
  ArticleImage, 
  HeaderContainer, 
  BackButton,
  ContentContainer, 
  TitleArticle, 
  ShareButtonContainer,
  ShareButton,
  Article,
  AuthorContainer,
  AuthorTitle,
  AuthorImage,
  AuthorName,
  AuthorVocation,
  AuthorData
} from './styles'

interface CardProps {
  cat: string
  articleId: number
  ator: number
}

interface ArticleProps {
  id: number
  title: string
  image: string
  content: string
  summary: string
  category: string
  authorId: number
}

interface AuthorProps {
  id: number
  name: string
  role: string
  image: string
}

const ArticleComponent = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const routeParams = route.params as CardProps

  const [article, setArticle] = useState<ArticleProps[]>([])
  const [author, setAuthor] = useState<AuthorProps[]>([])

  useEffect(() => {
    api.get(`${routeParams.cat}/${routeParams.articleId}`)
    // api.get(`infarto/2`)
      .then(response => setArticle(response.data))
  }, [])

  useEffect(() => {
    api.get(`authorAdmLeoLeo/${routeParams.ator}`)
      .then(response => setAuthor(response.data))
  }, [])

  return (
    <>
      <StatusViewer />
      <ScrollView>

        {article.map(item => (
          <View key={item.id}>
            <HeaderContainer>
            
              <BackButton 
              onPress={() => navigation.goBack()} 
              width="32" height="32"/>
              <ArticleImage source={{uri: item.image}} />

            </HeaderContainer>
            <ContentContainer>

              <ShareButtonContainer>
                <ShareButton onPress={() => {console.log('Shared')}} width="62" height="62"/>
              </ShareButtonContainer>

              <TitleArticle>
                {item.title}
              </TitleArticle>

              <Article>
                {item.content}
              </Article>

              <AuthorTitle>Artigo escrito por:</AuthorTitle>

              {author.map(autor => (
                <View key={autor.id}>
                  <AuthorContainer>
                    <AuthorImage source={{uri: autor.image}}/>

                    <AuthorData>

                      <AuthorName>{autor.name}</AuthorName>
                      <AuthorVocation>{autor.role}</AuthorVocation>

                    </AuthorData>  
                  </AuthorContainer>
                </View>
                ))
                
              }
              

            </ContentContainer> 
          </View>
        ))
        
        }
      </ScrollView>
    </>
  )
}

export default ArticleComponent