import React, { useEffect, useState } from 'react'
import { ScrollView, Text, Button, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Logo from '../../components/Logo/index'
import TabIcons from '../../components/TabIcons/index'

import api from '../../services/api'

import {
  Container,
  Input,
  Botao,
  Texto,
  Imagem,
  BotaoOpacity,
} from './styles'

interface ArticleProps {
  id: number
  title: string
  image: string
  content: string
  summary: string
  authorId: number
}


const Alimentacao = () => {
  const navigation = useNavigation()

  const [counter, setCounter] = useState(0)

  const [articles, setArticles] = useState<ArticleProps[]>([])

  useEffect(()=>{
    api.get('infarto').then(response => console.log(response))
  }, [counter])
  
  return (
    <>
      {/* <Logo /> */}
      <ScrollView>
        <Container style={{marginTop: 60}}>

          <Button title={`counter ${counter}`} onPress={() => setCounter(counter + 1)} />

            

          {
            articles.map(article => (
              <View key={article.id}>
                <Text style={{color:'black'}}>{article.authorId}</Text>
                <Text style={{color:'black'}}>{article.content}</Text>
                <Text style={{color:'black'}}>{article.id}</Text>
                <Text style={{color:'black'}}>{article.image}</Text>
                <Text style={{color:'black'}}>{article.summary}</Text>
                <Text style={{color:'black'}}>{article.title}</Text>
              </View>  
            ))

          }







          <Texto
          accessible={true}
          >
            Isso é um teste de texto
          </Texto>

          <Input             
          accessible={true}
          accessibilityLabel="Digite seu peso." 
          />
          
          <Input             
          accessible={true}
          accessibilityLabel="Digite sua altura." 
          />

          <Botao
          accessible={true}
          accessibilityLabel="Botão para Calcular í emi cê"  
          title="Calcular"
          onPress={() => {alert('clicked')}} 
          />
          
          <BotaoOpacity
          accessible={true}
          accessibilityLabel="Botão para Calcular í emi cê"  
          title="Calcular"
          onPress={() => {alert('clicked')}}
          >
            <Text>
             Olá
            </Text>
          </BotaoOpacity>

          <Imagem 
          accessible={true}
          accessibilityRole="image"
          source={require('../../assets/images/userImage.png')}
          alt="Foto de médica com aparelho para ouvir coração"
          />





        </Container>
      </ScrollView>
      <TabIcons alimentacao />
    </>
  )
}


export default Alimentacao