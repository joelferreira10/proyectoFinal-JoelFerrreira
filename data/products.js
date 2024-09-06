import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBhgn_giR6ImC438DpS4gxUedpEzDZqVto",
    authDomain: "prueba-coder-7f4b0.firebaseapp.com",
    projectId: "prueba-coder-7f4b0",
    storageBucket: "prueba-coder-7f4b0.appspot.com",
    messagingSenderId: "176353146409",
    appId: "1:176353146409:web:9672aaa48dff293d0d8e38"
  };
  // Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const items=[
    {
         
        name: "Smartphone X",
        price: 799.99,
        category: "tecnología",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Foldable_Smartphones.jpg/800px-Foldable_Smartphones.jpg",
        description: "Un smartphone de última generación con pantalla OLED y cámara de alta resolución.",
        stock:10
    },
    {
        
        name: "Laptop Pro",
        price: 1299.99,
        category: "tecnología",
        img: "https://cdn.pixabay.com/photo/2013/07/13/11/46/laptop-158648_1280.png",
        description: "Laptop de alto rendimiento con procesador Intel i7 y 16GB de RAM.",
        stock:5
    },
    {
        
        name: "Auriculares Inalámbricos",
        price: 199.99,
        category: "tecnología",
        img: "https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983_1280.jpg",
        description: "Auriculares con cancelación de ruido y hasta 20 horas de batería.",
        stock:15
    },
    {
         
        name: "Tablet Z",
        price: 499.99,
        category: "tecnología",
        img: "https://cdn.pixabay.com/photo/2014/11/12/15/48/apple-528461_1280.jpg",
        description: "Tablet con pantalla de 10 pulgadas y almacenamiento de 128GB.",
        stock:7   
    },
    {
         
        name: "Smartwatch Series 5",
        price: 299.99,
        category: "tecnología",
        img: "https://cdn.pixabay.com/photo/2015/08/15/15/21/smart-watch-889639_1280.jpg",
        description: "Reloj inteligente con monitorización de actividad física y notificaciones.",
        stock:12
        

    },
    {
         
        name: "Zapatillas Running",
        price: 140.00,
        category: "zapatillas",
        img: "https://cdn.pixabay.com/photo/2016/11/18/22/29/footwear-1837170_1280.jpg",
        description: "Zapatillas ligeras con amortiguación avanzada para largas distancias.",
        stock:10
        

    },
    
    {
        
        name: "Botas de Montaña",
        price: 160.00,
        category: "zapatillas",
        img: "https://cdn.pixabay.com/photo/2018/01/01/02/01/hiking-shoes-3053496_1280.jpg",
        description: "Botas resistentes al agua, perfectas para senderismo y actividades al aire libre.",
        stock:8

    },
    {
        
        name: "Zapatillas de Baloncesto",
        price: 150.00,
        category: "zapatillas",
        img: "https://cdn.pixabay.com/photo/2020/04/14/09/53/nike-5041718_1280.jpg",
        description: "Zapatillas diseñadas para ofrecer soporte y tracción en la cancha.",
        stock:12
    },
    
    {
        
        name: "Camiseta Deportiva",
        price: 30.00,
        category: "ropa",
        img: "https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg",
        description: "Camiseta de material transpirable, ideal para entrenamientos.",
        stock:15

    },
    {
        
        name: "Pantalones Vaqueros",
        price: 50.00,
        category: "ropa",
        img: "https://cdn.pixabay.com/photo/2014/05/21/14/54/feet-349687_1280.jpg",
        description: "Vaqueros de corte clásico y ajuste cómodo.",
        stock:8

    },

    {
        
        name: "Libro de Historia",
        price: 35.00,
        category: "libros",
        img: "https://cdn.pixabay.com/photo/2016/12/25/22/32/gladiator-1931077_1280.jpg",
        description: "Un recorrido fascinante por los eventos más importantes de la historia.",
        stock:10

    },

    {
        
        name: "Novela de Ciencia Ficción",
        price: 25.00,
        category: "libros",
        img: "https://cdn.pixabay.com/photo/2017/10/17/19/11/fantasy-2861815_1280.jpg",
        description: "Una aventura épica en un futuro distante.",
        stock:12

    },
    {
         
        name: "Manual de Cocina",
        price: 40.00,
        category: "libros",
        img: "https://cdn.pixabay.com/photo/2021/09/20/06/55/spaghetti-6639970_1280.jpg",
        description: "Recetas detalladas y técnicas culinarias para chefs de todos los niveles.",
        stock:5

    }]
    
    async function uploadProducts() {
        const productsCollection = collection(db, 'items'); // Nombre de la colección
        try {
          for (const producto of items) {
            await addDoc(productsCollection, producto);
            console.log("Producto añadido:", producto.name);
          }
        } catch (e) {
          console.error("Error al agregar producto: ", e);
        }
      }
      uploadProducts();
