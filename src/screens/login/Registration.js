import React, { useState, useContext } from "react";
import { Text, ScrollView } from "react-native";
import { Box, Icon, CheckIcon, ChevronDownIcon, Heading, VStack, FormControl, Input, Checkbox, Button, Pressable, Center, Select, WarningOutlineIcon } from "native-base";
import { SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';

import AppContext from "../../contexts/AppContext";
import GenericFunctions from "../../utilities/GenericFunctions";



/**
 * Componente Funcional que se encarga de loguear al usuario
 * @param navigation Componente de navegación
 * @returns Scren Login
 */
const Registration = ({navigation}) =>
{
  const [names, setNames] = useState("");
  const [lastName, setLastName] = useState("");
  const [identification, setIdentification] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [isPet, setIsPet] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTermsConditions, setIsTermsConditions] = useState(false);

  const [isRequiredNames, setIsRequiredNames] = useState(false);
  const [isRequiredLastName, setIsRequiredLastName] = useState(false);
  const [isRequiredPhone, setIsRequiredPhone] = useState(false);
  const [isRequiredIdentification, setIsRequiredIdentification] = useState(false);
  const [isRequiredEmail, setIsRequiredEmail] = useState(false);
  const [isRequiredPassword, setIsRequiredPassword] = useState(false);
  const [isRequiredConfirmPassword, setIsRequiredConfirmPassword] = useState(false);
  const [isRequiredBirthday, setIsRequiredBirthday] = useState(false);
  const [isRequiredGender, setIsRequiredGender] = useState(false);
  const [isRequiredTermsConditions, setIsRequiredTermsConditions] = useState(false);

  const [errorMessageNames, setErrorMessageNames] = useState("");
  const [errorMessageLastName, setErrorMessageLastName] = useState("");
  const [errorMessageIdentification, setErrorMessageIdentification] = useState("");
  const [errorMessagePhone, setErrorMessagePhone] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");
  const [errorMessageConfirmPassword, setErrorMessageConfirmPassword] = useState("");
  const [errorMessageBirthday, setErrorMessageBirthday] = useState("");
  const [errorMessageGender, setErrorMessageGender] = useState("");
  const [errorMessageTermsConditions, setErrorMessageTermsConditions] = useState("");

  
  const [isOpenBirthday, setisOpenBirthday] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  //Hook que permite invocar al metodo signIn(useMemo) del App.js
  const { signIn } = useContext(AppContext);



  /**
   * Función que permite validar los datos del formulario
   */
  const validateForm = () =>
  {
    let isValidForm = true;

    if("" === names)
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

    if("" === identification)
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


    if(isValidForm)
    {
      signIn({ email, password });
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
      setIdentification(value);
    }
    else
    {
      if(GenericFunctions.validateMumber(value))
      {
        setIdentification(value);
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
    value = birthday.replace(/^([\d]{4})([\d]{2})([\d]{2})$/,"$1/$2/$3"); 

    console.log(value)

    // if(value.length === 2)
    // {
    //   value = value.concat("/");
    // }
    setBirthday(value);
  }



  return (
    <ScrollView showsVerticalScrollIndicator ={false}>
      <Center flex={1} px="3" backgroundColor="white" borderColor="red.500" borderWidth="2">
        <Box safeArea p="2" width="100%" py="8">
          <Heading size="lg" color="coolGray.800" fontWeight="semibold" textAlign="center">
            Registrarme
          </Heading>

          <VStack space={4} mt="5">
            <FormControl pt="3" isRequired={isRequiredNames} isInvalid={isRequiredNames}>            
              <Text style={{position:"absolute", top:0, left:24, zIndex:100, backgroundColor:"white", paddingHorizontal:10, fontSize:12}}>
                Nombres
              </Text>
              <Input value={names} onChangeText={setNames} height="9" borderRadius="15" shadow="2" backgroundColor="white" InputLeftElement={<Icon as={SimpleLineIcons} name="user" size="4" ml="3"/>}/>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessageNames}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl pt="3" isRequired={isRequiredLastName} isInvalid={isRequiredLastName}>
              <Text style={{position:"absolute", top:0, left:24, zIndex:100, backgroundColor:"white", paddingHorizontal:10, fontSize:12}}>
                Apellidos
              </Text>
              <Input value={lastName} onChangeText={setLastName} height="9" borderRadius="15" shadow="2" backgroundColor="white" InputLeftElement={<Icon as={SimpleLineIcons} name="user" size="4" ml="3"/>}/>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessageLastName}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl pt="3" isRequired={isRequiredIdentification} isInvalid={isRequiredIdentification}>
              <Text style={{position:"absolute", top:0, left:24, zIndex:100, backgroundColor:"white", paddingHorizontal:10, fontSize:12}}>
                Cédula
              </Text>
              <Input value={identification} onChangeText={onChangeTextIdentification} height="9" borderRadius="15" shadow="2" backgroundColor="white" InputLeftElement={<Icon as={SimpleLineIcons} name="user" size="4" ml="3"/>}/>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessageIdentification}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl pt="3" isRequired={isRequiredPhone} isInvalid={isRequiredPhone}>
              <Text style={{position:"absolute", top:0, left:24, zIndex:100, backgroundColor:"white", paddingHorizontal:10, fontSize:12}}>
                Celular
              </Text>
              <Input value={phone} onChangeText={setPhone} height="9" borderRadius="15" shadow="2" backgroundColor="white" InputLeftElement={<Icon as={SimpleLineIcons} name="phone" size="4" ml="3"/>}/>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessagePhone}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl pt="3" isRequired={isRequiredEmail} isInvalid={isRequiredEmail}>
              <Text style={{position:"absolute", top:0, left:24, zIndex:100, backgroundColor:"white", paddingHorizontal:10, fontSize:12}}>
                Email
              </Text>
              <Input value={email} onChangeText={setEmail} height="9" borderRadius="15" shadow="2" backgroundColor="white" InputLeftElement={<Icon as={SimpleLineIcons} name="envelope" size="4" ml="3"/>}/>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessageEmail}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl pt="3" isRequired={isRequiredPassword} isInvalid={isRequiredPassword}>
              <Text style={{position:"absolute", top:0, left:24, zIndex:100, backgroundColor:"white", paddingHorizontal:10, fontSize:12}}>
                Contraseña
              </Text>
              <Input value={password} onChangeText={setPassword} height="9" borderRadius="15" shadow="2" backgroundColor="white" 
                InputLeftElement={<Icon as={SimpleLineIcons} name="lock" size="4" ml="3"/>} 
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
                InputLeftElement={<Icon as={SimpleLineIcons} name="lock" size="4" ml="3"/>}
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
              <Input value={birthday} onChangeText={onChangeTextBirthday} height="9" borderRadius="15" shadow="2" backgroundColor="white" InputLeftElement={<Icon as={SimpleLineIcons} name="calendar" size="4" ml="3"/>}/>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessageBirthday}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl pt="3" isRequired={isRequiredGender} isInvalid={isRequiredGender}>
              <Text style={{position:"absolute", top:0, left:24, zIndex:100, backgroundColor:"white", paddingHorizontal:10, fontSize:12}}>
                Género
              </Text>
              <Select height="9" borderRadius="15" shadow="2" selectedValue={gender}
                InputLeftElement={<Icon as={SimpleLineIcons} name="people" size="4" ml="3"/>}
                dropdownIcon={<ChevronDownIcon mr="3"/>}
                _selectedItem={{backgroundColor:"#FF984F", height:9, justifyContent:"center", endIcon: <CheckIcon size={5}/>}}
                _actionSheetContent={{}}
                onValueChange={selectedGender => setGender(selectedGender)}
              >
                <Select.Item label="No definido" _text={{fontSize:14}} borderRadius="10" m_="0" value="n" />
                <Select.Item label="Femenino" _text={{fontSize:14}} borderRadius="10" m_="0" value="f" />
                <Select.Item label="Masculino" _text={{fontSize:14}} borderRadius="10" m_="0" value="m" />
              </Select>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessageGender}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl pt="3" isRequired={isRequiredTermsConditions} isInvalid={isRequiredTermsConditions}>
              <Checkbox shadow_={2} isInvalid={isRequiredTermsConditions} onChange={setIsTermsConditions}>
                Acepto Términos y condiciones
              </Checkbox>
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