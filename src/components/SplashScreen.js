import { Center } from 'native-base';
import * as React from 'react';
import { ImageBackground, View } from 'react-native';



const SplashScreen = () =>
{
  return (
    <Center flex={1} backgroundColor="red.500" borderColor_="green.500" borderWidth_="3">

    </Center>
    // <ImageBackground style={{flex:1}} source={require('../../assets/splash.png')} alt_="Alternate Text" resizeMode_="contain" width_={32} height_={9} />
  );
}


export default SplashScreen;