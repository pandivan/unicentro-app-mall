import React, { useState, useEffect, useRef } from "react";
import { Center, Text, IconButton, Button, CheckIcon, CloseIcon, Image, HStack, Box } from "native-base";
import { SimpleLineIcons } from '@expo/vector-icons';
import { Camera, CameraType } from 'expo-camera';
import { Alert } from 'react-native';



/**
 * Componente funcional que permite tomar una foto a la factura
 * @returns Screen Foto de la factura
 */
const TakePicture = ({ navigation, route }) =>
{
  const [type, setType] = useState(CameraType.back);
  const [photo, setPhoto] = useState(null);
  const cameraRef = useRef(null);


  /**
   * Funcion que permite cargar la data inicial para el screen de información tienda
   */
  // useEffect(() => 
  // {
  //   console.log("useEffect TakePicture");
  //   console.log(route);

  //   // const loadData = async () => 
  //   // {
  //   //   try 
  //   //   {
  //     setPhoto(route.params);
  //   //   }
  //   //   catch (error) 
  //   //   {
  //   //     console.log("Error al cargar el categories (Directory) " + error)
  //   //   }
  //   // }

  //   // loadData();
  // }, [route.params]);


  const takePhoto = async () => 
  {
    if(cameraRef)
    {
      try
      {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setPhoto(data.uri);
      }
      catch(error)
      {
        console.log(error);
        Alert.alert("Información", "No es posible acceder a la cámara del dispositivo.\n\nAcceso denegado.");
      }
    }
  }

  return(
    <Center flex={1} backgroundColor="white" justifyContent="flex-start" p="3">
    {
      photo ?
      (
        <Box height="100%" width="100%" backgroundColor_="black" rounded="10">
          <HStack justifyContent="space-between" pt="4">
            <IconButton icon={<CloseIcon size={5} color="black"/>} borderRadius="full" height="10%" onPress={() => setPhoto(null)}/>
            <IconButton icon={<CheckIcon size={6} color="black"/>} borderRadius="full" height="10%" onPress={() => navigation.navigate("SendInvoice", photo)}/>
          </HStack>
          
          <Image source={{uri:photo}} alt="Imagen desactualizada" borderBottomRadius="10" resizeMode="contain" width="100%" height="90%"/>
        </Box>
      )
      :
      (
        <Box height="90%" width="100%" mt="1" borderColor_="red.500" borderWidth_="2" > 
          <Camera style={{height:"100%", width:"100%"}} type={type} ref={cameraRef} ></Camera>

          <Button width="100%" rounded="15" mt="4" backgroundColor="#2cbec3" _pressed={{backgroundColor:"#2d9997"}} onPress={takePhoto}>
            <Text fontSize="md" color="white" letterSpacing="xl" bold>
              tomar foto
            </Text>
          </Button>
        </Box>
      )
    }
    </Center>
  )
}


export default TakePicture;