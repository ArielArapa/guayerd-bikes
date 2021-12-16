const igual = {
  nav: {
    position: "relative",
    /* background: url(https://cdn.pixabay.com/photo/2020/04/17/14/07/athlete-5055367_960_720.jpg); */
  
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },  
  imgBanner: {
    width: "100%",
    height: "auto",
  },
  navHeader: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    padding: "30px 35px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navHeader: logo: {
    position: "relative",
    fontSize: "2em",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "700",
    textDecoration: "none",
    letterSpacing: "0.5em",
  },
  nav: {
    /* background: url(https://cdn.pixabay.com/photo/2020/04/17/14/07/athlete-5055367_960_720.jpg); */
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  toggle: {
    position: "relative",
    width: "30px",
    height: "30px",
    backgroundImage: "url(/images/abrir-nav.png)",
    backgroundPosition: "center",
    backgroundSize: "30px",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    zIndex: "11",
  },

/*  Saludo dependiendo de la hora  */
grow: {
  fontSize: "15px",
  backgroundColor: "#333333",
  borderRadius: "10px",
  color: "#ffffff",
  padding: "12px 30px",
  textRecoration: "none",
  margin: "20px 0px",
  cursor: "pointer",
},

grow: { transition:" all .2s ease-in-out", },
 /* animacion de saludo*/
 texttyping: {
  fontsize: "30px",
  padding: "10px 10px",
},
textTyping p: {
color: "#000",
margin: "0px",
whiteSpace: "nowrap",
overflow: "hidden",
animation: "typing 4s steps(22,end) forwards",
"blink 1s infinite",
},
  /*   Boton para subir hasta arriba   */

  irArriba: {
    background: "#024959",
    color: "#fff",
    display: "block",
    cursor: "pointer",
    position: "fixed",
    fontSize: "20px",
    padding: "10px 15px",
  borderRadius: "50%",
    bottom: "20px",
    right: "20px",
},

}




  .nav-header .nav-ul {
    position: relative;
    display: flex;
  }
  .nav-header .nav-ul li {
    list-style: none;
  }
  .nav-header .nav-ul li a {
    display: inline-block;
    color: #fff;
    margin-right: 40px;
    text-decoration: none;
  }
  .nav-header .nav-ul li a:hover {
    color: #03a9f4;
  }
  
  @media (max-width: 991px) {
    .nav-header {
      padding: 15px 40px;
    }
  
    .content .contentBx h2 {
      font-size: 2.5em;
    }
    .content .contentBx p {
      font-size: 1em;
    }
    .nav-header .nav-ul {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #444;
      z-index: 10;
      display: none;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .nav-header .nav-ul.active {
      display: flex;
    }
    .nav-header .nav-ul li a {
      font-size: 24px;
      margin: 10px 0;
    }
    
    .toggle.active {
      background-image: url(/images/cerrar-nav.png);
      background-position: center;
      background-size: 25px;
      background-repeat: no-repeat;
      position: fixed;
    }
  }
  
  /*  Saludo dependiendo de la hora  */
  #welcome-section {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }
  
  #welcome-section::after {
    width: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.8;
  }
  
  #welcome-section * {
    position: relative;
    z-index: 1;
  }
  
  #welcome-section h1 {
    color: #000;
    font-size: 30px;
    font-weight: 600;
    line-height: 1;
  }
 
  .grow:hover { transform: scale(1.1); }
  
  /* animacion de saludo*/
  
  @keyframes typing {
    0% { width:0% }
    100% { width:100% }
  }
  @keyframes blink {
    0%,100% {
      border-right:2px solid transparent;
    }
    50% {
      border-right:2px solid #222;
    }
  }
  
  /*   Boton para subir hasta arriba   */
  .ir-arriba {
      background:#024959;
      color:#fff;
      display:block;
      cursor:pointer;
      position: fixed;
      font-size:20px;
      padding: 10px 15px;
    border-radius: 50%;
      bottom:20px;
      right:20px;
  }