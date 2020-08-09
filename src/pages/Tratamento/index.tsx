import React, { useEffect, useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Logo from '../../components/Logo/index'
import TabIcons from '../../components/TabIcons/index'
import ArticleCard from '../../components/ArticleCards/index'

import api from '../../services/api'

import {
  Container,
  HeaderContainer,
  Title,
  List,
  Loading
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

const Tratamento = () => {
  const navigation = useNavigation()
 
  const [articles, setArticles] = useState<ArticleProps[]>([])
  
  useEffect(()=>{
    api.get('tratamento').then(response => setArticles(response.data))
  }, [])
  
  function handleGoToArticlePage(artID: number, cat: string, autID: number) {
    navigation.navigate('ArticleComponent', {
      artID, 
      cat, 
      autID
    })
  }

  return (
    <>
      <Logo />
      <ScrollView>
        <Container>
          <HeaderContainer>
            <Title>Tratamentos</Title> 
          </HeaderContainer>

          <List>

            {
              (articles.length > 0)
                ? undefined 
                : <Loading source={require('../../assets/loading.gif')} /> 
            }

            {
              articles.map(article => (
                  <TouchableOpacity 
                  activeOpacity={.5}
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
            }

          </List>
        </Container>  
      </ScrollView>
      <TabIcons tratamento />
    </>
  )
  
}

export default Tratamento