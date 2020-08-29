import React from 'react';

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

  function lineLength(nmb: number) {
    return nmb +
    Math.random() * 9 + 
    Math.random() * 13 + 
    Math.random() * 20
  }

  return (
    <Container>

      <ArticleImage/>   

      <ContentContainer>

        <ArticleTitle />

        <ArticleSummary length={lineLength(variant)} />
        <ArticleSummary length={lineLength(variant)} />
        <ArticleSummary length={lineLength(variant)} />
        <ArticleSummary length={lineLength(variant)} />
        

      </ContentContainer>
      
    </Container>
  );
};

export default ShimmerArticleCards;
