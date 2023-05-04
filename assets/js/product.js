var catindex;
var productos = [];
(()=> {const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    catindex=urlParams.get('idtienda')

    // Solicitud GET (Request).
    fetch('https://backend-jahxr.vercel.app/client/store/' + catindex)
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => {
      json[0].productos.forEach((producto,index) => {
        productos.push(producto)
        var container = document.getElementById('productos');
        container.innerHTML += `<div onclick='verProduct(${index})' class="tienda element" id="nombretienda" >
        <img class="bg" src="${producto.imagen}">
        <h2>${producto.name}</h2>
        <h5>${producto.descripcion}</h5>
        <h6>${producto.precio} .LPS</h6>
        
      </div> `
    });

    })    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
        
    
})

();

var cant = 1
function plus() {
    var contcant = document.getElementById('cant')
    cant++
    contcant.innerHTML = cant
    cantgl = cant;
}

function minus() {
  var contcant = document.getElementById('cant')
  if (cant == 1) {
    return
  }
  cant--
  contcant.innerHTML = cant
  cantgl = cant;
}

indexprgl = null;
cantgl = 1;

function verProduct(indexpr) {
  indexprgl = indexpr;
  cant = 1
  cantgl = cant;
  var modal = document.getElementById('modal')
  modal.style.display = 'flex'
  var producto = productos[indexpr]
  document.getElementById("imgpr").setAttribute('src', producto.imagen)
  document.getElementById("namepr").innerHTML = producto.name
  document.getElementById("despr").innerHTML = producto.descripcion
  document.getElementById("pricepr").innerHTML = producto.precio
  
}

function addtocart() {
  var cart = [];
  if (window.localStorage.getItem('cart') == undefined) {
    window.localStorage.setItem('cart', '[]')
  }
  cart = JSON.parse(window.localStorage.getItem('cart'));
  var producto = productos[indexprgl];
  producto.cant = cantgl
  cart.push(producto);
  window.localStorage.setItem('cart', JSON.stringify(cart))
  alert("producto " + producto.name + " agregado al carrito!")
}