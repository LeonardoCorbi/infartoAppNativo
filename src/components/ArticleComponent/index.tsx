import React, { useEffect, useState } from 'react'
import { ScrollView, View  } from 'react-native'
import StatusViewer from '../StatusViewer'
import { useNavigation, useRoute } from '@react-navigation/native'
import ShimmerArticleComponent from '../ShimmerArticleComponent'

import api from '../../services/api'

import { 
  ArticleImage, 
  HeaderContainer, 
  BackButton,
  ContentContainer, 
  TitleArticle, 
  Article,
  AuthorContainer,
  AuthorTitle,
  AuthorImage,
  AuthorName,
  AuthorVocation,
  AuthorData
} from './styles'

interface CardProps {
  artID: number
  cat: string
  autID: number
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
    api.get(`${routeParams.cat}/${routeParams.artID}`)
      .then(response => setArticle(response.data))
  }, [routeParams])

  useEffect(() => {
    api.get(`authorAdmLeoLeo/${routeParams.autID}`)
      .then(response => setAuthor(response.data))
  }, [routeParams])

  return (
    <>
      <StatusViewer />

      {

        (!(article.length > 0)) ? (
          <>
            <ShimmerArticleComponent />
          </>
        ) : (

          <ScrollView>

            {article.map(item => (
              <View key={item.id}>
                <HeaderContainer>
                
                  <BackButton 
                  onPress={() => navigation.goBack()} 
                  width="40" height="40"/>
                  <ArticleImage source={{uri: item.image}} />

                </HeaderContainer>
                <ContentContainer>

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
        )

      }

    </>
  )
}

export default ArticleComponent