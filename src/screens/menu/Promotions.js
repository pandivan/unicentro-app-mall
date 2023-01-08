import React, { useState, useEffect } from "react";
import { FlatList, Image, Alert } from "react-native";
import { Box, Center, Text, Pressable, Icon, Input, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import promotionsServices from "../../services/PromotionsServices";
import Constants from "../../utilities/Constants"; 



/**
 * Componente funcional que contiene las ofertas publicadas de las tiendas
 * @returns Screen Ofertas
 */
const Promotions = ({ navigation, route }) =>
{
  const [lstPromotions, setLstPromotions] = useState([]);
  const [lstFilteredPromotions, setLstFilteredPromotions] = useState([]);
  const [search, setSearch] = useState("");


  /**
   * Funcion que permite cargar la data inicial para el screen de promociones
   */
  useEffect(() => 
  {
    const unsubscribe = navigation.addListener("focus", loadData);

    return unsubscribe;
  }, [navigation]);


  /**
   * Función que permite cargar las promociones de la BD
   */
  const loadData = async () => 
  {
    console.log("useEffect Promotions");
    try 
    {
      //Se obtiene las ofertas de las tiendas a traves del api-rest
      let {status, lstPromotionsBD} = await promotionsServices.getAllPromotions();

      if(Constants.RESPONSE_OK_CODE === status)
      {
        setLstPromotions(lstPromotionsBD);
        setLstFilteredPromotions(lstPromotionsBD);
      }
      else
      {
        Alert.alert("Información", "En el momento no es posible cargar las promociones,\nfavor intentarlo más tarde.");
      }
    }
    catch (error) 
    {
      Alert.alert("Información", "En el momento no es posible cargar las promociones,\nfavor intentarlo más tarde.");
    }
  }



  /**
   * Función que permite buscar una oferta por nombre de la tienda, oferta o descripción, en el listado de ofertas
   * @param searchOffer Oferta a buscar
   */
  const searchPromotions = (searchOffer) => 
  {
    // Se busca la oferta en el listado de ofertas
    setLstFilteredPromotions(lstPromotions.filter(offer => offer.name.concat(offer.store.name).concat(offer.description).toLowerCase().includes(searchOffer.toLowerCase())));

    // Si el input de busqueda está vacío, se vuelve a cargar el listado original de ofertas
    if(!searchOffer)
    {
      setLstFilteredPromotions(lstPromotions);
    }
    
    // Se actualiza el estado de search
    setSearch(searchOffer);
  }



  /**
   * Funcion que permite listar todas las ofertas
   * @param offer Oferta
   * @returns Componente que visualiza las ofertas
   */
  const renderPromotions = (offer) => 
  {

    return(
      <Pressable height="48" width="40" m="1" borderColor_="green.500" borderWidth_="1" onPress={() => navigation.navigate("PromotionDetail", offer)}>
      {
        ({ isPressed }) => 
        {
          return (
            <Box background={isPressed ? "#F2F2F2" : "white"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} rounded="15" height="100%" width="100%" shadow="2">
              <VStack space={2} p="4">
                <Center borderColor_="blue.500" borderWidth_="1">
                  <Image source={{uri:offer.urlImage}} resizeMode_="contain" style={{width:80, height:80}}/>
                </Center>
                <Text mt="2" letterSpacing_="sm" lineHeight="xs" height="10" fontSize_="14" fontWeight="700" color="muted.500" borderColor_="red.300" borderWidth_="1">
                  {offer.name}
                </Text>
                <Text mt_="1" fontSize_="13" color="#f18032" borderColor_="blue.300" borderWidth_="1">
                  {offer.store.name}
                </Text>
              </VStack>
            </Box>
          );
        }
      }
      </Pressable>
    )
  }


  return(
    <Center flex={1} backgroundColor="white" borderColor_="red.600" borderWidth_="1">
      <Input 
        placeholder="Buscas alguna promo?" 
        variant="filled" 
        width="90%" 
        borderColor="#f18032" 
        backgroundColor="white"
        _focus={{borderColor:"#f18032", backgroundColor:"white"}} 
        borderRadius="10" mt="3" mb="5" py="1" px="2" 
        InputRightElement={<Icon mr="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />}
        value={search} 
        onChangeText={(search) => searchPromotions(search)}
      />

      <Center flex={1}>
        <FlatList
          data={lstFilteredPromotions} 
          renderItem={({item}) => renderPromotions(item)} 
          keyExtractor={item => item.idPromotion} 
          showsVerticalScrollIndicator ={false}
          numColumns={2}
        />
      </Center>
    </Center>
  );
}

export default Promotions;