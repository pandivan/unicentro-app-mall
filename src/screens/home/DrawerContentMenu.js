import React, { useState, useEffect } from "react";
import { VStack, HStack, Center, Box, Heading, Text, Pressable, Icon } from "native-base";
import { FlatList, Image } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import Constants from "../../utilities/Constants";
import menuServices from "../../services/MenuServices";
import GenericFunctions from "../../utilities/GenericFunctions";


/**
 * Componente funcional que contiene el menú
 * @param navigation Parametro desestructurado de props que es enviado desde App.js drawerContent={props => <DrawerContentMenu {...props} />} 
 * @param route Parametro desestructurado de props que es enviado desde App.js drawerContent={props => <DrawerContentMenu {...props} />} 
 * @returns Screen Menú
 */
const DrawerContentMenu = ({ navigation, route }) =>
{

  const [lstMenu, setLstMenu] = useState(null);

  /**
   * Funcion que permite cargar la data inicial para el screen del menu
   */
  useEffect(() => 
  {
    // console.log("useEffect DrawerContentMenu");

    const loadData = async () => 
    {
      try 
      {
        //Se obtiene los item del menú a traves del api-rest
        let {status, lstMenuBD} = await menuServices.getMenu();

        switch (status)
        {
          case Constants.STATUS_OK:            
            setLstMenu(lstMenuBD);
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
   * Función que permite redireccionar a un screen de la app oh a una url
   * @param itemMenu Item del menú
   */
  const redirect = (itemMenu) =>
  {
    // Se valida si es un screen del navegator, en caso contrario redirecciona a una url
    switch(itemMenu.idItemMenu)
    {
      case 1:
        navigation.navigate("RouteDirectory", { screen:"Directory", params:{ idCategory:1 } });
      break;
      case 2:
        navigation.navigate("Invoices");
      break;
      case 3:
        navigation.navigate("RoutePromotions", { screen:"Promotions" });
      break;
      case 7:
        navigation.navigate("Contact");
      break;
      default:  
        let redirect = GenericFunctions.openApp(itemMenu.redirect);
        console.log("redirect--> "+redirect);
      break;
    }
  }


  /**
   * Función que permite previsualizar los item del menú desplegable
   * @param itemMenu Item del menú
   * @returns Lista de items del menú
   */
  const previewMenu = (itemMenu) => 
  {
    return(
      <Pressable borderBottomWidth="1" borderColor="muted.200" mx="3" py="2" onPress={() => redirect(itemMenu)} borderColor_="blue.500" borderWidth_="1">
        <HStack space={3} justifyContent_="space-between">
          <Center backgroundColor={itemMenu.color} rounded="100" width="10" height="10">
            {
              (1 === itemMenu.idItemMenu) ?
                <Image source={{uri:"https://drive.google.com/uc?id=1RxTiI3B_pBtZCvOqSHlnGru7Cx_3bkH6"}} resizeMode="contain" style={{width:33, height:33}}/>
              :
                <Icon as={<SimpleLineIcons name={itemMenu.urlItemImage} />} size="21" color="white" />
            }
          </Center>
          <VStack>
            <Text fontSize="md" color="coolGray.800" bold>
              {itemMenu.itemName}
            </Text>
            <Text fontSize="xs" color="coolGray.400">
              {itemMenu.description}
            </Text>
          </VStack>
        </HStack>
      </Pressable>
    )
  }


  return(
    <Box my="8" width_="80" borderColor_="red.500" borderWidth_="1">
      <Heading fontSize="xl" p="4" pb="8" mb="4" borderColor="light.300" borderBottomWidth="2">
        Menú
      </Heading>
      <FlatList 
        data={lstMenu} 
        renderItem={({item}) => previewMenu(item)} 
        keyExtractor={item => item.idItemMenu} />
    </Box>
  );
}

export default DrawerContentMenu;