import './style.css'

//Header
var header = document.createElement('header');

//Header part1
var sectionAyuda = document.createElement('section');
sectionAyuda.classList.add('sectionAyuda');

var divlogojordanconverse = document.createElement('div');

var enlaceLogoJordan = document.createElement('a');
enlaceLogoJordan.href = '#';

var logoJordan = document.createElement('img');
logoJordan.src = 'assets/logo jordan.png'; 
enlaceLogoJordan.appendChild(logoJordan);

divlogojordanconverse.appendChild(enlaceLogoJordan);

var enlaceLogoConverse = document.createElement('a');
enlaceLogoConverse.href = '#';

var logoConverse = document.createElement('img');
logoConverse.src = 'assets/logo-Converse.png'; 
enlaceLogoConverse.appendChild(logoConverse);

divlogojordanconverse.appendChild(enlaceLogoConverse);

sectionAyuda.appendChild(divlogojordanconverse);

var ulAyuda = document.createElement('ul');

var liAyuda1 = document.createElement('li');
var enlanceliAyuda1= document.createElement('a');
enlanceliAyuda1.textContent = 'Buscar una tienda';
enlanceliAyuda1.href = '#';

var liAyuda2 = document.createElement('li');
var enlanceliAyuda2= document.createElement('a');
enlanceliAyuda2.textContent = 'Ayuda';
enlanceliAyuda2.href = '#';

var liAyuda3 = document.createElement('li');
var enlanceliAyuda3= document.createElement('a');
enlanceliAyuda3.textContent = 'Únete a nosotros';
enlanceliAyuda3.href = '#';

var liAyuda4 = document.createElement('li');
var enlanceliAyuda4= document.createElement('a');
enlanceliAyuda4.textContent = 'Iniciar sesión';
enlanceliAyuda4.href = '#';

liAyuda1.appendChild(enlanceliAyuda1);
liAyuda2.appendChild(enlanceliAyuda2);
liAyuda3.appendChild(enlanceliAyuda3);
liAyuda4.appendChild(enlanceliAyuda4);

ulAyuda.appendChild(liAyuda1);
ulAyuda.appendChild(liAyuda2);
ulAyuda.appendChild(liAyuda3);
ulAyuda.appendChild(liAyuda4);

sectionAyuda.appendChild(ulAyuda);


//Header part 2

var sectionLogo = document.createElement('section');
sectionLogo.classList.add('sectionLogo');

var divLogoNike = document.createElement('div');
divLogoNike.classList.add('logo_container');

var enlaceLogoNike = document.createElement('a');
enlaceLogoNike.href='#'
var LogoNike = document.createElement('img');
LogoNike.src = 'assets/Logo_NIKE.png'; 

divLogoNike.appendChild(enlaceLogoNike);
enlaceLogoNike.appendChild(LogoNike);


var divNav = document.createElement('div');
divNav.classList.add('nav_container');

var nav = document.createElement('nav');

var ul = document.createElement("ul");

var navElementos = ["Novedades y Destacados", "Hombre", "Mujer", "Niño/a", "Ofertas"];

for (var i = 0; i < navElementos.length; i++) {
  var li = document.createElement("li");
  var a = document.createElement("a");
  a.setAttribute("href", "#");
  a.textContent = navElementos[i];
  li.appendChild(a);
  ul.appendChild(li);
}

nav.appendChild(ul);
divNav.appendChild(nav);


var divBuscar = document.createElement('div');
divBuscar.classList.add('buscar_container');

var botonInputBusqueda = document.createElement("button");
botonInputBusqueda.classList.add('boton_busqueda');
var imagenBusqueda = document.createElement("img");
imagenBusqueda.src = "assets/lupa.png"; 
botonInputBusqueda.appendChild(imagenBusqueda);
divBuscar.appendChild (botonInputBusqueda);

var inputBusqueda = document.createElement("input");
inputBusqueda.setAttribute("type", "text");
inputBusqueda.setAttribute("id", "inputBusqueda");
inputBusqueda.setAttribute("placeholder", "\          Buscar...");
divBuscar.appendChild(inputBusqueda);

var botonFavorito = document.createElement("button");
botonFavorito.classList.add('boton_favorito');
var imagenFav = document.createElement("img");
imagenFav.src = "assets/logo corazon.png"; 
botonFavorito.appendChild(imagenFav);
divBuscar.appendChild(botonFavorito);

var botonCesta = document.createElement("button");
botonCesta.classList.add('boton_cesta');
var imagenCesta = document.createElement("img");
imagenCesta.src = "assets/Cesta de la compra.png";
botonCesta.appendChild(imagenCesta);
divBuscar.appendChild(botonCesta);

//Menu hamburguesa
var botonhamburguesa = document.createElement ('button');
botonhamburguesa.classList.add('btn-hamburguesa');
divBuscar.appendChild (botonhamburguesa);


var imgHamburguesa = document.createElement ('img');
imgHamburguesa.src = 'assets/menu_hamburguesa.png'; 
botonhamburguesa.appendChild (imgHamburguesa);


sectionLogo.appendChild(divLogoNike);
sectionLogo.appendChild(divNav);
sectionLogo.appendChild(divBuscar);



// Header part 3
var sectionDevoluciones = document.createElement('section');
sectionDevoluciones.classList.add('sectionDevoluciones');

var botonAnterior = document.createElement('button');
botonAnterior.classList.add('boton_anterior');
botonAnterior.textContent ='<';
botonAnterior.addEventListener('click', prevSlide);
sectionDevoluciones.appendChild(botonAnterior);

var carruselContainer = document.createElement('div');
carruselContainer.classList.add('carrusel-container');
sectionDevoluciones.appendChild(carruselContainer);

var divCarrusel = document.createElement('div');
divCarrusel.classList.add('carrusel');
carruselContainer.appendChild(divCarrusel);

var divSlide1 = document.createElement('div');
divSlide1.classList.add('slide');
var h3Slide1 = document.createElement('h3');
h3Slide1.textContent = 'DEVOLUCIONES Y ENTREGAS GRATUITAS';
var divSlide1parrafo = document.createElement('div');
var parrafoSlide1 = document.createElement('p');
parrafoSlide1.textContent = 'Como Member, tienes envíos y devoluciones gratis en un plazo de 30 días en todos los pedidos.';
var enlaceSlide1 = document.createElement('a');
enlaceSlide1.textContent = 'Obtén más información y únete';
enlaceSlide1.href = "#";
divSlide1parrafo.appendChild(parrafoSlide1);
divSlide1parrafo.appendChild(enlaceSlide1);

divSlide1.appendChild(h3Slide1);
divSlide1.appendChild(divSlide1parrafo);

divCarrusel.appendChild(divSlide1);

var botonSiguiente = document.createElement('button');
botonSiguiente.classList.add('boton_siguiente');
botonSiguiente.textContent ='>';
botonSiguiente.addEventListener('click', nextSlide);
sectionDevoluciones.appendChild(botonSiguiente);


// CARRUSEL
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const carruselContent = document.querySelector('.carrusel');
    let currentIndex = 0;

    
    
    function showSlide(index) {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }

        const offset = -index * 500;
        carruselContent.style.transform = `translateX(${offset})px`;
        currentIndex = index;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    setInterval(prevSlide, 3000);



header.appendChild(sectionAyuda);
header.appendChild(sectionLogo);
header.appendChild(sectionDevoluciones);


document.body.appendChild(header);


//MAIN
var sectionFilter = document.getElementById('filter');
var sectionEscaparate = document.getElementById('escaparate');

var parent = sectionFilter.parentNode;

parent.insertBefore(header, sectionFilter);

var main = document.createElement ('main');
document.body.appendChild(main);

var sectionContador = document.createElement('section');
sectionContador.id= "section-contador";

var divContador = document.createElement ('div');
divContador.classList.add('contador-container');
sectionContador.appendChild (divContador);

var h2contador = document.createElement ('h2');
divContador.appendChild (h2contador);

var botonOcultarFiltros = document.createElement ('button');
botonOcultarFiltros.classList.add('btn-filtros');
sectionContador.appendChild (botonOcultarFiltros);
botonOcultarFiltros.textContent = "Ocultar Filtros";

var imgFiltros = document.createElement ('img');
imgFiltros.src = 'assets/Filtro.png'; 
botonOcultarFiltros.appendChild (imgFiltros);

var textoOriginalFiltros = "Ocultar Filtros";
var textoAlternativoFiltros = "Mostrar Filtros";
var estadoBotonFiltros = 0;

botonOcultarFiltros.addEventListener("click", function() {
    if (estadoBotonFiltros === 0) {
        botonOcultarFiltros.textContent = textoAlternativoFiltros;
        estadoBotonFiltros = 1;
    } else {
        botonOcultarFiltros.textContent = textoOriginalFiltros;
        estadoBotonFiltros = 0;
    }

    if (sectionFilter.classList.contains('filter-hide')) {
      sectionFilter.classList.remove('filter-hide');
      setTimeout(() => {
        sectionFilter.style.display = 'flex';
      }, 0); 
      
    } else {
      setTimeout(() => {
        sectionFilter.classList.add('filter-hide');
      }, 0);
      setTimeout(() => {
        sectionFilter.style.display = 'none';
      }, 1000);
    }
    botonOcultarFiltros.appendChild (imgFiltros);

});



var botonOrdenar = document.createElement ('button');
botonOrdenar.classList.add('btn-ordenar');
sectionContador.appendChild (botonOrdenar);

var divBtnOrdenar = document.createElement('div')
divBtnOrdenar.classList.add('container-btn-ordenar');
botonOrdenar.appendChild (divBtnOrdenar);

var pBtnOrdenar = document.createElement('p')
divBtnOrdenar.appendChild (pBtnOrdenar);
pBtnOrdenar.textContent = "Ordenar por";

var imgOrdenar = document.createElement ('img');
imgOrdenar.src = 'assets/despliegue.png'; 
divBtnOrdenar.appendChild (imgOrdenar);

var ulBtnOrdenar = document.createElement('ul');

var liBtnOrdenar1 = document.createElement('li');
var enlanceliBtnOrdenar1= document.createElement('a');
enlanceliBtnOrdenar1.textContent = 'Destacados';
enlanceliBtnOrdenar1.href = '#';

var liBtnOrdenar2 = document.createElement('li');
var enlanceliBtnOrdenar2= document.createElement('a');
enlanceliBtnOrdenar2.textContent = 'Más recientes';
enlanceliBtnOrdenar2.href = '#';

var liBtnOrdenar3 = document.createElement('li');
var enlanceliBtnOrdenar3= document.createElement('a');
enlanceliBtnOrdenar3.textContent = 'Precio: alto-bajo';
enlanceliBtnOrdenar3.href = '#';

var liBtnOrdenar4 = document.createElement('li');
var enlanceliBtnOrdenar4= document.createElement('a');
enlanceliBtnOrdenar4.textContent = 'Precio: bajo-alto';
enlanceliBtnOrdenar4.href = '#';

liBtnOrdenar1.appendChild(enlanceliBtnOrdenar1);
liBtnOrdenar2.appendChild(enlanceliBtnOrdenar2);
liBtnOrdenar3.appendChild(enlanceliBtnOrdenar3);
liBtnOrdenar4.appendChild(enlanceliBtnOrdenar4);

ulBtnOrdenar.appendChild(liBtnOrdenar1);
ulBtnOrdenar.appendChild(liBtnOrdenar2);
ulBtnOrdenar.appendChild(liBtnOrdenar3);
ulBtnOrdenar.appendChild(liBtnOrdenar4);

botonOrdenar.appendChild(ulBtnOrdenar);

botonOrdenar.addEventListener("click", function() {
    if (ulBtnOrdenar.style.display === "none") {
        ulBtnOrdenar.style.display = "block";
    } else {
        ulBtnOrdenar.style.display = "none";
    }
});

//Productos
const productos = [
  {
    info: "Superventas",
    nombre: "Nike Air FOrce 1 '07",
    caracteristica: "Zapatillas",
    deporte: "lifestyle",
    colores: "2 colores",
    precio: 119.99,
    imagenPrincipal: 'assets/nike-air-force-blanca.png',
    imagenes: [
      'assets/nike-air-force-blanca.png',
     'assets/nike-air-force-negra.png',
    ],
   
  },
  {
      info: "Superventas",
      nombre: "Nike Dunk Low",
      caracteristica: "Zapatillas",
      deporte: "lifestyle",
      colores: "1 color",
      precio: 129.99,
      imagenPrincipal: 'assets/dunk-low-zapatillas.png' ,
      imagenes: [],
    },
    {
      info: "",
      nombre: "Nike Quest 5",
      caracteristica: "Zapatillas de running",
      deporte: "Running",
      colores: "2 colores",
      precio: 55.99,
      imagenPrincipal: 'assets/quest-5-zapatillas-de-running-asfalto-blanca.png',
      imagenes: [
        'assets/quest-5-zapatillas-de-running-asfalto-blanca.png',
      'assets/quest-5-zapatillas-de-running-asfalto-negra.png',
      ]
    },

    {
      info: "Materiales Sostenibles",
      nombre: "Nike Court Vision Low Next Nature",
      caracteristica: "Zapatillas",
      deporte: "lifestyle",
      colores: "4 colores",
      precio: 79.99,
      imagenPrincipal:'assets/court-vision-low-next-nature-zapatillas-blanca-negra.png',
      imagenes: [
        'assets/court-vision-low-next-nature-zapatillas-blanca-negra.png',
        'assets/court-vision-low-next-nature-zapatillas-blanca-verde.png' ,
        'assets/court-vision-low-next-nature-zapatillas-blanca.png' ,
        'assets/court-vision-low-next-nature-zapatillas-negra.png',
      ]
    },

    {
      info: "Materiales sostenibbles",
      nombre: "Nike Metcon 9",
      caracteristica: "Zapatillas de training",
      deporte: "training",
      colores: "4 colores",
      precio: 139.99,
      imagenPrincipal: 'assets/metcon-9-zapatillas-de-training-negra-gris.png',
      imagenes: [
        'assets/metcon-9-zapatillas-de-training-negra-gris.png',
        'assets/metcon-9-zapatillas-de-training-negra.png',
       'assets/metcon-9-zapatillas-de-training-blanca.jpeg',
       'assets/metcon-9-zapatillas-de-training-naranja.jpeg',
      ]
    },
    {
      info: "Lo último",
      nombre: "KD17 Sunrise",
      caracteristica: "Zapatillas de baloncesto",
      deporte: "baloncesto",
      colores: "1 color",
      precio: 159.99,
      imagenPrincipal: 'assets/kd17-sunrise-zapatillas-de-baloncesto-fRfjCL.png',
      imagenes: [],
    },
    {
      info: "Lo último",
      nombre: "Nike Mercurial Vapor 15 Elite",
      caracteristica: "Botas de fútbol de perfil bajo para terreno firme",
      deporte: "fútbol",
      colores: "2 colores",
      precio: 259.99,
      imagenPrincipal: 'assets/mercurial-vapor-15-elite-botas-de-futbol-de-perfil-bajo-fg-blanca.png',
      imagenes: [
        'assets/mercurial-vapor-15-elite-botas-de-futbol-de-perfil-bajo-fg-blanca.png',
        'assets/mercurial-vapor-15-elite-botas-de-futbol-de-perfil-bajo-terreno-firme-amarilla.png',
      ]
    },
    {
      info: "Lo último",
      nombre: "NikeCourt Air Zoom Vapor 11 Premium",
      caracteristica: "Zapatillas de tenis para tierra batida",
      deporte: "tenis",
      colores: "1 color",
      precio: 199.99,
      imagenPrincipal: 'assets/nikecourt-air-zoom-vapor-11-zapatillas-de-tenis-tierra-batida-d9Vw5z.png',
      imagenes: [],
    },
    {
      info: "",
      nombre: "Nike ACG Mountain Fly 2 Low GORE-TEX",
      caracteristica: "Zapatillas",
      deporte: "caminar",
      colores: "1 color",
      precio: 179.99,
      imagenPrincipal: 'assets/acg-mountain-fly-2-low-gore-tex-zapatillas-pkR8xh.png',
      imagenes: [],
    },
    {
      info: "",
      nombre: "Nike Cortez Textile",
      caracteristica: "Zapatillas",
      deporte: "lifestyle",
      colores: "4 colores",
      precio: 89.99,
      imagenPrincipal: 'assets/cortez-textile-zapatillas-verde.png',
      imagenes: [
        'assets/cortez-textile-zapatillas-verde.png',
        'assets/cortez-textile-zapatillas-blanca.png',
       'assets/cortez-textile-zapatillas-azul.png',
       'assets/cortez-textile-zapatillas-negra.png',
      ]
    },
];

function renderProductos(productosFiltrados) {
  sectionEscaparate.innerHTML = '';
  if (productosFiltrados.length === 0) {
    renderNoProductos();
  } else {
    productosFiltrados.forEach(producto => {
      const article = document.createElement('article');

      const img = document.createElement('img');
      img.src = producto.imagenPrincipal;
      img.alt = producto.nombre;
      article.appendChild(img);

      const info = document.createElement('p');
      info.textContent = producto.info;
      article.appendChild(info);

      const nombre = document.createElement('h4');
      nombre.textContent = producto.nombre;
      article.appendChild(nombre);

      const caracteristica = document.createElement('p');
      caracteristica.textContent = producto.caracteristica;
      article.appendChild(caracteristica);

      const colores = document.createElement('p');
      colores.textContent = producto.colores;
      article.appendChild(colores);

      const divColores = document.createElement('div');
      divColores.classList.add('colores-precio');
      article.appendChild(divColores);

      if (producto.imagenes.length > 0) {
        producto.imagenes.forEach((imagen, index) => {
          const colorOption = document.createElement('span');
          colorOption.classList.add('color-option');

          const colorImg = document.createElement('img');
          colorImg.src = imagen;
          colorImg.alt = `${producto.nombre} ${index + 1}`;

          colorOption.appendChild(colorImg);
          colorOption.dataset.imgSrc = imagen;
          divColores.appendChild(colorOption);
        });
      }

      const precio = document.createElement('p');
      precio.textContent = `${producto.precio}€`;
      article.appendChild(precio);

      sectionEscaparate.appendChild(article);

      if (producto.imagenes.length > 0) {
        article.addEventListener('mouseover', () => {
          article.classList.add('article-hovered');
        });

        article.addEventListener('mouseout', () => {
          article.classList.remove('article-hovered');
        });

        divColores.addEventListener('mouseover', (event) => {
          const target = event.target.closest('.color-option');
          if (target) {
            img.src = target.dataset.imgSrc;
          }
        });

        divColores.addEventListener('mouseout', () => {
          img.src = producto.imagenPrincipal;
        });
      }
    });
  }
}

function renderNoProductos() {
  const divNoProductos = document.createElement('div');
  divNoProductos.id = 'sectionNoProductos';
  divNoProductos.className = 'no-productos';

  const closeButton = document.createElement('button');
  closeButton.id = 'closeNoProductos';
  closeButton.textContent = 'X';
  closeButton.addEventListener('click', () => {
    divNoProductos.style.display = 'none';
  });
  divNoProductos.appendChild(closeButton);

  const noProductosText = document.createElement('h5');
  noProductosText.textContent = 'Productos no encontrados';
  divNoProductos.appendChild(noProductosText);

  

  const divSugeridos = document.createElement('div');
  divSugeridos.id = 'divSugeridos';
  divSugeridos.className = 'productos-sugeridos';
  divNoProductos.appendChild(divSugeridos);


  sectionEscaparate.appendChild(divNoProductos);
  renderProductosSugeridos(divSugeridos);
}

function renderProductosSugeridos(container) {
  container.innerHTML = '';
  const sugeridos = productos.filter(producto => producto.enOferta || Math.random() < 0.3);
  sugeridos.forEach(producto => {
    const article = document.createElement('article');

    const img = document.createElement('img');
    img.src = producto.imagenPrincipal;
    img.alt = producto.nombre;
    article.appendChild(img);

    const info = document.createElement('p');
    info.textContent = producto.info;
    article.appendChild(info);

    const nombre = document.createElement('h4');
    nombre.textContent = producto.nombre;
    article.appendChild(nombre);

    const caracteristica = document.createElement('p');
    caracteristica.textContent = producto.caracteristica;
    article.appendChild(caracteristica);

    const precio = document.createElement('p');
    precio.textContent = `${producto.precio}€`;
    article.appendChild(precio);

    container.appendChild(article);
  });
}

function renderFiltros() {
  sectionFilter.innerHTML = '';

  // Filtro de Deporte
  const selectDeporte = document.createElement('select');
  selectDeporte.id = 'filtroDeporte';

  const deportes = [...new Set(productos.map(producto => producto.deporte))];
  deportes.forEach(deporte => {
    const option = document.createElement('option');
    option.value = deporte;
    option.textContent = deporte.charAt(0).toUpperCase() + deporte.slice(1);
    selectDeporte.appendChild(option);
  });

  const labelDeporte = document.createElement('label');
  labelDeporte.textContent = 'Deporte: ';
  labelDeporte.appendChild(selectDeporte);

  sectionFilter.appendChild(labelDeporte);

  // Filtro de Precio
  const inputPrecio = document.createElement('input');
  inputPrecio.type = 'number';
  inputPrecio.id = 'filtroPrecio';

  const buttonBuscar = document.createElement('button');
  buttonBuscar.textContent = 'Buscar';
  buttonBuscar.addEventListener('click', () => {
    const maxPrecio = parseFloat(inputPrecio.value);
    const deporteSeleccionado = selectDeporte.value;
    filtrarProductos(deporteSeleccionado, maxPrecio);
  });

  const labelPrecio = document.createElement('label');
  labelPrecio.textContent = 'Precio máximo: ';
  labelPrecio.appendChild(inputPrecio);
  labelPrecio.appendChild(buttonBuscar);

  sectionFilter.appendChild(labelPrecio);

  // Botón para Limpiar Filtros
  const buttonLimpiar = document.createElement('button');
  buttonLimpiar.textContent = 'Limpiar Filtros';
  buttonLimpiar.addEventListener('click', () => {
    renderProductos(productos);
    inputPrecio.value = '';
    selectDeporte.value = '';
  });

  sectionFilter.appendChild(buttonLimpiar);
}

function filtrarProductos(deporte, maxPrecio) {
  let productosFiltrados = productos;

  if (deporte) {
    productosFiltrados = productosFiltrados.filter(producto => producto.deporte === deporte);
  }

  if (!isNaN(maxPrecio)) {
    productosFiltrados = productosFiltrados.filter(producto => producto.precio <= maxPrecio);
  }

  renderProductos(productosFiltrados);
}

renderProductos(productos);
renderFiltros();


h2contador.textContent = `Zapatillas de hombre (${productos.length})`;
main.appendChild(sectionContador);
main.appendChild(sectionFilter);
main.appendChild(sectionEscaparate);

var footer = document.createElement('footer');
footer.id ="footer-container";
footer.innerHTML = `
            <div class="footer-section">
                <h3>Recursos</h3>
                <ul>
                    <li><a href="#">Tarjetas de regalo</a></li>
                    <li><a href="#">Buscar una tienda</a></li>
                    <li><a href="#">Nike Journal</a></li>
                    <li><a href="#">Hazte Member</a></li>
                    <li><a href="#">Descuento para estudiantes</a></li>
                    <li><a href="#">Comentarios</a></li>
                    <li><a href="#">Códigos promocionales</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Ayuda</h3>
                <ul>
                    <li><a href="#">Obtener ayuda</a></li>
                    <li><a href="#">Estado del pedido</a></li>
                    <li><a href="#">Envíos y entregas</a></li>
                    <li><a href="#">Devoluciones</a></li>
                    <li><a href="#">Opciones de pago</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Evaluaciones</a></li>
                    <li><a href="#">Ayuda con los códigos promocionales de Nike</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Empresa</h3>
                <ul>
                    <li><a href="#">Acerca de Nike</a></li>
                    <li><a href="#">Novedades</a></li>
                    <li><a href="#">Empleo</a></li>
                    <li><a href="#">Inversores</a></li>
                    <li><a href="#">Sostenibilidad</a></li>
                    <li><a href="#">Propósito</a></li>
                </ul>
            </div>
    `;

document.body.appendChild(footer);