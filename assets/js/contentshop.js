var catindex;

(()=> {const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const categoriaH1 = document.getElementById('nombreCategoria').innerHTML = categorias[urlParams.get('catIndex')].name;
    
    catindex = Number.parseInt(urlParams.get('catIndex'));

    var tiendasCat = tiendas.filter(function (tienda) {
      return tienda.idCategoria === Number.parseInt(urlParams.get('catIndex'))
    })

    
    tiendasCat.forEach((tienda,index) => {
        var container = document.getElementById('tiendas');
        container.innerHTML += `<div class="tienda element" id="nombretienda" onclick="go(${catindex},${index})">
        <h4>${tienda.name}</h4>
        ${tienda.imagen}
      </div> `
    });
})
();

function go(catIndex, tiendasindex){
    window.location = "productos.html?catIndex="+catindex+ "&tiendasindex="+tiendasindex;
}