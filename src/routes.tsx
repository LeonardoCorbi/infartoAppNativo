import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// INFARTO
import Infarto from './pages/Infarto'
import art001_Infarto from './pages/Artigos/Atigo_001'

import Alimentacao from './pages/Alimentacao'
import Imc from './pages/Imc'
import Exercicio from './pages/Exercicio'
import Tratamento from './pages/Tratamento'

const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: 'rgba(0,0,0,0)'
          }
        }}
      >
        <AppStack.Screen name="art001_Infarto" component={art001_Infarto} />
        <AppStack.Screen name="Infarto" component={Infarto} />
        
        <AppStack.Screen name="Alimentacao" component={Alimentacao} />
        <AppStack.Screen name="Imc" component={Imc} />
        <AppStack.Screen name="Exercicio" component={Exercicio} />
        <AppStack.Screen name="Tratamento" component={Tratamento} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes