const dataMenu = 
[{
  idItemMenu: 1,
  itemName: 'Directorio',
  description: 'Tiendas, entretenimiento y gastronomía',
  urlItemImage: 'storefront-outline',
  color: '#F18032',
  redirect: 'Directory'
}, 
{
  idItemMenu: 2,
  itemName: 'Registrar Facturas',
  description: 'Registra tus facturas',
  urlItemImage: 'camera',
  color: '#39BFC2',
  redirect: 'Invoices'
}, 
{
  idItemMenu: 3,
  itemName: 'Promociones',
  description: 'Disfruta increíbles descuentos',
  urlItemImage: 'handbag',
  color: '#F05642',
  redirect: 'Offers'
}, 
{
  idItemMenu: 4,
  itemName: 'Agenda',
  description: 'Programación de eventos',
  urlItemImage: 'calendar',
  color: '#DAD2BD',
  redirect: 'https://www.ccunicentropasto.com/cartelera/'
}, 
{
  idItemMenu: 5,
  itemName: 'Noticias',
  description: 'Información de servicios y eventos',
  urlItemImage: 'bell',
  color: '#F05642',
  redirect: 'https://www.ccunicentropasto.com/servicios/'
},
{
  idItemMenu: 6,
  itemName: 'Cómo llegar',
  description: 'Rutas y parqueaderos',
  urlItemImage: 'location-pin',
  color: '#39BFC2',
  redirect: 'Offers'
}
,
{
  idItemMenu: 7,
  itemName: 'Contacto',
  description: 'Queremos saber que piensas',
  urlItemImage: 'call-out',
  color: '#F18032',
  redirect: 'Contact'
}
];

const dataCategories = 
[
  {
    idCategory:1,
    categoryName: 'Tiendas',
    urlCategoryImage: 'https://drive.google.com/uc?id=1VRnZHt4wIfbSMGGAII0st2NUKODVYOJd',
    urlCategoryIcon1: 'https://drive.google.com/uc?id=1KZ1NJJs9cW1Shubz5vXtbV9NOY6Rn7iR',
    urlCategoryIcon2: 'https://drive.google.com/uc?id=1IVk0fGlmN04EgJy4F35dP9U2JNfMJlGp',
    backgroundColor: '#39BFC2',
    order:1,
    lstStores:
    [
      {
        idStore:1,
        name:'Arturo Calle',
        description:'Ropa Casual y Formal',
        storeNumber:'1-41',
        urlStoreLogo:'https://drive.google.com/uc?id=10jSOt56CQ6BGoltKX2GYKLi7860bT_Pd',
        urlStoreImage:'https://drive.google.com/uc?id=1wPHBUKFkk7xQJz0eIAeDm3cYIwYtW3fU',
        storeLocation:'Pasillo 5 - Piso 1',
        phone:'3014317636',
        socialNetworks:
        {
          website:'www.arturocalle.com',
          instagram:'arturocalleoficial',
          facebook:'arturocalleoficial',
          whatsapp:'3014317636'
        }
      },
      {
        idStore:2,
        name:'Azucar',
        description:'Ropa Casual y Formal',
        storeNumber:'1-19',
        urlStoreLogo: 'https://drive.google.com/uc?id=1TyDzfXWHB9Hnu-2LWcCAHj4sxrgirI0m',
        urlStoreImage:'https://drive.google.com/uc?id=1q1onZR_zEbyGJgnsfiiuxdX_dMEHbviP',
        storeLocation:'Pasillo 5 - Piso 1',
        phone:'3014317636',
        socialNetworks:
        {
          website:'http://shop.azucaryazuquita.com/',
          instagram:'azucaryazuquita',
          facebook:'azucaryazuquita',
          whatsapp:'3014317636'
        }
      },
      {
        idStore:3,
        name:'Kosta Azul',
        description:'Ropa Casual y Formal',
        storeNumber:'1-14',
        urlStoreLogo: 'https://drive.google.com/uc?id=1Xb759YdvdPqsYYAr_0ghLTwo1fh1ntwM',
        urlStoreImage:'https://drive.google.com/uc?id=1MzLMc-AvqH957EqSEfupWXip-HT8rZOW',
        storeLocation:'Pasillo 5 - Piso 1',
        phone:'3014317636',
        socialNetworks:
        {
          website:'www.arturocalle.com',
          instagram:'elcristian_gonzalez',
          facebook:'elcristiangonzalez1',
          whatsapp:'3014317636'
        }
      },
      {
        idStore:4,
        name:'Bosi',
        description:'Calzado',
        storeNumber:'1-33',
        urlStoreLogo: 'https://drive.google.com/uc?id=1PcBdZcAf4h24PqIRIiIewenZRcXWt4dK',
        urlStoreImage:'https://drive.google.com/uc?id=1JShUQl2_0ImV5EZl1bXnCEAHRPxbxWQQ',
        storeLocation:'Pasillo 5 - Piso 1',
        phone:'3014317636',
        socialNetworks:
        {
          website:'www.arturocalle.com',
          instagram:'elcristian_gonzalez',
          facebook:'elcristiangonzalez1',
          whatsapp:'3014317636'
        }
      },
      {
        idStore:5,
        name:'Jumbo',
        description:'Hipermercado',
        storeNumber:'1-22',
        urlStoreLogo: 'https://drive.google.com/uc?id=1NQb8xCma_TseJU_6rsdVeax56cGjaHzj',
        urlStoreImage:'https://drive.google.com/uc?id=1IRDrCuBl8dhDzdnHGxuO7EGpErby23o4',
        storeLocation:'Pasillo 5 - Piso 1',
        phone:'3014317636',
        socialNetworks:
        {
          website:'www.arturocalle.com',
          instagram:'elcristian_gonzalez',
          facebook:'elcristiangonzalez1',
          whatsapp:'3014317636'
        }
      },
      {
        idStore:6,
        name:'Pepe Ganga',
        description:'Ropa Infantil, Juguetería',
        storeNumber:'1-64',
        urlStoreLogo: 'https://drive.google.com/uc?id=1Zdmmovgsh2KvFhIg7bsH7YPPYDZVLeRj',
        urlStoreImage:'https://drive.google.com/uc?id=1HlsWMCskWmpUglvJvHDr-d0mhASToROX',
        storeLocation:'Pasillo 5 - Piso 1',
        phone:'3014317636',
        socialNetworks:
        {
          website:'https://icomm.link/pepe-ganga',
          instagram:'pepeganga_co',
          facebook:'PepeGangaColombia',
          whatsapp:'3014317636'
        }
      }
    ]
  },
  {
    idCategory:2,
    categoryName: 'Bancos',
    urlCategoryImage: 'https://drive.google.com/uc?id=1clMTgv_8V3gQvhacKxeETtwBW5o221aL',
    urlCategoryIcon1: 'https://drive.google.com/uc?id=1KZ1NJJs9cW1Shubz5vXtbV9NOY6Rn7iR',
    urlCategoryIcon2: 'https://drive.google.com/uc?id=1IVk0fGlmN04EgJy4F35dP9U2JNfMJlGp',
    backgroundColor: '#39BFC2',
    order:2,
    lstStores:
    [
      {
        idStore:7,
        name:'Bancolombia',
        description:'Banca',
        storeNumber:'2-22',
        urlStoreLogo: 'https://drive.google.com/uc?id=1lOwlAx63LTZxKYAzahP-u5msdskNd9Xw',
        urlStoreImage:'https://drive.google.com/uc?id=1ekypQ4fRyE5MGd8TFDstNEQc077dA4M9',
        storeLocation:'Pasillo 5 - Piso 1',
        phone:'3014317636',
        socialNetworks:
        {
          website:'www.arturocalle.com',
          instagram:'elcristian_gonzalez',
          facebook:'elcristiangonzalez1',
          whatsapp:'3014317636'
        }
      },
      {
        idStore:8,
        name:'AV Villas',
        description:'Banca',
        storeNumber:'2-26',
        urlStoreLogo: 'https://drive.google.com/uc?id=1AjSdh8xVO62PwthuP-dtJ_CduXHhqFRn',
        urlStoreImage:'https://drive.google.com/uc?id=140CZEZfBsHX4cdWpowMKAzIwooroHpb3',
        storeLocation:'Pasillo 5 - Piso 1',
        phone:'3014317636',
        socialNetworks:
        {
          website:'www.arturocalle.com',
          instagram:'elcristian_gonzalez',
          facebook:'elcristiangonzalez1',
          whatsapp:'3014317636'
        }
      },
      {
        idStore:9,
        name:'Banco Popular',
        description:'Banca',
        storeNumber:'1-72',
        urlStoreLogo: 'https://drive.google.com/uc?id=1ed8q_xBWp-WNf2iDyLrTHwlKN0OMkNZA',
        urlStoreImage:'https://drive.google.com/uc?id=1eMFOP_8jVIYJp0aooFMPKHUPSC17TX1s',
        storeLocation:'Pasillo 5 - Piso 1',
        phone:'3014317636',
        socialNetworks:
        {
          website:'www.arturocalle.com',
          instagram:'elcristian_gonzalez',
          facebook:'elcristiangonzalez1',
          whatsapp:'3014317636'
        }
      },
      {
        idStore:10,
        name:'Colpatria',
        description:'Banca',
        storeNumber:'1-46',
        urlStoreLogo: 'https://drive.google.com/uc?id=1YW-KgxgMjqUP1aapxUTb73r7ASEcep-C',
        urlStoreImage:'https://drive.google.com/uc?id=1fnEX7Sp_TPgE77I9QxDMZQyQwKfF9LfL',
        storeLocation:'Pasillo 5 - Piso 1',
        phone:'3014317636',
        socialNetworks:
        {
          website:'www.arturocalle.com',
          instagram:'elcristian_gonzalez',
          facebook:'elcristiangonzalez1',
          whatsapp:'3014317636'
        }
      },
      {
        idStore:11,
        name:'BBVA',
        description:'Banca',
        storeNumber:'2-44',
        urlStoreLogo: 'https://drive.google.com/uc?id=1ROQIk0NK5ApKw7T53BByG0FrPOY_XoxI',
        urlStoreImage:'https://drive.google.com/uc?id=152PmUW6gItTBXj3szvpN9SlYHvwDtBYb',
        storeLocation:'Pasillo 5 - Piso 1',
        phone:'3014317636',
        socialNetworks:
        {
          website:'www.arturocalle.com',
          instagram:'elcristian_gonzalez',
          facebook:'elcristiangonzalez1',
          whatsapp:'3014317636'
        }
      },
      {
        idStore:12,
        name:'Bogotá',
        description:'Banca',
        storeNumber:'2-48',
        urlStoreLogo: 'https://drive.google.com/uc?id=1ZdUGCBMUQK58cePmPRu6fvHnNFIAkrJ6',
        urlStoreImage:'https://drive.google.com/uc?id=1Ojx18dH8vOJht1d4bBuGT7SbloIjj21Z',
        storeLocation:'Pasillo 5 - Piso 1',
        phone:'3014317636',
        socialNetworks:
        {
          website:'www.arturocalle.com',
          instagram:'elcristian_gonzalez',
          facebook:'elcristiangonzalez1',
          whatsapp:'3014317636'
        }
      }
    ]
  },
  {
    idCategory:3,
    categoryName: 'Entretenimiento',
    urlCategoryImage:'https://drive.google.com/uc?id=1_KqdaI5VNLhyJegbSe7gjf_z74wQNerW',
    urlCategoryIcon1: 'https://drive.google.com/uc?id=19WW6ORDtnjfyTKrh5que_mDyJDXOgFrx',
    urlCategoryIcon2: 'https://drive.google.com/uc?id=1PjEdPpTOnYhJ2F-knZhHtS7Vv61YyAtp',
    backgroundColor: '#D9E021',
    order:3,
    lstStores:
    [
      {
        idStore:13,
        name:'Cinemark',
        description:'Cines',
        storeNumber:'2-39',
        urlStoreLogo: 'https://drive.google.com/uc?id=1U071JH7GK-W_4PXCUEQI4DH529QQOGdT',
        urlStoreImage:'https://drive.google.com/uc?id=1QpLilLykhN9Or8eq3FYcnUtkLxkAmU3x',
        storeLocation:'Pasillo 5 - Piso 1',
        phone:'3014317636',
        socialNetworks:
        {
          website:'www.arturocalle.com',
          instagram:'elcristian_gonzalez',
          facebook:'elcristiangonzalez1',
          whatsapp:'3014317636'
        }
      },
      {
        idStore:14,
        name:'Happy City',
        description:'Cines',
        storeNumber:'2-65',
        urlStoreLogo: 'https://drive.google.com/uc?id=1cGazuh2SZsOMQaDC7l2SsFCWHHtVZ8fq',
        urlStoreImage:'https://drive.google.com/uc?id=1nEt1jk6JHVpUn867mFTourVaI0u8pI8m',
        storeLocation:'Pasillo 5 - Piso 1',
        phone:'3014317636',
        socialNetworks:
        {
          website:'www.arturocalle.com',
          instagram:'elcristian_gonzalez',
          facebook:'elcristiangonzalez1',
          whatsapp:'3014317636'
        }
      },
      {
        idStore:15,
        name:'Carnaval',
        description:'Casino',
        storeNumber:'2-13',
        urlStoreLogo: 'https://drive.google.com/uc?id=1ej6aYHrZX4yTznL5NDezCPz-ayJSReB7',
        urlStoreImage:'https://drive.google.com/uc?id=15SHmRy61jIOhaDJN2-bOV_ZtVJzze2Db',
        storeLocation:'Pasillo 5 - Piso 1',
        phone:'3014317636',
        socialNetworks:
        {
          website:'www.arturocalle.com',
          instagram:'elcristian_gonzalez',
          facebook:'elcristiangonzalez1',
          whatsapp:'3014317636'
        }
      },
      {
        idStore:22,
        name:'Trampolin Park',
        description:'Casino',
        storeNumber:'Stand',
        urlStoreLogo: 'https://drive.google.com/uc?id=1Lwv3-ZmLwXkXTMbqet9TpH5nlD_pjgW1',
        urlStoreImage:'https://drive.google.com/uc?id=1eODy7rHTRr56wbSxTm0AWTr2_DRJkZIr',
        storeLocation:'Pasillo 5 - Piso 1',
        phone:'3014317636',
        socialNetworks:
        {
          website:'www.arturocalle.com',
          instagram:'elcristian_gonzalez',
          facebook:'elcristiangonzalez1',
          whatsapp:'3014317636'
        }
      }
    ]
  },
  {
    idCategory:4,
    categoryName: 'Comidas',
    urlCategoryImage: 'https://drive.google.com/uc?id=13urKtHs4Fz9P5fwRMfbifE84GJWyM375',
    urlCategoryIcon1: 'https://drive.google.com/uc?id=1tHvhFf3iGhBhXoWJGIF8ctGJO3vvaNJ2',
    urlCategoryIcon2: 'https://drive.google.com/uc?id=1o1YGD4fwqJbdS84H_LHpPEFRZzihGOlf',
    backgroundColor: '#ED3557',
    order:4,
    lstStores:
    [
      {
        idStore:17,
        name:'Mister Pollo',
        description:'Restaurante',
        storeNumber:'2-05',
        urlStoreLogo: 'https://drive.google.com/uc?id=127wn5aQh9798x9LPRyiRReMm2I8zdYoh',
        urlStoreImage:'https://drive.google.com/uc?id=1AzlqdQ6Sv8bPjAQ-dYOfAkHt1s_p2zIq',
        storeLocation:'Pasillo 5 - Piso 1',
        phone:'3014317636',
        socialNetworks:
        {
          website:'www.arturocalle.com',
          instagram:'elcristian_gonzalez',
          facebook:'elcristiangonzalez1',
          whatsapp:'3014317636'
        }
      },
      {
        idStore:18,
        name:'Pollo Sorpresa',
        description:'Restaurante',
        storeNumber:'2-01',
        urlStoreLogo: 'https://drive.google.com/uc?id=1KS-aZaNMenOmXLP7ikTgza3L_NwF-qwr',
        urlStoreImage:'https://drive.google.com/uc?id=13k0WOrhSExf165Dan72Rm9qadquyDfsv',
        storeLocation:'Pasillo 5 - Piso 1',
        phone:'3014317636',
        socialNetworks:
        {
          website:'www.arturocalle.com',
          instagram:'elcristian_gonzalez',
          facebook:'elcristiangonzalez1',
          whatsapp:'3014317636'
        }
      },
      {
        idStore:19,
        name:'El Corral',
        description:'Restaurante',
        storeNumber:'2-59',
        urlStoreLogo:'https://drive.google.com/uc?id=1pI4dDYRGroez1hSwE7b7ZCO3hQ8RdFMZ',
        urlStoreImage:'https://drive.google.com/uc?id=1JR2uiEMn-OoKKsdL2FUWfdP_I2VesLDw',
        storeLocation:'Pasillo 5 - Piso 1',
        phone:'3014317636',
        socialNetworks:
        {
          website:'www.arturocalle.com',
          instagram:'elcristian_gonzalez',
          facebook:'elcristiangonzalez1',
          whatsapp:'3014317636'
        }
      },
      {
        idStore:20,
        name:'Juan Valdez',
        description:'Panadería',
        storeNumber:'Stand',
        urlStoreLogo: 'https://drive.google.com/uc?id=1q5ScghHfUQjndQ-YmGVAzikapvHwpWTD',
        urlStoreImage:'https://drive.google.com/uc?id=17DhZpTkM3DhiCyeNzaO-Bg7PJHocV9Bm',
        storeLocation:'Pasillo 5 - Piso 1',
        phone:'3014317636',
        socialNetworks:
        {
          website:'www.arturocalle.com',
          instagram:'elcristian_gonzalez',
          facebook:'elcristiangonzalez1',
          whatsapp:'3014317636'
        }
      },
      {
        idStore:21,
        name:'Mimos',
        description:'Heladería',
        storeNumber:'1-76',
        urlStoreLogo: 'https://drive.google.com/uc?id=18Qhxi48DiatqCtT-OVCDOLm6d7XU9W0C',
        urlStoreImage:'https://drive.google.com/uc?id=1gRY_lijHaT1rZziwcbXhXRjWWtAAN5Ou',
        storeLocation:'Pasillo 5 - Piso 1',
        phone:'3014317636',
        socialNetworks:
        {
          website:'www.arturocalle.com',
          instagram:'elcristian_gonzalez',
          facebook:'elcristiangonzalez1',
          whatsapp:'3014317636'
        }
      }
    ]
  }
];

const dataOffers = 
[
  {
    idOffer:1,
    store:
    {
      idStore:6,
      name:'Pepe Ganga',
      description:'Ropa Infantil, Juguetería',
      storeNumber:'1-64',
      urlStoreLogo: 'https://drive.google.com/uc?id=1Zdmmovgsh2KvFhIg7bsH7YPPYDZVLeRj',
      urlStoreImage:'https://drive.google.com/uc?id=1HlsWMCskWmpUglvJvHDr-d0mhASToROX',
      storeLocation:'Pasillo 5 - Piso 1',
      phone:'3014317636',
      socialNetworks:
      {
        website:'https://icomm.link/pepe-ganga',
        instagram:'pepeganga_co',
        facebook:'PepeGangaColombia',
        whatsapp:'3014317636'
      }
    },
    name:'Baby Gangazo 40% dto',
    description:'¡Llego Baby Gangazo a Pepe Ganga! Aprovecha hasta 40% de descuento en referencias seleccionadas para tu bebé y no dejes pasar esta oportunidad',
    startDate:'20221024',
    endDate:'20221025',
    urlImage:'https://drive.google.com/uc?id=1wQUE1h5UiWmrJ37XEC02ASFi1pcyP5nq'
  },
  {
    idOffer:2,
    store:
    {
      idStore:1,
      name:'Arturo Calle',
      description:'Ropa Casual y Formal',
      storeNumber:'1-41',
      urlStoreLogo:'https://drive.google.com/uc?id=10jSOt56CQ6BGoltKX2GYKLi7860bT_Pd',
      urlStoreImage:'https://drive.google.com/uc?id=1wPHBUKFkk7xQJz0eIAeDm3cYIwYtW3fU',
      storeLocation:'Pasillo 5 - Piso 1',
      phone:'3014317636',
      socialNetworks:
      {
        website:'www.arturocalle.com',
        instagram:'arturocalleoficial',
        facebook:'arturocalleoficial',
        whatsapp:'3014317636'
      }
    },
    name:'FDS Fuera de Serie',
    description:'DENIM DAYS, todos los jeans FDS Fuera de Serie a $99.900 por tiempo limitado en nuestras tiendas físicas. 06/10/22 al 10/10/22. Aplican TyC.',
    startDate:'20221024',
    endDate:'20221025',
    urlImage:'https://drive.google.com/uc?id=1lp2hSJp2CuNuEvCzX1epKezWY-6SWb47'
  },
  {
    idOffer:3,
    store:
    {
      idStore:2,
      name:'Academy',
      description:'Ropa Casual y Formal',
      storeNumber:'1-42',
      urlStoreLogo: 'https://drive.google.com/uc?id=1YW-KgxgMjqUP1aapxUTb73r7ASEcep-C',
      urlStoreImage:'https://drive.google.com/uc?id=1fnEX7Sp_TPgE77I9QxDMZQyQwKfF9LfL',
      storeLocation:'Pasillo 5 - Piso 1',
      phone:'3014317636',
      socialNetworks:
      {
        website:'www.arturocalle.com',
        instagram:'elcristian_gonzalez',
        facebook:'elcristiangonzalez1',
        whatsapp:'3014317636'
      }
    },
    name:'Comodísimo',
    description:'Hoy y siempre vibra tan alto como puedas. 🤩 Te presentamos esta nueva colección que te hará sentir cada día más fuerte y feliz. 🌈✌🏻 #PolitoKids #PolitoEsColombia #VibraAlto #NuevaColeccion',
    startDate:'20221024',
    endDate:'20221025',
    urlImage:'https://drive.google.com/uc?id=13IAsH4reuibQA10ixplQbPOFqIZzhxPe'
  },
  {
    idOffer:4,
    store:
    {
      idStore:6,
      name:'Pepe Ganga',
      description:'Ropa Infantil, Juguetería',
      storeNumber:'1-64',
      urlStoreLogo: 'https://drive.google.com/uc?id=1Zdmmovgsh2KvFhIg7bsH7YPPYDZVLeRj',
      urlStoreImage:'https://drive.google.com/uc?id=1HlsWMCskWmpUglvJvHDr-d0mhASToROX',
      storeLocation:'Pasillo 5 - Piso 1',
      phone:'3014317636',
      socialNetworks:
      {
        website:'https://icomm.link/pepe-ganga',
        instagram:'pepeganga_co',
        facebook:'PepeGangaColombia',
        whatsapp:'3014317636'
      }
    },
    name:'Pepe Ganga Halloween',
    description:'Expresa tu imaginación',
    startDate:'20221024',
    endDate:'20221025',
    urlImage:'https://drive.google.com/uc?id=1Lghp_kbeH2iMzcb7CjRuUvgF0DVYJzqC'
  }
]

const dataBarrio = 
[
  {
    idNeighborhood: 1,
    description: 'Valle Lili'
  },
  {
    idNeighborhood: 2,
    description: 'Alamos'
  },
  {
    idNeighborhood: 3,
    description: 'Caney'
  },
  {
    idNeighborhood: 4,
    description: 'Pucalpa'
  }, 
]

const dataClientes = 
[
  {
    idClient: 1,
    identification: 13072207,
    name: 'ivan',
    lastName: 'hernandez',
    phone: '3014317636',
    email: 'ivan.hernandez.coral@gmail.com',
    password: '123456',
    birthday: '1982/12/01',
    gender: 'M',
    neighborhood:
    {
      idNeighborhood:1,
      description:'Valle Lili'
    },
    isPet:1,
    isTermsConditions:1
  },
  {
    idClient: 2,
    identification: 2,
    name: 'n2',
    lastName: 'ln2',
    phone: 'p2',
    email: '2@gmail.com',
    password: '2',
    birthday: '1982/12/01',
    gender: 'F',
    neighborhood:
    {
      idNeighborhood:1,
      description:'Valle Lili'
    },
    isPet:1,
    isTermsConditions:1
  },
  {
    idClient: 3,
    identification: 3,
    name: 'n3',
    lastName: 'ln3',
    phone: 'p3',
    email: '3@gmail.com',
    password: '3',
    birthday: '1982/12/01',
    gender: 'F',
    neighborhood:
    {
      idNeighborhood:3,
      description:'Caney'
    },
    isPet:0,
    isTermsConditions:1
  },
  {
    idClient: 4,
    identification: 4,
    name: 'n4',
    lastName: 'ln4',
    phone: 'p4',
    email: '4@gmail.com',
    password: '4',
    birthday: '1982/12/01',
    gender: 'F',
    neighborhood:
    {
      idNeighborhood:4,
      description:'Pucalpa'
    },
    isPet:1,
    isTermsConditions:1
  }
]


export default 
{
  dataMenu,
  dataCategories,
  dataOffers,
  dataBarrio,
  dataClientes
};