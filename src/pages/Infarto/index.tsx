import React from 'react'
import { Text, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Logo from '../../components/Logo/index'
import TabIcons from '../../components/TabIcons/index'

import {
  Container,
  HeaderContainer,
  Title,
  List,
  ArticleContainer,
  ArticleImage,
  ContentContainer,
  ArticleTitle,
  ArticleSummary
} from './styles'

const colors = {
  primary: '#0E446E',
  textContent: '#353941',
  shadow: '#1476A04A',
  red: '#EA3D65'
}

const Infarto = () => {
  const navigation = useNavigation()

  return (
    <>
      <Logo />
      <ScrollView>
        <Container>
          <HeaderContainer>
            <Title>O que é o infarto</Title> 
          </HeaderContainer>

          <List>

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
            </TouchableOpacity>

          </List>
        </Container>  
      </ScrollView>
      <TabIcons infarto />
    </>    
  )
}

export default Infarto