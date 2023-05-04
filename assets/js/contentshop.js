var catindex;

(()=> {const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    fetch('https://backend-jahxr.vercel.app/client/categories')
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => {
      json.forEach((cat,index) => { 
        if (parseInt(urlParams.get('catIndex')) === cat.id) {
              const categoriaH1 = document.getElementById('nombreCategoria').innerHTML = cat.name; 
              
            }
        });

    })    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
        
    catindex = Number.parseInt(urlParams.get('catIndex'));

    fetch('https://backend-jahxr.vercel.app/client/stores/'+catindex)
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => {
      json.forEach((tienda,index) => { 
        var container = document.getElementById('tiendas');
        container.innerHTML += `<div class="tienda element" id="nombretienda" onclick="go('${tienda._id}')">
        <h4>${tienda.name}</h4>
        <img src='${tienda.imagen}'>
      </div> `
        });

    })    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
})
();

function go(idtienda){
    window.location = "productos.html?app=sa&idtienda="+idtienda;
}