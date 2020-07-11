import React from 'react'
import { View, ScrollView, Image, StyleSheet, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import BackButton from '../../../assets/images/arrow-left-circle.svg'

import Img from '../../../assets/images/img_art_001_Infato.png'

const colors = {
  primary: '#0E446E',
  textContent: '#353941',
  shadow: '#1476A04A',
  red: '#EA3D65'
}

const Artigo_001 = () => {
  return (
    <>
      <View style={style.statusViewer} />
      <ScrollView>
        <View style={style.headerContainer}>
          <BackButton onPress={() => {console.log('ok')}} width="32" height="32" style={style.backButton}/>
          <Image style={style.imageBG} source={Img} />
        </View>
        <View style={style.contentContainer}>
          <Text style={style.titleArticle}>
            Quando é indicado fazer uma cirurgia
          </Text>
        </View>
      </ScrollView>
    </>
  )
}

const style = StyleSheet.create({
  statusViewer: {
    position: 'absolute',
    top: 0,
    height: 22,
    width: '100%',
    backgroundColor: colors.shadow,
    zIndex: 100,
  },
  headerContainer: {
    height: 264,
  },
  backButton: {
    position: 'absolute',
    width: 32,
    height: 32,
    top: 28,
    left: 24,
    zIndex: 20,
  },
  imageBG: {
    position: 'absolute',
    width: '100%',
    height: 264,
    zIndex: 10,
  },
  contentContainer: {
    width: '100%',
    height: 300,
    
    position: 'absolute',
    top: 182,

    borderTopLeftRadius: 80,

    backgroundColor: 'red',

    zIndex: 40,

    paddingTop: 30,
    paddingHorizontal: 24,
  },
  titleArticle: {
    fontFamily: 'NoirPro_Medium',
    color: colors.primary,
    fontSize: 24,
    lineHeight: 34,
  },
})

export default Artigo_001