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
  //   console.log(cameraRef);

    // const loadData = async () => 
    // {
    //   try 
    //   {
      // cameraRef.current = null;
    //   }
    //   catch (error) 
    //   {
    //     console.log("Error al cargar el categories (Directory) " + error)
    //   }
    // }

    // loadData();
  // }, [route.params]);


  const takePhoto = async () => 
  {
    if(cameraRef)
    {
      try
      {
        const data = await cameraRef.current.takePictureAsync();
        console.log("takePhoto---> " + data);
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
    
      photo ?
      (
        <Box flex_={1} mt="1" backgroundColor="black">
          <HStack justifyContent="space-between" py="2" borderColor_="red.500" borderWidth_="2">
            <IconButton icon={<CloseIcon size={6} color="white"/>} ml="2" onPress={() => setPhoto(null)}/>
            <IconButton icon={<CheckIcon size={7} color="white"/>} mr="2" onPress={() => navigation.navigate("SendInvoice", photo)}/>
          </HStack>
          
          <Image source={{uri:photo}} alt="Imagen desactualizada" resizeMode_="contain" width="100%" height="90%"/>
        </Box>
      )
      :
      (
        <Center flex={1} width="100%" mt="1" backgroundColor="black" borderColor_="red.500" borderWidth_="2"> 
          <Box height="60%" width="100%" bg="white">
            <Camera style={{height:"100%", width:"100%"}} type={type} ref={cameraRef} ></Camera>
          </Box>

          <Text mt="10" fontSize="md" color="white" letterSpacing="xl" bold>
            FOTO
          </Text>
          <Button width="20" height="20" rounded="full" mt="4" backgroundColor="white" _pressed={{backgroundColor:"#DAD2BD"}} onPress={takePhoto} />
        </Center>
      )
   
  )
}


export default TakePicture;