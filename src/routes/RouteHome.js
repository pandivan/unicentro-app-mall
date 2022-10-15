import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Image } from "native-base";

import Home from "../screens/home/Home"
import Settings from "../screens/configuration/Settings";



const Tab = createBottomTabNavigator();


/**
 * Componente funcional el cual contiene los tabs de navegación del home
 * @returns Tab de navegación del home
 */
const RouteHome = ({ navigation, route }) => 
{
  console.log("useEffect RouteHome");

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions=
      {{
        headerShown:true,
        tabBarActiveTintColor:"#f18032",
        tabBarInactiveTintColor:"#5d5d5d",
        tabBarLabelStyle:{fontSize: 13},
        headerStyle:{backgroundColor:"red"},
        tabBarStyle:{height:60, paddingBottom:4, paddingTop:4, backgroundColor_:"blue", borderTopColor:"black", borderTopWidth:0.2}
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options=
        {{
          headerShown:false,
          tabBarLabel:"Home",
          tabBarIcon:({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />)
        }}
      />

      {/* <Tab.Screen
        name="Insight"
        component={Insight}
        options=
        {{
          headerShown:false,
          tabBarLabel:"Insight",
          tabBarIcon:({ color, size }) => (<MaterialCommunityIcons name="robot-confused-outline" color={color} size={size} />)
        }}
      /> */}

      <Tab.Screen
        name="Settings"
        component={Settings}
        options=
        {{
          headerShown:false,
          tabBarLabel:"Ajustes",
          tabBarIcon:({ color, size }) => (<MaterialCommunityIcons name="cog-outline" color={color} size={size} />)
        }}
      />
    </Tab.Navigator>
  );
}

export default RouteHome;