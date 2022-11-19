import { createStackNavigator } from '@react-navigation/stack';
import Directory from '../screens/directory/Directory';
import StoreInformation from '../screens/directory/StoreInformation';
import Home from '../screens/home/Home';


const Stack = createStackNavigator();


const RouteDirectory = ({ navigation, route }) =>
{
  console.log("useEffect RouteDirectory");

  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{headerShown:false}}>

      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Directory" component={Directory}/>
      <Stack.Screen name="StoreInformation" component={StoreInformation}/>
      
    </Stack.Navigator>
  );
}

export default RouteDirectory;