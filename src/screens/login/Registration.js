import React, { useState, useEffect } from "react";
import { Text, ScrollView, Alert } from "react-native";
import { Box, Icon, CheckIcon, ChevronDownIcon, Heading, VStack, FormControl, Input, Button, Pressable, Center, Select, WarningOutlineIcon } from "native-base";
import { SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';
import Checkbox from "expo-checkbox";


import GenericFunctions from "../../utilities/GenericFunctions";
import Constants from "../../utilities/Constants";
import customerServices from "../../services/CustomerServices";



/**
 * Componente Funcional que se encarga de loguear al usuario
 * @param navigation Componente de navegación
 * @returns Scren Login
 */
const Registration = ({navigation}) =>
{
  const [identificationDocument, setIdentificationDocument] = useState("13072207");
  const [firstName, setFirstName] = useState("Ivan");
  const [lastName, setLastName] = useState("Hernnandez");
  const [phone, setPhone] = useState("3014317636");
  const [email, setEmail] = useState("ivan.hernandez.coral@gmail.com");
  const [password, setPassword] = useState("123");
  const [confirmPassword, setConfirmPassword] = useState("123");
  const [birthday, setBirthday] = useState("1981/12/01");
  const [gender, setGender] = useState("M");
  const [idNeighborhood, setIdNeighborhood] = useState(1);

  const [isPet, setIsPet] = useState(true);
  const [isTermsConditions, setIsTermsConditions] = useState(true);
  
  const [isRequiredIdentification, setIsRequiredIdentification] = useState(false);
  const [isRequiredNames, setIsRequiredNames] = useState(false);
  const [isRequiredLastName, setIsRequiredLastName] = useState(false);
  const [isRequiredPhone, setIsRequiredPhone] = useState(false);
  const [isRequiredEmail, setIsRequiredEmail] = useState(false);
  const [isRequiredPassword, setIsRequiredPassword] = useState(false);
  const [isRequiredConfirmPassword, setIsRequiredConfirmPassword] = useState(false);
  const [isRequiredBirthday, setIsRequiredBirthday] = useState(false);
  const [isRequiredGender, setIsRequiredGender] = useState(false);
  const [isRequiredNeighborhood, setIsRequiredNeighborhood] = useState(false);
  const [isRequiredTermsConditions, setIsRequiredTermsConditions] = useState(false);
  
  const [errorMessageIdentification, setErrorMessageIdentification] = useState("");
  const [errorMessageNames, setErrorMessageNames] = useState("");
  const [errorMessageLastName, setErrorMessageLastName] = useState("");
  const [errorMessagePhone, setErrorMessagePhone] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");
  const [errorMessageConfirmPassword, setErrorMessageConfirmPassword] = useState("");
  const [errorMessageBirthday, setErrorMessageBirthday] = useState("");
  const [errorMessageGender, setErrorMessageGender] = useState("");
  const [errorMessageNeighborhood, setErrorMessageNeighborhood] = useState("");
  const [errorMessageTermsConditions, setErrorMessageTermsConditions] = useState("");
  
  const [lstNeighborhoods, setLstNeighborhoods] = useState([]);
  const [isOpenBirthday, setisOpenBirthday] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  



  /**
   * Funcion que permite cargar u obtener la información del cliente
   */
  useEffect(() => 
  {
    console.log("useEffect Registration");

    const loadData = async () => 
    {
      try 
      {

        //Se obtiene los barrios a traves del api-rest
        let { response_code, lstNeighborhoodsBD } = await customerServices.getAllNeighborhoods();

        if(Constants.RESPONSE_OK_CODE == response_code)
        {
          setLstNeighborhoods(lstNeighborhoodsBD);
        }
        else
        {
          Alert.alert("Información", Constants.MESSAGE_ERROR_CREATING_CUSTOMER);
        }
      }
      catch (error) 
      {
        console.log(error)
        Alert.alert("Información", Constants.MESSAGE_ERROR_CREATING_CUSTOMER);
      }
    }

    loadData();
  }, []);


  /**
   * Función que permite registrar un cliente en el sistema y lo loguea automaticamente en la aplicación
   */
  const signUp = async () =>
  {
    try 
    {
      // Creando el entity customer
      let customer = 
      {
        idCustomer: null,
        idIdentificationType: Constants.ID_IDENTIFICATION_TYPE_SISBOL, 
        identificationDocument, 
        firstName, 
        lastName,
        address: "calle 45",
        phone, 
        birthday, 
        gender, 
        email, 
        idNeighborhood,
        customerType: Constants.CUSTOMER_TYPE,
        password, 
        idRole: Constants.ID_ROLE_CUSTOMER
      };

      //Se registra un cliente a traves del api-rest
      let {response_code} = await customerServices.signUp(customer);

      if(Constants.RESPONSE_OK_CODE === response_code)
      {
        navigation.navigate("Home");
      }
      else
      {
        if(Constants.RESPONSE_FAILED_VALIDATION_CODE === response_code)
        {
          Alert.alert("Información", Constants.VALIDATING_EMAIL_CUSTOMER);
        }
        else
        {
          Alert.alert("Información", Constants.MESSAGE_ERROR_CREATING_CUSTOMER);
        }
      }
    }
    catch (error)
    {
      Alert.alert("Información", Constants.MESSAGE_ERROR_CREATING_CUSTOMER);
    }
  }


  /**
   * Función que permite validar los datos del formulario
   */
  const validateForm = () =>
  {
    let isValidForm = true;

    if("" === firstName)
    {
      isValidForm = false;
      setIsRequiredNames(true);
      setErrorMessageNames("Ingresa tu nombre");
    }
    else
    {
      setIsRequiredNames(false);
    }

    if("" === lastName)
    {
      isValidForm = false;
      setIsRequiredLastName(true);
      setErrorMessageLastName("Ingresa tus apellidos");
    }
    else
    {
      setIsRequiredLastName(false);
    }

    if("" === identificationDocument)
    {
      isValidForm = false;
      setIsRequiredIdentification(true);
      setErrorMessageIdentification("Ingresa tu cédula");
    }
    else
    {
      setIsRequiredIdentification(false);
    }

    if("" === phone)
    {
      isValidForm = false;
      setIsRequiredPhone(true);
      setErrorMessagePhone("Ingresa un número de celular");
    }
    else
    {
      setIsRequiredPhone(false);
    }

    if("" === email)
    {
      isValidForm = false;
      setIsRequiredEmail(true);
      setErrorMessageEmail("Ingresa un correo electrónico");
    }
    else
    {
      setIsRequiredEmail(false);
    }
    
    if("" === password)
    {
      isValidForm = false;
      setIsRequiredPassword(true);
      setErrorMessagePassword("Ingresa una contraseña");
    }
    else
    {
      setIsRequiredPassword(false);
    }

    if("" === confirmPassword)
    { 
      isValidForm = false;
      setIsRequiredConfirmPassword(true);
      setErrorMessageConfirmPassword("Confirma la contraseña");
    }
    else
    {
      if(password === confirmPassword)
      {
        setIsRequiredConfirmPassword(false);
      }
      else
      {
        isValidForm = false;
        setIsRequiredConfirmPassword(true);
        setErrorMessageConfirmPassword("Las contraseñas no son iguales");
      }
    }


    if("" === birthday)
    {
      isValidForm = false;
      setIsRequiredBirthday(true);
      setErrorMessageBirthday("Ingresa tu fecha de cumpleaños");
    }
    else
    {
      if(GenericFunctions.dateIsValid(new Date(birthday)))
      {
        setIsRequiredBirthday(false);
      }
      else
      {
        setIsRequiredBirthday(true);
        setErrorMessageBirthday("Fecha inválida")
      }
    }


    if(!isTermsConditions)
    {
      isValidForm = false;
      setIsRequiredTermsConditions(true);
      setErrorMessageTermsConditions("Debe aceptar la política de términos y condiciones");
    }
    else
    {
      setIsRequiredTermsConditions(false);
    }

    // Se valida que todos los campos obligatorios esté diligenciados
    if(isValidForm)
    {
      signUp();
    }
  }


  /**
   * Función que permite validar que cada caracter digitado en el campo cedula sea numéricos
   * @param value Valor digitado
   */
  const onChangeTextIdentification = (value) =>
  {
    if("" === value)
    {
      setIdentificationDocument(value);
    }
    else
    {
      if(GenericFunctions.validateMumber(value))
      {
        setIdentificationDocument(value);
      }
    }
  }


  /**
   * Función que permite validar que cada caracter digitado en el campo cedula sea numéricos
   * @param value Valor digitado
   */
  const onChangeTextBirthday = (value) =>
  {

    // value = el.value;       
    let value_ = value.replace(/^([\d]{4})([\d]{2})([\d]{2})$/,"$1/$2/$3"); 


    // if(value.length === 2)
    // {
    //   value = value.concat("/");
    // }
    setBirthday(value_);
  }


  /**
   * Función que permite obtener los datos del cliente según su número de identificación
   */
  const onEndEditingIdentification = async () =>
  {
    try 
    {
      //Se obtiene los datos del cliente a traves del api-rest
      let {status, clientBD} = await clientServices.getClientByIdentification(identificationDocument);

      if(Constants.RESPONSE_OK_CODE == status)
      {
        // setIdentification(clientBD.identification);
        setFirstName(clientBD.name);
        setLastName(clientBD.lastName);
        setPhone(clientBD.phone);
        setEmail(clientBD.email);
        setBirthday(clientBD.birthday);
        setGender(clientBD.gender);
        setIdNeighborhood(clientBD.neighborhood.idNeighborhood);
        setIsPet(clientBD.isPet === 1 ? true : false);
      }
    }
    catch (error) 
    {
      /**
       * Si sucede un error aquí puedo ignorarlo ya que el cliente puede continuar con su proceso de registro normal
       * y en el back gracias a JPA el cliente si no existe se crea, en caso contrario se actualiza
       */
    }
  }


  return (
    <ScrollView showsVerticalScrollIndicator ={false}>
      <Center flex={1} px="3" backgroundColor="white" borderColor_="red.500" borderWidth_="2">
        <Box safeArea p="2" width="100%" mb="8">
          <Center my="5" borderColor_="yellow.500" borderWidth_="1">
            {/* <Image source={require('../../../assets/logo_login.png')} alt="Alternate Text" resizeMode="contain" width={48} height={20}/> */}
            
            <Heading fontSize={19} my_="2" fontWeight="600">
              Registrarme
            </Heading>
          </Center>
          <VStack space={4}>
            <FormControl pt="3" isRequired={isRequiredIdentification} isInvalid={isRequiredIdentification}>
              <Text style={{position:"absolute", top:0, left:24, zIndex:100, backgroundColor:"white", paddingHorizontal:10, fontSize:12}}>
                Cédula
              </Text>
              <Input value={identificationDocument} onChangeText={onChangeTextIdentification} onEndEditing={onEndEditingIdentification} height="9" borderRadius="15" shadow="2" backgroundColor="white" InputLeftElement={<Icon as={SimpleLineIcons} name="user" size="4" ml="3" color="#F18032"/>}/>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessageIdentification}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl pt="3" isRequired={isRequiredNames} isInvalid={isRequiredNames}>            
              <Text style={{position:"absolute", top:0, left:24, zIndex:100, backgroundColor:"white", paddingHorizontal:10, fontSize:12}}>
                Nombres
              </Text>
              <Input value={firstName} onChangeText={setFirstName} height="9" borderRadius="15" shadow="2" backgroundColor="white" InputLeftElement={<Icon as={SimpleLineIcons} name="user" size="4" ml="3" color="#F18032"/>}/>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessageNames}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl pt="3" isRequired={isRequiredLastName} isInvalid={isRequiredLastName}>
              <Text style={{position:"absolute", top:0, left:24, zIndex:100, backgroundColor:"white", paddingHorizontal:10, fontSize:12}}>
                Apellidos
              </Text>
              <Input value={lastName} onChangeText={setLastName} height="9" borderRadius="15" shadow="2" backgroundColor="white" InputLeftElement={<Icon as={SimpleLineIcons} name="user" size="4" ml="3" color="#F18032"/>}/>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessageLastName}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl pt="3" isRequired={isRequiredPhone} isInvalid={isRequiredPhone}>
              <Text style={{position:"absolute", top:0, left:24, zIndex:100, backgroundColor:"white", paddingHorizontal:10, fontSize:12}}>
                Celular
              </Text>
              <Input value={phone} onChangeText={setPhone} height="9" borderRadius="15" shadow="2" backgroundColor="white" InputLeftElement={<Icon as={SimpleLineIcons} name="phone" size="4" ml="3" color="#F18032"/>}/>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessagePhone}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl pt="3" isRequired={isRequiredEmail} isInvalid={isRequiredEmail}>
              <Text style={{position:"absolute", top:0, left:24, zIndex:100, backgroundColor:"white", paddingHorizontal:10, fontSize:12}}>
                Email
              </Text>
              <Input value={email} onChangeText={setEmail} height="9" borderRadius="15" shadow="2" backgroundColor="white" InputLeftElement={<Icon as={SimpleLineIcons} name="envelope" size="4" ml="3" color="#F18032"/>}/>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessageEmail}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl pt="3" isRequired={isRequiredPassword} isInvalid={isRequiredPassword}>
              <Text style={{position:"absolute", top:0, left:24, zIndex:100, backgroundColor:"white", paddingHorizontal:10, fontSize:12}}>
                Contraseña
              </Text>
              <Input value={password} onChangeText={setPassword} height="9" borderRadius="15" shadow="2" backgroundColor="white" 
                InputLeftElement={<Icon as={SimpleLineIcons} name="lock" size="4" ml="3" color="#F18032"/>} 
                type={showPassword ? "text" : "password"} 
                InputRightElement=
                {
                  <Pressable onPress={() => setShowPassword(!showPassword)}>
                    <Icon as={<MaterialIcons name={showPassword ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                  </Pressable>
                }
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessagePassword}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl pt="3" isRequired={isRequiredConfirmPassword} isInvalid={isRequiredConfirmPassword}>
              <Text style={{position:"absolute", top:0, left:24, zIndex:100, backgroundColor:"white", paddingHorizontal:10, fontSize:12}}>
                Confirmar contraseña
              </Text>
              <Input value={confirmPassword} onChangeText={setConfirmPassword} height="9" borderRadius="15" shadow="2" backgroundColor="white" 
                InputLeftElement={<Icon as={SimpleLineIcons} name="lock" size="4" ml="3" color="#F18032"/>}
                type={showConfirmPassword ? "text" : "password"} 
                InputRightElement=
                {
                  <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                    <Icon as={<MaterialIcons name={showConfirmPassword ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                  </Pressable>
                }
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessageConfirmPassword}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl pt="3" isRequired={isRequiredBirthday} isInvalid={isRequiredBirthday}>
              <Text style={{position:"absolute", top:0, left:24, zIndex:100, backgroundColor:"white", paddingHorizontal:10, fontSize:12}}>
                Fecha de cumpleaños (dd/mm/aaaa)
              </Text>
              <Input value={birthday} onChangeText={onChangeTextBirthday} height="9" borderRadius="15" shadow="2" backgroundColor="white" InputLeftElement={<Icon as={SimpleLineIcons} name="calendar" size="4" ml="3" color="#F18032"/>}/>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessageBirthday}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl pt="3" isRequired={isRequiredGender} isInvalid={isRequiredGender}>
              <Text style={{position:"absolute", top:0, left:24, zIndex:100, backgroundColor:"white", paddingHorizontal:10, fontSize:12}}>
                Género
              </Text>
              <Select height="9" borderRadius="15" shadow="2" selectedValue={gender}
                InputLeftElement={<Icon as={SimpleLineIcons} name="people" size="4" ml="3" color="#F18032"/>}
                dropdownIcon={<ChevronDownIcon mr="3"/>}
                _selectedItem={{backgroundColor:"#FF984F", height:9, justifyContent:"center", endIcon: <CheckIcon size={5}/>}}
                _actionSheetContent={{}}
                onValueChange={selectedGender => setGender(selectedGender)}
              >
                <Select.Item label="No definido" _text={{fontSize:14}} borderRadius="10" m_="0" value="ND" />
                <Select.Item label="Femenino" _text={{fontSize:14}} borderRadius="10" m_="0" value="F" />
                <Select.Item label="Masculino" _text={{fontSize:14}} borderRadius="10" m_="0" value="M" />
              </Select>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessageGender}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl pt="3" isRequired={isRequiredNeighborhood} isInvalid={isRequiredNeighborhood}>
              <Text style={{position:"absolute", top:0, left:24, zIndex:100, backgroundColor:"white", paddingHorizontal:10, fontSize:12}}>
                Barrio
              </Text>
              <Select height="9" borderRadius="15" shadow="2" selectedValue={idNeighborhood}
                InputLeftElement={<Icon as={SimpleLineIcons} name="home" size="4" ml="3" color="#F18032"/>}
                dropdownIcon={<ChevronDownIcon mr="3"/>}
                _selectedItem={{backgroundColor:"#FF984F", height:9, justifyContent:"center", endIcon: <CheckIcon size={5}/>}}
                _actionSheetContent={{}}
                onValueChange={selectedNeighborhood => setIdNeighborhood(selectedNeighborhood)}
              >
                {
                  lstNeighborhoods.map(neighborhood => 
                  (
                    <Select.Item key={neighborhood.idNeighborhood} label={neighborhood.neighborhood} _text={{fontSize:14}} borderRadius="10" value={neighborhood.idNeighborhood} />
                  ))
                }
              </Select>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessageGender}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl pt="3" flexDirection="row" alignItems="center">
              <Checkbox value={isPet} onValueChange={setIsPet} />
              <Text style={{marginLeft:10, fontSize:12}}>Mascota</Text>
            </FormControl>

            <FormControl pt="3" isRequired={isRequiredTermsConditions} isInvalid={isRequiredTermsConditions}>
              <Box flexDirection="row" alignItems="center">
                <Checkbox value={isTermsConditions} onValueChange={setIsTermsConditions} />
                <Text style={{marginLeft:10}}>Acepto Términos y condiciones</Text>
              </Box>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessageTermsConditions}
              </FormControl.ErrorMessage>
            </FormControl>
            
            <Button mt="2" onPress={validateForm} backgroundColor="#46c9cb" borderRadius="lg">
              Ingresar
            </Button>
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  ); 
}

export default Registration;