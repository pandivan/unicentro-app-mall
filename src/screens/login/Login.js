import React, { useState } from "react";
import { Alert } from "react-native";
import { Box, Icon, Image, Pressable, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, StatusBar, WarningOutlineIcon, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import authenticationServices from "../../services/AuthenticationServices";
import Constants from "../../utilities/Constants";



/**
 * Componente Funcional que se encarga de loguear al usuario
 * @param navigation Componente de navegación
 * @returns Scren Login
 */
const Login = ({navigation, route}) =>
{
  const [email, setEmail] = useState("ivan.hernandez.coral@gmail.com");
  const [password, setPassword] = useState("12");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [isRequiredEmail, setIsRequiredEmail] = useState(false);
  const [isRequiredPassword, setIsRequiredPassword] = useState(false);
  const [show, setShow] = useState(false);
  


  /**
   * Función que permite loguear al cliente en la aplicación
   * @param customer Cliente a loguear
   */
  const signIn = async () =>
  {
    
    try
    {
      let { response_code } = await authenticationServices.signIn({ email, password });

      if(Constants.RESPONSE_OK_CODE === response_code)
      {
        // console.log("params " + JSON.stringify(route.params.screen))
        if("Settings" === route.params.screen)
        {
          navigation.navigate("Home");
        }
        else
        {
          navigation.navigate("RegisterInvoices");
        }
      }
      else
      {
        Alert.alert("Información", Constants.MESSAGE_INVALID_CUSTOMER_ERROR);
      }
    }
    catch (error)
    {
      Alert.alert("Información", Constants.MESSAGE_ERROR_ACCESSING_CUSTOMER);
    }
  }


  /**
   * Función que permite validar los datos del formulario
   */
  const validateForm = () =>
  {
    let isValidForm = true;

    if("" === email)
    {
      isValidForm = false;
      console.log("Validate Form email")
      setIsRequiredEmail(true);
      setErrorMessageEmail("Ingresa un correo electrónico");
    }

    if("" === password)
    {
      isValidForm = false;
      console.log("Validate Form password")
      setIsRequiredPassword(true);
    }

    if(isValidForm)
    {
      console.log("**** LOGIN OK *****");
      signIn();
    }
  }


  return (
    <Box flex={1}>
      <StatusBar barStyle_="light-content" backgroundColor_="#1B2028" />
      <Center flex={1} backgroundColor="white" borderColor_="green.500" borderWidth_="3">
        <Box safeArea p="2" width="90%" mb="20" maxW="290" borderColor_="red.500" borderWidth_="1">
          
          <Center mt="10" borderColor_="yellow.500" borderWidth_="1">
            <Image source={require('../../../assets/logo_login.png')} alt="Alternate Text" resizeMode="contain" width={48} height={20}/>
            
            <Heading fontSize={22} mt="6" fontWeight="600">
              Iniciar Sesión
            </Heading>
          </Center>

          <VStack space={3} mt="6" borderColor_="blue.500" borderWidth_="3">
            <FormControl isRequired={isRequiredEmail} isInvalid={isRequiredEmail}>
              <FormControl.Label>Correo</FormControl.Label>
                <Input value={email} onChangeText={setEmail} color_="white" borderRadius="lg" backgroundColor_="#0F1319" borderColor_="#0F1319" _focus_={{borderColor:"#553AB6"}}/>
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  {errorMessageEmail}
                </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isRequired={isRequiredPassword} isInvalid={isRequiredPassword}>
              <FormControl.Label>Contraseña</FormControl.Label>
                <Input 
                  value={password} 
                  onChangeText={setPassword}
                  type={show ? "text" : "password"} 
                  InputRightElement=
                  {
                    <Pressable onPress={() => setShow(!show)}>
                      <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                    </Pressable>
                  }
                  borderRadius="lg"
                />

                <Link _text={{fontSize: "xs", fontWeight: "500", color_: "white"}} alignSelf="flex-end" mt="2">
                  Olvidó la Contraseña?
                </Link>
                <Text mt="6" fontSize="16" textAlign="center" bold color="#F18032" onPress={() => navigation.navigate("Registration")}>¿Primera vez en Unicentro Pasto? ¡Suscríbete ya!</Text>
            </FormControl>

            <Button onPress={validateForm} mt="5" backgroundColor="#46c9cb" borderRadius="lg" height="44px">
              Ingresar
            </Button>

          </VStack>
        </Box>
      </Center>
    </Box>
  ); 
}


export default Login;