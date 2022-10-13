import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { VStack, HStack, Center, Box, Heading, Text, Pressable, Image, ScrollView, StatusBar, Button, Spacer } from "native-base";
import Swiper from "react-native-swiper";

import * as SecureStore from "expo-secure-store";

import data from "./data";
import Constants from "../../utilities/Constants";
import indicatorService from "../../services/IndicatorService";
import HeaderFilters from "../../components/HeaderFilters";
import pointSaleService from "../../services/PointSaleService";


var {height, width } = Dimensions.get("window");



/**
 * Componente funcional que contiene los indicadores del home
 * @returns Screen Home
 */
const Home = ({ navigation, route }) =>
{
  const [unit, setUnit] = useState("quantity");
  const [lstDailySales, setLstDailySales] = useState([]);
  const [lstDataIndicator, setLstDataIndicator] = useState([]);

  let arrayBanner =
  [
    "http://tutofox.com/foodapp//banner/banner-1.jpg",
    "http://tutofox.com/foodapp//banner/banner-2.jpg",
    "http://tutofox.com/foodapp//banner/banner-3.png"
  ];


  /**
   * Funcion que permite cargar los puntos de venta asociados al vendedor
   */
  useEffect(() => 
  {
    console.log("useEffect Home");

    const loadData = async () => 
    {
      try 
      {
        //Se obtiene los puntos de venta a traves del api-rest
        let {status, lstPointsSaleBD} = await pointSaleService.getAllPointsSale();

        switch (status)
        {
          case Constants.STATUS_OK:
            // Se adiciona el componente HeaderFilters al header de la barra de navegación con los puntos de venta JSON.parse(lstPointsSale)
            navigation.setOptions({ headerRight:() => (<HeaderFilters data={lstPointsSaleBD} storePointSale={storePointSale} storeUnit={storeUnit}/>) });

            // Se almacenan los puntos de venta en el storage
            await SecureStore.setItemAsync("lstPointsSale", JSON.stringify(lstPointsSaleBD));
            console.log("useEffect RouteHome")
          break;

          case Constants.STATUS_ACCESO_DENEGADO:
            console.log("acceso denegado ap")
          break;

          default:
            //Valida si hubo un error en el api-rest
            //Si tiene token es porque estoy logueado y debo informar que hubo un error en el backend
          //  if(autenticacionServices.getToken())
          //  {
          //    setMensajePopup("En el momento no es posible acceder a la\ninformación, favor intentarlo más tarde.");
          //    setMostrarPopup(true);
          //  }
            console.log("acceso denegado")
          break;
        }
      }
      catch (error) 
      {
        console.log("Error al cargar la data en RouteHome")
      }
      
      //Se obtienen los puntos de ventas del storage
      // let lstPointsSale = await SecureStore.getItemAsync("lstPointsSale");
    }

    loadData();
    loadDailySales("7701001003306", "quantity");
    
    loadDataIndicator("7701001002804#JUAN CARLOS GONZALEZ#1#quantity");
  }, []);


  /**
   * Función que permite almacenar en el storage el ean del punto de venta seleccionado
   * @para eanPointSale Ean del punto de venta seleccionado
   */
  const storePointSale = async (eanPointSale) => 
  {
    console.log("storePointSale--> " + eanPointSale);
    try 
    {
      await SecureStore.setItemAsync("eanPointSale", JSON.stringify(eanPointSale));

      loadDailySales(eanPointSale);
      loadDataIndicator(eanPointSale.concat("#JUAN CARLOS GONZALEZ#1#").concat(unit));
    }
    catch(error)
    {
      console.log("error al guardar el eanPointSale (Home)")
    }
  }


  /**
   * Función que permite almacenar en el storage la unidad seleccionada [cantidad, valor]
   * @param unit Unidad seleccionada
   */
  const storeUnit = async (unit) => 
  {
    console.log("unit--> " + unit);
    try 
    {
      await SecureStore.setItemAsync("unit", JSON.stringify(unit));

      setUnit(unit);
    }
    catch(error)
    {
      console.log("error al guardar el eanPointSale (Home)")
    }
  }


  /**
   * Función que permite cargar la data para los indicadores desde el API-REST según el punto de venta seleccionado
   * @param eanPointSale Ean del punto de venta
   */
  const loadDailySales = async (eanPointSale) => 
  {
    try 
    {
      //Se obtiene la data para el indicador de ventas diarias según el punto de venta seleccionado a traves del api-rest
      let { status, lstDailySalesBD } = await indicatorService.loadDailySales(eanPointSale, "KCM ALMACENES EXITO");

      switch (status) 
      {
        case Constants.STATUS_OK:
          setLstDailySales(lstDailySalesBD);
          break;

        case Constants.STATUS_ACCESO_DENEGADO:
          //Si tiene token es porque estoy logueado y debo informar que la sesión expiro
          //  if(autenticacionServices.getToken())
          //  {
          //    setMensajePopup("Tu sesión ha expirado!!!");
          //    setMostrarPopup(true);
          //  }

          //  autenticacionServices.removerToken();
          console.log("acceso denegado home");
          break;

        default:
          //Valida si hubo un error en el api-rest
          //Si tiene token es porque estoy logueado y debo informar que hubo un error en el backend
          //  if(autenticacionServices.getToken())
          //  {
          //    setMensajePopup("En el momento no es posible acceder a la\ninformación, favor intentarlo más tarde.");
          //    setMostrarPopup(true);
          //  }
          console.log("acceso denegado");
          break;
      }
    } 
    catch (error) 
    {
      //TODO: Guardar log del error en BD
      console.log("error al obtener la data para el indicador de ventas diarias (Home)");
    }
  };


  const loadDataIndicator = async (sk) => 
  {
    try 
    {
      //Se obtiene la data para el indicador de ventas diarias según el punto de venta seleccionado a traves del api-rest
      let { status, lstDataIndicatorBD } = await indicatorService.loadDataIndicator(sk);

      switch (status) 
      {
        case Constants.STATUS_OK:
          setLstDataIndicator(lstDataIndicatorBD);
          break;

        case Constants.STATUS_ACCESO_DENEGADO:
          //Si tiene token es porque estoy logueado y debo informar que la sesión expiro
          //  if(autenticacionServices.getToken())
          //  {
          //    setMensajePopup("Tu sesión ha expirado!!!");
          //    setMostrarPopup(true);
          //  }

          //  autenticacionServices.removerToken();
          console.log("acceso denegado home");
          lstDataIndicatorBD = null;
          break;

        default:
          //Valida si hubo un error en el api-rest
          //Si tiene token es porque estoy logueado y debo informar que hubo un error en el backend
          //  if(autenticacionServices.getToken())
          //  {
          //    setMensajePopup("En el momento no es posible acceder a la\ninformación, favor intentarlo más tarde.");
          //    setMostrarPopup(true);
          //  }
          console.log("acceso denegado");
          lstDataIndicatorBD = null;
          break;
      }

      return lstDataIndicatorBD;
    } 
    catch (error) 
    {
      //TODO: Guardar log del error en BD
      console.log("error al obtener la data para el indicador de ventas diarias (Home)");
    }
  };
  
  
  /**
   * Función que permite definir el color del pie según la meta del presupuesto del vendedor
   * @param datum Valor heredado del componente VictoryPie que contiene los valores [x, y] enviados en la data
   * @returns Color
   */
  const validateColor = ({ datum }) => 
  {
    let color = "#6a55be";
    if(datum.y < 30)
    {
      color="red";
    }
    else
    {
      if(datum.y > 30 && datum.y < 60)
      {
        color="orange";
      }
    }
    return datum.x === 1 ? color : "transparent";
  }


  return (
    <Center flex={1} borderColor_="green.500" borderWidth_="3">
      {/* <StatusBar barStyle="light-content" backgroundColor_="#1B2028" /> */}

      <Center px="2" backgroundColor_="#0F1319" justifyContent_="flex-start" alignItems_="flex-start" width="100%" borderColor_="red.500" borderWidth_="2">
        <ScrollView maxW="100%" height="100%" pt="1" _contentContainerStyle_={{borderColor:"blue.500", borderWidth:"5"}}>
          
          {/* Banner */}
          <Box justifyContent="center" mb="5" mt="1" mx="1" borderColor_="blue.500" borderWidth_="2">
            <Swiper showsButtons={false} autoplay_={true} autoplayTimeout={4}>
            {
              arrayBanner.map((banner, index)=>
              {
                return( <Image key={index} source={{uri: banner}} resizeMode="contain" borderRadius="10" width="100%" height="100%" alt="Alternate Text"/> )
              })
            }
            </Swiper>
          </Box>
          
          
          
          <HStack mt="1" borderColor_="green.600" borderWidth_="1">

            <VStack alignItems="center" width="50%" space={3} borderColor_="red.600" borderWidth_="1">
              {/* Tarjeta Tiendas */}
              <Pressable maxW_="40" width_="50%">
              {
                ({ isPressed }) => 
                {
                  return (
                    <Box background={isPressed ? "#78C9CC" : "#39bec2"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} p="2" rounded="20" height="210" width="40">
                      <VStack>
                        <Text ml="2" fontSize="14" fontWeight="700" color="white" borderColor_="gray.300" borderWidth_="3">
                          icono 
                        </Text>

                        <Text mt="3" m="2" fontSize="14" fontWeight="700" color="white" borderColor_="gray.300" borderWidth_="3">
                          Tiendas
                        </Text>
                      </VStack>
                    </Box>
                  );
                }
              }
              </Pressable>
              
              {/* Tarjeta Entretenimiento */}
              <Pressable maxW_="40" width_="50%">
              {
                ({ isPressed }) => 
                {
                  return (
                    <Box background={isPressed ? "#E1E667" : "#d9e022"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} p="2" rounded="20" height="120" width="40">
                      <VStack>
                        <Text ml="2" fontSize="14" fontWeight="700" color="white" borderColor_="gray.300" borderWidth_="3">
                          icono 
                        </Text>

                        <Text mt="3" m="2" fontSize="14" fontWeight="700" color="white" borderColor_="gray.300" borderWidth_="3">
                          Entretenimiento
                        </Text>
                      </VStack>
                    </Box>
                  );
                }
              }
              </Pressable>
            </VStack>

            <VStack alignItems="center" width="50%" space={3} borderColor_="blue.600" borderWidth_="1">
              {/* Tarjeta de Bancos */}
              <Pressable maxW_="48" width_="50%">
              {
                ({ isPressed }) => 
                {
                  return (
                    <Box background={isPressed ? "#8965A4" : "#662e91"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} p="2" rounded="20" height="120" width="40" borderColor_="blue.500" borderWidth_="1">
                      <VStack>
                        <Text ml="2" fontSize="14" fontWeight="700" color="white" borderColor_="gray.300" borderWidth_="3">
                          icono
                        </Text>

                        <Text mt="3" m="2" fontSize="14" fontWeight="700" color="white" borderColor_="gray.300" borderWidth_="3">
                          Bancos
                        </Text>
                      </VStack>
                    </Box>
                  );
                }
              }
              </Pressable>
              
              {/* Tarjeta de promociones */}
              <Pressable maxW_="48" width_="50%">
              {
                ({ isPressed }) => 
                {
                  return (
                    <Box background={isPressed ? "#F07F94" : "#ec3657"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} p="2" rounded="20" height="210" width="40" borderColor_="blue.500" borderWidth_="1">
                      <VStack>
                        <Text ml="2" fontSize="14" fontWeight="700" color="white" borderColor_="gray.300" borderWidth_="3">
                          icono
                        </Text>

                        <Text mt="3" m="2" fontSize="14" fontWeight="700" color="white" borderColor_="gray.300" borderWidth_="3">
                          Comidas
                        </Text>
                      </VStack>
                    </Box>
                  );
                }
              }
              </Pressable>
            </VStack>

          </HStack>
        </ScrollView>
      </Center>
    </Center>
  );
}


export default Home;