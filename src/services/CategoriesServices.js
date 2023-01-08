import axios from "axios";

import Constants from "../utilities/Constants";


/**
 * Función que permite obtener las categorías y sus tiendas
 */
const getAllCategories = async () => 
{
  try
  {
    let result = await axios.get(`${Constants.BACKEND_URL}/categories`);

    return { response_code: result.data.RESPONSE_CODE, lstCategoriesBD: result.data.RESPONSE_DATA };
  }
	catch(error)
  {
    //TODO: Guardar log en BD
    console.log(`Error al consultar las categorias: ${error}`);
    return { response_code: error.request.status };
  }
}



export default 
{
  getAllCategories
};