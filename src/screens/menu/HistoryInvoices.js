import { VStack, HStack, Center, Text, Pressable, Image, Icon, Input, Box } from "native-base";
import { SimpleLineIcons } from '@expo/vector-icons';




/**
 * Componente funcional que permite el registro de facturas
 * @returns Screen Registro de facturas
 */
const HistoryInvoices = ({ navigation, route }) =>
{

  return(
    <Center flex={1} backgroundColor="white" justifyContent="flex-start" p="3">
      <Pressable height="110px" width="100%" mb="5" borderColor_="red.500" borderWidth_="1" onPress_={() => navigation.navigate("StoreInformation", store)}>
      {
        ({ isPressed }) => 
        {
          return (
            <Box background={isPressed ? "#F4AF7D" : "#f18032"} p="0" style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} rounded="15" height="100%" width="100%" shadow_="2" borderColor_="red.500" borderWidth_="1">
              <HStack justifyContent="space-between" height="100%" borderColor_="red.500" borderWidth_="1">
                <VStack justifyContent="flex-end" height_="100%" p="3" borderColor_="black" borderWidth_="1">
                  <Text fontSize="18" fontWeight="700" color="white" letterSpacing="lg" borderColor_="gray.300" borderWidth_="3">
                    Registra tus facturass
                  </Text>
                  <Text fontSize_="15" color="white">
                    Programa Unicentro Pasto
                  </Text>
                </VStack>
                <Center width="20" alignItems="flex-end" borderColor_="blue.500" borderWidth_="1">
                  {/* <Image source={{uri:store.urlStoreLogo}} alt="Imagen desactualizada" resizeMode="cover" width={16} height={16}/> */}
                  <SimpleLineIcons name="note" size={48} color="#BF6728" style={{opacity:0.6}} />
                </Center>
              </HStack>
            </Box>
          );
        }
      }
      </Pressable>

      <Pressable height="110px" width="100%" mb="5" borderColor_="red.500" borderWidth_="1" onPress_={() => navigation.navigate("StoreInformation", store)}>
      {
        ({ isPressed }) => 
        {
          return (
            <Box background={isPressed ? "#7AC9CC" : "#3abdc2"} p="0" style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} rounded="15" height="100%" width="100%" shadow_="2" borderColor_="red.500" borderWidth_="1">
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
                  {/* <Image source={{uri:store.urlStoreLogo}} alt="Imagen desactualizada" resizeMode="cover" width={16} height={16}/> */}
                  <SimpleLineIcons name="note" size={48} color="#2B8B8F" style={{opacity:0.6}} />
                </Center>
              </HStack>
            </Box>
          );
        }
      }
      </Pressable>

      <Pressable height="110px" width="100%" mb="5" borderColor_="red.500" borderWidth_="1" onPress_={() => navigation.navigate("StoreInformation", store)}>
      {
        ({ isPressed }) => 
        {
          return (
            <Box background={isPressed ? "#F4926E" : "#f15a25"} p="0" style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} rounded="15" height="100%" width="100%" shadow_="2" borderColor_="red.500" borderWidth_="1">
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
                  {/* <Image source={{uri:store.urlStoreLogo}} alt="Imagen desactualizada" resizeMode="cover" width={16} height={16}/> */}
                  <SimpleLineIcons name="note" size={48} color="#BF481D" style={{opacity:0.6}} />
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

export default HistoryInvoices;