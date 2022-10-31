import { Linking } from "react-native";

/**
 * JS que contien funciones genericas para utilizar desde los componentes
 */


/**
 * Función que permite formatear un número a miles(K) o millones(M)
 * @param num Número a formatear
 * @returns Número formateado a miles(K) o millones(M)
 */
const formatNumber = (num) =>
{
  if(num > 999 && num < 1000000)
  {
    return((num/1000).toFixed(0) + ' K'); // convert to K for number from > 1000 < 1 million
  }
  else if(num >= 1000000)
  {
    return((num/1000000).toFixed(0) + ' M'); // convert to M for number from > 1 million
  }

  return num.toFixed(0);
}


/**
 * Función que permite abrir la app seleccionada en el dispositivo
 * @param urlApp Url de la app que se desea abrir en el dispositivo
 */
const openApp = async (urlApp) =>
{
  let isCanOpenUrlApp  = await Linking.canOpenURL(urlApp);
  
  // Se valida si la app solicitada está instalada en el dispositivo
  if (isCanOpenUrlApp) 
  {
    // Se abre la app solicitada en el dispositivo
    await Linking.openURL(urlApp);
  } 
  else 
  {
    return null;
  }
}
 

export default 
{
  formatNumber,
  openApp
};