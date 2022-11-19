import React, { useState, useEffect } from "react";
import { VStack, HStack, Center, Text, Image, Icon, Box, Avatar } from "native-base";
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';


/**
 * Componente funcional que contiene el detalle de la oferta
 * @returns Screen Detalle de la oferta
 */
const OfferDetail = ({ navigation, route }) =>
{

  const [offerDetail, setOfferDetail] = useState(route.params);


  /**
   * Funcion que permite cargar la data inicial para el screen detalle de la oferta 
   */
  useEffect(() => 
  {
    console.log("useEffect OfferDetail");

    // const loadData = async () => 
    // {
    //   try 
    //   {
      navigation.getParent("NavigatorDrawer").setOptions({ headerTitle:"" });
      setOfferDetail(route.params);
    //   }
    //   catch (error) 
    //   {
    //     console.log("Error al cargar el categories (Directory) " + error)
    //   }
    // }

    // loadData();
  }, [route.params]);



  return(
    <Center flex={1} px="3" justifyContent="flex-start" backgroundColor="white" borderColor_="red.600" borderWidth_="1">
      <Box width="100%" height="64" borderRadius="10" borderColor_="blue.500" borderWidth_="1">
        <Image source={{uri:offerDetail.urlImage}} alt="Imagen desactualizada" borderRadius="10" resizeMode_="cover" width="100%" height="100%"/>
      </Box>

      <Box mt="5" p_="4" width="100%" height="48" shadow_="2" backgroundColor="white" borderRadius_="10" borderColor_="red.600" borderWidth_="1">
        <Text fontSize="xl" color_="coolGray.800" bold>
          {offerDetail.name}
        </Text>
        <Text fontSize="sm" color="#f18032" mt="1">
          {offerDetail.store.name}
        </Text>
        <Text fontSize="md" color="coolGray.500" mt="5" textAlign="justify" letterSpacing="xs" lineHeight="md">
          {offerDetail.description}
        </Text>
        <HStack space={4} mt="6" alignItems="center" borderColor_="red.500" borderWidth_="1">
          <Icon as={<SimpleLineIcons name="phone"/>} size={6} color_="#6133E4" />
          <VStack>
            <Text fontSize="sm" color_="coolGray.800" bold>
              Teléfono
            </Text>
            <Text fontSize="xs" color_="coolGray.400" onPress={() => openApp("tel:"+offerDetail.store.phone)}>
              {offerDetail.store.phone}
            </Text>
          </VStack>
        </HStack>
      </Box>

      <Center my="5" p="2" width="100%" shadow="2" backgroundColor="white" borderRadius="10" borderColor="light.300" borderWidth="1">
        <Text bold>
          Redes Sociales:
        </Text>
        <HStack mt="4" space={6} borderColor_="red.500" borderWidth_="1">
          <Icon as={<SimpleLineIcons name="social-instagram"/>} size={6} color="secondary.500" onPress={() => openApp("instagram://user?username=" + offerDetail.store.socialNetworks.instagram)}/>
          <Icon as={<SimpleLineIcons name="social-facebook"/>} size={6} color="darkBlue.400" onPress={() => openApp("fb://facewebmodal/f?href=https://www.facebook.com/" + offerDetail.store.socialNetworks.facebook)}/>
          <Icon as={<MaterialCommunityIcons name="whatsapp"/>} size={7} color="green.400" onPress={() => openApp("whatsapp://send?text=Hola &phone=" + offerDetail.store.socialNetworks.whatsapp)}/>
        </HStack>
      </Center>
    </Center>
);
}

export default OfferDetail;
