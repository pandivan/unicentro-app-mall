const dataMenu = 
[{
  idItemMenu: '1',
  itemName: 'Directorio',
  description: 'Tiendas, entretenimiento y gastronomía',
  urlItemImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  color: '#ffbeca'
}, 
{
  idItemMenu: '2',
  itemName: 'Torre Médica',
  description: 'Cheer up, there!',
  urlItemImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
  color: '#ffbeca'
}, 
{
  idItemMenu: '3',
  itemName: 'Ofertas',
  description: 'Disfruta increíbles descuentos',
  urlItemImage: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
  color: '#ffbeca',
  redirect: 'Offers'
}, 
{
  idItemMenu: '4',
  itemName: 'Agenda',
  description: 'Programación de eventos',
  urlItemImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
  color: '#ffbeca'
}, 
{
  idItemMenu: '5',
  itemName: 'Noticias',
  description: 'Información de servicios y eventos',
  urlItemImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
  color: '#ffbeca'
},
{
  idItemMenu: '6',
  itemName: 'Cómo llegar',
  description: 'Rutas y parqueaderos',
  urlItemImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
  color: '#ffbeca'
}
,
{
  idItemMenu: '7',
  itemName: 'Conctacto',
  description: 'Queremos saber que piensas',
  urlItemImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
  color: '#ffbeca'
}
];

const dataCategories = 
[
  {
    idCategory:1,
    categoryName: 'Tiendas',
    urlCategoryImage: 'https://drive.google.com/uc?id=1NvTdrYQv8QkIcm3ZBMs1wjudbmvIqKFd',
    urlCategoryIcon: 'https://drive.google.com/uc?id=1W_V648HOZs2TAoxVzD-u3aaqe8Dvxtnl',
    type: 3,
    order:1,
    lstStores:
    [
      {
        idStore:1,
        name:'Arturo Calle',
        description:'Ropa Casual y Formal',
        storeNumber:'1-41',
        urlStoreLogo:'https://drive.google.com/uc?id=1YW-KgxgMjqUP1aapxUTb73r7ASEcep-C',
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
      {
        idStore:3,
        name:'Afterland',
        description:'Juguetería',
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
        idStore:4,
        name:'Black',
        description:'Juguetería',
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
        idStore:5,
        name:'Jumbo',
        description:'Hipermercado',
        storeNumber:'1-22',
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
        idStore:6,
        name:'Pepe Ganga',
        description:'Ropa Infantil, Juguetería',
        storeNumber:'1-64',
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
      }
    ]
  },
  {
    idCategory:2,
    categoryName: 'Bancos',
    urlCategoryImage: 'https://drive.google.com/uc?id=1iNyhFsaZM1alsoOqMntm8-i5PHxIle3Q',
    urlCategoryIcon: 'BancosIcon.png',
    type: 1,
    order:2,
    lstStores:
    [
      {
        idStore:7,
        name:'Bancolombia',
        description:'Banca',
        storeNumber:'1-41',
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
        idStore:8,
        name:'AV Villas',
        description:'Banca',
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
      {
        idStore:9,
        name:'Banco Popular',
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
        name:'Itau',
        description:'Banca',
        storeNumber:'1-22',
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
        idStore:12,
        name:'BBVA',
        description:'Banca',
        storeNumber:'1-64',
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
      }
    ]
  },
  {
    idCategory:3,
    categoryName: 'Entretenimiento',
    urlCategoryImage:'https://drive.google.com/uc?id=11upZeqF2De1bVV8_zUQx_HDw7rzFSx8M',
    urlCategoryIcon: 'https://drive.google.com/uc?id=1rSUcz2vv1Z9wT59yyA6aGyQupbIR-zsR',
    type: 3,
    order:3,
    lstStores:
    [
      {
        idStore:13,
        name:'Cine Colombia',
        description:'Cines',
        storeNumber:'1-41',
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
        idStore:14,
        name:'Cinemark',
        description:'Cines',
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
      {
        idStore:15,
        name:'Smart Fit',
        description:'Gimnasio',
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
        idStore:16,
        name:'Caballitos',
        description:'Juegos para Niños',
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
      }
    ]
  },
  {
    idCategory:4,
    categoryName: 'Comidas',
    urlCategoryImage: 'https://drive.google.com/uc?id=14HolMEjBah_GfsKb8PFSjN2-PBGnCnW6',
    urlCategoryIcon: 'https://drive.google.com/uc?id=1LVvIh2xNwJTinn1Uwnh5C89U6mfc8esg',
    type: 3,
    order:4,
    lstStores:
    [
      {
        idStore:17,
        name:'Mario Bros',
        description:'Restaurante',
        storeNumber:'1-41',
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
        idStore:18,
        name:'Cheers',
        description:'Restaurante',
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
      {
        idStore:19,
        name:'El Corral',
        description:'Restaurante',
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
        idStore:20,
        name:'Starbucks',
        description:'Panadería',
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
        idStore:21,
        name:'El Molino',
        description:'Panadería',
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
      idStore:1,
      name:'El Corral',
      description:'Gourmet',
      storeNumber:'1-41',
      urlStoreLogo:'https://drive.google.com/uc?id=1YW-KgxgMjqUP1aapxUTb73r7ASEcep-C',
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
    name:'Cole Haan - 50% de descuento',
    description:'Parece una sencilla pero viene cargada de queso :). Disfrutala con papas y gaseosa en #ElCorralGourmet :) :)',
    startDate:'20221024',
    endDate:'20221025',
    urlImage:'https://drive.google.com/uc?id=1fnEX7Sp_TPgE77I9QxDMZQyQwKfF9LfL'
  },
  {
    idOffer:2,
    store:
    {
      idStore:1,
      name:'Arturo Calle',
      description:'Ropa Casual y Formal',
      storeNumber:'1-41',
      urlStoreLogo:'https://drive.google.com/uc?id=1YW-KgxgMjqUP1aapxUTb73r7ASEcep-C',
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
    name:'Cruz Verde Dermocosmética',
    description:'Aprovecha una oferta terrorifica 5 x 2',
    startDate:'20221024',
    endDate:'20221025',
    urlImage:'https://drive.google.com/uc?id=1fnEX7Sp_TPgE77I9QxDMZQyQwKfF9LfL'
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
    name:'Ofertas Imperdibles',
    description:'Aprovecha una oferta terrorifica aprende mucha mas!!!',
    startDate:'20221024',
    endDate:'20221025',
    urlImage:'https://drive.google.com/uc?id=1fnEX7Sp_TPgE77I9QxDMZQyQwKfF9LfL'
  },
  {
    idOffer:4,
    store:
    {
      idStore:21,
      name:'El Molino',
      description:'Panadería',
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
    name:'El Corral - Antójate',
    description:'Estamos de aniversario y queremos darte lo mejor, pan arabe con la mejor calidad, precio y sabor, acercate!!!',
    startDate:'20221024',
    endDate:'20221025',
    urlImage:'https://drive.google.com/uc?id=1fnEX7Sp_TPgE77I9QxDMZQyQwKfF9LfL'
  }
]

export default 
{
  dataMenu,
  dataCategories,
  dataOffers
};