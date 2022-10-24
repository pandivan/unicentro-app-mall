const dataMenu = [{
  idItemMenu: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  itemName: 'Directorio',
  description: 'Tiendas, entretenimiento y gastronomía',
  urlItemImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}, {
  idItemMenu: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  itemName: 'Torre Médica',
  description: 'Cheer up, there!',
  urlItemImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU'
}, {
  idItemMenu: '58694a0f-3da1-471f-bd96-145571e29d72',
  itemName: 'Anci Barroco',
  description: 'Good Day!',
  urlItemImage: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg'
}, {
  idItemMenu: '68694a0f-3da1-431f-bd56-142371e29d72',
  itemName: 'Aniket Kumar',
  description: 'All the best',
  urlItemImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
}, {
  idItemMenu: '28694a0f-3da1-471f-bd96-142456e29d72',
  itemName: 'Kiara',
  description: 'I will call today.',
  urlItemImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'
}];

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
        storeName:'Arturo Calle',
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
        storeName:'Academy',
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
        storeName:'Afterland',
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
        storeName:'Black',
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
        storeName:'Jumbo',
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
        storeName:'Pepe Ganga',
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
        storeName:'Bancolombia',
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
        storeName:'AV Villas',
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
        storeName:'Banco Popular',
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
        storeName:'Colpatria',
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
        storeName:'Itau',
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
        storeName:'BBVA',
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
        storeName:'Cine Colombia',
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
        storeName:'Cinemark',
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
        storeName:'Smart Fit',
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
        storeName:'Caballitos',
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
        storeName:'Mario Bros',
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
        storeName:'Cheers',
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
        storeName:'El Corral',
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
        storeName:'Starbucks',
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
        storeName:'El Molino',
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

export default 
{
  dataMenu,
  dataCategories
};