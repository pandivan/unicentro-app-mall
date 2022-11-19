import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

import Settings from "../screens/configuration/Settings";
import Offers from "../screens/directory/Offers";
import OfferDetail from "../screens/directory/OfferDetail";
import Invoices from "../screens/directory/Invoices";
import Contact from "../screens/directory/Contact";
import RegisterInvoices from "../screens/directory/RegisterInvoices";
import HistoryInvoices from "../screens/directory/HistoryInvoices";
import SendInvoice from "../screens/directory/SendInvoice";
import TakePicture from "../screens/directory/TakePicture";
import RouteDirectory from "./RouteDirectory";


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
      initialRouteName="RouteDirectory"
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
        name="RouteDirectory"
        component={RouteDirectory}
        options=
        {{
          tabBarLabel:"Home",
          tabBarIcon:({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />)
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
        name="Offers" 
        component={Offers}
        options=
        {{
          tabBarButton: () => <View style={{ width: 0 }} />
        }}
      />

      <Tab.Screen 
        name="OfferDetail" 
        component={OfferDetail}
        options=
        {{
          tabBarButton: () => <View style={{ width: 0 }} />
        }}
      />

      <Tab.Screen 
        name="Invoices" 
        component={Invoices}
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
        name="TakePicture" 
        component={TakePicture}
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
          
    </Tab.Navigator>
  );
}

export default RouteHome;