import { Image } from "react-native";
import { Box } from "native-base";



/**
 * Función que me permite subscribir un evento de focus para el refresh de los tabs
 * @param navigation Componente de navegación
 * @param title Titulo del header
 * @returns Subscripción al evento focus
 */
const unsubscribe = (navigation, title) =>
{
  let unsubscribe = navigation.addListener('focus', () => 
  {
    console.log("title::::: " + title);

    let icon = require('../../assets/logo_fullcolor.png');
    let align = "center";
    let width = 80;
    let widthBox = null;

    if("" === title)
    {
      icon = require('../../assets/logo_header.png');
      align = null;
      width = 128;
      widthBox = "90%";
    }


    // Se actualiza el titulo del header del navegador padre q en este caso es el drawer
    navigation.getParent("NavigatorDrawer").setOptions(
    { 
      headerTitle:title,
      headerTitleAlign:align,
      headerTitleStyle:{fontWeight:"700"},
      headerRight:() =>
      (
        <Box width={widthBox} mr="1" borderColor_="green.500" borderWidth_="1">
          <Image resizeMode={"contain"} style={{width:width, height:80}} source={icon} />
        </Box>
      )
    });
  });

  return unsubscribe;
}

export default {unsubscribe};