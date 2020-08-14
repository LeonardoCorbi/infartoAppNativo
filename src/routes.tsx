import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import Infarto from './pages/Infarto'
import Alimentacao from './pages/Alimentacao'
import Imc from './pages/Imc'
import Exercicio from './pages/Exercicio'
import Tratamento from './pages/Tratamento'

import ArticleComponent from './components/ArticleComponent'

const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer  >
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          animationEnabled: false, 
          cardStyle: {
            backgroundColor: 'white'
          }
        }}
      >
        
        <AppStack.Screen name="Infarto" component={Infarto} />
        <AppStack.Screen name="Alimentacao" component={Alimentacao} />
        <AppStack.Screen name="Imc" component={Imc} />
        <AppStack.Screen name="Exercicio" component={Exercicio} />
        <AppStack.Screen name="Tratamento" component={Tratamento} />

        <AppStack.Screen name="ArticleComponent" component={ArticleComponent} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes