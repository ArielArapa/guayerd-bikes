import "./style.css";
import React, { useEffect, useState } from "react";


const Headerh = () => {
// Inicializar estado para guardar posts
const [posts, setPosts] = useState([]);

useEffect(() => {
    // Fetch data cuando se monta el componente
    fetch("http://demo2420474.mockable.io/getHomeBanner")
    .then(res => res.json())
    .then(json =>
    // Guarda posts en estado
    setPosts(json)
    )
}, [setPosts]); // <-- No se paso el segundo argumento ([]). que sucederá?

// Renderizar como siempre
return (
<>
<div class="nav">
  
<img src={posts.imgUrl} alt="imgBanner" className="imgBanner"/>
     
  <header class="nav-header">
  <h1 class="logo">Guayerd Bikes</h1>
    <div class="toggle" onclick="toggleMenu()"></div>
    <ul class="nav-ul">
      <li><a class="prada" href="#Historia">Historia</a></li>
      <li><a class="prada" href="#Productos">Productos</a></li>
      <li><a class="prada" href="#Contacto">Contactos</a></li>
      <li><a class="prada" href="ofertas personalizadas.html">Ofertas personalizadas</a></li>
    </ul>
  </header>
</div> 
</>
    )

}



export default Headerh;