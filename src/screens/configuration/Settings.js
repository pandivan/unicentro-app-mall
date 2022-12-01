import { Alert } from "react-native";
import { VStack, HStack, Box, Heading, Text, Icon, Avatar, Menu } from "native-base";
import { SimpleLineIcons } from "@expo/vector-icons";

import authenticationServices from "../../services/AuthenticationServices";


/**
 * Componente funcional el cual contiene las configuraciones básicas de la app
 * @returns Screen Ajustes
 */
const Settings = ({ navigation }) =>
{

  /**
   * Funcion que permite desloguear al cliente de la aplicación
   */
  const signOut = () =>
  {
    try
    {
      authenticationServices.signOut();
      navigation.navigate("RouteMenu", { screen:"Home" });
    }
    catch (error)
    {
      Alert.alert("Información", "No fue posible cerrar la sesión, favor intentarlo en unos minutos.");
    }
  }


  return (
    <Box flex={1} backgroundColor_="#0F1319" borderColor_="green.500" borderWidth_="3">
      <HStack m="3" alignItems="center" pb="3" borderBottomColor="light.400" borderBottomWidth="2">
        <Avatar size="48px" source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"}} />
        <Heading fontSize="xl" p="4" pb="3" color="light.600">
          Ivan Hernandez
        </Heading>
      </HStack>

      <Menu.Item px="0" mt="2" width="100%" >
        <HStack alignItems="center" space={2}>
          <Icon as={<SimpleLineIcons name="logout" />} size={6} mr="2" color="#F18032" />
          <Text color="dark.400" fontSize="md" bold onPress={() => navigation.navigate("Login", { screen:"Settings" })}> 
            Iniciar sesión
          </Text>
        </HStack>
      </Menu.Item>
      
      <Menu.Item px="0" mt="8" width="100%" borderColor_="blue.500" borderWidth_="3">
        <HStack alignItems="center" space={2}>
          <Icon as={<SimpleLineIcons name="user" />} size={6} mr="2" color="#F18032" />

          <VStack>
            <Text color="dark.400" fontSize="md" bold>
              Perfil
            </Text>
            <Text color="light.400">
              Descripción Perfil
            </Text>
          </VStack>
        </HStack>
      </Menu.Item>

      <Menu.Item px="0" mt="2" width="100%" borderColor_="blue.500" borderWidth_="3">
        <HStack alignItems="center" space={2}>
          <Icon as={<SimpleLineIcons name="lock" />} size={6} mr="2" color="#F18032" />
          <Text color="dark.400" fontSize="md" bold>
            Cambiar contraseña
          </Text>
        </HStack>
      </Menu.Item>
      
      <Menu.Item px="0" mt="2" width="100%" >
        <HStack alignItems="center" space={2}>
          <Icon as={<SimpleLineIcons name="logout" />} size={6} mr="2" color="#F18032" />
          <Text color="dark.400" fontSize="md" bold onPress={() => signOut()}>
            Cerrar sesión
          </Text>
        </HStack>
      </Menu.Item>
    </Box>
  );
}


export default Settings;