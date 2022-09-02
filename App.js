import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Center } from "native-base";

import MenuAuthentication from "./src/routes/MenuAuthentication";
import Home from "./src/views/home/Home"
import MyResponsivePie from "./src/views/home/MyResponsivePie"



const Stack = createNativeStackNavigator();


export default function App() 
{

  // Valores iniciales del state
  const inicializarState = 
  {
    isLoading: true,
    isLogueado: false,
    cliente: null
  }

  

  return (
    <NativeBaseProvider>
      <Center flex={1} borderColor="blue.700" borderWidth="3">
        <Home/>
      </Center>
    </NativeBaseProvider>
  );

  // return (
  //   <NavigationContainer>
  //     {/* <Stack.Navigator headerMode ="none"> */}
  //     <Stack.Navigator>
  //       <Stack.Screen name="MenuAutenticacion" component={MenuAuthentication} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
}
