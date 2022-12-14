import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { Image } from "native-base";

import Settings from "../screens/configuration/Settings";
import Invoices from "../screens/menu/Invoices";
import Contact from "../screens/menu/Contact";
import RegisterInvoices from "../screens/menu/RegisterInvoices";
import HistoryInvoices from "../screens/menu/HistoryInvoices";
import SendInvoice from "../screens/menu/SendInvoice";
import Home from "../screens/home/Home";
import RouteDirectory from "./RouteDirectory";
import RoutePromotions from "./RoutePromotions";



const Tab = createBottomTabNavigator();


/**
 * Componente funcional el cual contiene los tabs de navegación del home
 * @returns Tab de navegación del home
 */
const RouteMenu = ({ navigation, route }) => 
{
  // console.log("useEffect RouteMenu");


  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions=
      {{
        headerShown:false,
        tabBarActiveTintColor:"#f18032",
        tabBarInactiveTintColor:"#5d5d5d",
        tabBarLabelStyle:{fontSize: 14, fontWeight_:"700"},
        tabBarStyle:{height:60, paddingBottom:4, paddingTop:4, backgroundColor_:"blue", borderTopColor:"black", borderTopWidth:0.2}
      }}
    >
      <Tab.Screen 
        name="Invoices" 
        component={Invoices}
        options=
        {{
          tabBarLabel:"Facturas",
          tabBarIcon:({ color, size }) => (<SimpleLineIcons name="camera" color={color} size={size} />)
        }}
      />


      <Tab.Screen
        name="Home"
        component={Home}
        options=
        {{
          tabBarLabel:"Home",
          tabBarIcon:({ color, size }) => (<Image source={{uri: "https://drive.google.com/uc?id=1VnpIvRyqBYDknEvdzPlam1Fy316ECcI6"}} resizeMode="contain" color_={color} size="16" alt="Alternate Text"/>)
        }}
      />


      <Tab.Screen
        name="Settings"
        component={Settings}
        options=
        {{
          tabBarLabel:"Ajustes",
          tabBarIcon:({ color, size }) => (<MaterialCommunityIcons name="cog-outline" color={color} size={size} />)
        }}
      />


      <Tab.Screen 
        name="RouteDirectory" 
        component={RouteDirectory}
        options=
        {{
          tabBarButton: () => <View style={{ width: 0 }} />
        }}
      />


      <Tab.Screen 
        name="RoutePromotions" 
        component={RoutePromotions}
        options=
        {{
          tabBarButton: () => <View style={{ width: 0 }} />
        }}
      />


      <Tab.Screen 
        name="RegisterInvoices" 
        component={RegisterInvoices}
        options=
        {{
          tabBarButton: () => <View style={{ width: 0 }} />
        }}
      />


      <Tab.Screen 
        name="SendInvoice" 
        component={SendInvoice}
        options=
        {{
          tabBarButton: () => <View style={{ width: 0 }} />
        }}
      />

      
      <Tab.Screen 
        name="HistoryInvoices" 
        component={HistoryInvoices}
        options=
        {{
          tabBarButton: () => <View style={{ width: 0 }} />
        }}
      />


      <Tab.Screen 
        name="Contact" 
        component={Contact}
        options=
        {{
          tabBarButton: () => <View style={{ width: 0 }} />
        }}
      />

      {/* <Tab.Screen 
        name="RouteAuthentication" 
        component={RouteAuthentication}
        options=
        {{
          tabBarButton: () => <View style={{ width: 0 }} />
        }}
      /> */}
          
    </Tab.Navigator>
  );
}

export default RouteMenu;