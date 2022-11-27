import React, { useState, useEffect, useContext } from "react";
import { ScrollView } from "react-native";
import { Image, VStack, HStack, Center, Text, Icon, Box, Avatar } from "native-base";
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

import GenericFunctions from "../../utilities/GenericFunctions";
import HeaderTitle from "../../components/HeaderTitle";
import SocialNetworks from "../../components/SocialNetworks";

import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";


/**
 * Componente funcional que contiene el directorio por categorías y productos
 * @returns Screen Directorio
 */
const StoreInformation = ({ navigation, route }) =>
{

  const [store, setStore] = useState(route.params);


  /**
   * Funcion que permite cargar la data inicial para el screen de información tienda
   */
  useEffect(() => 
  {
    console.log("useEffect StoreInformation");

    // const loadData = async () => 
    // {
    //   try 
    //   {
        // navigation.getParent("NavigatorDrawer").setOptions(
        // { 
        //   headerTitle:getHeaderTitle(route)
        // });

        setStore(route.params);
    //   }
    //   catch (error) 
    //   {
    //     console.log("Error al cargar el categories (Directory) " + error)
    //   }
    // }

    // loadData();

  }, [route.params]);

  
  // useEffect(() => 
  // {
  //   HeaderTitle.unsubscribe(navigation, "");
  // }, [navigation]);
  

  const getHeaderTitle = (route) =>
  {
    // const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

    console.log("StoreInformation routeName--> " + getFocusedRouteNameFromRoute(route));
    
  }


  return(
    <ScrollView showsVerticalScrollIndicator ={false}>
      <Center flex={1} px="3" justifyContent="flex-start" backgroundColor="white" borderColor_="red.600" borderWidth_="1">

        <Box width="100%" height="64" borderRadius="10" justifyItems="flex-start" backgroundColor="#39BFC2" borderColor_="blue.500" borderWidth_="1">
          <HStack width="100%" space_={5} height="64" pl_="2" pt_="4" borderColor_="red.500" borderWidth_="1">
            <Image source={{uri:store.urlStoreImage}} alt="Imagen desactualizada" borderBottomLeftRadius="10" borderTopLeftRadius="10" resizeMode="contain" width="50%" height="100%"/>
            <VStack width="50%" mt_="10" justifyContent="center" alignItems="center" borderColor_="blue.500" borderWidth_="1">
              <Avatar source={{uri: store.urlStoreLogo}} _image_={{resizeMode:"contain"}} size="20"/>
              <Text fontSize="md" mt="4" color_="coolGray.800" bold>
                {store.name}
              </Text>
              <Text fontSize="xs" color_="coolGray.400">
                {store.description}
              </Text>
            </VStack>
          </HStack>
        </Box>

        <Box mt="5" p="4" width="100%" shadow="2" backgroundColor="white" borderRadius="10">
      
          <HStack space={4} borderColor_="red.500" borderWidth_="1">
            <Icon as={<MaterialCommunityIcons name="storefront-outline"/>} size={7} color_="#E1E667" />
            <VStack>
              <Text fontSize="md" color_="coolGray.800" bold>
                Local
              </Text>
              <Text fontSize="sm" color_="coolGray.400">
                {store.storeNumber}
              </Text>
            </VStack>
          </HStack>
          
          <HStack space={4} mt="4" borderColor_="red.500" borderWidth_="1">
            <Icon as={<SimpleLineIcons name="location-pin"/>} size={6} color_="#6133E4" />
            <VStack>
              <Text fontSize="md" color_="coolGray.800" bold>
                Ubicación
              </Text>
              <Text fontSize="sm" color_="coolGray.400">
                {store.storeLocation}
              </Text>
            </VStack>
          </HStack>

          <HStack space={4} mt="4" borderColor_="red.500" borderWidth_="1">
            <Icon as={<SimpleLineIcons name="clock"/>} size={6} color_="#6133E4" />
            <VStack>
              <Text fontSize="md" color_="coolGray.800" bold>
                Horario
              </Text>
              <Text fontSize="sm" color_="coolGray.400">
                L-S   8:00 AM - 9:00 PM
              </Text>
            </VStack>
          </HStack>
          
          <HStack space={4} mt="4" borderColor_="red.500" borderWidth_="1">
            <Icon as={<SimpleLineIcons name="phone"/>} size={6} color_="#6133E4" />
            <VStack>
              <Text fontSize="md" color_="coolGray.800" bold>
                Teléfono
              </Text>
              <Text fontSize="sm" color_="coolGray.400" onPress={() => GenericFunctions.openApp("tel:"+store.phone)}>
                {store.phone}
              </Text>
            </VStack>
          </HStack>

          <HStack space={4} mt="4" borderColor_="red.500" borderWidth_="1">
            <Icon as={<SimpleLineIcons name="globe"/>} size={6} color_="#6133E4" />
            <VStack>
              <Text fontSize="md" color_="coolGray.800" bold>
                Sitio Web
              </Text>
              <Text fontSize="sm" color_="coolGray.400" onPress={() => GenericFunctions.openApp("https://"+store.socialNetworks.website)}>
                {store.socialNetworks.website}
              </Text>
            </VStack>
          </HStack>
        </Box>

        <SocialNetworks store={store} />
        
      </Center>
    </ScrollView>
  );
}

export default StoreInformation;

// https://www.instagram.com/elcristian_gonzalez/
// Linking.openURL('fb://page/PAGE_ID');
// Linking.openURL('http://instagram.com/_u/USER_NAME');
// Linking.openURL('http://instagram.com/_p/PICTURE');
// Linking.openURL('twitter://timeline')
// instagramApp: 'instagram://user?username=stackAnswer',
// youtubeApp: 'vnd.youtube://channel/UCPHssSTfq-K823dDJnvXqgw',
// linkedInApp: 'linkedin://company/google',
// facebookApp: 'fb://page/318948148343',
// facebookAppIos: 'fb://page/?id=318948148343',
// Linking.openURL('mailto:support@example.com?subject=SendMail&body=Description')