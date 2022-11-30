import { VStack, HStack, Center, Text, Pressable, Image, Box } from "native-base";

import authenticationServices from "../../services/AuthenticationServices";



/**
 * Componente funcional que permite acceder al historial y registro de facturas
 * @returns Screen Facturas
 */
const Invoices = ({ navigation, route }) =>
{

  /**
   * Función que permite redireccionar al screen de registro de facturas siempre y cuando el usuario este logueado
   */
  const registerInvoice = async () =>
  {
    try
    {
      let {status} = await authenticationServices.validateToken();

      if(Constants.STATUS_OK === status)
      {
        navigation.navigate("RegisterInvoices");
      }
      else
      {
        Alert.alert("Información", "No es posible registrar la factura en este momento, favor intentarlo en unos minutos.");
      }
    }
    catch (error)
    {
      Alert.alert("Información", "No es posible registrar la factura en este momento, favor intentarlo en unos minutos.");
    }
  }

  return(
    <Center flex={1} backgroundColor="white" justifyContent="flex-start" p="3">
      <Pressable height="110px" width="100%" mt="5" mb="6" borderColor_="red.500" borderWidth_="1" onPress={registerInvoice}>
      {
        ({ isPressed }) => 
        {
          return (
            <Box background={isPressed ? "#F4AF7D" : "#F05642"} p="0" style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} rounded="15" height="100%" width="100%" shadow_="2" borderColor_="red.500" borderWidth_="1">
              <HStack justifyContent="space-between" height="100%" borderColor_="red.500" borderWidth_="1">
                <VStack justifyContent="flex-end" height_="100%" p="3" borderColor_="black" borderWidth_="1">
                  <Text fontSize="18" fontWeight="700" color="white" letterSpacing="lg" borderColor_="gray.300" borderWidth_="3">
                    Registra tus facturas
                  </Text>
                  <Text fontSize_="15" color="white">
                    Programa Unicentro Pasto
                  </Text>
                </VStack>
                <Center width="20" alignItems="flex-end" borderColor_="blue.500" borderWidth_="1">
                  <Image source={{uri:"https://drive.google.com/uc?id=1mRszqK4-NuNzxyiN57sb_fcq2uyYUHdv"}} alt="Imagen desactualizada" mr="3" width="53px" height="53px" opacity="0.6"/>
                </Center>
              </HStack>
            </Box>
          );
        }
      }
      </Pressable>

      <Pressable height="110px" width="100%" mb="6" borderColor_="red.500" borderWidth_="1" onPress={() => navigation.navigate("HistoryInvoices")}>
      {
        ({ isPressed }) => 
        {
          return (
            <Box background={isPressed ? "#7AC9CC" : "#39BFC2"} p="0" style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} rounded="15" height="100%" width="100%" shadow_="2" borderColor_="red.500" borderWidth_="1">
              <HStack justifyContent="space-between" height="100%" borderColor_="red.500" borderWidth_="1">
                <VStack justifyContent="flex-end" height_="100%" p="3" borderColor_="black" borderWidth_="1">
                  <Text fontSize="18" fontWeight="700" color="white" letterSpacing="lg" borderColor_="gray.300" borderWidth_="3">
                    Conoce tu historial
                  </Text>
                  <Text fontSize_="15" color="white">
                    Facturas registradas
                  </Text>
                </VStack>
                <Center width="20" alignItems="flex-end" borderColor_="blue.500" borderWidth_="1">
                  <Image source={{uri:"https://drive.google.com/uc?id=10t8AmpzlzfQdyBI_w_LaTvkEF7QUK3b4"}} alt="Imagen desactualizada" mr="3" width="60px" height="60px" opacity="0.6"/>
                </Center>
              </HStack>
            </Box>
          );
        }
      }
      </Pressable>

      <Pressable height="110px" width="100%" mb="6" borderColor_="red.500" borderWidth_="1" onPress_={() => navigation.navigate("faltapantalla sorteos", store)}>
      {
        ({ isPressed }) => 
        {
          return (
            <Box background={isPressed ? "#F4926E" : "#F18032"} p="0" style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} rounded="15" height="100%" width="100%" shadow_="2" borderColor_="red.500" borderWidth_="1">
              <HStack justifyContent="space-between" height="100%" borderColor_="red.500" borderWidth_="1">
                <VStack justifyContent="flex-end" height_="100%" p="3" borderColor_="black" borderWidth_="1">
                  <Text fontSize="18" fontWeight="700" color="white" letterSpacing="lg" borderColor_="gray.300" borderWidth_="3">
                    Sorteos
                  </Text>
                  <Text fontSize_="15" color="white">
                    Participa reigistrando tus facturas
                  </Text>
                </VStack>
                <Center width="20" alignItems="flex-end" borderColor_="blue.500" borderWidth_="1">
                  <Image source={{uri:"https://drive.google.com/uc?id=1CMPNJGESx8yO-sUFlryZFK-iBd6lvdZe"}} alt="Imagen desactualizada" mr="3" width="60px" height="60px" opacity="0.6"/>
                </Center>
              </HStack>
            </Box>
          );
        }
      }
      </Pressable>
    </Center>
  )
}

export default Invoices;