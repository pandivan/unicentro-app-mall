import React, { useReducer, useMemo, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NativeBaseProvider, Image, Box, HamburgerIcon, Center } from "native-base";
import { Alert } from "react-native";
import { MaterialCommunityIcons, Ionicons, Fontisto } from '@expo/vector-icons';
import * as SecureStore from "expo-secure-store";
import "react-native-gesture-handler";

import RouteHome from "./src/routes/RouteHome";
import RouteAuthentication from "./src/routes/RouteAuthentication";
import SplashScreen from "./src/components/SplashScreen";
import AppContext from "./src/contexts/AppContext"
import DrawerContentMenu from "./src/screens/home/DrawerContentMenu";
import clientServices from "./src/services/ClientServices";
import Directory from "./src/screens/directory/Directory";
import StoreInformation from "./src/screens/directory/StoreInformation";
import Offers from "./src/screens/directory/Offers";
import OfferDetail from "./src/screens/directory/OfferDetail";
import categoriesServices from "./src/services/CategoriesServices";
import Constants from "./src/utilities/Constants";





//Creando Menu de Navegación
const Drawer = createDrawerNavigator();


export default function App() 
{

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
        console.log("*** UseEffect APP ****");
        
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
        console.log(error);
        Alert.alert("Información", "No es posible consultar el cliente");
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


  return (
    <NativeBaseProvider>
      <AppContext.Provider value={appContext}>
        <NavigationContainer>
        {
          (state.userToken !== null) ?
          (
            <Drawer.Navigator 
              initialRouteName="RouteHome" 
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
                      <Center ml="3" backgroundColor="white" borderColor_="red.500" borderWidth_="1" shadow="3" rounded="100" width="10" height="10">
                        <HamburgerIcon onPress={navigation.toggleDrawer} size="md" color="#f18032"/>
                      </Center>
                    ),
                    headerRight:() => 
                    (
                      <Box width="90%" borderColor_="green.500" borderWidth_="1">
                        <Image source={require('./assets/logo_header.png')} alt="Alternate Text" resizeMode="contain" width={32} height={20}/>
                      </Box>
                    )
                })
              }
            >
              <Drawer.Screen 
                name="RouteHome" 
                component={RouteHome}
                options={{headerTitle:""}}
              />

              <Drawer.Screen 
                name="Directory" 
                component={Directory}
                options={{headerTitle:"Directorio", headerTitleStyle:{fontWeight:"700"},  headerTitleAlign:"center"}}
              />

              <Drawer.Screen 
                name="StoreInformation" 
                component={StoreInformation}
                options={{headerTitle:""}}
              />

              <Drawer.Screen 
                name="Offers" 
                component={Offers}
                options={{headerTitle:"Promociones", headerTitleStyle:{fontWeight:"700"},  headerTitleAlign:"center"}}
              />

              <Drawer.Screen 
                name="OfferDetail" 
                component={OfferDetail}
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