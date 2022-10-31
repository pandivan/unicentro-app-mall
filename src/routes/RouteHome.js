import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

import Home from "../screens/home/Home"
import Settings from "../screens/configuration/Settings";
import Directory from "../screens/directory/Directory";
import StoreInformation from "../screens/directory/StoreInformation";
import Offers from "../screens/directory/Offers";
import OfferDetail from "../screens/directory/OfferDetail";
import Invoices from "../screens/directory/Invoices";
import Contact from "../screens/directory/Contact";



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
        headerShown:false,
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

      <Tab.Screen 
        name="Directory" 
        component={Directory}
        options=
        {{
          headerTitle:"Directorio", 
          headerTitleStyle:{fontWeight:"700"},  headerTitleAlign:"center",
          tabBarButton: () => <View style={{ width: 0 }} />
        }}
      />

      <Tab.Screen 
        name="StoreInformation" 
        component={StoreInformation}
        options=
        {{
          headerTitle:"",
          tabBarButton: () => <View style={{ width: 0 }} />
        }}
      />

      <Tab.Screen 
        name="Offers" 
        component={Offers}
        options=
        {{
          headerTitle:"Promociones", 
          headerTitleStyle:{fontWeight:"700"}, 
          headerTitleAlign:"center",
          tabBarButton: () => <View style={{ width: 0 }} />
        }}
      />

      <Tab.Screen 
        name="OfferDetail" 
        component={OfferDetail}
        options=
        {{
          headerTitle:"", 
          tabBarButton: () => <View style={{ width: 0 }} />
        }}
      />

      <Tab.Screen 
        name="Invoices" 
        component={Invoices}
        options=
        {{
          headerTitle:"", 
          tabBarButton: () => <View style={{ width: 0 }} />
        }}
      />

      <Tab.Screen 
        name="Contact" 
        component={Contact}
        options=
        {{
          headerTitle:"", 
          tabBarButton: () => <View style={{ width: 0 }} />
        }}
      />
          
    </Tab.Navigator>
  );
}

export default RouteHome;