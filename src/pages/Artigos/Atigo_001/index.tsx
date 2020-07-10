import React from 'react'
import { View, ScrollView, Image, StyleSheet } from 'react-native'
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
      <ScrollView>
        <View style={style.headerContainer}>
          <RectButton onPress={() => {}}>
            <BackButton width="32" height="32" style={style.backButton}/>
          </RectButton>
          <Image style={style.imageBG} source={Img} />
        </View>
      </ScrollView>
    </>
  )
}

const style = StyleSheet.create({
  headerContainer: {
    height: 264,
    position: 'relative',
  },
  backButton: {
    width: 32,
    height: 32,
  },
  imageBG: {
    width: '100%',
    height: 264
  },
})

export default Artigo_001