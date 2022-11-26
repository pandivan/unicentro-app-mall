import React, { useState, useEffect, useContext } from "react";
import { VStack, HStack, Center, Text, Image, Icon, Box, Avatar, Heading, Button } from "native-base";
import { SimpleLineIcons } from '@expo/vector-icons';

import GenericFunctions from "../../utilities/GenericFunctions";


/**
 * Componente funcional que contiene la pantall de conctacto
 * @returns Screen Contacto
 */
const Contact = ({ navigation, route }) =>
{

  return(
    <Center flex={1} px="3" justifyContent="flex-start" backgroundColor="white" borderColor_="red.600" borderWidth_="1">
      <Heading width="100%" fontSize="lg" my="8" color="#043e4a" textAlign="center" borderColor_="red.600" borderWidth_="1">
        Permítanos conocer sus inquietudes
      </Heading>

      <Text width="100%" textAlign="justify" fontSize="md" color="#aeaeae" my="5">
        Atenderemos cualquier duda, inquietud o comentario que quiera compartir con nosotros.
      </Text>

      <Button width="100%" rounded="15" mt="10" mb="5" backgroundColor="#39BFC2" _pressed={{backgroundColor:"#298D8F"}} leftIcon={<Icon as={SimpleLineIcons} name="envelope" size="6" mr="2"/>} onPress={() => GenericFunctions.openApp("mailto:publicidadymercadeo@ccunicentropasto.com")}>
        <Text fontSize="md" color="white" letterSpacing="xl" bold>
          Envíanos un e-mail
        </Text>
      </Button>

      <Button width="100%" rounded="15" backgroundColor="#39BFC2" _pressed={{backgroundColor:"#298D8F"}} leftIcon={<Icon as={SimpleLineIcons} name="phone" size="6" mr="2"/>} onPress={() => GenericFunctions.openApp("tel:3104709828")}>
        <Text fontSize="md" color="white" letterSpacing="xl" bold>
          Llámanos
        </Text>
      </Button>
    </Center>

  );
}

export default Contact;