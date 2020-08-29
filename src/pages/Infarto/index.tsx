import React, { useEffect, useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Logo from '../../components/Logo/index'
import TabIcons from '../../components/TabIcons/index'
import ArticleCard from '../../components/ArticleCards/index'
import SplashScreen from '../../components/SplashScreen'
import ShimmerArticleCards from '../../components/ShimmerArticleCards'

import api from '../../services/api'

import {
  Container,
  HeaderContainer,
  Title,
  List,
} from './styles'

interface ArticleProps {
  id: number
  title: string
  image: string
  content: string
  summary: string
  category: string
  authorId: number
}

const Infarto = () => {
  const navigation = useNavigation()
 
  const [articles, setArticles] = useState<ArticleProps[]>([])
  
  useEffect(()=>{
    // api.get('infarto').then(response => setArticles(response.data))
  }, [])
  
  function handleGoToArticlePage(artID: number, cat: string, autID: number) {
    navigation.navigate('ArticleComponent', {
      artID, 
      cat, 
      autID
    })
  }

  // if(!(articles.length > 0)) {
  //   return <SplashScreen />
  // }


  return (
    <>
      <Logo />
      <ScrollView>
        <Container>
          <HeaderContainer>
            <Title>O que é o infarto</Title> 
          </HeaderContainer>

          <List>

            {

              (!(articles.length > 0)) ? (
                <>
                  <ShimmerArticleCards />
                  <ShimmerArticleCards />
                  <ShimmerArticleCards />
                  <ShimmerArticleCards />
                  <ShimmerArticleCards />
                </>  
              ) : (

                articles.map(article => (
                    <TouchableOpacity 
                    activeOpacity={.9}
                    onPress={() => handleGoToArticlePage(article.id, article.category, article.authorId)}
                    accessible
                    accessibilityLabel={`Artigo: ${article.title}. ${article.summary}`}
                    key={article.id}
                    >
                      <ArticleCard
                      imagem={article.image}   
                      title={article.title}
                      summary={article.summary}
                      />
                    </TouchableOpacity>
                ))  
              )

            }


            {/* <TouchableOpacity activeOpacity={.5} 
            onPress={() => navigation.navigate('art001_Infarto')}>
              <ArticleContainer>
                <ArticleImage source={require('../../assets/images/artigo1.jpg')} />   
                <ContentContainer>
                  <Text>
                    <ArticleTitle>
                      A principal causa do infarto
                    </ArticleTitle>
                  </Text>

                  <Text>  
                    <ArticleSummary>
                      Saiba os principais motivos da ocorrência do infarto
                    </ArticleSummary>
                  </Text>    
                </ContentContainer>
              </ArticleContainer>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.5} 
            onPress={() => navigation.navigate('art001_Infarto')}>
              <ArticleContainer>
                <ArticleImage source={require('../../assets/images/artigo1.jpg')} />   
                <ContentContainer>
                  <Text>
                    <ArticleTitle>
                      A principal causa do infarto
                    </ArticleTitle>
                  </Text>

                  <Text>  
                    <ArticleSummary>
                      Saiba os principais motivos da ocorrência do infarto
                    </ArticleSummary>
                  </Text>    
                </ContentContainer>
              </ArticleContainer>
            </TouchableOpacity> */}

          </List>
        </Container>  
      </ScrollView>
      <TabIcons infarto />
    </>    
  )
}

export default Infarto