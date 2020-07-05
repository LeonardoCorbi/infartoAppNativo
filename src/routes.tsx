import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Infarto from './pages/Infarto'
import Alimentacao from './pages/Alimentacao'

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
        <AppStack.Screen name="Infarto" component={Infarto} />
        <AppStack.Screen name="Alimentacao" component={Alimentacao} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes