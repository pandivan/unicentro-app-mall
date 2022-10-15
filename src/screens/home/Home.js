import React, { useState, useEffect } from "react";
import { VStack, HStack, Center, Box, Heading, Text, Pressable, Image, ScrollView, StatusBar, Button, Spacer } from "native-base";
import Swiper from "react-native-swiper";

import * as SecureStore from "expo-secure-store";

import Constants from "../../utilities/Constants";
import pointSaleService from "../../services/PointSaleService";





/**
 * Componente funcional que contiene los indicadores del home
 * @returns Screen Home
 */
const Home = ({ navigation, route }) =>
{

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
  }, []);



  return (
    <Center flex={1} borderColor_="green.500" borderWidth_="3">
      {/* <StatusBar barStyle="light-content" backgroundColor_="#1B2028" /> */}

      <Center px="2" backgroundColor_="#0F1319" justifyContent_="flex-start" alignItems_="flex-start" width="100%" borderColor_="red.500" borderWidth_="2">
        <ScrollView maxW="100%" height="100%" pt="1" _contentContainerStyle_={{borderColor:"blue.500", borderWidth:"5"}}>
          
          {/* Banner */}
          <Box justifyContent="center" mb="5" mt="1" mx="1" height="48" borderColor_="blue.500" borderWidth_="2">
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