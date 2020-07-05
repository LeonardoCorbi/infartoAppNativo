import React from 'react';
import { StatusBar, Platform } from 'react-native'
import { AppLoading } from 'expo'
import { useFonts } from '@use-expo/font'


import Routes from './src/routes'

export default function App() {

  let [fontsLoaded] = useFonts({
    'NoirPro_Medium': require('./src/assets/fonts/NoirPro/NoirPro-Medium.ttf'),
    'NoirPro_Light': require('./src/assets/fonts/NoirPro/NoirPro-Light.ttf')
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
      <StatusBar 
        barStyle={'light-content'} 
        backgroundColor="transparent" 
        translucent />
      <Routes />
    </>  
  );
}
