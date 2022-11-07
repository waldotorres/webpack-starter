import '../css/componentes.css';
//import imgWP from '../assets/img/webpack-logo.png';

 export const saludar = (nombre)=>{
    console.log('Creado etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}`;
    document.body.append(h1);

   // let img = document.createElement('img');
   // img.src = imgWP;
   // document.body.append(img);

    }
    



