import React, { useState, useEffect } from "react";
import { Center, Text, Button, Image } from "native-base";
import { SimpleLineIcons } from '@expo/vector-icons';

/**
 * Componente funcional que permite el registro de facturas
 * @returns Screen Registro de facturas
 */
const SendInvoice = ({ navigation, route }) =>
{
  const [photo, setPhoto] = useState(route.params);

 
  const openCamera = () => 
  {
    
  }

  return(
    <Center flex={1} backgroundColor="white" justifyContent="flex-start" p="3">
      <Image source={{uri:photo}} alt="Imagen desactualizada" borderBottomRadius="10" resizeMode="contain" width="100%" height="70%" rounded="10"/>

      <Button width="100%" rounded="15" mt="10" backgroundColor="#2cbec3" _pressed={{backgroundColor:"#2d9997"}} onPress_={() => null}>
        <Text fontSize="md" color="white" letterSpacing="xl" bold>
          ENVIAR FACTURA
        </Text>
      </Button>
    
      {/* <Button width="100%" rounded="15" mt="5" backgroundColor="#2cbec3" _pressed={{backgroundColor:"#2d9997"}} onPress={() => navigation.navigate("TakePicture")}>
        <Text fontSize="md" color="white" letterSpacing="xl" bold>
          TOMAR FOTO NUEVAMENTE
        </Text>
      </Button> */}
    </Center>
  )
}


export default SendInvoice;