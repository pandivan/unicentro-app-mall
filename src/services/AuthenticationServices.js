import axios from "axios";
import * as SecureStore from "expo-secure-store";

import Constants from "../utilities/Constants";




/**
 * Función que permite validar un cliente, según correo y clave
 * @param customer, Cliente a consultar
 */
const signIn = async (customer) => 
{
  try
  {
    // let result = await axios.post(`${Constants.BACKEND_URL}/signin`, customer);
    let result = 
    {
      status: 200,
      data: 'token_pandi'
    };

    if (result.data) 
    {
      // El cliente se registro exitosamente y se guarda el token en SecureStore
      setToken(result.data);
    }

    // console.log("result API-REST Consultar Cliente ");
    // console.log(JSON.stringify(result));

    return { status: result.status, userToken: result.data };
  }
  catch(error)
  {
    return { status: error.request.status };
  }
}


/**
 * Método que permite remover el token del SecureStore
 */
const signOut = () => 
{
  SecureStore.deleteItemAsync("userToken");
}


/**
 * Método que permite obtener el token del SecureStore
 */
const getToken = async () => 
{
  try
  {
    let userToken = await SecureStore.getItemAsync("userToken");
    return userToken;
  }
  catch(error)
  {
    return null;
  }
}


/**
 * Método que permite almacenar el token en el SecureStore
 * @param userToken Token del usuario que se va almacenar
 */
const setToken = async (userToken) => 
{
  await SecureStore.setItemAsync("userToken", JSON.stringify(userToken));
}



/**
 * Función que permite validar si el token está activo
 */
const validateToken = async () => 
{
  try
  {
    // let result = await axios.get(`${Constants.BACKEND_URL}/info`, { headers: authenticationHeader() });
    let result = 
    {
      status: 200,
      data: 'token_pandi'
    };

    return { status: result.status };
  }
  catch(error)
  {
    return { status: error.request.status };
  }
}



/**
 * Función que permite restaurar la clave del cliente
 * @param email Coreo electrónico al que se enviará las instrucciones para restaurar la clave del cliente
 */
const restorePassword = async (email) => 
{
  try
  {
    let result = await axios.post(`${Constants.BACKEND_URL}/restore`, email);

    return { status: result.status };
  }
  catch(error)
  {
    return { status: error.request.status };
  }
}


const authenticationHeader = () =>
{
  let token = getToken();

  if (token) 
  {
    return { Authorization: 'Bearer ' + token };
  } 
  else 
  {
    return {};
  }
}


export default 
{
  signIn,
  signOut,
  getToken,
  setToken,
  validateToken,
  restorePassword,
  authenticationHeader
};