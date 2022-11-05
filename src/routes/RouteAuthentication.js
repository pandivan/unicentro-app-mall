import { createStackNavigator } from '@react-navigation/stack';
// import Registro from "../containers/login/Registro";
import Login from "../screens/login/Login";
import Registration from '../screens/login/Registration';


const Stack = createStackNavigator();


const RouteAuthentication = () =>
{
  return (
    <Stack.Navigator 
      initialRouteName="Registration"
      screenOptions={{headerShown:true}}>

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      
    </Stack.Navigator>
  );
}

export default RouteAuthentication;