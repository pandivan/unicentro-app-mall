import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { VStack, HStack, Center, Text, Image, Icon, Box, Avatar } from "native-base";
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import GenericFunctions from "../../utilities/GenericFunctions";
import SocialNetworks from "../../components/SocialNetworks";


/**
 * Componente funcional que contiene el detalle de la oferta
 * @returns Screen Detalle de la oferta
 */
const PromotionDetail = ({ navigation, route }) =>
{

  const [promotionDetail, setPromotionDetail] = useState(route.params);


  /**
   * Funcion que permite cargar la data inicial para el screen detalle de la oferta 
   */
  useEffect(() => 
  {
    console.log("useEffect PromotionDetail");

    // const loadData = async () => 
    // {
    //   try 
    //   {
      setPromotionDetail(route.params);
    //   }
    //   catch (error) 
    //   {
    //     console.log("Error al cargar el categories (Directory) " + error)
    //   }
    // }

    // loadData();
  }, [route.params]);



  return(
    <ScrollView showsVerticalScrollIndicator ={false}>
      <Center flex={1} px="3" justifyContent="flex-start" backgroundColor="white" borderColor_="blue.500" borderWidth_="1">
        <Box width="100%" height="325px" borderRadius="10" borderColor_="blue.500" borderWidth_="1">
          <Image source={{uri:promotionDetail.urlImage}} alt="Imagen desactualizada" borderRadius="10" resizeMode_="cover" width="100%" height="100%"/>
        </Box>

        <Box mt="5" mb="2" width="100%" height="40" shadow_="2" backgroundColor="white" borderColor_="red.600" borderWidth_="1">
          <Text fontSize="xl" color_="coolGray.800" bold>
            {promotionDetail.name}
          </Text>
          <Text fontSize="sm" color="#f18032" mt="1">
            {promotionDetail.store.name}
          </Text>
          <Text fontSize="md" color="coolGray.500" mt="5" textAlign="justify" letterSpacing="xs" lineHeight="md">
            {promotionDetail.description}
          </Text>
        </Box>

        <HStack space={4} mt="6" alignItems="center" justifyContent="center" borderColor_="red.500" borderWidth_="1">
          <Icon as={<SimpleLineIcons name="phone"/>} size={6} color="#f18032" />
          <VStack>
            <Text fontSize="sm" color="#f18032" bold>
              Teléfono
            </Text>
            <Text fontSize="xs" color="#f18032" onPress={() => GenericFunctions.openApp("tel:"+promotionDetail.store.phone)}>
              {promotionDetail.store.phone}
            </Text>
          </VStack>
        </HStack>

        <SocialNetworks store={promotionDetail.store} />

      </Center>
    </ScrollView>
  );
}

export default PromotionDetail;
