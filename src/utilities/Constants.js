/**
 * Constantes para el manejo de CRUD
 */
const ID_ROLE_CUSTOMER = 2;
const CUSTOMER_TYPE = "web";
const ID_IDENTIFICATION_TYPE_SISBOL = "01001";

const RESPONSE_OK_CODE = 2000;
const RESPONSE_ERROR_CODE = 3000;
const RESPONSE_FAILED_VALIDATION_CODE = 4000;
const ACCESS_DENIED = 403;

const OK_CREATED_CUSTOMER = "Tu registro fue exitoso";
const VALIDATING_EMAIL_CUSTOMER = "El email ya se encuentra registrado en la plataforma.";

const MESSAGE_ERROR_CREATING_CUSTOMER = "No es posible registrarte en este momento, favor intentarlo en unos minutos.";
const MESSAGE_ERROR_UPDATING_CUSTOMER = "No es posible actualizar tu información en este momento, favor intentarlo en unos minutos.";
const MESSAGE_ERROR_REMOVING_CUSTOMER = "Error al eliminar un cliente";
const MESSAGE_ERROR_SEARCHING_CUSTOMER = "No es posible consultar tu información en este momento, favor intentarlo en unos minutos.";
const MESSAGE_INVALID_CUSTOMER_ERROR =  "Usuario o Clave invalida.";
const MESSAGE_ERROR_ACCESSING_CUSTOMER = "En el momento no es posible acceder a la información,\nfavor intentarlo más tarde.";
const MESSAGE_ERROR_REGISTERING_INVOICE = "No es posible registrar la factura en este momento, favor intentarlo en unos minutos.";


/**
 * Constantes para el manejo de URL API-REST
 */
const BACKEND_URL = "http://192.168.1.8:7788/unicentro-service/v1";
//  const BACKEND_URL = "https://acuatex-api-rest.herokuapp.com/unicentro-service/v1";

export default 
{
  BACKEND_URL,
  ID_ROLE_CUSTOMER,
  CUSTOMER_TYPE,
  ID_IDENTIFICATION_TYPE_SISBOL,
  RESPONSE_OK_CODE,
  RESPONSE_ERROR_CODE,
  RESPONSE_FAILED_VALIDATION_CODE,
  ACCESS_DENIED,
  OK_CREATED_CUSTOMER,
  VALIDATING_EMAIL_CUSTOMER,
  MESSAGE_ERROR_CREATING_CUSTOMER,
  MESSAGE_ERROR_UPDATING_CUSTOMER,
  MESSAGE_ERROR_REMOVING_CUSTOMER,
  MESSAGE_ERROR_SEARCHING_CUSTOMER,
  MESSAGE_INVALID_CUSTOMER_ERROR,
  MESSAGE_ERROR_ACCESSING_CUSTOMER,
  MESSAGE_ERROR_REGISTERING_INVOICE
};
