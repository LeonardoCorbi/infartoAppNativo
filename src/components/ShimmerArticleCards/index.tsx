import React from 'react';
import { Text } from 'react-native';

import {
  Container,
  ArticleImage,
  ContentContainer,
  ArticleTitle,
  ArticleSummary
} from './styles'

interface SummaryLength {
  variant: number
}

const ShimmerArticleCards: React.FC<SummaryLength> = ({ variant }) => {
  return (
    <Container>

      <ArticleImage/>   

      <ContentContainer>

        <ArticleTitle />

        <ArticleSummary length={Math.random() * 900} />
        <ArticleSummary length={Math.random()} />
        <ArticleSummary length={Math.random()} />
        <ArticleSummary length={Math.random()} />

      </ContentContainer>
      
    </Container>
  );
};

export default ShimmerArticleCards;
