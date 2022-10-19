import React, { useState, useEffect, useContext } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { VStack, HStack, Center, Box, Heading, Text, Pressable, Image, StatusBar, Button, Icon, Input } from "native-base";
import { MaterialCommunityIcons, Ionicons, Fontisto } from '@expo/vector-icons';

import * as SecureStore from "expo-secure-store";

import AppContext from '../../contexts/AppContext';



/**
 * Componente funcional que contiene el directorio por categorías y productos
 * @returns Screen Directorio
 */
 const Directory = (props) =>
 {

  //Hook que permite invocar al metodo loadCategories(useMemo) del App.js
  const { lstCategories }  = useContext(AppContext);

  const [lstDirectoryCategories, setLstDirectoryCategories] = useState([]);
  const [lstStores, setLstStores] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("red.500");


  /**
   * Funcion que permite cargar la data inicial del home
   */
  useEffect(() => 
  {
    console.log("useEffect Directory");

    const loadData = async () => 
    {
      try 
      {
        // Se obtiene las categorías que se deben pintar en el header del directorio según el tipo de categoría...
        // 1 = Se pinta en home
        // 2 = Se pinta en directorio
        // 3 = Se pinta en home y directorio
        let lstDirectoryCategories = lstCategories.filter(category => (2 === category.type || 3 === category.type));
        
        setLstDirectoryCategories(lstDirectoryCategories);
      }
      catch (error) 
      {
        console.log("Error al cargar el categories (Directory)")
      }
    }

    loadData();
  }, []);


  /**
   * Función que permite obtener las tiendas según la categoría seleccionada
   * @param idCategory Id de la categoría seleccionada
   */
  const loadStores = (idCategory) =>
  {
    let category = lstDirectoryCategories.filter(category => (idCategory === category.idCategory))[0];
    
    // category.lstStores.map((category, index)=>
    // {
    //   console.log(category)
    // });

    setLstStores(category.lstStores);
  }


  /**
   * Funcion que permite listar las tiendas segun la categoria seleccionada
   * @param store Tienda
   * @returns Componente que visualiza las tiendas
   */
  const renderStores = (store) => 
  {

    return(
      <Pressable height="32" width="80" mt="5" borderColor_="red.500" borderWidth_="1">
      {
        ({ isPressed }) => 
        {
          return (
            <Center background={isPressed ? "#F2F2F2" : "white"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} rounded="20" height="100%" width="100%" shadow="5" borderColor="gray.300" borderWidth="1">
              <HStack space={10} borderColor_="red.500" borderWidth_="1">
                <Center borderColor_="blue.500" borderWidth_="1">
                  <Image source={{uri:"https://drive.google.com/uc?id=1YW-KgxgMjqUP1aapxUTb73r7ASEcep-C"}} alt="Alternate Text" resizeMode="cover" width={16} height={16}/>
                </Center>

                <VStack height="100%" borderColor_="green.500" borderWidth_="1">
                  <Text fontSize="23" fontWeight="700" color="black" borderColor_="gray.300" borderWidth_="3">
                    Arturo Calle
                  </Text>
                  <Text fontSize="15" color="#f18032">
                    Ropa Casual y Formal
                  </Text>
                  <Center mt="2" height="10" width="110px" _text={{color:"#f18032", fontWeight:"600", fontSize:"lg"}} rounded="18" borderColor="#f18032" borderWidth="2">
                    Local 1-41
                  </Center>
                </VStack>
              </HStack>
            </Center>
          );
        }
      }
      </Pressable>
    )
  }


  return(
    <Center backgroundColor_="white">
      <HStack mt="5" justifyContent="center" space={5} width="100%" borderColor_="red.600" borderWidth_="1">
      {
        lstDirectoryCategories.map((category, index)=>
        {
          return (
            <VStack key={index} alignItems="center">
              <Pressable onPress={() => loadStores(category.idCategory)}>
              {
                ({ isPressed }) => 
                {
                  return (
                    <Center bg={isPressed ? "#78C9CC" : "white"} shadow="3" rounded="100" width="16" height="16" style={{transform: [{scale: isPressed ? 0.96 : 1}]}}>
                      <Image source={{uri:category.urlCategoryIcon}} alt="Alternate Text" size="xs" rounded="100"/>
                    </Center>
                  )
                }
              }
              </Pressable>
              <Text mt="2">{category.categoryName}</Text>
            </VStack>
          )        
        })
      }
      </HStack>

      <Input placeholder="Search" variant="filled" width="90%" borderColor="#f18032" _focus={{borderColor:"#f18032", backgroundColor:"white"}} borderRadius="10" mt="8" py="1" px="2" InputRightElement={<Icon mr="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />

      {/* <SafeAreaView style={{flex_:1, width:200}}> */}
        <FlatList style={{ backgroundColor: "#fff" }}
          data={lstStores} 
          renderItem={({item}) => renderStores(item)} 
          keyExtractor={item => item.idStore} 
          style_={{width:100}}
        />
      {/* </SafeAreaView> */}
    </Center>
  );
 }
 
 export default Directory;