import { createStackNavigator } from '@react-navigation/stack';
import Directory from '../screens/menu/Directory';
import StoreInformation from '../screens/menu/StoreInformation';


const Stack = createStackNavigator();


const RouteDirectory = ({ navigation, route }) =>
{
  // console.log("useEffect RouteDirectory");

  return (
    <Stack.Navigator 
      initialRouteName="Directory"
      screenOptions={{headerShown:false}}>

      <Stack.Screen name="Directory" component={Directory}/>
      <Stack.Screen name="StoreInformation" component={StoreInformation}/>
      
    </Stack.Navigator>
  );
}

export default RouteDirectory;