var catindex;
(()=> {const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
   
    catindex=urlParams.get('catindex')
    var tiendasCat = tiendas.filter(function (tienda) {
      return tienda.idCategoria === Number.parseInt(urlParams.get('catIndex'))
    })
    
    tiendasCat[Number.parseInt(urlParams.get('tiendasindex'))].productos.forEach((producto,index) => {
        var container = document.getElementById('productos');
        container.innerHTML += `<div onclick='verProduct(${index})' class="tienda element" id="nombretienda" >
        <img class="bg" src="${producto.imagen}">
        <h2>${producto.name}</h2>
        <h5>${producto.descripcion}</h5>
        <h6>${producto.precio} .LPS</h6>
        
      </div> `
    });
})

();

var cant = 1
function plus() {
    var contcant = document.getElementById('cant')
    cant++
    contcant.innerHTML = cant
}

function minus() {
  var contcant = document.getElementById('cant')
  if (cant == 1) {
    return
  }
  cant--
  contcant.innerHTML = cant
}

function verProduct(indexpr) {
  cant = 1
  var modal = document.getElementById('modal')
  modal.style.display = 'flex'
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  catindex=urlParams.get('catindex')
  var tiendasCat = tiendas.filter(function (tienda) {
    return tienda.idCategoria === Number.parseInt(urlParams.get('catIndex'))
  })
  var producto = tiendasCat[Number.parseInt(urlParams.get('tiendasindex'))].productos[indexpr]
  document.getElementById("imgpr").setAttribute('src', producto.imagen)
  document.getElementById("namepr").innerHTML = producto.name
  document.getElementById("despr").innerHTML = producto.descripcion
  document.getElementById("pricepr").innerHTML = producto.precio
  
}