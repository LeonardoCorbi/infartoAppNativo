import React from 'react'
import { View, StyleSheet } from 'react-native'

import Svg from '../../assets/logo.svg'
import '../../defaultStyles'

const Logo = () => {
  return(
    <>
      <View style={styles.header}>
        <Svg style={styles.logo} width="37.6%" height={100}  />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 72,
    backgroundColor: '#0E446EE6',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 20
  },
  logo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'absolute',
    zIndex: 30,
    transform: [
      {translateX: -75},
      {translateY: -40}
    ],
    top: '50%',
    left: '50%'
  },

})

export default Logo