import React, { useEffect, useState } from "react";
/* import { Link } from "react-router-dom" */
import SweetAlert from 'react-bootstrap-sweetalert';

const Descont = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch data cuando se monta el componente
        fetch(" https://demo2420474.mockable.io/getCoupon ") //lamada de API
        .then((res) => res.json()) //status 200 //  error = 404
        .then((data) =>

        // Guarda posts en estado
        setPosts(data)
        )
    }, 
    [setPosts] );// <-- No se paso el segundo argumento ([]). que sucederá?

           return(
        <>
     <h1>descuento: {posts.text}   </h1> 
     <h1>discountPercentage: {posts.text}   </h1> 
          </>)
     }
   
         
     export default Descont;
   