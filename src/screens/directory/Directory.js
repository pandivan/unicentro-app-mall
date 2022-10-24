import React, { useState, useEffect, useContext } from "react";
import { FlatList } from "react-native";
import { VStack, HStack, Center, Text, Pressable, Image, Icon, Input } from "native-base";
import { Ionicons } from '@expo/vector-icons';

import AppContext from '../../contexts/AppContext';



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
   * Funcion que permite cargar la data inicial del home
   */
  useEffect(() => 
  {
    console.log("useEffect Directory");

    const loadData = () => 
    {
      try 
      {
        // Se adiciona el componente HeaderFilters al header de la barra de navegación con los puntos de venta JSON.parse(lstPointsSale)
        navigation.setOptions({ headerRight: null });

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
    setLstStores(lstStores.filter(store => store.storeName.toLowerCase().includes(search.toLowerCase())));
    
    // Se actualiza el estado search
    setSearch(search);
  }

  /**
   * Funcion que permite listar las tiendas segun la categoria seleccionada
   * @param store Tienda
   * @returns Componente que visualiza las tiendas
   */
  const renderStores = (store) => 
  {

    return(
      <Pressable height="32" width="80" mb="5" borderColor_="red.500" borderWidth_="1" onPress={() => navigation.navigate("StoreInformation", store)}>
      {
        ({ isPressed }) => 
        {
          return (
            <Center background={isPressed ? "#F2F2F2" : "white"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} rounded="20" height="100%" width="100%" shadow="2" borderColor="gray.300" borderWidth="1">
              <HStack ml="5" space={8} borderColor_="red.500" borderWidth_="1">
                <Center width="20" borderColor_="blue.500" borderWidth_="1">
                  <Image source={{uri:store.urlStoreLogo}} alt="Imagen desactualizada" resizeMode="cover" width={16} height={16}/>
                </Center>

                <VStack height="100%" width="48" borderColor_="green.500" borderWidth_="1">
                  <Text fontSize="23" fontWeight="700" color="black" borderColor_="gray.300" borderWidth_="3">
                    {store.storeName}
                  </Text>
                  <Text fontSize="15" color="#f18032">
                    {store.description}
                  </Text>
                  <Center mt="2" height="10" width="110px" rounded="18" borderColor="#f18032" borderWidth="2">
                    <Text color="#f18032" fontWeight="600" fontSize="lg">
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
                      <Image source={{uri:category.urlCategoryIcon}} alt="Imagen desactualizada" size="xs" rounded="100"/>
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