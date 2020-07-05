import React from 'react'
import { View, StyleSheet, Text, ScrollView, Image, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import Logo from '../../components/Logo/index'
import TabIcons from '../../components/TabIcons/index'
import '../../defaultStyles'

const colors = {
  primary: '#0E446E',
  textContent: '#353941',
  shadow: '#1476A04A',
  red: '#EA3D65'
}

const Infarto = () => {
  const navigation = useNavigation()

  function handleNavigateToAlimentacao() {
    navigation.navigate('Alimentacao')
  }

  return (
    <>
      <Logo />
      <ScrollView>
        <View style={{backgroundColor: colors.primary, flex: 1}}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              O que é o infarto
            </Text> 
          </View>

          <View style={styles.bgList}>
            <RectButton 
              activeOpacity={0} 
              rippleColor={'rgba(0,0,0,0)'} 
              style={styles.rectBtn} 
              onPress={handleNavigateToAlimentacao}
            >
              <View style={styles.articleContainer}>

                <View style={styles.imageContainer}>  
                  <Image style={styles.image} source={require('../../assets/artigo1.jpg')} />
                </View>  

                <View style={styles.contentContainer}>
                  <Text>
                    <Text style={styles.articleTitle}>
                      A principal causa do infarto
                    </Text>
                  </Text>

                  <Text>  
                    <Text style={styles.sumaryContent}>
                      Saiba os principais motivos da ocorrência do infarto
                    </Text>
                  </Text>    
                </View>
              </View>
            </RectButton>
          </View>
        </View>  
      </ScrollView>
      <TabIcons />
    </>    
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 88,
    marginLeft: 32,
  },
  title: {
    color: '#FFF',
    fontFamily: 'NoirPro_Medium',
    fontSize: (Platform.OS === 'ios') ? 32 : 24,
    lineHeight: 34,
  },
  bgList: {
    backgroundColor: '#FFF',

    width: '100%',
    height: 800,

    borderTopLeftRadius: 80,

    marginTop: 24,
  },
  rectBtn: {
    overflow: 'visible',
  },
  articleContainer: {
    width: '88%',
    height: 144,

    backgroundColor: '#FFF',

    marginTop: 32,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 8,

    borderStyle: 'solid',
    // borderWidth: .1,
    borderRadius: 20,

    shadowColor: colors.shadow,
    shadowRadius: 20,
    shadowOffset: {
      width: 6,
      height: 7,
    },
    shadowOpacity: 1,
    elevation: 20,

    display: 'flex',
    flexDirection: 'row',
  },
  imageContainer:{
    backgroundColor: 'red',

    height: '100%',
    width: '38%',

    borderRadius: 20,

    overflow: 'hidden',
  },
  image:{
    resizeMode: 'repeat',
    height: '100%',
    transform: [
      {translateX: (Platform.OS === 'ios') ? -210 : -100},
    ]
  },
  contentContainer:{
    // backgroundColor: 'green',

    height: '100%',
    width: '57%',

    marginLeft: 16,

    flexDirection: 'column',
    alignContent: 'space-between', 
  },
  articleTitle:{
    // backgroundColor: 'yellow',

    width: '100%',
    height: '33%',
    minHeight: 48,
    marginTop: '1%',

    fontFamily: 'NoirPro_Medium',
    color: colors.primary,
    fontSize: (Platform.OS === 'ios') ? 22 : 16,
    lineHeight: 23,

    alignContent: 'center',
    display: 'flex',
  },
  sumaryContent:{
    // backgroundColor: 'blue',

    width: '100%',
    height: '66%',

    fontFamily: 'NoirPro_Light',
    color: colors.textContent,
    fontSize: (Platform.OS === 'ios') ? 22 : 16,
    lineHeight: (Platform.OS === 'ios') ? 20 : 22,

    display: 'flex',
  },
})

export default Infarto