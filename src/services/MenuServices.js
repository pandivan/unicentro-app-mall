// const BACKEND_URL = "https://api-rest-retail.herokuapp.com/api/cliente/barrio";
const BACKEND_URL = "http://192.168.1.8:7788/api/cliente/barrio";

import axios from "axios";

import data from "../../data";


/**
 * Función que permite obtener el menú
 */
const getMenu = async () => 
{
  try
  {
    // console.log(JSON.stringify(cliente));
    // En el token debe estar el cliente
    // let respuesta = await axios.get(`${Constantes.BACKEND_URL}/pointsofsale`, { headers: tokenServices.autenticacionHeader() });

    let result = 
    {
      status: 200,
      data: data.dataMenu
    };

    // console.log("Respuesta API-REST getAllPointsOfSale");
    // console.log(JSON.stringify(respuesta));

    return { status: result.status, menuBD: result.data };
  }
	catch(error)
  {
    //TODO: Guardar log en BD
    console.log(`Error al consultar el menú: ${error}`);
    return { status: error.request.status };
  }
}



export default 
{
  getMenu
};