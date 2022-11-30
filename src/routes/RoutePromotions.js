import { createStackNavigator } from '@react-navigation/stack';
import PromotionDetail from '../screens/menu/PromotionDetail';
import Promotions from '../screens/menu/Promotions';


const Stack = createStackNavigator();


const RoutePromotions = ({ navigation, route }) =>
{
  
  return (
    <Stack.Navigator 
      initialRouteName="Promotions"
      screenOptions={{headerShown:false}}>

      <Stack.Screen name="Promotions" component={Promotions}/>
      <Stack.Screen name="PromotionDetail" component={PromotionDetail}/>
      
    </Stack.Navigator>
  );
}

export default RoutePromotions;