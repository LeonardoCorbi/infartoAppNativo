import React from 'react'
import { Text } from 'react-native'

import {
  Container,
  ArticleImage,
  ContentContainer,
  ArticleTitle,
  ArticleSummary
} from './styles'

interface ArticleData {
  imagem: string
  title: string
  summary: string
}
const ArticleCard: React.FC<ArticleData> = ({
  imagem,
  title,
  summary
}) => {
 
  return (
    <Container>

      <ArticleImage source={{uri: imagem}}/>   

      <ContentContainer>

        <Text>
          <ArticleTitle>
            {title}
          </ArticleTitle>
        </Text>

        <Text>  
          <ArticleSummary>
            {summary}
          </ArticleSummary>
        </Text>  

      </ContentContainer>
      
    </Container>
  )
}

export default ArticleCard