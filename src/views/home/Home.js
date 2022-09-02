import React from "react";
import { VStack, HStack, Center, useTheme, Box, Heading, Text, Pressable, Spacer, Image, ScrollView } from "native-base";
import { Dimensions, StyleSheet } from 'react-native';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryContainer } from "victory-native";

var {height, width } = Dimensions.get("window");

const data = 
[
    {x: "ene", y: 1},
    {x: "feb", y: 2},
    {x: "mar", y: 3},
    {x: "abr", y: 5},
    {x: "may", y: 4},
    {x: "jun", y: 7},
    {x: "jul", y: 8}
];

//Componente Funcional
const Home = () =>
{

  // const [login, setLogin] = React.useState('');
  // const [password, setPassword] = React.useState('');
  // const [isMostrar, setIsMostrar] = React.useState(false);
  
  // const { iniciarSesion } = React.useContext(ContextoAutenticacion);
  const {
    colors
  } = useTheme();

  return (
    <Center flex={0.9} px="2" backgroundColor="black" justifyContent={"flex-start"} alignItems="flex-start" width="100%" borderColor_="red.500" borderWidth_="3">
      {/* <ScrollView maxW="100%" h="80" _contentContainerStyle={{indicatorStyle:'white', borderColor_:"blue.500", borderWidth_:"5"}}> */}
      <ScrollView maxW="100%" h="80" style={styles.contentContainer}>
        <Text fontSize="2xl" mb="2" color="dark.500" borderColor_="gray.300" borderWidth_="3">
          Health
        </Text>
        
        <Box background="warning.400" width="100%" p="5" rounded="15" shadow={3} height="192" mb="5" borderColor_="green.500" borderWidth_="3">
          <HStack justifyContent="center" alignContent={"center"} width="100%" space="3" borderColor_="red.500" borderWidth_="3">
            <Image key={"1"} width="50%" resizeMode="cover" source={require("../../../assets/grap1.png")} alt={"Alternate Text sm"} borderColor_="blue.700" borderWidth_="3"/>
            <Image key={"2"} width="50%" resizeMode="cover" source={require("../../../assets/grap2.png")} alt={"Alternate Text sm"} borderColor_="blue.700" borderWidth_="3"/>
          </HStack>
        </Box>
        
        <HStack justifyContent="center" width="100%" space="3" mt="1" px="2" borderColor_="green.600" borderWidth_="3">
          <Box alignItems="center" width="50%" borderColor_="red.500" borderWidth_="3">
            <Pressable maxW="48" width="100%">
            {
              ({ isPressed }) => 
              {
                return (
                  <Box background={isPressed ? "#444444" : "#303030"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} p="2" rounded="15" height="224">
                    <VStack>
                      <Text fontSize="md" color="dark.500" borderColor_="gray.300" borderWidth_="3">
                        Excercise records
                      </Text>
                      <Text fontSize="sm" mb="3" color="dark.400" borderColor_="gray.300" borderWidth_="3">
                        8/20 Outdoor cycle
                      </Text>
                      <Image key={"2"} height="56%" width="100%" resizeMode="cover" source={require("../../../assets/Lineal2.png")} alt={"Alternate Text sm"} borderColor_="blue.700" borderWidth_="3" />
                      <Heading m="1" color="dark.600" borderColor_="gray.300" borderWidth_="3">
                        21.44
                      </Heading>
                    </VStack>
                  </Box>
                );
              }
            }
            </Pressable>
          </Box>
          
          <Box alignItems="center" width="50%" borderColor_="red.500" borderWidth_="3">
            <Pressable maxW="48" width="100%">
            {
              ({ isPressed }) => 
              {
                return (
                  <Box background={isPressed ? "#444444" : "#303030"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} p="2" rounded="15" height="224">
                    <VStack>
                      <Text fontSize="md" color="dark.500" borderColor_="gray.300" borderWidth_="3">
                        Exito Chipichape
                      </Text>
                      <Text fontSize="sm" mb="3" color="dark.400" borderColor_="gray.300" borderWidth_="3">
                        Ventas Semanal
                      </Text>

                      <Center borderColor_="yellow.300" borderWidth_="3">
                        <VictoryBar 
                            data={data} 
                            cornerRadius={2} 
                            animate={{ duration: 300 }}
                            // categories={{x: ["birds", "cats", "dogs", "fish", "frogs"]}} 
                            // alignment="middle"
                            // labels={({ datum }) => datum.y}
                            // domainPadding={{ x: 10, y: 5 }}
                            barWidth={5}
                            height={115} 
                            width={120}
                            padding={{ top: 2, bottom: 2, left: 7, right: 7 }}
                            style={{data: { fill: "#43bc43" }}} //#ff4d6a
                        />
                      </Center>

                      <Heading m="1" color="dark.600" borderColor_="gray.300" borderWidth_="3">
                        3'
                      </Heading>
                    </VStack>
                  </Box>
                );
              }
            }
            </Pressable>
          </Box>
        </HStack>

        <HStack justifyContent="center" width="100%" space="3" mt="3" px="2" borderColor_="dark.200" borderWidth_="3">
          <Box alignItems="center" width="50%" borderColor_="red.500" borderWidth_="3">
            <Pressable maxW="48" width="100%">
            {
              ({ isPressed }) => 
              {
                return (
                  <Box background={isPressed ? "#444444" : "#303030"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} p="2" rounded="15" height="224">
                    <VStack>
                      <Text fontSize="md" color="dark.500" borderColor_="gray.300" borderWidth_="3">
                        Excercise records
                      </Text>
                      <Text fontSize="sm" mb="3" color="dark.400" borderColor_="gray.300" borderWidth_="3">
                        8/20 Outdoor cycle
                      </Text>
                      <Image key={"2"} height="56%" width="100%" resizeMode="cover" source={require("../../../assets/Lineal2.png")} alt={"Alternate Text sm"} borderColor_="blue.700" borderWidth_="3" />
                      <Heading m="1" color="dark.600" borderColor_="gray.300" borderWidth_="3">
                        21.44
                      </Heading>
                    </VStack>
                  </Box>
                );
              }
            }
            </Pressable>
          </Box>
          
          <Box alignItems="center" width="50%" borderColor_="red.500" borderWidth_="3">
            <Pressable maxW="48" width="100%">
            {
              ({ isPressed }) => 
              {
                return (
                  <Box background={isPressed ? "#444444" : "#303030"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} p="2" rounded="15" height="224">
                    <VStack>
                      <Text fontSize="md" color="dark.500" borderColor_="gray.300" borderWidth_="3">
                        Heart
                      </Text>
                      <Text fontSize="sm" mb="3" color="dark.400" borderColor_="gray.300" borderWidth_="3">
                        8/23 Heart reat
                      </Text>
                      <Image key={"1"} height="56%" width="100%" resizeMode="cover" source={require("../../../assets/Lineal1.png")} alt={"Alternate Text sm"} borderColor_="blue.700" borderWidth_="3" />
                      <Heading m="1" color="dark.600" borderColor_="gray.300" borderWidth_="3">
                        21.44
                      </Heading>
                    </VStack>
                  </Box>
                );
              }
            }
            </Pressable>
          </Box>
        </HStack>

        <HStack justifyContent="center" width="100%" space="3" mt="3" px="2" borderColor_="dark.200" borderWidth_="3">
          <Box alignItems="center" width="50%" borderColor_="red.500" borderWidth_="3">
            <Pressable maxW="48" width="100%">
            {
              ({ isPressed }) => 
              {
                return (
                  <Box background={isPressed ? "#444444" : "#303030"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} p="2" rounded="15" height="224">
                    <VStack>
                      <Text fontSize="md" color="dark.500" borderColor_="gray.300" borderWidth_="3">
                        Excercise records
                      </Text>
                      <Text fontSize="sm" mb="3" color="dark.400" borderColor_="gray.300" borderWidth_="3">
                        8/20 Outdoor cycle
                      </Text>
                      <Image key={"2"} height="56%" width="100%" resizeMode="cover" source={require("../../../assets/Lineal2.png")} alt={"Alternate Text sm"} borderColor_="blue.700" borderWidth_="3" />
                      <Heading m="1" color="dark.600" borderColor_="gray.300" borderWidth_="3">
                        21.44
                      </Heading>
                    </VStack>
                  </Box>
                );
              }
            }
            </Pressable>
          </Box>
          
          <Box alignItems="center" width="50%" borderColor_="red.500" borderWidth_="3">
            <Pressable maxW="48" width="100%">
            {
              ({ isPressed }) => 
              {
                return (
                  <Box background={isPressed ? "#444444" : "#303030"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} p="2" rounded="15" height="224">
                    <VStack>
                      <Text fontSize="md" color="dark.500" borderColor_="gray.300" borderWidth_="3">
                        Heart
                      </Text>
                      <Text fontSize="sm" mb="3" color="dark.400" borderColor_="gray.300" borderWidth_="3">
                        8/23 Heart reat
                      </Text>
                      <Image key={"1"} height="56%" width="100%" resizeMode="cover" source={require("../../../assets/Lineal1.png")} alt={"Alternate Text sm"} borderColor_="blue.700" borderWidth_="3" />
                      <Heading m="1" color="dark.600" borderColor_="gray.300" borderWidth_="3">
                        21.44
                      </Heading>
                    </VStack>
                  </Box>
                );
              }
            }
            </Pressable>
          </Box>
        </HStack>
      </ScrollView>
    </Center>
  );
}


const styles = StyleSheet.create(
  {
    contentUI: 
    {
      backgroundColor: "blue",
      width: width,
      height: height,
      borderColor: "red",
      borderWidth: 4
    },
    imageProducto: 
    {
      width: ((width/2)-20)-10,
      height: ((width/2)-20)-30,
      borderColor: "blue",
      borderWidth: 3
    },
    viewEspacioProducto: 
    {
      height: ((width/2)-20)-90, 
      width:((width/2)-20)-10
    },
    contentContainer: {
      centerContent:true, 
      _borderColor:"blue", 
      _borderWidth:5
    }
  });

export default Home;