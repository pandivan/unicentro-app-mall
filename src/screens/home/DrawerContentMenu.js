import React, { useState, useEffect } from "react";
import { VStack, HStack, Center, Box, Heading, Text, Avatar, Image, Spacer, StatusBar, Button, Divider } from "native-base";
import { FlatList } from "react-native";

import Constants from "../../utilities/Constants";
import menuServices from "../../services/MenuServices";



/**
 * Componente funcional que contiene el menú
 * @returns Screen Menú
 */
const DrawerContentMenu = (props) =>
{

  const [menu, setMenu] = useState(null);

  /**
   * Funcion que permite cargar el menú
   */
  useEffect(() => 
  {
    console.log("useEffect DrawerContentMenu");

    const loadData = async () => 
    {
      try 
      {
        //Se obtiene los item del menú a traves del api-rest
        let {status, menuBD} = await menuServices.getMenu();

        switch (status)
        {
          case Constants.STATUS_OK:            
            setMenu(menuBD);
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
            console.log("default acceso denegado")
          break;
        }
      }
      catch (error) 
      {
        console.log("Error al cargar el menu (DrawerContentMenu)")
      }
    }

    loadData();
  }, []);



  /**
   * Función que permite previsualizar los item del menú desplegable
   * @param item Item del menú
   * @returns Lista de items del menú
   */
  const previewMenu = (item) => 
  {
    return(
      <Box borderBottomWidth="1" borderColor="muted.200" mx="3" py="2" borderColor_="blue.500" borderWidth_="1">
        <HStack space={3} justifyContent_="space-between">
          <Avatar size="45px" source={{uri: item.urlItemImage}} />
          <VStack>
            <Text fontSize="md" color="coolGray.800" bold>
              {item.itemName}
            </Text>
            <Text fontSize="xs" color="coolGray.400">
              {item.description}
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
        data={menu} 
        renderItem={({item}) => previewMenu(item)} 
        keyExtractor={item => item.idItemMenu} />
    </Box>
  );
}

export default DrawerContentMenu;