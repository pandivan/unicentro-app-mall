import React, { useState, useEffect } from "react";
import { VStack, HStack, Center, Box, Heading, Text, Pressable, Image, StatusBar, Button, Icon, IconButton } from "native-base";
import { MaterialCommunityIcons, Ionicons, Fontisto } from '@expo/vector-icons';

import * as SecureStore from "expo-secure-store";

import Constants from "../../utilities/Constants";
import data from "../home/data";



/**
 * Componente funcional que contiene el menú de directorio por categorías y productos
 * @returns Screen Directorio
 */
 const Directory = (props) =>
 {

  const [backgroundColor, setBackgroundColor] = useState("red.500");
  const [backgroundColorPressed, setBackgroundColorPressed] = useState("");


  return(
    <Center>
      <HStack mt="5" justifyContent="center" space={5} width="100%" borderColor_="red.600" borderWidth_="1">
        <VStack alignItems="center">
          <Center borderRadius="100" shadow={1} background="#39bec2" width="16" height="16">
            <IconButton 
              icon={<Icon as={MaterialCommunityIcons} name="storefront-outline" size={9} color="white"/>} 
              _pressed_={{bg: "#78C9CC"}}
              borderRadius="100"
            />
          </Center>
          <Text mt="2">Tiendas</Text>
        </VStack>
        
        <VStack alignItems="center">
          <Center borderRadius="100" shadow={1} background="white" width="16" height="16">
            <IconButton 
              icon={<Icon as={Fontisto} name="smiley" size={9} color="#b5b5b5"/>} 
              _pressed_={{bg: "#78C9CC"}}
              borderRadius="100"
            />
          </Center>
          <Text mt="2">Entretenimiento</Text>
        </VStack>

        <VStack alignItems="center">
          <Center borderRadius="100" shadow={1} background="white" width="16" height="16">
            <IconButton 
              icon={<Icon as={Ionicons} name="restaurant-outline" size={9} color="#b5b5b5"/>} 
              _pressed={{bg: "red.500"}}
              borderRadius="100"
            />
          </Center>
          <Text mt="2">Gastronomía</Text>
        </VStack>
        
      </HStack>
    </Center>
  );
 }
 
 export default Directory;