import React from "react";
import Style from "./Style";
import imgBanner from "././imagen/imgBanner.png";

const Headerh = () => (
<>
<span class="ir-arriba" id="button-down">^</span>
<section class="nav">
  <img src="../../imagen/imgBanner.png" alt="imgBanner" className="imgBanner"/>
  <header class="nav-header">
    <a href="#" class="logo">Guayerd Bikes</a>
    <div class="toggle" onclick="toggleMenu()"></div>
    <ul class="nav-ul">
      <li><a class="prada" href="#Historia">Historia</a></li>
      <li><a class="prada" href="#Productos">Productos</a></li>
      <li><a class="prada" href="#Contacto">Contactos</a></li>
      <li><a class="prada" href="ofertas personalizadas.html">Ofertas personalizadas</a></li>
    </ul>
  </header>
</section>
</>
)

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Reddit() {
    // Inicializar estado para guardar posts
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch data cuando se monta el componente
        fetch("https://www.reddit.com/r/reactjs.json")
        .then(res => res.json())
        .then(json =>
        // Guarda posts en estado
        setPosts(json.data.children.map(c => c.data))
        )
    }); // <-- No se paso el segundo argumento ([]). que sucederá?

    // Renderizar como siempre
    return (
        <ul>
        {posts.map(post => (
            <li key={post.id} > {post.title} </li>
        ))}
        </ul>
    );
}

ReactDOM.render(
    <Reddit /> ,
    document.querySelector("#root")
);

export default Headerh;