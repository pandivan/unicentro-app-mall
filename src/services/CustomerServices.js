import axios from "axios";

import Constants from "../utilities/Constants";
import authenticationServices from "./AuthenticationServices"; 

import data from "../../data";


/**
 * Función que permite registrar un nuevo cliente
 * @param customer, Cliente a registrar
 */
const signUp = async (customer) => 
{
  try
  {
    // console.log("Cliente... ");
    // console.log(customer);

    // TODO: Habilitar esta linea cuando tenga el api
    // let result = await axios.post(`${Constants.BACKEND_URL}/signup`, customer);

    let result = 
    {
      status: 200,
      data: 'token_pandi'
    };
    
    if (result.data) 
    {
      authenticationServices.setToken(result.data);
    }

    // console.log("result API-REST Cliente. ");
    // console.log(JSON.stringify(result));

    return { status: result.status };
  }
  catch(error)
  {
    return { status: error.request.status };
  }
}


/**
 * Función que permite actualizar los datos del cliente
 * @param customer Cliente actualizar
 */
const updateCustomer = async (customer) => 
{
  try
  {
    let result = await axios.put(`${Constants.BACKEND_URL}/customers`, customer, { headers: authenticationServices.authenticationHeader() });
   
    return { status: result.status };
  }
	catch(error)
  {
    return { status: error.request.status };
  }
}


/**
 * Función que permite obtener los datos del cliente
 */
const getCustomer = async () => 
{
  try
  {
    let result = await axios.get(`${Constants.BACKEND_URL}/customers`, { headers: authenticationServices.authenticationHeader() });

    return { status: result.status, customerBD: result.data };
  }
  catch(error)
  {
    return { status: error.request.status };
  }
}


/**
 * Función que permite obtener el correo del cliente
 */
const getCustomerEmail = async () => 
{
  try
  {
    let result = await axios.get(`${Constants.BACKEND_URL}/customers/email`, { headers: authenticationServices.authenticationHeader() });

    return { status: result.status, emailBD: result.data };
  }
  catch(error)
  {
    return { status: error.request.status };
  }
}


/**
 * Función que permite obtener todos los barrios de la ciudad
 * @returns Listado de barrios
 */
const getAllNeighborhoods = async () => 
{
  try
  {
    // let result = await axios.get(`${Constants.BACKEND_URL}/neighborhoods`, { headers: authenticationServices.authenticationHeader() });
    let result = 
    {
      status: 200,
      data: data.dataBarrio
    };

    return { status: result.status, lstNeighborhoodsBD: result.data };
  }
  catch(error)
  {
    return { status: error.request.status };
  }
}


export default 
{
  signUp,
  updateCustomer,
  getCustomer,
  getCustomerEmail,
  getAllNeighborhoods
};