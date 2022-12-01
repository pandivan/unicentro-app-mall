import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Box, HamburgerIcon, Center } from "native-base";
import { Image } from "react-native";
import "react-native-gesture-handler";

import RouteMenu from "./RouteMenu";
import DrawerContentMenu from "../screens/home/DrawerContentMenu";


const Drawer = createDrawerNavigator();


/**
 * Componente Funcional que se encarga de crear el menú drawer
 * @returns Componente menú drawer
 */
const RouteDrawer = () =>
{

  var icon = null;
  var align = null;
  var widthImage = null;
  var widthBox = null;


  /**
   * Función que permite obtener el nombre del screen en la que se encuentra el cliente
   * @param route Ruta de navegación
   * @returns Nombre del screen
   */
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


  {/* 
    El DrawerContentMenu nace debido a la necesidad de personalizar el icono del drawer y a la necesidad
    de que las opciones q estoy colocando en Drawer.Screen NO me aparezcan como item del Drawer.

    Cuando se implementa DrawerContentMenu los Drawer.Screen quedan funcionando de manera logica para navegar entre ellos pero
    ya No se visualizaran como un item en el drawer ya q nuestros items del drawer serán diseñados en DrawerContentMenu
    y es desde ahí q podremos acceder de manera logica a los Drawer.Screen 
  */}

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

    </Drawer.Navigator>
  );
}

export default RouteDrawer;