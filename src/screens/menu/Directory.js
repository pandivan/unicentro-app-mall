import React, { useState, useEffect, useContext } from "react";
import { VStack, HStack, Center, Box, Heading, Text, Pressable, Image, StatusBar, Button, Icon, IconButton } from "native-base";
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

  const [directoryCategories, setDirectoryCategories] = useState([]);
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
        let directoryCategories = lstCategories.filter(category => (2 === category.type || 3 === category.type)); console.log(directoryCategories.length);

        setDirectoryCategories(directoryCategories);
      }
      catch (error) 
      {
        console.log("Error al cargar el categories (Directory)")
      }
    }

    loadData();
  }, []);



  return(
    <Center>
      <HStack mt="5" justifyContent="center" space={5} width="100%" borderColor_="red.600" borderWidth_="1">
      {
        directoryCategories.map((category, index)=>
        {
          <VStack alignItems="center">
            <Pressable>
            {
              ({ isPressed }) => 
              {
                return (
                  <Center bg={isPressed ? "#78C9CC" : "#39bec2"} shadow={1}  rounded="100" width="16" height="16" style={{transform: [{scale: isPressed ? 0.96 : 1}]}}>
                    <Image source={{uri: "https://wallpaperaccess.com/full/317501.jpg"}} alt="Alternate Text" size="xs" rounded="100"/>
                  </Center>
                );
              }
            }
            </Pressable>
            <Text mt="2">{category.categoryName}</Text>
          </VStack>        
        })
      }
      </HStack>
    </Center>
  );
 }
 
 export default Directory;