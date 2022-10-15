import React, { useState, useEffect } from "react";
import { VStack, HStack, Center, Box, Heading, Text, Avatar, Image, Spacer, StatusBar, Button, Divider } from "native-base";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import * as SecureStore from "expo-secure-store";

import data from "./data";
import { FlatList } from "react-native";



/**
 * Componente funcional que contiene los items del menú
 * @returns Screen Menú
 */
const DrawerContent = (props) =>
{

  const previewMenu = (item) => 
  {
    return(
      <Box borderBottomWidth="1" borderColor="muted.200" mx="3" py="2" borderColor_="blue.500" borderWidth_="1">
        <HStack space={3} justifyContent_="space-between">
          <Avatar size="45px" source={{uri: item.avatarUrl}} />
          <VStack>
            <Text fontSize="md" color="coolGray.800" bold>
              {item.fullName}
            </Text>
            <Text fontSize="xs" color="coolGray.400">
              {item.recentText}
            </Text>
          </VStack>
        </HStack>
      </Box>
    )
  }


  return(
    <Box my="8" width_="80" borderColor_="red.500" borderWidth_="1">
      <Heading fontSize="xl" p="4" pb="8" mb="4" borderColor="muted.800" borderBottomWidth="1">
        Menú
      </Heading>
      <FlatList 
        data={data.dataMenu} 
        renderItem={({item}) => previewMenu(item)} 
        keyExtractor={item => item.id} />
    </Box>
  );
}

export default DrawerContent;