import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// INFARTO
import Infarto from './pages/Infarto'
import art001_Infarto from './pages/Artigos/Atigo_001'

import Alimentacao from './pages/Alimentacao'
import Imc from './pages/Imc'
import Exercicio from './pages/Exercicio'
import Tratamento from './pages/Tratamento'

const AppStack = createBottomTabNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        screenOptions={{ tabBarVisible: false }}>
        
        <AppStack.Screen name="Alimentacao" component={Alimentacao} />
        <AppStack.Screen name="Infarto" component={Infarto} />
        <AppStack.Screen name="art001_Infarto" component={art001_Infarto} />
        
        <AppStack.Screen name="Imc" component={Imc} />
        <AppStack.Screen name="Exercicio" component={Exercicio} />
        <AppStack.Screen name="Tratamento" component={Tratamento} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes