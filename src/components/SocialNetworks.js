import React from "react";
import {Center, HStack, Icon, Text} from "native-base";
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

import GenericFunctions from "../../src/utilities/GenericFunctions";


const SocialNetworks = (props) =>
{
  
  return (
    <Center my="5" p="2" width="100%" shadow="2" backgroundColor="white" borderRadius="10" borderColor="light.300" borderWidth="1">
      <Text bold>
        Redes Sociales:
      </Text>
      <HStack mt="4" space={6} borderColor_="red.500" borderWidth_="1">
        <Icon as={<SimpleLineIcons name="social-instagram"/>} size={6} color="secondary.500" onPress={() => GenericFunctions.openApp("instagram://user?username=" + props.store.socialNetworks.instagram)}/>
        <Icon as={<SimpleLineIcons name="social-facebook"/>} size={6} color="darkBlue.400" onPress={() => GenericFunctions.openApp("fb://facewebmodal/f?href=https://www.facebook.com/" + props.store.socialNetworks.facebook)}/>
        <Icon as={<MaterialCommunityIcons name="whatsapp"/>} size={7} color="green.400" onPress={() => GenericFunctions.openApp("whatsapp://send?text=Hola &phone=+57" + props.store.socialNetworks.whatsapp)}/>
        {
          (0 === props.store.idStore) ?
            <Icon as={<SimpleLineIcons name="social-youtube"/>} size={7} color="red.500" onPress={() => GenericFunctions.openApp("vnd.youtube://channel/UCbtQJqLmoGmiyFBh3qc1Vrw")}/>
          :
          null
        }
      </HStack>
    </Center>
  );
}

export default SocialNetworks;