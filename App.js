import React, { useReducer, useMemo, useEffect } from "react";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NativeBaseProvider, Box, HamburgerIcon, Center } from "native-base";
import { Alert, Image } from "react-native";
import "react-native-gesture-handler";

import RouteMenu from "./src/routes/RouteMenu";
import RouteAuthentication from "./src/routes/RouteAuthentication";
import SplashScreen from "./src/components/SplashScreen";
import AppContext from "./src/contexts/AppContext"
import DrawerContentMenu from "./src/screens/home/DrawerContentMenu";
import customerServices from "./src/services/CustomerServices";
import categoriesServices from "./src/services/CategoriesServices";
import Constants from "./src/utilities/Constants";
import TakePicture from "./src/screens/menu/TakePicture";
import authenticationServices from "./src/services/AuthenticationServices";




//Creando Menu de Navegación
const Drawer = createDrawerNavigator();


export default function App()
{
  // console.log("useEffect App");

  //Valores iniciales del state
  const inicializarState =
  {
    isLoading:true,
    isSignout:false,
    userToken:null,
    lstCategories:[]
  }

  // const [headerTitleAlign, setHeaderTitleAlign] = useState("center");
  var icon = null;
  var align = null;
  var widthImage = null;
  var widthBox = null;


  /**
   * Funcion que permite validar el token del cliente despues de renderizar la pantalla
   */
  useEffect(() =>
  {

    const loadData = async () =>
    {
      try
      {
        console.log("*** UseEffect APP ****");

        //Se obtiene las categorias y sus tiendas a traves del api-rest
        let {status, lstCategoriesBD} = await categoriesServices.getAllCategories();

        if(Constants.STATUS_OK === status)
        {
          // Se almacenan las categorias en el contexto
          dispatch({ type: "LOAD_CATEGORIES", lstCategories: lstCategoriesBD });

          //Se valida si hay un token en el storage
          let userToken = authenticationServices.getToken();
          dispatch({ type: "RESTORE_TOKEN", token: userToken });
        }
        else
        {
          // El usuario tiene el token vencido y debe loguearse nuevamente
          // dispatch({ type: "RESTORE_TOKEN", token: null });
          // TODO: Validar q pasa cuando no carga las categorias
          console.log("Error al carga las categorias... ")
        }
      }
      catch (e)
      {
        Alert.alert("Información", "En el momento no es posible acceder a la\ninformación, favor intentarlo más tarde.");
      }
    };

    loadData();
  }, []);


  /**
   * Funcion que permite el manejo del state
   * @param prevState
   * @param action
   * @returns State
   */
  const stateReducer = (prevState, action) =>
  {
    switch (action.type)
    {
      case "RESTORE_TOKEN":
        // console.log("***** REDUCER RESTORE ***** ");
        return {
          ...prevState, //Retorna todas las propiedades del objeto inicializarState y ACTUALIZA solo la propiedad isLoading y userToken
          userToken: action.token,
          isLoading: false
        };

      case "SIGN_IN":
        console.log("***** REDUCER SIGN_IN *****");
        return {
          ...prevState,
          isSignout: false,
          userToken: action.token
        };

      case "SIGN_OUT":
        console.log("***** REDUCER SIGN_OUT *****");
        return {
          ...prevState,
          isSignout: true,
          userToken: null
        };

      case "LOAD_CATEGORIES":
        // console.log("*** REDUCER LOAD_CATEGORIES *** ");
        return {
          ...prevState, //Retorna todas las propiedades del objeto inicializarState y ACTUALIZA solo la propiedad lstCategories
          lstCategories: action.lstCategories
        };

      default:
        console.log("switch default");
        return state;
    }
  };


  //Creando state....
  const [state, dispatch] = useReducer(stateReducer, inicializarState);


  /**
   * Hook que contiene las funciones de inicio, cierre y restauración de sesión
   */
  const appContext = useMemo(() => (
  {
    signIn: async (customer) =>
    {
      try
      {
        console.log("***** SIGN_IN MEMO *****");
        let {status, userToken} = await authenticationServices.signIn(customer);

        if(Constants.STATUS_OK === status)
        {
          dispatch({ type: "SIGN_IN", token: userToken });
        }
        else
        {
          Alert.alert("Información", "Usuario o Clave invalida.");
        }
      }
      catch (error)
      {
        Alert.alert("Información", "No es posible acceder en este momento, favor intentarlo en unos minutos.");
      }
    },

    signOut: () =>
    {
      console.log("***** SIGN_OUT MEMO *****");
      authenticationServices.removerToken();
      dispatch({ type: "SIGN_OUT" });
    },

    signUp: async (customer) =>
    {
      try
      {
        console.log("***** SIGN_UP MEMO *****");
        let {status, userToken} = await customerServices.signUp(customer);

        if(Constants.STATUS_OK === status)
        {
          dispatch({ type: "SIGN_IN", token: userToken });
        }
        else
        {
          Alert.alert("Información", "Ingresaste una direccion de email que ya esta registrada en el sistema,\nsi ya eres miembro, haz clic en Iniciar sesion");
        }
      }
      catch (error)
      {
        Alert.alert("Información", "No fue posible registrarte, favor intentarlo en unos minutos.");
      }
    },

    lstCategories: state.lstCategories,

  }), [state.lstCategories]);



  const getHeaderTitle = (route) =>
  {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

    // console.log("routeName--> " + getFocusedRouteNameFromRoute(route));

    let routeNameChild = JSON.stringify(route);
    // console.log("routeNameChild---> " + routeNameChild);

    icon = require('./assets/logo_fullcolor.png');
    align = "center";
    widthImage = 80;
    widthBox = null;

    switch (routeName)
    {
      case "Home":
        icon = require('./assets/logo_header.png');
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
    }
  }


  return (
    <NativeBaseProvider>
      <AppContext.Provider value={appContext}>
        <NavigationContainer>
        {
          (state.userToken !== null) ?
          (
            // El DrawerContentMenu nace debido a la necesidad de personalizar el icono del drawer y a la necesidad
            // de que las opciones q estoy colocando en Drawer.Screen NO me aparezcan como item del Drawer.

            // Cuando se implementa DrawerContentMenu los Drawer.Screen quedan funcionando de manera logica para navegar entre ellos pero
            // ya No se visualizaran como un item en el drawer ya q nuestros items del drawer serán diseñados en DrawerContentMenu
            // y es desde ahí q podremos acceder de manera logica a los Drawer.Screen

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
          )
          :
          <RouteAuthentication />
        }
        </NavigationContainer>
      </AppContext.Provider>
    </NativeBaseProvider>
  );
}