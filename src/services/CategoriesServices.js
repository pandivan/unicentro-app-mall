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
    // let a = JSON.stringify(result.data);
    // console.log(JSON.parse('data.dataCategories'));
    // console.log(data.dataCategories);
    // console.log(a);


    return { status: result.status, lstCategoriesBD: result.data };
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
  getAllCategories
};