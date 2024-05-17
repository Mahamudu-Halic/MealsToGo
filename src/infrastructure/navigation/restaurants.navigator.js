import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { RestaurantScreen } from '../../features/restaurant/screens/restaurants.screen'
import { Text } from 'react-native'
import RestaurantDetail from '../../features/restaurant/screens/restaurant-detail.screen'

const Stack = createStackNavigator()

const RestaurantsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, ...TransitionPresets.ModalPresentationIOS}}>
      <Stack.Screen name='Restaurant' component={RestaurantScreen} />
      <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
    </Stack.Navigator>
  )
}

export default RestaurantsNavigator