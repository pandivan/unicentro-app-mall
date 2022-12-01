import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from "native-base";
import "react-native-gesture-handler";

import SplashScreen from "./src/components/SplashScreen";
import Login from "./src/screens/login/Login";
import Registration from "./src/screens/login/Registration";
import RouteDrawer from "./src/routes/RouteDrawer";
import TakePicture from "./src/screens/menu/TakePicture";




//Creando Menu de Navegación
const Stack = createStackNavigator();


export default function App()
{

  return (
    <NativeBaseProvider>
      <NavigationContainer>

        <Stack.Navigator 
          initialRouteName="RouteDrawer"
          screenOptions={{headerShown:false}}>

          <Stack.Screen name="RouteDrawer" component={RouteDrawer}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Registration" component={Registration}/>
          <Stack.Screen name="TakePicture"component={TakePicture}/>
          <Stack.Screen name="SplashScreen"component={SplashScreen}/>

        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}