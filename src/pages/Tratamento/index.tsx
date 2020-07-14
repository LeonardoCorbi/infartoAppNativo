import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Path, Svg, Circle, Ellipse } from 'react-native-svg'
import { useNavigation, useNavigationState, useIsFocused, useRoute } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import Logo from '../../components/Logo/index'
import TabIcons from '../../components/TabIcons/index'

const Tratamento = () => {
  const navigation = useNavigation()

  return (
    <>
      <Logo />
      <ScrollView>
        
      </ScrollView>
      <TabIcons tratamento />
    </>
  )
}

export default Tratamento