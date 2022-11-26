import React, { useReducer, useMemo, useEffect } from "react";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NativeBaseProvider, Image, Box, HamburgerIcon, Center } from "native-base";
import { Alert } from "react-native";
import * as SecureStore from "expo-secure-store";
import "react-native-gesture-handler";

import RouteMenu from "./src/routes/RouteMenu";
import RouteAuthentication from "./src/routes/RouteAuthentication";
import SplashScreen from "./src/components/SplashScreen";
import AppContext from "./src/contexts/AppContext"
import DrawerContentMenu from "./src/screens/home/DrawerContentMenu";
import clientServices from "./src/services/ClientServices";
import categoriesServices from "./src/services/CategoriesServices";
import Constants from "./src/utilities/Constants";
import TakePicture from "./src/screens/menu/TakePicture";



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


  /**
   * Funcion que permite validar el token del cliente despues de renderizar la pantalla
   */
  useEffect(() => 
  {
    
    const loadData = async () => 
    {
      try 
      {
        // console.log("*** UseEffect APP ****");
        
        //Se obtiene las categorias y sus tiendas a traves del api-rest
        let {status, lstCategoriesBD} = await categoriesServices.getAllCategories();

        switch (status)
        {
          case Constants.STATUS_OK:
            // Se almacenan las categorias en el contexto
            dispatch({ type: "LOAD_CATEGORIES", lstCategories: lstCategoriesBD });

            //Se valida si hay un token en el storage
            let userToken = await SecureStore.getItemAsync("userToken");
            dispatch({ type: "RESTORE_TOKEN", token: userToken });
          break;

          case Constants.STATUS_ACCESO_DENEGADO:
            // El usuario tiene el token vencido y debe loguearse nuevamente
            dispatch({ type: "RESTORE_TOKEN", token: null });
            console.log("case STATUS_ACCESO_DENEGADO")
          break;

          default:
            dispatch({ type: "RESTORE_TOKEN", token: null });
            console.log("case default acceso denegado")
          break;
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
    signIn: async (client) => 
    {
      try 
      {
        console.log("***** SIGN_IN MEMO *****");
        let {success, userToken} = await clientServices.validateClient(client);
        
        if(success)
        {
          // console.log("Iniciando sesion: ".concat(cliente.tipoCliente));
          //Gurdando token en SecureStore...
          await SecureStore.setItemAsync("userToken", JSON.stringify(userToken));
          
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
      dispatch({ type: "SIGN_OUT" });
      SecureStore.deleteItemAsync("userToken");
    },
    
    signUp: async (client) => 
    {
      try 
      {
        console.log("***** SIGN_UP MEMO *****");
        let {success, userToken} = await clientServices.registerCliente(client);
        
        if(success)
        {
          //Gurdando token en SecureStore...
          await SecureStore.setItemAsync("userToken", JSON.stringify(userToken));

          dispatch({ type: "SIGN_IN", token: userToken });
        }
        else
        {
          Alert.alert("Información", "El correo electrónico ingresado ya está registrado. Por favor ingrese otro.");
          //Alert.alert("Información", "Ingresaste un direccion de email que ya esta registrada en , Si ya eres miembro, haz clic en Iniciar sesion");
        }
      } 
      catch (error) 
      {
        Alert.alert("Información", "No es posible registrar el cliente");
      }
    },

    lstCategories: state.lstCategories,

  }), [state.lstCategories]);



  const getHeaderTitle = (route) =>
  {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

    console.log("routeName--> " + getFocusedRouteNameFromRoute(route));
  
    switch (routeName) 
    {
      case 'Invoices':
        return 'My Facturas';

      case 'Home':
        return 'My Home';

      case 'Settings':
        return 'My Ajustes';

      case 'RouteHome':
        let routeNameChild = JSON.stringify(route);
        console.log(routeNameChild)

        let indexRouteNameChild = routeNameChild.indexOf("StoreInformation");
      
        var title = 'Pandi';
  
        if (-1 !== indexRouteNameChild)
        {
          title = 'Detalle Tienda';
        }

        return title;
  
      case 'Offers':
        return '';

      case 'OfferDetail':
        return '';
    }
  }


  const getHeaderRight = (route) =>
  {
    console.log("getHeaderRight --> " + route)
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

    return routeName;
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
                    ),
                    // headerRight:() => 
                    // (
                    //   <Box width="90%" borderColor_="green.500" borderWidth_="1">
                    //     <Image source={require('./assets/logo_header.png')} alt="Alternate Text" resizeMode="contain" width={32} height={20}/>
                    //   </Box>
                    // )
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
                    // headerRight:() =>
                    // (
                    //   <Text>{getHeaderRight(route)}</Text>
                    // )
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