import React, { useReducer, useMemo, useEffect } from "react";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider, Box, HamburgerIcon, Center } from "native-base";
import { Alert, Image } from "react-native";
import "react-native-gesture-handler";
import RouteMenu from "./RouteMenu";
import TakePicture from "../screens/menu/TakePicture";
import DrawerContentMenu from "../screens/home/DrawerContentMenu";


const Drawer = createDrawerNavigator();


const RouteDrawer = () =>
{

  var icon = null;
  var align = null;
  var widthImage = null;
  var widthBox = null;

  const getHeaderTitle = (route) =>
  {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

    // console.log("routeName--> " + getFocusedRouteNameFromRoute(route));

    let routeNameChild = JSON.stringify(route);
    // console.log("routeNameChild---> " + routeNameChild);

    icon = require('../../assets/logo_fullcolor.png');
    align = "center";
    widthImage = 80;
    widthBox = null;

    switch (routeName)
    {
      case "Home":
        icon = require('../../assets/logo_header.png');
        align = null;
        widthImage = 128;
        widthBox = "90%";
        return "";

      case "Settings":
        return "Ajustes";

      case "Directory":
        return "Directorio";

      case "StoreInformation":
        return "Tienda";

      case "RouteDirectory":
        var title = "Directorio";

        let indexRouteNameChild = routeNameChild.indexOf("StoreInformation");

        if (-1 !== indexRouteNameChild)
        {
          title = "Detalle Tienda";
        }

        return title;

      case "RoutePromotions":
        return "Promociones";

      case "PromotionDetail":
        return "Detalle Promoción";

      case "Invoices":
        return "Mis Facturas";

      case "RegisterInvoices":
        return "Registra tus facturas";

      case "SendInvoice":
        return "Enviar factura"

      case "Contact":
        return "Contacto";
      
      case "RouteAuthentication":
        icon = require('../../assets/logo_header.png');
        align = null;
        widthImage = 128;
        widthBox = "90%";
        return "";
    }
  }
  
  return (
    <Drawer.Navigator
      id="NavigatorDrawer"
      initialRouteName="RouteMenu"
      drawerContent={props => <DrawerContentMenu {...props} />}
      screenOptions=
      {
        ({ navigation }) =>
        ({
            headerShown:true,
            drawerStyle:{width:305},
            headerStyle:{height:120},
            headerLeft:() =>
            (
              <Center ml="3" backgroundColor="white" borderColor_="red.500" borderWidth_="1" shadow="3" rounded="100" width="9" height="9">
                <HamburgerIcon onPress={navigation.openDrawer} size="md" color="#f18032"/>
              </Center>
            )
        })
      }
    >
      <Drawer.Screen
        name="RouteMenu"
        component={RouteMenu}
        options=
        {
          ({ route }) =>
          ({
              headerShown_:false,
              headerTitle: getHeaderTitle(route),
              headerTitleAlign:align,
              headerTitleStyle:{fontWeight:"700"},
              headerRight:() =>
              (
                <Box width={widthBox} mr="1" borderColor_="green.500" borderWidth_="1">
                  <Image resizeMode={"contain"} style={{width:widthImage, height:80}} source={icon} />
                </Box>
              )
            })
        }
      />

      <Drawer.Screen
        name="TakePicture"
        component={TakePicture}
        options={{headerTitle:""}}
      />

    </Drawer.Navigator>
  );
}

export default RouteDrawer;