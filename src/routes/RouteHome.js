import { createStackNavigator } from '@react-navigation/stack';
import Directory from '../screens/menu/Directory';
import StoreInformation from '../screens/menu/StoreInformation';
import Home from '../screens/home/Home';


const Stack = createStackNavigator();


const RouteHome = ({ navigation, route }) =>
{
  // console.log("useEffect RouteHome");

  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{headerShown_:false}}>

      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Directory" component={Directory}/>
      <Stack.Screen name="StoreInformation" component={StoreInformation}/>
      
    </Stack.Navigator>
  );
}

export default RouteHome;