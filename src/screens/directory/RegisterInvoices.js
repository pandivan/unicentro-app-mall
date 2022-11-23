import React, { useState, useEffect } from "react";
import { VStack, HStack, Center, Text, Pressable, Image, Icon, Input, Box } from "native-base";
import { SimpleLineIcons } from '@expo/vector-icons';
import { Camera, CameraType } from 'expo-camera';
import { Button, StyleSheet, TouchableOpacity, View } from 'react-native';



/**
 * Componente funcional que permite el registro de facturas
 * @returns Screen Registro de facturas
 */
const RegisterInvoices = ({ navigation, route }) =>
{
  const [permission, requestPermission] = Camera.useCameraPermissions();

  //Registra tus facturas

  /**
   * Funcion que permite cargar u obtener la información del cliente
   */
  //  useEffect(() => 
  //  {
  //    console.log("useEffect Registration");
    //  navigation.getParent().getParent().getParent().getParent().setOptions({ headerShown:true, headerTitle:"Información" });
 
    //  const loadData = async () => 
    //  {
    //    try 
    //    {
    //      // Se habilita la cabecera del react navigation de la pantalla
    //      navigation.getParent().getParent().getParent().getParent().setOptions({ headerShown:true, headerTitle:"Información" });
    //    }
    //    catch (error) 
    //    {
    //      Alert.alert("Información", "No es posible registrarte en este momento, favor intentarlo en unos minutos.");
    //    }
    //  }
 
    //  loadData();
  //  }, []);
 
  const openCamera = () => 
  {
    // if (!permission.granted) 
    // {
      requestPermission();
      console.log("openCamera.. " + permission.granted);
      navigation.navigate("TakePicture");
    // }
  }

  return(
    <Center flex={1} backgroundColor="white" justifyContent="flex-start" p="3">
      <Text my="4" width="72" textAlign="center">
        Toma una foto de tu factura donde se vea la tienda, la fecha y el total de la compra.
      </Text>

      <Text my="4" width="56" bold textAlign="center">
        La factura debe quedar completa en la foto
      </Text>
    
      <Pressable height="20" width="100%" my="5" borderColor_="red.500" borderWidth_="1" onPress={openCamera}>
      {
        ({ isPressed }) => 
        {
          return (
            <Center background={isPressed ? "#78CBCC" : "#39BFC2"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} rounded="15" height="100%" borderColor_="red.500" borderWidth_="1">
              <Text fontSize="18" fontWeight="700" color="white" letterSpacing="lg" borderColor_="gray.300" borderWidth_="3">
                TOMAR FOTO
              </Text>
              <SimpleLineIcons name="camera" size={48} color="white" style={{opacity:0.6}} />
            </Center>
          );
        }
      }
      </Pressable>

      <Pressable height="20" width="100%" my="5" borderColor_="red.500" borderWidth_="1" onPress_={() => navigation.navigate("StoreInformation", store)}>
      {
        ({ isPressed }) => 
        {
          return (
            <Center background={isPressed ? "#78CBCC" : "#39BFC2"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} rounded="15" height="100%" borderColor_="red.500" borderWidth_="1">
              <Text fontSize="18" fontWeight="700" color="white" letterSpacing="lg" borderColor_="gray.300" borderWidth_="3">
                ABRIR GALERÍA
              </Text>
              <SimpleLineIcons name="picture" size={48} color="white" style={{opacity:0.6}} />
            </Center>
          );
        }
      }
      </Pressable>
    </Center>
  )
}

export default RegisterInvoices;