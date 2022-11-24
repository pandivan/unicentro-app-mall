import React from "react";
import {Center, Box, Text} from "native-base";
import { FlatList, Image } from "react-native";

const AlertMessage = (props) =>
{
  const [show, setShow] = React.useState(true);

  return (
    <Center flex={1} width="100%" mt="1" backgroundColor="black" borderColor="red.500" borderWidth="2"> 
      {/* <Image source={{uri:categoryIcon(category)}} style={{width:60, height:60}}/> */}
      <Box height="60%" width="100%" bg="white">
        <Image source={{uri:"https://drive.google.com/uc?id=1GUnjHmt-OiTmqLRTzWBfDNc5EsiC6Dcx"}} style={{width:60, height:60}}/>
      </Box>
    </Center>
  );
}

export default AlertMessage;