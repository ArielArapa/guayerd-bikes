function toggleMenu() {
    const toggle = document.querySelector(".toggle");
    const nav = document.querySelector(".nav-ul");
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
  }
  
  //el prompt es a modo de prueba. Introducir nombre del usuario en el saludo.
  
  //let nombre = prompt("Nombre: ");
  
  // function queHaciendo() {
  //     let saludo;
  //     let hora = new Date().getHours();
  //     if (hora >= 0 && hora < 6) {
  //         saludo = nombre + "😴 Buenas madrugadas";
  //     } else if (hora >= 6 && hora < 12) {
  //         saludo = nombre + "☕ Buen día!";
  //     } else if (hora >= 12 && hora < 19) {
  //         saludo = nombre + "😎 Buenas tardes!";
  //     } else {
  //         saludo = nombre + "🌙 Buenas noches!";
  //     }
  //     document.getElementById("demo").innerHTML = saludo;
  // }
  
  
  //boton ir hasta arriba
  window.onload = () => {
    const buttonDown = document.getElementById("button-down");
    buttonDown.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  };