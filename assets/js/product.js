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
        container.innerHTML += `<div class="tienda element" id="nombretienda" >
        <img class="bg" src="${producto.imagen}">
        <h2>${producto.name}</h2>
        <h5>${producto.descripcion}</h5>
        <h6>${producto.precio} .LPS</h6>
        
      </div> `
    });
})

();
