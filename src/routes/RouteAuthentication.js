import { createStackNavigator } from '@react-navigation/stack';
// import Registro from "../containers/login/Registro";
import Login from "../screens/login/Login";
import Registration from '../screens/login/Registration';


const Stack = createStackNavigator();


const RouteAuthentication = () =>
{
  return (
    <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{headerShown:false}}>

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} options={{headerTitle:"Registro", headerTitleAlign:"center", headerTitleStyle:{fontSize:24, color:"#1f2937", fontWeight:"semibold"}}}/>
      
    </Stack.Navigator>
  );
}

export default RouteAuthentication;