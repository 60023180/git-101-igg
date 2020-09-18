import * as React from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResumeFormScreen from './screens/ResumeForm'
import ResumeDetailScreen from './screens/ResumeDetail'
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* add */}
        <Stack.Screen name="ResumeForm" options={{ title: 'Home ResumeForm'}} component={ResumeFormScreen}  />

        <Stack.Screen name="ResumeDetail" options={{ title: 'Home ResumeDetail'}} component={ResumeDetailScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;