import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { VStack, HStack, Center, Text, Pressable, Image, Icon, Input } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import offersServices from "../../services/OffersServices";
import Constants from "../../utilities/Constants"; 



/**
 * Componente funcional que contiene las ofertas publicadas de las tiendas
 * @returns Screen Ofertas
 */
const Offers = ({ navigation, route }) =>
{
  const [lstOffers, setLstOffers] = useState([]);
  const [idOffer, setIdOffer] = useState(1);
  const [search, setSearch] = useState("");


  /**
   * Funcion que permite cargar la data inicial para el screen de ofertas
   */
  useEffect(() => 
  {
    console.log("useEffect Offers");

    const loadData = async () => 
    {
      try 
      {
        //Se obtiene las ofertas de las tiendas a traves del api-rest
        let {status, lstOffersBD} = await offersServices.getAllOffers();

        switch (status)
        {
          case Constants.STATUS_OK:
            setLstOffers(lstOffersBD);
          break;

          case Constants.STATUS_ACCESO_DENEGADO:
            // El usuario tiene el token vencido y debe loguearse nuevamente
            
            console.log("case Offers STATUS_ACCESO_DENEGADO")
          break;

          default:
            
            console.log("case Offers default acceso denegado")
          break;
        }
      }
      catch (error) 
      {
        console.log("Error al cargar las ofertas (Offers) " + error)
      }
    }

    loadData();
  }, []);




  /**
   * Función que permite buscar una oferta por nombre de la tienda, oferta o descripción, en el listado de ofertas
   * @param search Oferta a buscar
   */
  const searchOffers = (search) => 
  {
    // Se busca la oferta en el listado de ofertas
    setLstStores(lstOffers.filter(offer => offer.name.toLowerCase().includes(search.toLowerCase())));
    
    // Se actualiza el estado search
    setSearch(search);
  }

  /**
   * Funcion que permite listar todas las ofertas
   * @param offer Oferta
   * @returns Componente que visualiza las ofertas
   */
  const renderOffers = (offer) => 
  {

    return(
      <Pressable height="32" width="80" mb="5" borderColor_="red.500" borderWidth_="1" onPress={() => navigation.navigate("OfferDetail", offer)}>
      {
        ({ isPressed }) => 
        {
          return (
            <Center background={isPressed ? "#F2F2F2" : "white"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} rounded="20" height="100%" width="100%" shadow="2" borderColor="gray.300" borderWidth="1">
              <HStack ml="5" space={8} borderColor_="red.500" borderWidth_="1">
                <Center width="20" borderColor_="blue.500" borderWidth_="1">
                  <Image source={{uri:offer.urlImage}} alt="Imagen desactualizada" resizeMode="cover" width={16} height={16}/>
                </Center>

                <VStack height="100%" width="48" borderColor_="green.500" borderWidth_="1">
                  <Text fontSize="23" fontWeight="700" color="black" borderColor_="gray.300" borderWidth_="3">
                    {offer.name}
                  </Text>
                  <Text fontSize="15" color="#f18032">
                    {offer.store.name}
                  </Text>
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
    <Center flex={1} backgroundColor_="white" borderColor_="red.600" borderWidth_="1">
      <Input 
        placeholder="Buscas alguna promo?" 
        variant="filled" 
        width="90%" 
        borderColor="#f18032" 
        _focus={{borderColor:"#f18032", backgroundColor:"white"}} 
        borderRadius="10" mt="8" mb="5" py="1" px="2" 
        InputRightElement={<Icon mr="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />}
        value={search} 
        onChangeText={(search) => searchOffers(search)}
      />

      <Center flex={1}>
        <FlatList
          data={lstOffers} 
          renderItem={({item}) => renderOffers(item)} 
          keyExtractor={item => item.idStore} 
          showsVerticalScrollIndicator ={false}
        />
      </Center>
    </Center>
  );
}

export default Offers;