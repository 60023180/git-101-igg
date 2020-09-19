import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesList from './screens/MoviesList';
import MovieDetail from './screens/MovieDetail';

const Stack = createStackNavigator();

const Navigation = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MoviesList"
          component={MoviesList}
        />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
 
 export default Navigation