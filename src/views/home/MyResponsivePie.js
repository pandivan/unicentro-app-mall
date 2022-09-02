import { VictoryChart, VictoryBar, VictoryTheme, VictoryContainer,VictoryLabel, VictoryHistogram } from "victory-native";
import { VStack, HStack, Center, useTheme, Box, Heading, Text, Pressable, Spacer, Image, ScrollView } from "native-base";
import { Dimensions, StyleSheet } from 'react-native';

//debo pasar la data ordenada para el eje X
const data = 
[
    {x: "ene", y: 1},
    {x: "feb", y: 2},
    {x: "mar", y: 3},
    {x: "abr", y: 5},
    {x: "may", y: 4}
];

const MyResponsivePie = () => 
{

  return (
    <Box borderColor="yellow.300" borderWidth="3"
        justifyContent="flex-end" height="220px">
        <VictoryBar 
            data={data} 
            // categories={{x: ["birds", "cats", "dogs", "fish", "frogs"]}} 
            cornerRadius={2} 
            animate={{ duration: 300 }}
            alignment="end"
            // labels={({ datum }) => datum.y}
            // barWidth={5}
            // domainPadding={{ x: 30, y: 20 }}
            // height={115} 
            // width={120}
            // padding={{ top: 2, bottom: 2, left: 10, right: 10 }}
            // style={{data: { fill: "#43bc43" }}}
        />
    </Box>
  );
}

export default MyResponsivePie;