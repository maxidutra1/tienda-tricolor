const contenido = document.querySelector(".content");
const header = document.querySelector("#header");
const footer = document.querySelector("#footer");

const catalogo = [
  {
    nombre: "Bermuda Concentración 2022 Adulto",
    descripcion:
      "<ul><li>-Bermuda oficial Adulto con bolsillos con cierre.</li><li>-C.N.de F Verano 2022</li><li>-Disponible en color azul marino (oscuro) y azul francia (claro)</li><li>-¡Últimos talles!</li></ul>",
    precio: "1990",
    foto: "src/camisetaent2022.jpg",
  },
  {
    nombre: "Buzo TRNGL 2022 Adulto",
    descripcion:
      "<ul><li>-CNdeF Verano 2022</li><li>-Disponible en color: azul marino (oscuro), rojo y blanco.</li><li>-Talles del S al XL</li></ul>",
    precio: "3000",
    foto: "src/Buzo TRNGL 2022 Adulto.jpg",
  },
  {
    nombre: "Camiseta de Golero 2022",
    descripcion:
      "<ul><li>-Talles :S, M, L, XL</li><li>-Color :Azul Marino, Bordo, Azul Francia</li></ul>",
    precio: "3990",
    foto: "src/Camiseta de Golero 2022.jpeg",
  },
  {
    nombre: "Camiseta Home Kit 2022",
    descripcion:
      "<ul><li>-Este año se cumplen 120 años de la primera vez que Nacional vistió de blanco como camiseta titular, este hito tan importante en la historia del Decano será representado en la nueva camiseta Home Kit 2022. En su diseño y detalles se verá reflejada parte de la rica historia del Club.</li></ul>",
    precio: "4990",
    foto: "src/Camiseta Home Kit 2022.jpeg",
  },
  {
    nombre: "Camiseta alternativa Luis Suarez",
    descripcion:
      "<ul><li>-Con un diseño innovador y sustentable, inspirada en la primer camiseta de Nacional.</li><li>-Fabricada con poliéster reciclado.</li><li>-Se puede estampar número y nombre por un costo extra. ¡No dudes en consultar!</li><li>-El producto será entregado en un plazo de 24 a 48 hrs.</li></ul>",
    precio: "4990",
    foto: "src/camisetaaltsuarez.jpeg",
  },
  {
    nombre: "Camisetas algodón Umbro Adulto",
    descripcion:
      "<ul><li>-Tres  modelos: HALF (negro con blanco), BROK (azul) y OUT LOGO (negro con rojo).</li><li>-Talles disponibles del S al XL.</li></ul>",
    precio: "999",
    foto: "src/Camisetas algodón Umbro Adulto.jpg",
  },
  {
    nombre: "Campera Former Nacional 2022 Junior",
    descripcion:
      "<ul><li>Talles :8, 10, 12, 14, 16-</li><li>-Color :Marino, Rojo</li></ul>",
    precio: "4690",
    foto: "src/Campera Former Nacional 2022 Junior.jpeg",
  },
  {
    nombre: "Campera Urban Umbro Junior",
    descripcion:
      "<ul><li>-Color :Azul marino</li><li>-Talles :8</li></ul>",
    precio: "990",
    foto: "src/Campera Urban Umbro Junior.jpeg",
  },
  {
    nombre: "Camperón SWEEP CNdeF 2022",
    descripcion:
      "<ul><li>-Talles :S, M, L, XL, XXL, XXXL</li><li>-Color: Marino-Rojo, Marino-Francia, Francia-Rojo</li></ul>",
    precio: "5990",
    foto: "src/Camperón SWEEP CNdeF 2022.jpeg",
  },
  {
    nombre: "Canguro de felpa entrenamiento 2021 Adulto",
    descripcion:
      "<ul><li>-Buzo de felpa con bolsillo canguro con cierres y capucha con cuerdas ajustables.</li><li>-¡OFERTA! 25 % off</li></ul>",
    precio: "2990",
    foto: "src/Canguro de felpa entrenamiento 2021 Adulto.jpeg",
  },
  {
    nombre: "Camiseta del Hincha Azul 2021",
    descripcion:
      "<ul><li>-Por cada camiseta vendida se donarán $34 a la Fundación Caza Bajones que apoya a personas con depresión e ideas de autoeliminación. Morro eterno. Nacional no te olvida!</li></ul>",
    precio: "2990",
    foto: "src/Camiseta del Hincha Azul 2021.jpg",
  },
  {
    nombre: "Camiseta Juego Oficial 2019",
    descripcion:
      "<ul><li>- Se puede estampar número y nombre, no dudes en consultar</li></ul>",
    precio: "1990",
    foto: "src/Camiseta Juego Oficial 2019.jpeg",
  },
];

const user = JSON.parse(localStorage.getItem("usuario")) || {};
const nombre = "";
let productoElegido = "";

function eventosCardGrande() {
  const cardContainer = document.querySelector(".card_grande");
  catalogo.forEach((producto) => {
    if (producto.nombre === productoElegido) {
      cardContainer.innerHTML = `
            <div class="card_foto">
            <img src="${producto.foto}" alt="">
            </div>
            <div class="card_texto">
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
                <button id="card_volver">VOLVER</button>
            </div>
            `;
    }
  });
  const btnVolver = document.querySelector("#card_volver");
  btnVolver.addEventListener("click", (e) => {
    renderPrincipal();
  });
}

function eventosPrincipal() {
  const buscador = document.querySelector("#buscador");
  const productos = document.querySelector("#productos");
  const alLogin = document.querySelector("#alLogin");
  productos.innerText = [];
  catalogo.forEach((producto) => {
    productos.innerHTML += `
    <div class="card">
          <div class="card_sup">
            <div class="imgCont"><img src="${producto.foto}" alt="" /></div>
            <h5 class="titulo" >${producto.nombre}</h5>
          </div>
          <div class="card_inf">
            <p class="precio">$${producto.precio}</p>
            <button>Agregar</button>
          </div>
        </div>
        `;
  });
  buscador.addEventListener("input", ({ target }) => {
    const value = target.value.toUpperCase();
    const cards = document.querySelectorAll(".card");

    for (const card of cards) {
      const nombre = card.querySelector(".titulo").innerText.toUpperCase();
      if (nombre.includes(value)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    }
  });

  const card = document.querySelector("#productos");
  card.addEventListener("click", ({ target }) => {
    if (target.parentNode.className == "card") {
      productoElegido = target.parentNode.children[0].innerText;
      renderCardGrande();
    } else if (target.className == "card") {
      productoElegido = target.children[0].innerText;
      renderCardGrande();
    } else if (target.parentNode.parentNode.parentNode.className == "card") {
      productoElegido =
        target.parentNode.parentNode.parentNode.children[0].innerText;
      renderCardGrande();
    }
  });
  alLogin.addEventListener("click", renderLogin);
}

function eventosLogin() {
  const loginBtn = document.querySelector("#login_btn");
  const loginMail = document.querySelector("#loginMail");
  const loginPass = document.querySelector("#loginPass");
  const errorLogin = document.querySelector("#errorLogin");
  const saludo = document.querySelector("#nombrecito");
  const toRegister = document.querySelector("#toRegister");

  toRegister.addEventListener("click", renderRegister);

  loginBtn.addEventListener("click", (e) => {
    const verificar = () => {
      if (loginMail.value === user.mail && loginPass.value === user.pass) {
        saludo.innerText = `Hola ${user.nombre}!`;
        renderPrincipal();
      } else {
        errorLogin.className = "error";
        errorLogin.innerText = "El E-mail o la contraseña no coinciden";
      }
    };
    verificar();
  });
}

function eventosRegister() {
  const regBtn = document.querySelector("#reg_btn");
  const regName = document.querySelector("#regName");
  const regApellido = document.querySelector("#regApellido");
  const regMail = document.querySelector("#regMail");
  const regPass = document.querySelector("#regPass");
  const regPass2 = document.querySelector("#regPass2");
  const saludo = document.querySelector("#nombrecito");
  const toLogin = document.querySelector("#toLogin");

  let notPass = [];
  let notPass2 = [];
  let notPass3 = [];
  let notPass4 = [];
  regBtn.addEventListener("click", (e) => {
    const requeridos = (inputArr = []) => {
      let errores = [];
      inputArr.forEach((input) => {
        if (input.value.trim() === "") {
          input.nextElementSibling.className = "error";
          input.nextElementSibling.innerText = "Este campo es obligatorio";
          errores.push("error");
          return;
        } else {
          input.nextElementSibling.className = "error oculto";
          return;
        }
      });
      notPass = errores;
    };
    const checkLength = (input, min, max) => {
      let errores2 = [];
      if (input.value.length < min) {
        input.nextElementSibling.className = "error";
        input.nextElementSibling.innerText = `Debe tener al menos ${min} caracteres`;
        errores2.push("error");
      } else if (input.value.length > max) {
        input.nextElementSibling.className = "error";
        input.nextElementSibling.innerText = `Debe ser menor a ${max} caracteres`;
        errores2.push("error");
      } else {
        input.classList.remove("error");
      }
      notPass2 = errores2;
    };
    const checkPasswordMatch = (input1, input2) => {
      errores3 = [];
      if (input1.value !== input2.value) {
        input2.nextElementSibling.className = "error";
        input2.nextElementSibling.innerText = `Las contraseñas no coinciden`;
        errores3.push("error");
      } else {
        input1.classList.remove("error");
        input2.classList.remove("error");
      }
      notPass3 = errores3;
    };
    const checkEmail = (input) => {
      errores4 = [];
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(input.value.trim())) {
        input.nextElementSibling.className = "error";
        input.nextElementSibling.innerText = `El email no es válido`;
        errores4.push("error");
      }
      notPass4 = errores4;
    };

    const captureUser = () => {
      if (
        notPass.length === 0 &&
        notPass2.length === 0 &&
        notPass3.length === 0 &&
        notPass4.length === 0
      ) {
        user.nombre = regName.value;
        user.apellido = regApellido.value;
        user.mail = regMail.value;
        user.pass = regPass.value;
        saludo.innerText = `Hola ${regName.value}!`;
        localStorage.setItem("usuario", JSON.stringify(user));
        renderPrincipal();
      }
    };

    requeridos([regName, regApellido, regMail, regPass, regPass2]);
    checkLength(regPass, 5, 15);
    checkPasswordMatch(regPass, regPass2);
    checkEmail(regMail);
    captureUser();
    console.log(notPass);
    console.log(notPass2);
    console.log(notPass3);
    console.log(notPass4);
  });
  toLogin.addEventListener("click", renderLogin);
}

//CUERPOS DE WEB

const register = `
<div class="login">
<div class="login_logo">
    <img src="src/logo.png" alt="">
</div>
<div id="datos_register" class="datos_register">
    <input type="text" name="" id="regName" placeholder="Nombre">
    <p class="error oculto">Mensaje de error</p>
    <input type="text" name="" id="regApellido" placeholder="Apellido">
    <p class="error oculto">Mensaje de error</p>
    <input type="email" name="" id="regMail" placeholder="Email">
    <p class="error oculto">Mensaje de error</p>
    <input type="password" name="" id="regPass" placeholder="Contraseña">
    <p class="error oculto">Mensaje de error</p>
    <input type="password" name="" id="regPass2" placeholder="Repita su contraseña">
    <p class="error oculto">Mensaje de error</p>
</div>
<button id="reg_btn" class="regLogBtn">REGISTRATE</button>
<p class="a_login">¿Ya tenés cuenta? <a id="toLogin" href="">- INGRESÁ</a> </p>
</div>
`;
const login = `
<div class="login">
    <div class="login_logo">
        <img src="src/logo.png" alt="">
    </div>
    <div class="datos_register">
        <input type="email" name="" id="loginMail" placeholder="Email">
        <p class="error oculto">Mensaje de error</p>
        <input type="password" name="" id="loginPass" placeholder="Contraseña">
        <p id="errorLogin" class="error oculto">Mensaje de error</p>
    </div>
    <button id="login_btn" class="regLogBtn">LOGIN</button>
    <p class="a_login">¿Aún no tenés cuenta? - <a id="toRegister" href=""> REGISTRATE</a> </p>
</div>
`;
const principal = `
<div class="nosotros" id="nosotros">
<div class="nosotros_l" >
    <h3>Somos</h3>
    <h2>Tienda Tricolor</h2>
    <p>Una tienda de tricolores para tricolores</p>
     <button class="nosotrosBtn_l" onClick="document.getElementById('productos').scrollIntoView();">VER PRODUCTOS</button>
       
    </div>
<div class="nosotros_r" ><img src="./src/nacionalportada.jpg" alt=""></div>
</div>
<div class="searchSection">

<div class="searchbar">
<p>¿Qué andás buscando?</p>
<i class="fa-solid fa-magnifying-glass"></i>
<input type="text" name="" id="buscador">
</div>
</div>
<div class="productos" id="productos">
</div>
`;
const cardGrande = `
<div class="card_grande">
</div>
`;

//RENDERIZADO DE LA PAGINA
const renderPrincipal = (e) => {
  contenido.innerHTML = principal;
  eventosPrincipal();
};

const renderRegister = (e) => {
  e.preventDefault();
  contenido.innerHTML = register;
  eventosRegister();
};
const renderLogin = (e) => {
  e.preventDefault();
  contenido.innerHTML = login;
  eventosLogin();
};
const renderCardGrande = (e) => {
  contenido.innerHTML = cardGrande;
  eventosCardGrande();
};

renderPrincipal();
const logo = document.querySelector("#logo");
logo.addEventListener("click", renderPrincipal);
