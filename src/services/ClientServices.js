// const BACKEND_URL = "https://api-rest-retail.herokuapp.com/api/cliente/barrio";
const BACKEND_URL = "http://192.168.1.8:7788/api/cliente/barrio";

import axios from "axios";

import data from "../../data";


/**
 * Función que permite actualizar o registrar un nuevo cliente en BD
 * @param cliente, Cliente actualizar o registrar
 */
const registerCliente = async (client) => 
{
  try
  {
    // console.log(JSON.stringify(cliente));
    // let result = await axios.post(`${BACKEND_URL}`, client);

    let result = 
    {
      data:"token_pandi"
    };

    console.log("Respuesta API-REST Registrar Cliente.");
    // console.log(JSON.stringify(respuesta));

    return { success: ("" !== result.data), userToken: result.data };
  }
	catch(error)
  {
    //TODO: Guardar log en BD
    console.log(`Error al registrar: ${error}`);
    return { success: false };
  }
}


/**
 * Función que permite obtener los datos del clinte según su identificación
 */
const getClientByIdentification = async (identification) => 
{
  try
  {
    // console.log(JSON.stringify(cliente));
    // En el token debe estar el cliente
    // let respuesta = await axios.get(`${Constantes.BACKEND_URL}/pointsofsale`, { headers: tokenServices.autenticacionHeader() });

    let client = {
      idClient: 1,
      identification: 13072207,
      name: 'ivan',
      lastName: 'hernandez',
      phone: '3014317636',
      email: 'ivan.hernandez.coral@gmail.com',
      password: '123456',
      birthday: '1982/12/01',
      gender: 'M',
      neighborhood:
      {
        idNeighborhood:1,
        description:'Valle Lili'
      },
      isPet:1,
      isTermsConditions:1
    }

    let result = 
    {
      status: 200,
      data: client
    };

    // console.log("Respuesta API-REST getAllPointsOfSale");
    // let a = JSON.stringify(result.data);
    // console.log(JSON.parse('data.dataCategories'));
    // console.log(data.dataCategories);
    // console.log(a);


    return { status: result.status, clientBD: result.data };
  }
  catch(error)
  {
    //TODO: Guardar log en BD
    console.log(`Error al consultar las categorias: ${error}`);
    return { status: error.request.status };
  }
}


/**
 * Función que permite validar un cliente en BD, según login y password
 * @param client, Cliente a consultar
 */
const validateClient = async (client) => 
{
  try
  {
    // let result = await axios.post(`${BACKEND_URL}/validar`, client);
    let result = 
    {
      data:"token_pandi"
    };

    console.log("Respuesta API-REST Consultar Cliente ");
    // console.log(JSON.stringify(result));

    return { success: ("" !== result.data), userToken: result.data };
  }
  catch(error)
  {
    //TODO: Guardar log en BD
    console.log(`Error al validar: ${error}`);
    return { success: false };
  }
}


/**
 * Función que permite obtener los barrios
 */
 const getAllNeighborhoods = async () => 
 {
   try
   {
     // console.log(JSON.stringify(cliente));
     // En el token debe estar el cliente
     // let respuesta = await axios.get(`${Constantes.BACKEND_URL}/pointsofsale`, { headers: tokenServices.autenticacionHeader() });
 
     let result = 
     {
       status: 200,
       data: data.dataBarrio
     };
 
     // console.log("Respuesta API-REST getAllPointsOfSale");
     // let a = JSON.stringify(result.data);
     // console.log(JSON.parse('data.dataCategories'));
     // console.log(data.dataCategories);
     // console.log(a);
 
 
     return { status: result.status, lstNeighborhoodsBD: result.data };
   }
   catch(error)
   {
     //TODO: Guardar log en BD
     console.log(`Error al consultar las categorias: ${error}`);
     return { status: error.request.status };
   }
 }


export default 
{
  registerCliente,
  validateClient,
  getClientByIdentification,
  getAllNeighborhoods
};