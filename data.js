const dataMenu = [{
  idItemMenu: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  itemName: "Directorio",
  description: "Tiendas, entretenimiento y gastronomía",
  urlItemImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}, {
  idItemMenu: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  itemName: "Torre Médica",
  description: "Cheer up, there!",
  urlItemImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
}, {
  idItemMenu: "58694a0f-3da1-471f-bd96-145571e29d72",
  itemName: "Anci Barroco",
  description: "Good Day!",
  urlItemImage: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
}, {
  idItemMenu: "68694a0f-3da1-431f-bd56-142371e29d72",
  itemName: "Aniket Kumar",
  description: "All the best",
  urlItemImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
}, {
  idItemMenu: "28694a0f-3da1-471f-bd96-142456e29d72",
  itemName: "Kiara",
  description: "I will call today.",
  urlItemImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
}];

const dataCategories = 
[
  {
    idCategory:1,
    categoryName: "Tiendas",
    urlCategoryImage: "Tiendas.png",
    urlCategoryIcon: "TiendasIcon.png",
    type: 3,
    lstStores:
    [
      {
        idStore:1,
        storeName:"Arturo Calle",
        description:"Ropa Casual y Formal",
        storeNumber:"Local 1-41",
        urlStoreImage: "ArturoCalle.png",
      },
      {
        idStore:2,
        storeName:"Academy",
        description:"Ropa Casual y Formal",
        storeNumber:"Local 1-42",
        urlStoreImage: "Academy.png",
      },
      {
        idStore:3,
        storeName:"Afterland",
        description:"Juguetería",
        storeNumber:"Local 1-46",
        urlStoreImage: "Afterland.png",
      },
      {
        idStore:4,
        storeName:"Black",
        description:"Juguetería",
        storeNumber:"Local 1-46",
        urlStoreImage: "Black.png",
      },
      {
        idStore:5,
        storeName:"Jumbo",
        description:"Hipermercado",
        storeNumber:"Local 1-22",
        urlStoreImage: "Jumbo.png",
      },
      {
        idStore:6,
        storeName:"Pepe Ganga",
        description:"Ropa Infantil, Juguetería",
        storeNumber:"Local 1-64",
        urlStoreImage: "PepeGanga.png",
      }
    ]
  },
  {
    idCategory:2,
    categoryName: "Bancos",
    urlCategoryImage: "Bancos.png",
    urlCategoryIcon: "BancosIcon.png",
    type: 1,
    lstStores:
    [
      {
        idStore:7,
        storeName:"Bancolombia",
        description:"Banca",
        storeNumber:"Local 1-41",
        urlStoreImage: "Bancolombia.png",
      },
      {
        idStore:8,
        storeName:"AV Villas",
        description:"Banca",
        storeNumber:"Local 1-42",
        urlStoreImage: "AVVillas.png",
      },
      {
        idStore:9,
        storeName:"Banco Popular",
        description:"Banca",
        storeNumber:"Local 1-46",
        urlStoreImage: "BancoPopular.png",
      },
      {
        idStore:10,
        storeName:"Colpatria",
        description:"Banca",
        storeNumber:"Local 1-46",
        urlStoreImage: "Colpatria.png",
      },
      {
        idStore:11,
        storeName:"Itau",
        description:"Banca",
        storeNumber:"Local 1-22",
        urlStoreImage: "Itau.png",
      },
      {
        idStore:12,
        storeName:"BBVA",
        description:"Banca",
        storeNumber:"Local 1-64",
        urlStoreImage: "BBVA.png",
      }
    ]
  },
  {
    idCategory:3,
    categoryName: "Entretenimiento",
    urlCategoryImage: "Entretenimiento.png",
    urlCategoryIcon: "EntretenimientoIcon.png",
    type: 3,
    lstStores:
    [
      {
        idStore:13,
        storeName:"Cine Colombia",
        description:"Cines",
        storeNumber:"Local 1-41",
        urlStoreImage: "Bancolombia.png",
      },
      {
        idStore:14,
        storeName:"Cinemark",
        description:"Cines",
        storeNumber:"Local 1-42",
        urlStoreImage: "Cinemark.png",
      },
      {
        idStore:15,
        storeName:"Smart Fit",
        description:"Gimnasio",
        storeNumber:"Local 1-46",
        urlStoreImage: "SmartFit.png",
      },
      {
        idStore:16,
        storeName:"Caballitos",
        description:"Juegos para Niños",
        storeNumber:"Local 1-46",
        urlStoreImage: "Caballitos.png",
      }
    ]
  },
  {
    idCategory:4,
    categoryName: "Comidas",
    urlCategoryImage: "Comidas.png",
    urlCategoryIcon: "ComidasIcon.png",
    type: 3,
    lstStores:
    [
      {
        idStore:17,
        storeName:"Mario Bros",
        description:"Restaurante",
        storeNumber:"Local 1-41",
        urlStoreImage: "Mario Bros.png",
      },
      {
        idStore:18,
        storeName:"Cheers",
        description:"Restaurante",
        storeNumber:"Local 1-42",
        urlStoreImage: "Cheers.png",
      },
      {
        idStore:19,
        storeName:"El Corral",
        description:"Restaurante",
        storeNumber:"Local 1-46",
        urlStoreImage: "ElCorral.png",
      },
      {
        idStore:20,
        storeName:"Starbucks",
        description:"Panadería",
        storeNumber:"Local 1-46",
        urlStoreImage: "Starbucks.png",
      },
      {
        idStore:21,
        storeName:"*El Molino",
        description:"Panadería",
        storeNumber:"Local 1-46",
        urlStoreImage: "ElMolino.png",
      }
    ]
  }
];

export default 
{
  dataMenu,
  dataCategories
};