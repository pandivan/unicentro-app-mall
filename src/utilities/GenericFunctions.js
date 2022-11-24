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
 * @returns Null si no puede abrir la url app, en caso contrario abre la url app
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
    console.log("no puedo abrir url")
    return null;
  }
}


 /**
 * Función que permite validar si el caracter digitado es numérico
 * @param number Número a validar
 * @returns Vacío si el caracter no es numérico, en caso contrario retorna el caracter digitado
 */
const validateMumber = (number) => 
{
  if (!Number(number)) 
  {
      return;
  }
  
  return number;
}


/**
 * Función que permite el tamaño maximo de un campo
 * @param value Valor a validar
 * @param maxSize Tamaño máximo
 * @returns True si es válido, en caso contrario false
 */
const validateMaximumSize = (value, maxSize) => 
{
  if (value > maxSize) 
  {
    return true;
  }
  
  return false;
}


/**
 * Función que permite validar si una fecha es válida
 * @param date Fecha a validar
 * @returns True si es válida, en caso contrario false
 */
const dateIsValid = (date) =>
{
  return date instanceof Date && !isNaN(date);
}
 

export default 
{
  formatNumber,
  validateMumber,
  validateMaximumSize,
  openApp,
  dateIsValid
};