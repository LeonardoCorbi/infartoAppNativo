import React from 'react'
import { ScrollView  } from 'react-native'
import StatusViewer from '../StatusViewer'
import { useNavigation } from '@react-navigation/native'

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

const ArticleComponent = () => {
  const navigation = useNavigation()

  var imageURL ='https://images.unsplash.com/photo-1508801176750-a71beee9862a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  var title = 'Quando é indicado fazer uma cirurgia'
  var articleContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptates, repellendus voluptatum enim vitae sunt cupiditate optio, laborum suscipit vel excepturi ratione porro quae odio totam aspernatur quis commodi aliquam distinctio unde esse? Velit quisquam asperiores maiores libero harum dicta vitae dolores aliquam commodi cumque ea eos veritatis dolorem impedit tempore, nulla, quaerat sed aperiam non. Illum sunt modi similique explicabo magni quae dolorum natus exercitationem nesciunt eligendi voluptatum voluptates amet enim laboriosam, dolore harum laudantium quos cum dolorem officiis, quasi impedit nulla beatae cupiditate? Necessitatibus quidem officiis ipsa, commodi at et laboriosam, quos accusantium cupiditate ducimus ad in architecto'
  var authorName = 'Ana Medeiros'
  var authorOccupation = 'Estudante de Medicina'
  var authorImage = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'

  return (
    <>
      <StatusViewer />
      <ScrollView>
        <HeaderContainer>
          <BackButton 
          onPress={() => navigation.goBack()} 
          width="32" height="32"/>
          <ArticleImage source={{uri: imageURL}} />
        </HeaderContainer>
        <ContentContainer>
          <ShareButtonContainer>
            <ShareButton onPress={() => {console.log('Shared')}} width="62" height="62"/>
          </ShareButtonContainer>
          <TitleArticle>
            {title}
          </TitleArticle>
          <Article>
            {articleContent}
          </Article>
          <AuthorTitle>Artigo escrito por:</AuthorTitle>
          <AuthorContainer>
            <AuthorImage source={{uri: authorImage}}/>
            <AuthorData>
              <AuthorName>{authorName}</AuthorName>
              <AuthorVocation>{authorOccupation}</AuthorVocation>
            </AuthorData>  
          </AuthorContainer>
        </ContentContainer>
      </ScrollView>
    </>
  )
}

export default ArticleComponent