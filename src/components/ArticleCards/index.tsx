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
  articleId: Number
  imagem: String
  title: String
  summary: String
}
const ArticleCard: React.FC<ArticleData> = ({
  articleId,
  imagem,
  title,
  summary
}) => {
 
  return (
    <Container key={articleId}>

      <ArticleImage source={require(imagem)}/>   

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