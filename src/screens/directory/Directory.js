import React, { useState, useEffect, useContext } from "react";
import { FlatList, Image } from "react-native";
import { VStack, HStack, Center, Text, Pressable, Icon, Input, Box } from "native-base";
import { Ionicons } from '@expo/vector-icons';

import AppContext from '../../contexts/AppContext';
import HeaderTitle from "../../components/HeaderTitle";



/**
 * Componente funcional que contiene el directorio por categorías y productos
 * @returns Screen Directorio
 */
const Directory = ({ navigation, route }) =>
{

  //Hook que permite invocar al metodo loadCategories(useMemo) del App.js
  const { lstCategories }  = useContext(AppContext);

  const [lstDirectoryCategories, setLstDirectoryCategories] = useState([]);
  const [lstStores, setLstStores] = useState([]);
  const [idCategory, setIdCategory] = useState(1);
  const [search, setSearch] = useState("");
 


  /**
   * Funcion que permite cargar la data inicial para el screen directorio
   */
  useEffect(() => 
  {
    const loadData = () => 
    {
      // console.log("useEffect loadData Directory");
      try 
      {
        // Se obtiene las categorías que se deben pintar en el header del directorio según el tipo de categoría...
        // 1 = Se pinta en home
        // 2 = Se pinta en directorio
        // 3 = Se pinta en home y directorio
        let lstDirectoryCategories = lstCategories.filter(category => (2 === category.type || 3 === category.type));
        
        setLstDirectoryCategories(lstDirectoryCategories);
        
        // Se obtiene de listado de tiendas de la primera categoria
        setLstStores(lstDirectoryCategories[0].lstStores);
      }
      catch (error) 
      {
        console.log("Error al cargar el categories (Directory) " + error)
      }
    }

    loadData();
  }, []);


  useEffect(() => 
  {
    HeaderTitle.unsubscribe(navigation, "Directorio");
  }, [navigation]);


  /**
   * Función que permite obtener las tiendas según la categoría seleccionada
   * @param idCategory Id de la categoría seleccionada
   */
  const loadStores = (idCategory) =>
  {
    // Se obtiene de listado de categorias la categoria selecconada
    let category = lstDirectoryCategories.filter(category => (idCategory === category.idCategory))[0];
    
    setIdCategory(idCategory);
    setLstStores(category.lstStores);
  }


  /**
   * Función que permite buscar la tienda en todo el listado de tiendas
   * @param search Tienda a buscar
   */
  const searchStore = (search) => 
  {
    // Se busca la tienda en el listado de tiendas según la categoría seleccionada
    setLstStores(lstStores.filter(store => store.name.toLowerCase().includes(search.toLowerCase())));
    
    // Se actualiza el estado de search
    setSearch(search);
  }

  
  /**
   * Funcion que permite listar las tiendas segun la categoria seleccionada
   * @param store Tienda
   * @returns Componente que visualiza las tiendas
   */
  const renderStores = (store) => 
  {
    // Tarjetas de tiendas segun la categoria seleccionada
    return(
      <Pressable height="32" width="80" mb="5" borderColor_="red.500" borderWidth_="1" onPress={() => navigation.navigate("StoreInformation", store)}>
      {
        ({ isPressed }) => 
        {
          return (
            <Center background={isPressed ? "#F2F2F2" : "white"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} rounded="20" height="100%" width="100%" shadow="2" borderColor="gray.300" borderWidth="1">
              <HStack ml="5" space={8} borderColor_="red.500" borderWidth_="1">
                <Center width="20" borderColor_="blue.500" borderWidth_="1">
                  <Image source={{uri:store.urlStoreLogo}} resizeMode="cover" style={{width:64, height:64}}/>
                </Center>

                <VStack height="100%" width="48" borderColor_="green.500" borderWidth_="1">
                  <Text fontSize="21" fontWeight="700" color="black" borderColor_="gray.300" borderWidth_="3">
                    {store.name}
                  </Text>
                  <Text fontSize="12" color="#f18032">
                    {store.description}
                  </Text>
                  <Center mt="2" height="9" width="110px" rounded="18" borderColor="#f18032" borderWidth="2">
                    <Text color="#f18032" fontWeight="600" fontSize="md">
                      Local {store.storeNumber}
                    </Text>
                  </Center>
                </VStack>
              </HStack>
            </Center>
          );
        }
      }
      </Pressable>
    )
  }


  return(
    <Center flex={1} backgroundColor_="white" borderColor_="red.600" borderWidth_="1">
      <HStack mt="5" justifyContent="center" space={5} width="100%" borderColor_="red.600" borderWidth_="1">
      {
        // Visualización de las categorias en el header
        lstDirectoryCategories.map((category, index)=>
        {
          return (
            <VStack key={index} alignItems="center">
              <Pressable onPress={() => loadStores(category.idCategory)}>
              {
                ({ isPressed }) => 
                {
                  return (
                    <Center bg={idCategory === category.idCategory ? "#3abdc2" : "white"} shadow="3" rounded="100" width="16" height="16" style={{transform: [{scale: isPressed ? 0.96 : 1}]}}>
                      <Image source={{uri:category.urlCategoryIcon}} style={{width:40, height:40}}/>
                    </Center>
                  )
                }
              }
              </Pressable>
              <Text mt="2" bold color={idCategory === category.idCategory ? "#3abdc2" : "#b5b5b5"}>{category.categoryName}</Text>
            </VStack>
          )        
        })
      }
      </HStack>

      {/* Buscador de tiendas */}
      <Input 
        placeholder="Tiendas" 
        variant="filled" 
        width="90%" 
        borderColor="#f18032" 
        _focus={{borderColor:"#f18032", backgroundColor:"white"}} 
        borderRadius="10" mt="8" mb="5" py="1" px="2" 
        InputRightElement={<Icon mr="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />}
        value={search} 
        onChangeText={(search) => searchStore(search)}
      />

      {/* Se lita las tarjetas con la informacion de cada tienda */}
      <Center flex={1}>
        <FlatList
          data={lstStores} 
          renderItem={({item}) => renderStores(item)} 
          keyExtractor={item => item.idStore} 
          showsVerticalScrollIndicator ={false}
        />
      </Center>
    </Center>
  );
}

export default Directory;