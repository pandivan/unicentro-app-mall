import React, { useState, useEffect } from "react";
import { ScrollView, Alert } from "react-native";
import { VStack, HStack, Center, Box, Heading, Text, Pressable, Image } from "native-base";
import Swiper from "react-native-swiper";

import SocialNetworks from "../../components/SocialNetworks";
import categoriesServices from "../../services/CategoriesServices";
import Constants from "../../utilities/Constants";





/**
 * Componente funcional que contiene las categorías del home
 * @returns Screen Home
 */
const Home = ({ navigation, route }) =>
{
  const [lstCategories, setLstCategories] = useState([]);

  let arrayBanner =
  [
    "https://drive.google.com/uc?id=1xMQkLbEUjHkxbdJI6k137fma9sBWnb9t",
    "https://drive.google.com/uc?id=1GUnjHmt-OiTmqLRTzWBfDNc5EsiC6Dcx"
  ];

  let storeUnicentro = 
  {
    idStore:0,
    name:'Unicentro Pasto',
    phone:'3143343756',
    socialNetworks:
    {
      website:'https://www.ccunicentropasto.com',
      instagram:'unicentropasto',
      facebook:'unicentropasto',
      whatsapp:'3143343756'
    }
  };


  /**
   * Funcion que permite cargar las categorias del home
   */
  useEffect(() =>
  {
    const loadData = async () =>
    {
      try
      {
        console.log("*** UseEffect Home ****");

        //Se obtiene las categorias y sus tiendas a traves del api-rest
        let {status, lstCategoriesBD} = await categoriesServices.getAllCategories();

        if(Constants.STATUS_OK === status)
        {
          // Se almacenan las categorias en el contexto
          setLstCategories(lstCategoriesBD);
        }
        else
        {
          Alert.alert("Información", "En el momento no es posible acceder a la información,\nfavor intentarlo más tarde.");
          navigation.navigate("SplashScreen");
        }
      }
      catch (error)
      {
        console.log(error);
        Alert.alert("Información", "En el momento no es posible acceder a la información,\nfavor intentarlo más tarde.");
        navigation.navigate("SplashScreen");
      }
    };

    loadData();
  }, []);



  return (
    <ScrollView showsVerticalScrollIndicator ={false}>
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
        
        {
          0 !== lstCategories.length ?
          (
            <HStack mt="1" borderColor_="green.600" borderWidth_="1">

              <VStack alignItems="center" width="50%" space={3} borderColor_="red.600" borderWidth_="1">
                {/* Tarjeta Tiendas */}
                <Pressable onPress={() => navigation.navigate("RouteDirectory", { screen:"Directory", params:{ idCategory: lstCategories[0].idCategory, lstCategories } })}>
                {
                  ({ isPressed }) => 
                  {
                    return (
                      <Box background={isPressed ? "#78C9CC" : "#39BFC2"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} pt="2" rounded="20" height="210" width="40">
                        <VStack height="100%" justifyContent="space-between">
                          <Text ml="2" fontSize="16" fontWeight="700" color="white" borderColor_="gray.300" borderWidth_="3">
                            {lstCategories[0].categoryName} 
                          </Text>
                          <Image mb="-0.5" source={{uri:lstCategories[0].urlCategoryImage}} alt="Alternate Text" resizeMode_="contain" borderBottomLeftRadius="20" width={32} height={32}/>
                        </VStack>
                      </Box>
                    );
                  }
                }
                </Pressable>
                
                {/* Tarjeta Entretenimiento */}
                <Pressable onPress={() => navigation.navigate("RouteDirectory", { screen:"Directory", params:{ idCategory:3 } })}>
                {
                  ({ isPressed }) => 
                  {
                    return (
                      <Box background={isPressed ? "#E1E667" : "#d9e022"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} pt="2" rounded="20" height="120" width="40">
                        <VStack height="100%" justifyContent="space-between">
                          <Text ml="2" fontSize="16" fontWeight="700" color="white" borderColor_="gray.300" borderWidth_="3">
                            {lstCategories[2].categoryName} 
                          </Text>
                          <Image ml="-1" source={{uri:lstCategories[2].urlCategoryImage}} alt="Alternate Text" resizeMode_="contain" borderBottomLeftRadius="20" width={24} height={20}/>
                        </VStack>
                      </Box>
                    );
                  }
                }
                </Pressable>
              </VStack>

              <VStack alignItems="center" width="50%" space={3} borderColor_="blue.600" borderWidth_="1">
                {/* Tarjeta de Bancos */}
                <Pressable onPress={() => navigation.navigate("RouteDirectory", { screen:"Directory", params:{ idCategory: lstCategories[1].idCategory } })}>
                {
                  ({ isPressed }) => 
                  {
                    return (
                      <Box background={isPressed ? "#8965A4" : "#662e91"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} pt="2" rounded="20" height="120" width="40" borderColor_="blue.500" borderWidth_="1">
                        <VStack height="100%" justifyContent="space-between">
                          <Text ml="2" fontSize="15" fontWeight="700" color="white" borderColor_="gray.300" borderWidth_="3">
                            {lstCategories[1].categoryName} 
                          </Text>
                          {/* <Box alignItems="flex-end" p="0" borderColor_="black" borderWidth_="1"> */}
                          <Image mr="-1" source={{uri:lstCategories[1].urlCategoryImage}} alt="Alternate Text" resizeMode_="contain" borderBottomRightRadius="20" width={24} height={20}/>
                          {/* </Box> */}
                        </VStack>
                      </Box>
                    );
                  }
                }
                </Pressable>
                
                {/* Tarjeta de comidas */}
                <Pressable onPress={() => navigation.navigate("RouteDirectory", { screen:"Directory", params:{ idCategory:4 } })}>
                {
                  ({ isPressed }) => 
                  {
                    return (
                      <Box background={isPressed ? "#F07F94" : "#ec3657"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} pt="2" rounded="20" height="210" width="40" borderColor_="blue.500" borderWidth_="1">
                        <VStack height="100%" justifyContent="space-between">
                          <Text ml="2" fontSize="15" fontWeight="700" color="white" borderColor_="gray.300" borderWidth_="3">
                            {lstCategories[3].categoryName} 
                          </Text>
                          <Image mb="-1" source={{uri:lstCategories[3].urlCategoryImage}} alt="Alternate Text" resizeMode_="contain" borderBottomLeftRadius="20" width={32} height={32}/>
                        </VStack>
                      </Box>
                    );
                  }
                }
                </Pressable>
              </VStack>

            </HStack>
          )
          :
          null
        }
        
        <SocialNetworks store={storeUnicentro} />
      </Center>
    </ScrollView>
  );
}


export default Home;