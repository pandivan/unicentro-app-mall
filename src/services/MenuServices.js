import axios from "axios";

import Constants from "../utilities/Constants";


/**
 * Función que permite obtener el menú
 */
const getMenu = async () => 
{
  try
  {
    let result = await axios.get(`${Constants.BACKEND_URL}/menuoptions/${Constants.ID_ROLE_CUSTOMER}`);

    return { response_code: result.data.RESPONSE_CODE, lstMenuBD: result.data.RESPONSE_DATA };
  }
	catch(error)
  {
    //TODO: Guardar log en BD
    return { response_code: error.request.status };
  }
}



export default 
{
  getMenu
};