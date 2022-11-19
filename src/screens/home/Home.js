import React, { useState, useEffect, useContext } from "react";
import { Alert } from "react-native";
import { VStack, HStack, Center, Box, Heading, Text, Pressable, Image, ScrollView, StatusBar, Button, Spacer } from "native-base";
import Swiper from "react-native-swiper";

import * as SecureStore from "expo-secure-store";

// import categoriesServices from "../../services/CategoriesServices";
// import Constants from "../../utilities/Constants";
import AppContext from "../../contexts/AppContext";
import HeaderTitle from "../../components/HeaderTitle";





/**
 * Componente funcional que contiene los indicadores del home
 * @returns Screen Home
 */
const Home = ({ navigation, route }) =>
{
  //Hook que permite invocar el atributo lstCategories del App.js (useMemo), el cual contiene las categorías previamente cargadas al iniciar la APP
  const { lstCategories }  = useContext(AppContext);

  const [lstHomeCategories, setLstHomeCategories] = useState([]);

  var pepe = "Tiendas.png";

  let arrayBanner =
  [
    "http://tutofox.com/foodapp//banner/banner-1.jpg",
    "http://tutofox.com/foodapp//banner/banner-2.jpg",
    "http://tutofox.com/foodapp//banner/banner-3.png"
  ];


  /**
   * Funcion que permite cargar la data inicial para el screen del home
   */
  useEffect(() => 
  {
    // console.log("useEffect Home ");

    const loadData = () => 
    {
      // Se obtiene las categorías que se deben pintar en el home según el tipo de categoría... 
      // 1 = Se pinta en home
      // 2 = Se pinta en directorio
      // 3 = Se pinta en home y directorio
      let lstHomeCategories = lstCategories.filter(category => (1 === category.type || 3 === category.type));

      setLstHomeCategories(lstHomeCategories);
    }

    loadData();
  }, []);


  useEffect(() => 
  {
    HeaderTitle.unsubscribe(navigation, "");
  }, [navigation]);



  return (
    <Center flex={1} px="2" backgroundColor="white" justifyContent="flex-start" width="100%" borderColor_="red.500" borderWidth_="2">  
      {/* Banner */}
      <Box justifyContent="center" mb="5" mx="1" height="48" borderColor_="blue.500" borderWidth_="2">
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
          <Pressable onPress={() => navigation.navigate("Directory")}>
          {
            ({ isPressed }) => 
            {
              return (
                <Box background={isPressed ? "#78C9CC" : "#39bec2"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} pt="2" rounded="20" height="210" width="40">
                  <VStack height="100%" justifyContent="space-between">
                    <Text ml="2" fontSize="17" fontWeight="700" color="white" borderColor_="gray.300" borderWidth_="3">
                      {lstCategories ? lstCategories[0].categoryName : null} 
                    </Text>
                    {
                      lstCategories ?
                        <Image source={{uri:lstCategories[0].urlCategoryImage}} alt="Alternate Text" resizeMode="contain" borderBottomLeftRadius="20" width={32} height={32}/>
                      :
                      null
                    }
                  </VStack>
                </Box>
              );
            }
          }
          </Pressable>
          
          {/* Tarjeta Entretenimiento */}
          <Pressable onPress={() => navigation.navigate("StoreInformation")}>
          {
            ({ isPressed }) => 
            {
              return (
                <Box background={isPressed ? "#E1E667" : "#d9e022"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} pt="2" rounded="20" height="120" width="40">
                  <VStack height="100%" justifyContent="space-between">
                    <Text ml="2" fontSize="14" fontWeight="700" color="white" borderColor_="gray.300" borderWidth_="3">
                      {lstCategories ? lstCategories[2].categoryName : null} 
                    </Text>
                    {
                      lstCategories ?
                        <Image source={{uri:lstCategories[2].urlCategoryImage}} alt="Alternate Text" resizeMode="contain" borderBottomLeftRadius="20" width={24} height={20}/>
                      :
                      null
                    }
                  </VStack>
                </Box>
              );
            }
          }
          </Pressable>
        </VStack>

        <VStack alignItems="center" width="50%" space={3} borderColor_="blue.600" borderWidth_="1">
          {/* Tarjeta de Bancos */}
          <Pressable onPress={() => navigation.navigate("Offers")}>
          {
            ({ isPressed }) => 
            {
              return (
                <Box background={isPressed ? "#8965A4" : "#662e91"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} pt="2" rounded="20" height="120" width="40" borderColor_="blue.500" borderWidth_="1">
                  <VStack height="100%" justifyContent="space-between">
                    <Text ml="2" fontSize="14" fontWeight="700" color="white" borderColor_="gray.300" borderWidth_="3">
                      {lstCategories ? lstCategories[1].categoryName : null} 
                    </Text>
                    <Box alignItems="flex-end" p="0" borderColor_="black" borderWidth_="1">
                    {
                      lstCategories ?
                        <Image source={{uri:lstCategories[1].urlCategoryImage}} alt="Alternate Text" resizeMode="contain" borderBottomRightRadius="20" width={24} height={20}/>
                      :
                      null
                    }
                    </Box>
                  </VStack>
                </Box>
              );
            }
          }
          </Pressable>
          
          {/* Tarjeta de comidas */}
          <Pressable onPress={() => navigation.navigate("Offers")}>
          {
            ({ isPressed }) => 
            {
              return (
                <Box background={isPressed ? "#F07F94" : "#ec3657"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} pt="2" rounded="20" height="210" width="40" borderColor_="blue.500" borderWidth_="1">
                  <VStack height="100%" justifyContent="space-between">
                    <Text ml="2" fontSize="14" fontWeight="700" color="white" borderColor_="gray.300" borderWidth_="3">
                      {lstCategories ? lstCategories[3].categoryName : null} 
                    </Text>
                    {
                      lstCategories ?
                        <Image source={{uri:lstCategories[3].urlCategoryImage}} alt="Alternate Text" resizeMode="contain" borderBottomLeftRadius="20" width={32} height={32}/>
                      :
                      null
                    }
                  </VStack>
                </Box>
              );
            }
          }
          </Pressable>
        </VStack>

      </HStack>
    </Center>
  );
}


export default Home;