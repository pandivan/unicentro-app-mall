import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Feed from "../views/insight/Feed";
import Insight from "../views/insight/Insight";
import Home from "../views/home/Home"


const Tab = createBottomTabNavigator();

/**
 * Componente funcional el cual contiene los tabs de navegación del home
 * @returns Tab de navegación del home
 */
const MenuHome = () => 
{
  return (
    <Tab.Navigator
      initialRouteName="Homeeee"
      screenOptions=
      {{
        tabBarActiveTintColor:"tomato",
        tabBarLabelStyle:{fontSize: 16},
        // headerShown:false,
        headerStyle: { backgroundColor: "yellow" },
        tabBarStyle:{ backgroundColor: "#303030", borderTopColor:"blue", borderTopWidth:0},
        // tabBarInactiveBackgroundColor:"#303030",
        // tabBarActiveBackgroundColor:"blue",
      }}
    >
      <Tab.Screen
        name="Homeeee"
        component={Home}
        options=
        {{
          tabBarLabel:"Home",
          tabBarIcon:({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />

      <Tab.Screen
        name="Insight"
        component={Insight}
        options=
        {{
          tabBarLabel:"Insight",
          tabBarIcon:({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default MenuHome;