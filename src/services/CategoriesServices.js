// const BACKEND_URL = "https://api-rest-retail.herokuapp.com/api/cliente/barrio";
const BACKEND_URL = "http://192.168.1.8:7788/api/cliente/barrio";

import axios from "axios";

import data from "../../data";


/**
 * Función que permite obtener el categorieso de categorías y sus tiendas
 */
const getAllCategories = async () => 
{
  try
  {
    // console.log(JSON.stringify(cliente));
    // En el token debe estar el cliente
    // let respuesta = await axios.get(`${Constantes.BACKEND_URL}/pointsofsale`, { headers: tokenServices.autenticacionHeader() });

    let result = 
    {
      status: 200,
      data: data.dataCategories
    };

    // console.log("Respuesta API-REST getAllPointsOfSale");
    // console.log(JSON.stringify(respuesta));

    return { status: result.status, categoriesBD: result.data };
  }
	catch(error)
  {
    //TODO: Guardar log en BD
    console.log(`Error al consultar el categorieso: ${error}`);
    return { status: error.request.status };
  }
}



export default 
{
  getAllCategories
};