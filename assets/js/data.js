
var categorias = [


    {
        "name": "Comida",
        "id": 0,
        "color": "#283035;",
        "icono": '<img src="https://cdn-icons-png.flaticon.com/512/2819/2819383.png">'
    },
    {
        "name": "Bebidas",
        "id": 1,
        "color": "#283035;",
        "icono": '<img src="https://cdn-icons-png.flaticon.com/512/4689/4689752.png">'
    },
    {
        "name": "Super",
        "id": 2,
        "color": "#283035;",
        "icono": '<img src="https://cdn-icons-png.flaticon.com/512/3082/3082011.png">'
    },
    {
        "name": "Postres",
        "id": 3,
        "color": "#283035;",
        "icono": '<img src="https://cdn-icons-png.flaticon.com/512/7182/7182828.png">'
    },
    {
        "name": "Farmacia",
        "id": 4,
        "color": "#283035;",
        "icono": '<img src="https://cdn-icons-png.flaticon.com/512/1988/1988002.png">'
    },
    {
        "name": "Tecnologia",
        "id": 5,
        "color": "#283035;",
        "icono": '<img src="https://cdn-icons-png.flaticon.com/512/3211/3211272.png"> '
    },
    
]

var tiendas = [
    {
        name: "denny's •Areopuerto",
        imagen: '<img src=" https://i.kym-cdn.com/entries/icons/original/000/022/830/logo-socialshare.png">',
        idCategoria: 0,
        productos: [
            {
                name: "CLASSIC CHEESEBURGER",
                precio: 209,
                imagen: "https://www.dennys.hn/Imagenes/CATEGORIAS/HAMBURGUESA/D3037.jpg",
                descripcion: "Una porción de carne y tu elección de queso americano, suizo o cheddar. Servida con mayonesa, lechuga, tomate, pepinillos y cebolla roja."
            },
            {
                name: "AMERICA’S DINNER DOUBLE",
                precio: 279,
                imagen: "https://www.dennys.hn/Imagenes/CATEGORIAS/HAMBURGUESA/AllAmerican.jpg",
                descripcion: "Dos porciones de carne, queso americano, cebollas caramelizadas y salsa All-American en un pan brioche."
            },
            {
                name: "BACON SLAMBURGER",
                precio: 229,
                imagen: "https://www.dennys.hn/Imagenes/CATEGORIAS/HAMBURGUESA/D3036.jpg",
                descripcion: "Una hamburguesa 100% carne de res, con crujientes papas hash browns, un huevo cocinado a tu gusto, dos tiras de tocino y todo cubierto de salsa de queso."
            },
            {
                name: "CLUB SANDWICH",
                precio: 229,
                imagen: "https://www.dennys.hn/Imagenes/CATEGORIAS/HAMBURGUESA/D3041.jpg",
                descripcion: "Finas rebanadas de pechuga de pavo, tocino crujiente, lechuga, tomate y mayonesa en pan de 7 granos tostado."
            },
            {
                name: "AVOCADO CAESAR SALAD",
                precio: 239,
                imagen: "https://www.dennys.hn/Imagenes/CATEGORIAS/ENTRADAS/ACSAL.jpg",
                descripcion: "Elige entre una pechuga de pollo o un filete de salmón salvaje de Alaska, ambos perfectamente sazonados y asados, acompañados de aguacate fresco, tocino crujiente desmoronado y quesos italianos rallados por encima de lechuga romana fresca, mezclado con aderezo caesar y acompañada de pan."
            },
            {
                name: " CRANBERRY APPLE CHICKEN SALAD",
                precio: 169,
                imagen: "https://www.dennys.hn/Imagenes/CATEGORIAS/ENTRADAS/CRANBERRY.jpg",
                descripcion: "Pechuga de pollo asada, nueces glaseadas y arándanos secos, sobre lechuga mixta. Servida con aderezo de vinagre balsámico o tu elección de aderezo y pan."
            },
            {
                name: "JUMBO BUFFALO WINGS",
                precio: 235,
                imagen:"https://www.dennys.hn/Imagenes/CATEGORIAS/ENTRADAS/D3272.jpg",
                descripcion: "Orden de 6 alitas grandes fritas bañadas en salsa buffalo. Servidas con apio y salsa dip de tu elección."
            },
            {
                name: "MEGA PRIME RIB PHILLY MELT",
                precio: 279,
                imagen: "https://www.dennys.hn/Imagenes/CATEGORIAS/HAMBURGUESA/PHMELMEGA.jpg",
                descripcion: "Carne de res prime rib, con champiñones, mezcla de pimientos y cebollas asadas, cubiertas con salsa de queso pepper jack y una mezcla de quesos rallados en pan hoagie a la plancha con una sabrosa mantequilla de ajo."
            },
        ]

    },
    {
        name: "denny;s•Mall Multiplaza",
        imagen: '<img src=" https://i.kym-cdn.com/entries/icons/original/000/022/830/logo-socialshare.png">',
        idCategoria: 0,
        productos: [
            {
                name: "CLASSIC CHEESEBURGER",
                precio: 209,
                imagen: "https://www.dennys.hn/Imagenes/CATEGORIAS/HAMBURGUESA/D3037.jpg",
                descripcion: "Una porción de carne y tu elección de queso americano, suizo o cheddar. Servida con mayonesa, lechuga, tomate, pepinillos y cebolla roja."
            },
            {
                name: "AMERICA’S DINNER DOUBLE",
                precio: 279,
                imagen: "https://www.dennys.hn/Imagenes/CATEGORIAS/HAMBURGUESA/AllAmerican.jpg",
                descripcion: "Dos porciones de carne, queso americano, cebollas caramelizadas y salsa All-American en un pan brioche."
            },
            {
                name: "BACON SLAMBURGER",
                precio: 229,
                imagen: "https://www.dennys.hn/Imagenes/CATEGORIAS/HAMBURGUESA/D3036.jpg",
                descripcion: "Una hamburguesa 100% carne de res, con crujientes papas hash browns, un huevo cocinado a tu gusto, dos tiras de tocino y todo cubierto de salsa de queso."
            },
            {
                name: "CLUB SANDWICH",
                precio: 229,
                imagen: "https://www.dennys.hn/Imagenes/CATEGORIAS/HAMBURGUESA/D3041.jpg",
                descripcion: "Finas rebanadas de pechuga de pavo, tocino crujiente, lechuga, tomate y mayonesa en pan de 7 granos tostado."
            },
            {
                name: "AVOCADO CAESAR SALAD",
                precio: 239,
                imagen: "https://www.dennys.hn/Imagenes/CATEGORIAS/ENTRADAS/ACSAL.jpg",
                descripcion: "Elige entre una pechuga de pollo o un filete de salmón salvaje de Alaska, ambos perfectamente sazonados y asados, acompañados de aguacate fresco, tocino crujiente desmoronado y quesos italianos rallados por encima de lechuga romana fresca, mezclado con aderezo caesar y acompañada de pan."
            },
            {
                name: " CRANBERRY APPLE CHICKEN SALAD",
                precio: 169,
                imagen: "https://www.dennys.hn/Imagenes/CATEGORIAS/ENTRADAS/CRANBERRY.jpg",
                descripcion: "Pechuga de pollo asada, nueces glaseadas y arándanos secos, sobre lechuga mixta. Servida con aderezo de vinagre balsámico o tu elección de aderezo y pan."
            },
            {
                name: "JUMBO BUFFALO WINGS",
                precio: 235,
                imagen:"https://www.dennys.hn/Imagenes/CATEGORIAS/ENTRADAS/D3272.jpg",
                descripcion: "Orden de 6 alitas grandes fritas bañadas en salsa buffalo. Servidas con apio y salsa dip de tu elección."
            },
            {
                name: "MEGA PRIME RIB PHILLY MELT",
                precio: 279,
                imagen: "https://www.dennys.hn/Imagenes/CATEGORIAS/HAMBURGUESA/PHMELMEGA.jpg",
                descripcion: "Carne de res prime rib, con champiñones, mezcla de pimientos y cebollas asadas, cubiertas con salsa de queso pepper jack y una mezcla de quesos rallados en pan hoagie a la plancha con una sabrosa mantequilla de ajo."
            },
        ]

    },
    {
        name: "McDonald's • Kennedy",
        imagen: '<img src="https://www.crearuncurriculum.com/wp-content/uploads/2021/11/McDonalds-1024x1001.png">',
        idCategoria: 0,
        productos: [
            {
                name: "McMuffin™ de Salchicha y Huevo",
                precio: 133,
                imagen: "https://mcdonalds.com.hn/imagen/menu-products/1640645692_04_McMuffinSalchichayhuevo_1624549276.png",
                descripcion: "an muffin inglés cubierto de margarina suave, una rodaja de jamón, huevo y queso cheddar amarillo."
            },
            {
                name: "McMuffin™ de Tocino Doble y Huevo",
                precio: 143,
                imagen: "https://mcdonalds.com.hn/imagen/menu-products/1640645403_08_Tocino%20y%20huevo_1624549614.png",
                descripcion: "Pan muffin inglés tostado, con doble tocino, huevo y queso cheddar amarillo."
            }, {
                name: "Cajita Feliz™ de Hotcakes",
                precio: 140,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640716681_Hotcakes%20cajita.jpg",
                descripcion: "Cajita Feliz de desayuno. Deliciosos hotcakes doraditos con mantequilla suave y el dulce sabor de la miel de maple, acompañado de puré de manzana, yogurt de fresas, jugo de naranja o jugo de manzana, y un juguete de la promoción vigente."
            }, {
                name: "Cajita Feliz™ McMuffin™ Huevo y Queso",
                precio: 140,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640716149_McMuffin%20huevo%20y%20queso.jpg",
                descripcion: "Cajita Feliz de desayuno. Delicioso McMuffin en pan inglés de huevo y queso acompañado de puré de manzana y yogurt de fresa, jugo de naranja o jugo de manzana, un juguete de la promoción vigente."
            }, {
                name: "Cajita Feliz™ McMuffin™ Huevo y Frijol",
                precio: 140,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1641160278_huevo%20y%20frijol.jpg",
                descripcion: "Cajita Feliz de desayuno. Delicioso McMuffin, huevo y frijol acompañado de puré de manzana y yogurt de fresa, jugo de naranja o jugo de manzana, y un juguete de la promoción vigente."
            }, {
                name: "McMenú Familiar",
                precio: 407,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1641162647_4%20personas.jpg",
                descripcion: "Disfruta de este delicioso McMenú con tu familia en donde puedes elegir cuatro de las siguientes opciones: McMuffin Salchicha & Huevo, Egg McMuffin, McMuffin Salchicha, y Hotcakes. Incluye 4 bebidas hasbrown para tus McMuffins."
            }, {
                name: "Papas",
                precio: 59,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640817564_papas.jpg",
                descripcion: "Las papas más famosas del mundo elaboradas con papas de la más alta calidad, son papas fritas épicas, doradas y saladitas por fuera y esponjosas por dentro."
            }, {
                name: "Big Mac™",
                precio: 183,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640814235_4.Big%20mac.jpg",
                descripcion: "La perfección: dos deliciosas tortas de carne 100% de res y salsa Big Mac, entre un pan de semillas de sésamo. Se completa con pepinillos, lechuga rallada, cebolla finamente picada y queso americano para una hamburguesa con un sabor sin igual."
            }, {
                name: "Cuarto de Libra",
                precio: 187,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640814417_6.%20Cuarto%20de%20Libra.jpg",
                descripcion: "Hamburguesa de 1/4 de libra de carne 100% de res deliciosamente jugosa. Se sazona con una pizca de sal y pimienta, acompañada de cebolla, kétchup, mostaza, dos rebanadas de queso cheddar amarillo en un pan de semillas de sésamo."
            }, {
                name: "QuesoHamburguesa",
                precio: 55,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640814854_14.Quesoburguesa.jpg",
                descripcion: "Nuestra sencilla y clásica hamburguesa con queso cheddar amarillo, con una torta de carne 100% de res sazonada con una pizca de sal y pimienta, acompañada con un pepinillo, cebolla picada, kétchup y mostaza."
            }
        ]

    },
    {
        name: "McDonald's • Cascadas",
        imagen: '<img src="https://www.crearuncurriculum.com/wp-content/uploads/2021/11/McDonalds-1024x1001.png">',
        idCategoria: 0,
        productos: [
            {
                name: "McMuffin™ de Salchicha y Huevo",
                precio: 133,
                imagen: "https://mcdonalds.com.hn/imagen/menu-products/1640645692_04_McMuffinSalchichayhuevo_1624549276.png",
                descripcion: "an muffin inglés cubierto de margarina suave, una rodaja de jamón, huevo y queso cheddar amarillo."
            },
            {
                name: "McMuffin™ de Tocino Doble y Huevo",
                precio: 143,
                imagen: "https://mcdonalds.com.hn/imagen/menu-products/1640645403_08_Tocino%20y%20huevo_1624549614.png",
                descripcion: "Pan muffin inglés tostado, con doble tocino, huevo y queso cheddar amarillo."
            }, {
                name: "Cajita Feliz™ de Hotcakes",
                precio: 140,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640716681_Hotcakes%20cajita.jpg",
                descripcion: "Cajita Feliz de desayuno. Deliciosos hotcakes doraditos con mantequilla suave y el dulce sabor de la miel de maple, acompañado de puré de manzana, yogurt de fresas, jugo de naranja o jugo de manzana, y un juguete de la promoción vigente."
            }, {
                name: "Cajita Feliz™ McMuffin™ Huevo y Queso",
                precio: 140,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640716149_McMuffin%20huevo%20y%20queso.jpg",
                descripcion: "Cajita Feliz de desayuno. Delicioso McMuffin en pan inglés de huevo y queso acompañado de puré de manzana y yogurt de fresa, jugo de naranja o jugo de manzana, un juguete de la promoción vigente."
            }, {
                name: "Cajita Feliz™ McMuffin™ Huevo y Frijol",
                precio: 140,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1641160278_huevo%20y%20frijol.jpg",
                descripcion: "Cajita Feliz de desayuno. Delicioso McMuffin, huevo y frijol acompañado de puré de manzana y yogurt de fresa, jugo de naranja o jugo de manzana, y un juguete de la promoción vigente."
            }, {
                name: "McMenú Familiar",
                precio: 407,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1641162647_4%20personas.jpg",
                descripcion: "Disfruta de este delicioso McMenú con tu familia en donde puedes elegir cuatro de las siguientes opciones: McMuffin Salchicha & Huevo, Egg McMuffin, McMuffin Salchicha, y Hotcakes. Incluye 4 bebidas hasbrown para tus McMuffins."
            }, {
                name: "Papas",
                precio: 59,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640817564_papas.jpg",
                descripcion: "Las papas más famosas del mundo elaboradas con papas de la más alta calidad, son papas fritas épicas, doradas y saladitas por fuera y esponjosas por dentro."
            }, {
                name: "Big Mac™",
                precio: 183,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640814235_4.Big%20mac.jpg",
                descripcion: "La perfección: dos deliciosas tortas de carne 100% de res y salsa Big Mac, entre un pan de semillas de sésamo. Se completa con pepinillos, lechuga rallada, cebolla finamente picada y queso americano para una hamburguesa con un sabor sin igual."
            }, {
                name: "Cuarto de Libra",
                precio: 187,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640814417_6.%20Cuarto%20de%20Libra.jpg",
                descripcion: "Hamburguesa de 1/4 de libra de carne 100% de res deliciosamente jugosa. Se sazona con una pizca de sal y pimienta, acompañada de cebolla, kétchup, mostaza, dos rebanadas de queso cheddar amarillo en un pan de semillas de sésamo."
            }, {
                name: "QuesoHamburguesa",
                precio: 55,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640814854_14.Quesoburguesa.jpg",
                descripcion: "Nuestra sencilla y clásica hamburguesa con queso cheddar amarillo, con una torta de carne 100% de res sazonada con una pizca de sal y pimienta, acompañada con un pepinillo, cebolla picada, kétchup y mostaza."
            }
        ]

    },
    {
        name: "McDonald's • Suyapa",
        imagen: '<img src="https://www.crearuncurriculum.com/wp-content/uploads/2021/11/McDonalds-1024x1001.png">',
        idCategoria: 0,
        productos: [
            {
                name: "McMuffin™ de Salchicha y Huevo",
                precio: 133,
                imagen: "https://mcdonalds.com.hn/imagen/menu-products/1640645692_04_McMuffinSalchichayhuevo_1624549276.png",
                descripcion: "an muffin inglés cubierto de margarina suave, una rodaja de jamón, huevo y queso cheddar amarillo."
            },
            {
                name: "McMuffin™ de Tocino Doble y Huevo",
                precio: 143,
                imagen: "https://mcdonalds.com.hn/imagen/menu-products/1640645403_08_Tocino%20y%20huevo_1624549614.png",
                descripcion: "Pan muffin inglés tostado, con doble tocino, huevo y queso cheddar amarillo."
            }, {
                name: "Cajita Feliz™ de Hotcakes",
                precio: 140,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640716681_Hotcakes%20cajita.jpg",
                descripcion: "Cajita Feliz de desayuno. Deliciosos hotcakes doraditos con mantequilla suave y el dulce sabor de la miel de maple, acompañado de puré de manzana, yogurt de fresas, jugo de naranja o jugo de manzana, y un juguete de la promoción vigente."
            }, {
                name: "Cajita Feliz™ McMuffin™ Huevo y Queso",
                precio: 140,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640716149_McMuffin%20huevo%20y%20queso.jpg",
                descripcion: "Cajita Feliz de desayuno. Delicioso McMuffin en pan inglés de huevo y queso acompañado de puré de manzana y yogurt de fresa, jugo de naranja o jugo de manzana, un juguete de la promoción vigente."
            }, {
                name: "Cajita Feliz™ McMuffin™ Huevo y Frijol",
                precio: 140,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1641160278_huevo%20y%20frijol.jpg",
                descripcion: "Cajita Feliz de desayuno. Delicioso McMuffin, huevo y frijol acompañado de puré de manzana y yogurt de fresa, jugo de naranja o jugo de manzana, y un juguete de la promoción vigente."
            }, {
                name: "McMenú Familiar",
                precio: 407,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1641162647_4%20personas.jpg",
                descripcion: "Disfruta de este delicioso McMenú con tu familia en donde puedes elegir cuatro de las siguientes opciones: McMuffin Salchicha & Huevo, Egg McMuffin, McMuffin Salchicha, y Hotcakes. Incluye 4 bebidas hasbrown para tus McMuffins."
            }, {
                name: "Papas",
                precio: 59,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640817564_papas.jpg",
                descripcion: "Las papas más famosas del mundo elaboradas con papas de la más alta calidad, son papas fritas épicas, doradas y saladitas por fuera y esponjosas por dentro."
            }, {
                name: "Big Mac™",
                precio: 183,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640814235_4.Big%20mac.jpg",
                descripcion: "La perfección: dos deliciosas tortas de carne 100% de res y salsa Big Mac, entre un pan de semillas de sésamo. Se completa con pepinillos, lechuga rallada, cebolla finamente picada y queso americano para una hamburguesa con un sabor sin igual."
            }, {
                name: "Cuarto de Libra",
                precio: 187,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640814417_6.%20Cuarto%20de%20Libra.jpg",
                descripcion: "Hamburguesa de 1/4 de libra de carne 100% de res deliciosamente jugosa. Se sazona con una pizca de sal y pimienta, acompañada de cebolla, kétchup, mostaza, dos rebanadas de queso cheddar amarillo en un pan de semillas de sésamo."
            }, {
                name: "QuesoHamburguesa",
                precio: 55,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640814854_14.Quesoburguesa.jpg",
                descripcion: "Nuestra sencilla y clásica hamburguesa con queso cheddar amarillo, con una torta de carne 100% de res sazonada con una pizca de sal y pimienta, acompañada con un pepinillo, cebolla picada, kétchup y mostaza."
            }
        ]

    },
    {
        name: "Mcdonald's • Morazán",
        imagen: '<img src="https://www.crearuncurriculum.com/wp-content/uploads/2021/11/McDonalds-1024x1001.png">',
        idCategoria: 0,
        productos: [
            {
                name: "McMuffin™ de Salchicha y Huevo",
                precio: 133,
                imagen: "https://mcdonalds.com.hn/imagen/menu-products/1640645692_04_McMuffinSalchichayhuevo_1624549276.png",
                descripcion: "an muffin inglés cubierto de margarina suave, una rodaja de jamón, huevo y queso cheddar amarillo."
            },
            {
                name: "McMuffin™ de Tocino Doble y Huevo",
                precio: 143,
                imagen: "https://mcdonalds.com.hn/imagen/menu-products/1640645403_08_Tocino%20y%20huevo_1624549614.png",
                descripcion: "Pan muffin inglés tostado, con doble tocino, huevo y queso cheddar amarillo."
            }, {
                name: "Cajita Feliz™ de Hotcakes",
                precio: 140,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640716681_Hotcakes%20cajita.jpg",
                descripcion: "Cajita Feliz de desayuno. Deliciosos hotcakes doraditos con mantequilla suave y el dulce sabor de la miel de maple, acompañado de puré de manzana, yogurt de fresas, jugo de naranja o jugo de manzana, y un juguete de la promoción vigente."
            }, {
                name: "Cajita Feliz™ McMuffin™ Huevo y Queso",
                precio: 140,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640716149_McMuffin%20huevo%20y%20queso.jpg",
                descripcion: "Cajita Feliz de desayuno. Delicioso McMuffin en pan inglés de huevo y queso acompañado de puré de manzana y yogurt de fresa, jugo de naranja o jugo de manzana, un juguete de la promoción vigente."
            }, {
                name: "Cajita Feliz™ McMuffin™ Huevo y Frijol",
                precio: 140,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1641160278_huevo%20y%20frijol.jpg",
                descripcion: "Cajita Feliz de desayuno. Delicioso McMuffin, huevo y frijol acompañado de puré de manzana y yogurt de fresa, jugo de naranja o jugo de manzana, y un juguete de la promoción vigente."
            }, {
                name: "McMenú Familiar",
                precio: 407,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1641162647_4%20personas.jpg",
                descripcion: "Disfruta de este delicioso McMenú con tu familia en donde puedes elegir cuatro de las siguientes opciones: McMuffin Salchicha & Huevo, Egg McMuffin, McMuffin Salchicha, y Hotcakes. Incluye 4 bebidas hasbrown para tus McMuffins."
            }, {
                name: "Papas",
                precio: 59,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640817564_papas.jpg",
                descripcion: "Las papas más famosas del mundo elaboradas con papas de la más alta calidad, son papas fritas épicas, doradas y saladitas por fuera y esponjosas por dentro."
            }, {
                name: "Big Mac™",
                precio: 183,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640814235_4.Big%20mac.jpg",
                descripcion: "La perfección: dos deliciosas tortas de carne 100% de res y salsa Big Mac, entre un pan de semillas de sésamo. Se completa con pepinillos, lechuga rallada, cebolla finamente picada y queso americano para una hamburguesa con un sabor sin igual."
            }, {
                name: "Cuarto de Libra",
                precio: 187,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640814417_6.%20Cuarto%20de%20Libra.jpg",
                descripcion: "Hamburguesa de 1/4 de libra de carne 100% de res deliciosamente jugosa. Se sazona con una pizca de sal y pimienta, acompañada de cebolla, kétchup, mostaza, dos rebanadas de queso cheddar amarillo en un pan de semillas de sésamo."
            }, {
                name: "QuesoHamburguesa",
                precio: 55,
                imagen:"https://mcdonalds.com.hn/imagen/menu-products/1640814854_14.Quesoburguesa.jpg",
                descripcion: "Nuestra sencilla y clásica hamburguesa con queso cheddar amarillo, con una torta de carne 100% de res sazonada con una pizca de sal y pimienta, acompañada con un pepinillo, cebolla picada, kétchup y mostaza."
            }
        ]

    },
    {
        name: "tapachula • foodtruckers UNAH",
        imagen: ' <img src="https://images.deliveryhero.io/image/pedidosya/restaurants/tapachula-torre-ventu.jpg?quality=70&width=100&webp=1 "> ',
        idCategoria: 0,
        productos: [
            {
                name: "guacamole & chips",
                precio: 89,
                imagen: "https://www.pietran.com.co/wp-content/uploads/2022/07/nachos-con-guacamole.webp ",
                descripcion: "copa de 6 onzas de aguacate,cilantro,limon y chips para compartir"
            },
            {
                name: "papas preparadas & trocitos de res",
                precio: 149,
                imagen: " https://storage.googleapis.com/bella-calabria/5761076981399552-grande.png ",
                descripcion: "papas y res"
            }, {
                name: "tacos suaves(4unidades)",
                precio: 169,
                imagen: " https://sitios.endigital.com/img/upload/anitas-mexican-food-about.png ",
                descripcion: "doble tortilla,proteina pico de gallo,salsa de aguacate,cilantro y limon"
            }, {
                name: "tacos de birria (4unidades)",
                precio: 169,
                imagen: " https://frigideira.aiqfome.com/wp-content/uploads/2023/01/imagem.png ",
                descripcion: "doble tortilla,carne de res condimentada en caldo de birria quesillo derretido, limon,cilantro y media copa de birria con res"
            }, {
                name: "tacos de carnita asada (4unidades)",
                precio: 179,
                imagen: " https://www.choicehotels.com/cms/mx/images/choice-hotels/tacos-carne-asada/tacos-carne-asada.jpg ",
                descripcion: "doble tortilla ,carne asada,cebolla,cilantro,chile,aderezo,guacamole, y pico de gallo"
            }, {
                name: "crunchy tacos (4unidades)",
                precio: 169,
                imagen: " https://www.eatthis.com/wp-content/uploads/sites/4/2019/12/crispy-taco-beef-taco-johns.png ",
                descripcion: "crunchy tortilla,con la carne de tu eleccion,lechuga,tomate en trocitos,aderezo y cheddar rallado con chile"
            }

        ]

    },
    {
        name: "El Pinche Plaza ventu",
        imagen: ' <img src="https://images.deliveryhero.io/image/pedidosya/restaurants/tapachula-torre-ventu.jpg?quality=70&width=100&webp=1 "> ',
        idCategoria: 0,
        productos: [
            {
                name: "guacamole & chips",
                precio: 89,
                imagen: "https://www.pietran.com.co/wp-content/uploads/2022/07/nachos-con-guacamole.webp ",
                descripcion: "copa de 6 onzas de aguacate,cilantro,limon y chips para compartir"
            },
            {
                name: "papas preparadas & trocitos de res",
                precio: 149,
                imagen: " https://storage.googleapis.com/bella-calabria/5761076981399552-grande.png ",
                descripcion: "papas y res"
            }, {
                name: "tacos suaves(4unidades)",
                precio: 169,
                imagen: " https://sitios.endigital.com/img/upload/anitas-mexican-food-about.png ",
                descripcion: "doble tortilla,proteina pico de gallo,salsa de aguacate,cilantro y limon"
            }, {
                name: "tacos de birria (4unidades)",
                precio: 169,
                imagen: " https://frigideira.aiqfome.com/wp-content/uploads/2023/01/imagem.png ",
                descripcion: "doble tortilla,carne de res condimentada en caldo de birria quesillo derretido, limon,cilantro y media copa de birria con res"
            }, {
                name: "tacos de carnita asada (4unidades)",
                precio: 179,
                imagen: " https://www.choicehotels.com/cms/mx/images/choice-hotels/tacos-carne-asada/tacos-carne-asada.jpg ",
                descripcion: "doble tortilla ,carne asada,cebolla,cilantro,chile,aderezo,guacamole, y pico de gallo"
            }, {
                name: "crunchy tacos (4unidades)",
                precio: 169,
                imagen: " https://www.eatthis.com/wp-content/uploads/sites/4/2019/12/crispy-taco-beef-taco-johns.png ",
                descripcion: "crunchy tortilla,con la carne de tu eleccion,lechuga,tomate en trocitos,aderezo y cheddar rallado con chile"
            }
        ]

    },
    {
        name: "Little Caesars • Santa Mónica",
        imagen:' <img src=" https://images.deliveryhero.io/image/pedidosya/restaurants/littlecaesars-marzo-logo.jpg?quality=70&width=100&webp=1"> ', 
        idCategoria: 0,
        productos: [
            {
                name: "clasica con queso",
                precio: 129,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/Pizza-Queso-50_1611545034860.png",
                descripcion: "Pizza gigante Hot Ready con una mezcla de quesos Mozarella y Muenster."
            },
            {
                name: "clasica pepperoni",
                precio: 129,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/Pizza-Pepperoni-de_1611544979362.png",
                descripcion: "La original pizza gigante Hot - and – Ready recién salida del horno, acompañada de abundante pepperoni y una mezcla de queso mozarella y muenster."
            }, {
                name: "paquete fiesta",
                precio: 359,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/PaqueteFiesta-12_1611544868543-4a_1611586322412.png",
                descripcion: "¡Cada fiesta tiene un anfitrión! Serás el mejor al elegir este paquete con la mejor pizza, al mejor precio. Incluye: - 2 Pizzas Gigantes de un ingrediente. - 1 Crazy Bread o Canelitas ( 8 unidades ). - 1 Refresco 2L"
            }, {
                name: "paquete full",
                precio: 569,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/Paquete_Full_Armado_2ac08bb.jpg",
                descripcion: "¡Un paquete para compartir con todos! Incluye: - 1 Pizza Clásica de Pepperoni - 1 Pizza Ultimate Deluxe - 1 Crazy Cheese Bread - 6 Caesar Wings - 1 Salsa Ranch"
            }, {
                name: "super cheese cheddar",
                precio: 329,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/Super-Cheese-Queso-6c_1611545058159.png",
                descripcion: "Con el nuevo paquete 4N1 Super Cheesy Cheddar disfruta de 4 especialidades con una base de queso cheddar, Todo en una sola pizza con orilla de queso; acompañada de los deliciosos Crazy Puff"
            }, {
                name: "crazy puff",
                precio: 75,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/Imagen1_10f100d1.png",
                descripcion: "4 piezas de pan rellenas de jamón y piña con salsa de pizza, cubiertos de mantequilla de ajo y especias italiana"
            }, {
                name: "4N1 cheesy cheddar",
                precio: 235,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/4n1_Cheesy_cheddar_BN_1a2f6e3.png",
                descripcion: "Llevamos la experiencia Pizza! Pizza! a otro nivel con la nueva 4n1 Cheesy Cheddar; disfruta de 4 sensaciones en una sola pizza con base de queso cheddar. ¡Es para todos, pero no querrás compartir!"
            }, {
                name: "super cheese pepperoni",
                precio: 199,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/Super-Cheese-Pepperoni-db_1611545081676.png",
                descripcion: "Deliciosa pizza gigante de pepperoni, con mezcla de queso mozzarella y muenster. Tiene un borde relleno de queso, cubierto con mantequilla de ajo y queso parmesano."
            },
        ]

    },
    {
        name: "Little Caesars • Las Torres",
        imagen: '<img src=" https://images.deliveryhero.io/image/pedidosya/restaurants/littlecaesars-marzo-logo.jpg?quality=70&width=100&webp=1"> ', 
        idCategoria: 0,
        productos: [
            {
                name: "clasica con queso",
                precio: 129,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/Pizza-Queso-50_1611545034860.png",
                descripcion: "Pizza gigante Hot Ready con una mezcla de quesos Mozarella y Muenster."
            },
            {
                name: "clasica pepperoni",
                precio: 129,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/Pizza-Pepperoni-de_1611544979362.png",
                descripcion: "La original pizza gigante Hot - and – Ready recién salida del horno, acompañada de abundante pepperoni y una mezcla de queso mozarella y muenster."
            }, {
                name: "paquete fiesta",
                precio: 359,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/PaqueteFiesta-12_1611544868543-4a_1611586322412.png",
                descripcion: "¡Cada fiesta tiene un anfitrión! Serás el mejor al elegir este paquete con la mejor pizza, al mejor precio. Incluye: - 2 Pizzas Gigantes de un ingrediente. - 1 Crazy Bread o Canelitas ( 8 unidades ). - 1 Refresco 2L"
            }, {
                name: "paquete full",
                precio: 569,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/Paquete_Full_Armado_2ac08bb.jpg",
                descripcion: "¡Un paquete para compartir con todos! Incluye: - 1 Pizza Clásica de Pepperoni - 1 Pizza Ultimate Deluxe - 1 Crazy Cheese Bread - 6 Caesar Wings - 1 Salsa Ranch"
            }, {
                name: "super cheese cheddar",
                precio: 329,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/Super-Cheese-Queso-6c_1611545058159.png",
                descripcion: "Con el nuevo paquete 4N1 Super Cheesy Cheddar disfruta de 4 especialidades con una base de queso cheddar, Todo en una sola pizza con orilla de queso; acompañada de los deliciosos Crazy Puff"
            }, {
                name: "crazy puff",
                precio: 75,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/Imagen1_10f100d1.png",
                descripcion: "4 piezas de pan rellenas de jamón y piña con salsa de pizza, cubiertos de mantequilla de ajo y especias italiana"
            }, {
                name: "4N1 cheesy cheddar",
                precio: 235,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/4n1_Cheesy_cheddar_BN_1a2f6e3.png",
                descripcion: "Llevamos la experiencia Pizza! Pizza! a otro nivel con la nueva 4n1 Cheesy Cheddar; disfruta de 4 sensaciones en una sola pizza con base de queso cheddar. ¡Es para todos, pero no querrás compartir!"
            }, {
                name: "super cheese pepperoni",
                precio: 199,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/Super-Cheese-Pepperoni-db_1611545081676.png",
                descripcion: "Deliciosa pizza gigante de pepperoni, con mezcla de queso mozzarella y muenster. Tiene un borde relleno de queso, cubierto con mantequilla de ajo y queso parmesano."
            },
        ]

    },
    {
        name: "Little Caesars • Cascadas Mall",
        imagen: '<img src=" https://images.deliveryhero.io/image/pedidosya/restaurants/littlecaesars-marzo-logo.jpg?quality=70&width=100&webp=1"> ',
        idCategoria: 0,
        productos: [
            {
                name: "clasica con queso",
                precio: 129,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/Pizza-Queso-50_1611545034860.png",
                descripcion: "Pizza gigante Hot Ready con una mezcla de quesos Mozarella y Muenster."
            },
            {
                name: "clasica pepperoni",
                precio: 129,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/Pizza-Pepperoni-de_1611544979362.png",
                descripcion: "La original pizza gigante Hot - and – Ready recién salida del horno, acompañada de abundante pepperoni y una mezcla de queso mozarella y muenster."
            }, {
                name: "paquete fiesta",
                precio: 359,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/PaqueteFiesta-12_1611544868543-4a_1611586322412.png",
                descripcion: "¡Cada fiesta tiene un anfitrión! Serás el mejor al elegir este paquete con la mejor pizza, al mejor precio. Incluye: - 2 Pizzas Gigantes de un ingrediente. - 1 Crazy Bread o Canelitas ( 8 unidades ). - 1 Refresco 2L"
            }, {
                name: "paquete full",
                precio: 569,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/Paquete_Full_Armado_2ac08bb.jpg",
                descripcion: "¡Un paquete para compartir con todos! Incluye: - 1 Pizza Clásica de Pepperoni - 1 Pizza Ultimate Deluxe - 1 Crazy Cheese Bread - 6 Caesar Wings - 1 Salsa Ranch"
            }, {
                name: "super cheese cheddar",
                precio: 329,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/Super-Cheese-Queso-6c_1611545058159.png",
                descripcion: "Con el nuevo paquete 4N1 Super Cheesy Cheddar disfruta de 4 especialidades con una base de queso cheddar, Todo en una sola pizza con orilla de queso; acompañada de los deliciosos Crazy Puff"
            }, {
                name: "crazy puff",
                precio: 75,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/Imagen1_10f100d1.png",
                descripcion: "4 piezas de pan rellenas de jamón y piña con salsa de pizza, cubiertos de mantequilla de ajo y especias italiana"
            }, {
                name: "4N1 cheesy cheddar",
                precio: 235,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/4n1_Cheesy_cheddar_BN_1a2f6e3.png",
                descripcion: "Llevamos la experiencia Pizza! Pizza! a otro nivel con la nueva 4n1 Cheesy Cheddar; disfruta de 4 sensaciones en una sola pizza con base de queso cheddar. ¡Es para todos, pero no querrás compartir!"
            }, {
                name: "super cheese pepperoni",
                precio: 199,
                imagen :"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/Super-Cheese-Pepperoni-db_1611545081676.png",
                descripcion: "Deliciosa pizza gigante de pepperoni, con mezcla de queso mozzarella y muenster. Tiene un borde relleno de queso, cubierto con mantequilla de ajo y queso parmesano."
            },
        ]

    },

    {
        name: "espresso americano",
        imagen: "https://static.amerpages.com/102/102_21056.jpg",
        idCategoria: 1,
        productos: [
            {
                name: "latte helado",
                precio: 79,
                imagen:"https://scontent.ftgu3-3.fna.fbcdn.net/v/t39.30808-6/293365435_5494407713905158_4977981546657945305_n.png?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=GHVrHEgpkUoAX9aoUkn&_nc_oc=AQkhWuayOOjo5v03lW5gxRd9G13jjbNa7h3PgQ5tGe4hIE_U7qvs9duoiirudZiQWqgAI4J_rqdt-vyDzxiWJKgT&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfD_ktlaqOu6eKmij8ZMQgUWZDA_MtloXDGdDioFmAR6_Q&oe=6444DC77",
                descripcion: "latte helado con caramelo"
            },
            {
                name: "cookies and cream",
                precio: 69,
                imagen:"https://scontent.ftgu3-3.fna.fbcdn.net/v/t39.30808-6/294195137_5507347975944465_7188539021924889917_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=H78c-w_Q8yAAX9Bv99h&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfCmQP8qYrk5hhPC4niGq7tjzCUVHVIFPLAswKU16W_lag&oe=64446649",
                descripcion: "galleta oreo"
            }, {
                name: "pistacho",
                precio: 55,
                imagen:"https://scontent.ftgu3-4.fna.fbcdn.net/v/t39.30808-6/296918067_5552466724765923_8852306348632408586_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=yJUyY7rKOPsAX-oJIl7&_nc_ht=scontent.ftgu3-4.fna&oh=00_AfCeYRzkSDZve5FlpayJLyR-K1eHnpNLis_nsV3bPhrtmA&oe=6443F369",
                descripcion: ""
            },
            {
                name: "granita",
                precio: 59,
                imagen:"https://static.wixstatic.com/media/b29547_c3bc66468cf84a91a6f66ac6cd054cd3~mv2.png/v1/crop/x_0,y_6,w_521,h_509/fill/w_300,h_294,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Portadas%20Lista%20Redime%20Coffee%20Points_4_%20Cover%20Circular%20450%20CP.png",
                descripcion: "con crema arriba"
            }, {
                name: "frapuchata",
                precio: 69,
                imagen:"data:image/jpeg;base64,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",
                descripcion: ""
            },
            {
                name: "bandera",
                precio: 60,
                imagen:"data:image/jpeg;base64,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",
                descripcion: "con leche condensada"
            }, ]

    }, {
        name: "espresso americano-UNAH",
        imagen: "https://static.amerpages.com/102/102_21056.jpg",
        idCategoria: 1,
        productos: [
            {
                name: "latte helado",
                precio: 79,
                imagen:"https://scontent.ftgu3-3.fna.fbcdn.net/v/t39.30808-6/293365435_5494407713905158_4977981546657945305_n.png?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=GHVrHEgpkUoAX9aoUkn&_nc_oc=AQkhWuayOOjo5v03lW5gxRd9G13jjbNa7h3PgQ5tGe4hIE_U7qvs9duoiirudZiQWqgAI4J_rqdt-vyDzxiWJKgT&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfD_ktlaqOu6eKmij8ZMQgUWZDA_MtloXDGdDioFmAR6_Q&oe=6444DC77",
                descripcion: "latte helado con caramelo"
            },
            {
                name: "cookies and cream",
                precio: 69,
                imagen:"https://scontent.ftgu3-3.fna.fbcdn.net/v/t39.30808-6/294195137_5507347975944465_7188539021924889917_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=H78c-w_Q8yAAX9Bv99h&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfCmQP8qYrk5hhPC4niGq7tjzCUVHVIFPLAswKU16W_lag&oe=64446649",
                descripcion: "galleta oreo"
            }, {
                name: "pistacho",
                precio: 55,
                imagen:"https://scontent.ftgu3-4.fna.fbcdn.net/v/t39.30808-6/296918067_5552466724765923_8852306348632408586_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=yJUyY7rKOPsAX-oJIl7&_nc_ht=scontent.ftgu3-4.fna&oh=00_AfCeYRzkSDZve5FlpayJLyR-K1eHnpNLis_nsV3bPhrtmA&oe=6443F369",
                descripcion: ""
            },
            {
                name: "granita",
                precio: 59,
                imagen:"https://static.wixstatic.com/media/b29547_c3bc66468cf84a91a6f66ac6cd054cd3~mv2.png/v1/crop/x_0,y_6,w_521,h_509/fill/w_300,h_294,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Portadas%20Lista%20Redime%20Coffee%20Points_4_%20Cover%20Circular%20450%20CP.png",
                descripcion: "con crema arriba"
            }, {
                name: "frapuchata",
                precio: 69,
                imagen:"data:image/jpeg;base64,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",
                descripcion: ""
            },
            {
                name: "bandera",
                precio: 60,
                imagen:"data:image/jpeg;base64,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",
                descripcion: "con leche condensada"
            },
        ]

    }, {
        name: "espresso americano-Aereopuerto ",
        imagen: "https://static.amerpages.com/102/102_21056.jpg",
        idCategoria: 1,
        productos: [
            {
                name: "latte helado",
                precio: 79,
                imagen:"https://scontent.ftgu3-3.fna.fbcdn.net/v/t39.30808-6/293365435_5494407713905158_4977981546657945305_n.png?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=GHVrHEgpkUoAX9aoUkn&_nc_oc=AQkhWuayOOjo5v03lW5gxRd9G13jjbNa7h3PgQ5tGe4hIE_U7qvs9duoiirudZiQWqgAI4J_rqdt-vyDzxiWJKgT&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfD_ktlaqOu6eKmij8ZMQgUWZDA_MtloXDGdDioFmAR6_Q&oe=6444DC77",
                descripcion: "latte helado con caramelo"
            },
            {
                name: "cookies and cream",
                precio: 69,
                imagen:"https://scontent.ftgu3-3.fna.fbcdn.net/v/t39.30808-6/294195137_5507347975944465_7188539021924889917_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=H78c-w_Q8yAAX9Bv99h&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfCmQP8qYrk5hhPC4niGq7tjzCUVHVIFPLAswKU16W_lag&oe=64446649",
                descripcion: "galleta oreo"
            }, {
                name: "pistacho",
                precio: 55,
                imagen:"https://scontent.ftgu3-4.fna.fbcdn.net/v/t39.30808-6/296918067_5552466724765923_8852306348632408586_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=yJUyY7rKOPsAX-oJIl7&_nc_ht=scontent.ftgu3-4.fna&oh=00_AfCeYRzkSDZve5FlpayJLyR-K1eHnpNLis_nsV3bPhrtmA&oe=6443F369",
                descripcion: ""
            },
            {
                name: "granita",
                precio: 59,
                imagen:"https://static.wixstatic.com/media/b29547_c3bc66468cf84a91a6f66ac6cd054cd3~mv2.png/v1/crop/x_0,y_6,w_521,h_509/fill/w_300,h_294,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Portadas%20Lista%20Redime%20Coffee%20Points_4_%20Cover%20Circular%20450%20CP.png",
                descripcion: "con crema arriba"
            }, {
                name: "frapuchata",
                precio: 69,
                imagen:"data:image/jpeg;base64,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",
                descripcion: ""
            },
            {
                name: "bandera",
                precio: 60,
                imagen:"data:image/jpeg;base64,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",
                descripcion: "con leche condensada"
            },
        ]


    }, {
        name: "liqour store",
        imagen: "https://cdn3.vectorstock.com/i/1000x1000/19/92/liquor-store-logo-bottle-whiskey-rum-or-brandy-vector-35011992.jpg",
        idCategoria: 1,
        productos: [
            {
                name: "salvavida",
                precio: 30,
                imagen:"https://latasdecerveja.com.br/wp-content/uploads/2019/05/HON002.png",
                descripcion: ""
            },
            {
                name: "barena",
                precio: 35,
                imagen:"https://cmarkethn.com/44-large_default/cerveza-salva-vida-lata-12-onzas.jpg",
                descripcion: ""
            }, {
                name: "imperial",
                precio: 30,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/169264/Cerveza-Imperial-Lata-355Ml-1-4751.jpg?v=637662807981670000",
                descripcion: ""
            },
            {
                name: "miller draft",
                precio: 45,
                imagen:"https://descorcha.com/268935-large_default/miller-genuine-draft-caja-24-latas-355-cc.jpg",
                descripcion: "",
            }, {
                name: "ron",
                precio: 175,
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROThw3muVHeAREXgGlSG5N2OeRggD8ElTuUw&usqp=CAU",
                descripcion: "",
            },
            {
                name: "whisky",
                precio: 1100,
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_Jrjj4UBBa9Ftdrceemxp4ekQMkNdrL0CXh1V93blLFWgB-U3MofzlP5v6NJ2-nlA68&usqp=CAU"
            }, {
                name: "tequila",
                precio: 700,
                descripcion: "https://cdn.shopify.com/s/files/1/1945/4011/products/jose-cuervo-especial-gold-tequila.png?v=1633078390",
                descripcion: "",
            },
            {
                name: "agua ardiente",
                precio: 100,
                descripcion: "https://walmarthn.vtexassets.com/arquivos/ids/173616/Yuscaran-El-Original-1000Ml-1-9247.jpg?v=637667560112830000",
                descripcion: "",
            },

        ]

    }, {
        name: "liquor store",
        imagen: "https://cdn3.vectorstock.com/i/1000x1000/19/92/liquor-store-logo-bottle-whiskey-rum-or-brandy-vector-35011992.jpg",
        idCategoria: 1,
        productos: [
            {
                name: "salvavida",
                precio: 30,
                imagen:"https://latasdecerveja.com.br/wp-content/uploads/2019/05/HON002.png",
                descripcion: "",
            },
            {
                name: "barena",
                precio: 35,
                imagen:"https://cmarkethn.com/44-large_default/cerveza-salva-vida-lata-12-onzas.jpg",
                descripcion: "",
            }, {
                name: "imperial",
                precio: 30,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/169264/Cerveza-Imperial-Lata-355Ml-1-4751.jpg?v=637662807981670000",
                descripcion: "",
            },
            {
                name: "miller draft",
                precio: 45,
                imagen:"https://descorcha.com/268935-large_default/miller-genuine-draft-caja-24-latas-355-cc.jpg",
                descripcion: "",
            }, {
                name: "ron",
                precio: 175,
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROThw3muVHeAREXgGlSG5N2OeRggD8ElTuUw&usqp=CAU",
                descripcion: "",
            },
            {
                name: "whisky",
                precio: 1100,
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_Jrjj4UBBa9Ftdrceemxp4ekQMkNdrL0CXh1V93blLFWgB-U3MofzlP5v6NJ2-nlA68&usqp=CAU",
                descripcion: "",
            }, {
                name: "tequila",
                precio: 700,
                imagen: "https://cdn.shopify.com/s/files/1/1945/4011/products/jose-cuervo-especial-gold-tequila.png?v=1633078390",
                descripcion: "",
            },
            {
                name: "agua ardiente",
                precio: 100,
                imagen: "https://walmarthn.vtexassets.com/arquivos/ids/173616/Yuscaran-El-Original-1000Ml-1-9247.jpg?v=637667560112830000",
                descripcion: "",
            },
        ]
    },

     {
        name: "walmart cascadas",
        imagen: "https://walmarthn.vtexassets.com/assets/vtex/assets-builder/walmarthn.store-theme/1.0.272/waltmart-logo___a095e1f47875aea1c10fcc867f8ac7ac.png",
        idCategoria: 2,
        productos: [
            {
                name: "Azucar Blanca",
                precio: 43.40,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/169961-500-auto?v=1768704531&width=500&height=auto&aspect=true",
                descripcion: "Marca Dona Matilde - 1800gr"
            },
            {
                name: "Pasta",
                precio: 9.70,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/240818-500-auto?v=1768704528&width=500&height=auto&aspect=true",
                descripcion: "Tipo Spaghetti Marca Bruni - 200gr"
            }, {
                name: "Frijol",
                precio: 95.70,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/189143-500-auto?v=1768704737&width=500&height=auto&aspect=true",
                descripcion: "Grano Rojo Marca Sabemas En Bolsa - 1400gr"
            },
            {
                name: "Gaseosa",
                precio: 42.20,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/280880-500-auto?v=1768705411&width=500&height=auto&aspect=true",
                descripcion: "Marca Coca Cola En Envase Tipo Pet - 2000 Ml"
            }, {
                name: "Jugo",
                precio: 62,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/165704-500-auto?v=1768704528&width=500&height=auto&aspect=true",
                descripcion: "Sula De Naranja Premium Sin Pulpa- 1890 Ml"
            },
            {
                name: "Medallon",
                precio: 65.50,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/249488-800-450?v=637970712994870000&width=800&height=450&aspect=true",
                descripcion: "Empanizado Junior Pollo Rey - 324gr"
            }, {
                name: "Cajilla De Huevos",
                precio: 139.50,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/233218-500-auto?v=1768704555&width=500&height=auto&aspect=true",
                descripcion: "Blancos Marca Don Cristobal Tamaño Grande - 30 unidades"
            }, {
                name: "Leche",
                precio: 100,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/172005-500-auto?v=1768705411&width=500&height=auto&aspect=true",
                descripcion: " Alimento Complementario 1lt "
            },
            {
                name: "Leche",
                precio: 38,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/169764-500-auto?v=1768704529&width=500&height=auto&aspect=true",
                descripcion: "Leche Entera Sula Uht Enriquecida y Fortificada - 0.946ml"
            }, {
                name: "Jamón",
                precio: 79,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/287268-500-auto?v=1768704532&width=500&height=auto&aspect=true",
                descripcion: "JamónDe Pavo Fud 250 Gr"
            },
            {
                name: "Tocino",
                precio: 65,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/249456-500-auto?v=1768704546&width=500&height=auto&aspect=true",
                descripcion: "Tocino Chimex Ahumado De Cerdo - 170gr"
            }, {
                name: "Papa",
                precio: 22,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/277662-500-auto?v=1768704534&width=500&height=auto&aspect=true",
                descripcion: "Papa Clasificada Libra - 2 Unidades Por Lb."
            }, {
                name: "Banano",
                precio: 7.70,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/171659-500-auto?v=1768704534&width=500&height=auto&aspect=true",
                descripcion: "Banano Dátil Del Fresco Libra - 4 Unidades Por Lb. Aproximadamente"
            },
            {
                name: "Pechuga",
                precio: 78,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/241423-500-auto?v=1768704596&width=500&height=auto&aspect=true",
                descripcion: "Pechuga Deshuesada Marca Don Cristobal Fresco Grane"
            }, {
                name: "Costilla Cerdo ",
                precio: 84.85,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/207880-500-auto?v=1768675804&width=500&height=auto&aspect=true",
                descripcion: "Costilla Cerdo Premium Progcarne Fresco Granel - 1Lb"
            },
            {
                name: "Papel Higienico",
                precio: 147,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/288075-500-auto?v=1768704595&width=500&height=auto&aspect=true",
                descripcion: "apel Higienico Marca Rosal Plus Doble Hoja 12 Rollos XG"
            },

        ]

    }, {
        name: "walmart anillo periferico",
        imagen: "https://walmarthn.vtexassets.com/assets/vtex/assets-builder/walmarthn.store-theme/1.0.272/waltmart-logo___a095e1f47875aea1c10fcc867f8ac7ac.png",
        idCategoria: 2,
        productos: [
            {
                name: "Azucar Blanca",
                precio: 43.40,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/169961-500-auto?v=1768704531&width=500&height=auto&aspect=true",
                descripcion: "Marca Dona Matilde - 1800gr"
            },
            {
                name: "Pasta",
                precio: 9.70,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/240818-500-auto?v=1768704528&width=500&height=auto&aspect=true",
                descripcion: "Tipo Spaghetti Marca Bruni - 200gr"
            }, {
                name: "Frijol",
                precio: 95.70,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/189143-500-auto?v=1768704737&width=500&height=auto&aspect=true",
                descripcion: "Grano Rojo Marca Sabemas En Bolsa - 1400gr"
            },
            {
                name: "Gaseosa",
                precio: 42.20,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/280880-500-auto?v=1768705411&width=500&height=auto&aspect=true",
                descripcion: "Marca Coca Cola En Envase Tipo Pet - 2000 Ml"
            }, {
                name: "Jugo",
                precio: 62,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/165704-500-auto?v=1768704528&width=500&height=auto&aspect=true",
                descripcion: "Sula De Naranja Premium Sin Pulpa- 1890 Ml"
            },
            {
                name: "Medallon",
                precio: 65.50,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/249488-800-450?v=637970712994870000&width=800&height=450&aspect=true",
                descripcion: "Empanizado Junior Pollo Rey - 324gr"
            }, {
                name: "Cajilla De Huevos",
                precio: 139.50,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/233218-500-auto?v=1768704555&width=500&height=auto&aspect=true",
                descripcion: "Blancos Marca Don Cristobal Tamaño Grande - 30 unidades"
            }, {
                name: "Leche",
                precio: 100,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/172005-500-auto?v=1768705411&width=500&height=auto&aspect=true",
                descripcion: " Alimento Complementario 1lt "
            },
            {
                name: "Leche",
                precio: 38,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/169764-500-auto?v=1768704529&width=500&height=auto&aspect=true",
                descripcion: "Leche Entera Sula Uht Enriquecida y Fortificada - 0.946ml"
            }, {
                name: "Jamón",
                precio: 79,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/287268-500-auto?v=1768704532&width=500&height=auto&aspect=true",
                descripcion: "JamónDe Pavo Fud 250 Gr"
            },
            {
                name: "Tocino",
                precio: 65,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/249456-500-auto?v=1768704546&width=500&height=auto&aspect=true",
                descripcion: "Tocino Chimex Ahumado De Cerdo - 170gr"
            }, {
                name: "Papa",
                precio: 22,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/277662-500-auto?v=1768704534&width=500&height=auto&aspect=true",
                descripcion: "Papa Clasificada Libra - 2 Unidades Por Lb."
            }, {
                name: "Banano",
                precio: 7.70,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/171659-500-auto?v=1768704534&width=500&height=auto&aspect=true",
                descripcion: "Banano Dátil Del Fresco Libra - 4 Unidades Por Lb. Aproximadamente"
            },
            {
                name: "Pechuga",
                precio: 78,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/241423-500-auto?v=1768704596&width=500&height=auto&aspect=true",
                descripcion: "Pechuga Deshuesada Marca Don Cristobal Fresco Grane"
            }, {
                name: "Costilla Cerdo ",
                precio: 84.85,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/207880-500-auto?v=1768675804&width=500&height=auto&aspect=true",
                descripcion: "Costilla Cerdo Premium Progcarne Fresco Granel - 1Lb"
            },
            {
                name: "Papel Higienico",
                precio: 147,
                imagen:"https://walmarthn.vtexassets.com/arquivos/ids/288075-500-auto?v=1768704595&width=500&height=auto&aspect=true",
                descripcion: "apel Higienico Marca Rosal Plus Doble Hoja 12 Rollos XG"
            },
        ]

    }, {
        name: "pricesmart anillo periferico",
        imagen: "https://dvua5zg7hg5vt.cloudfront.net/site/binaries/content/gallery/pricesmartwebapp/rebranding-2021-memberships/pricesmart-id.svg",
        idCategoria: 2,
        productos: [
            {
                name: "Eggo Waffles",
                precio: 314.95,
                imagen:"https://d1cft8rz0k7w99.cloudfront.net/n/2/8/e/e/28ee048acb8a3d7240bf4fd500eaaabd88e61a27_FrozenFood_317731_01.jpg",
                descripcion: "40 Unidades / 35 g / 1.2 oz"
            },
            {
                name: "Aceite de Oliva Extra Virgen ",
                precio: 419.95,
                imagen:"https://d1cft8rz0k7w99.cloudfront.net/n/b/0/c/c/b0ccd871b187f9fe91e90cbdfb86b5ad72a7a8aa_Oils_388043_01.jpg",
                descripcion: "Member's Selection Aceite de Oliva Extra Virgen Extraído en Frío 2 L"
            }, {
                name: "Atún en Agua",
                precio: 249.95,
                imagen:"https://d1cft8rz0k7w99.cloudfront.net/n/e/3/6/9/e3691860ae6543d718f538acc3793e88d993d1cd_CannedSeafood_320840_01.jpg",
                descripcion: "Member's Selection Atún en Agua 6 Unidades / 170 g"
            },
            {
                name: "Pringles",
                precio: 659.95,
                imagen:"https://d1cft8rz0k7w99.cloudfront.net/n/b/6/9/2/b692d2acffe85e4cbbeb4828695e537ce8320674_Snacks_505090_01.jpg",
                descripcion: "Pringles Paquete Surtido 48 Unidades / 20 g"
            }, {
                name: "Kirkland Signature",
                precio: 879.95,
                imagen:"https://d1cft8rz0k7w99.cloudfront.net/n/f/7/9/7/f797fb847fbb2e1e0d69c21c0fdcfc0b7dfc88a1_ACatFood_195622_01.jpg",
                descripcion: "Kirkland Signature Alimento Completo para Gato Pollo y Arroz / 11.34 Kg"
            },
            {
                name: "Purina Dog Chow",
                precio: 1799.95,
                imagen:"https://d1cft8rz0k7w99.cloudfront.net/n/b/2/8/a/b28a0ebc423ea62acd20015b9600b5957625755d_DdogFood_398389_01.jpg",
                descripcion: "Purina Dog Chow Adulto Raza Grande 55 lb / 25 kg"
            }, {
                name: "Suavitel",
                precio: 529.95,
                imagen:"https://d1cft8rz0k7w99.cloudfront.net/n/3/e/3/b/3e3b07f1624ff679273ec13472f608818fab48c4_LaundrySupplie_285634_01.jpg",
                descripcion: "Suavitel Complete Suavizante Todo en Uno con Aroma a Fresca Primavera 8.5 L"
            },
            {
                name: "OxiClean",
                precio: 474.95,
                imagen:"https://d1cft8rz0k7w99.cloudfront.net/n/b/e/c/d/becdbdb774628eb6a00ecca54a7ef92d3376c260_LaundrySupplies_427612_01.jpg",
                descripcion: "OxiClean Removedor de Manchas 4.98 kg / 235 lavadas"
            }, {
                name: "Axion ",
                precio: 184.95,
                imagen:"https://d1cft8rz0k7w99.cloudfront.net/n/a/c/c/0/acc0a639b01a2718ef428fb8ddcad6691d7e86cf_DishDetergents_319109_01.jpg",
                descripcion: "Axion Lavaplatos en Crema Aloe 6 Unidades / 425 g"
            },
            {
                name: "Scotch-Brite",
                precio: 157.95,
                imagen:"https://d1cft8rz0k7w99.cloudfront.net/n/b/5/c/6/b5c68c52941e0f21f42e4f2f481f6ab42744219b_84229_01.jpg",
                descripcion: "Scotch-Brite Fibra Verde Limpieza Pesada 12 Unidades"
            },
        ]

    }, {
        name: "pricesmart mall multiplaza",
        imagen: "https://dvua5zg7hg5vt.cloudfront.net/site/binaries/content/gallery/pricesmartwebapp/rebranding-2021-memberships/pricesmart-id.svg",
        idCategoria: 2,
        productos: [
            {
                name: "Eggo Waffles",
                precio: 314.95,
                imagen:"https://d1cft8rz0k7w99.cloudfront.net/n/2/8/e/e/28ee048acb8a3d7240bf4fd500eaaabd88e61a27_FrozenFood_317731_01.jpg",
                descripcion: "40 Unidades / 35 g / 1.2 oz"
            },
            {
                name: "Aceite de Oliva Extra Virgen ",
                precio: 419.95,
                imagen:"https://d1cft8rz0k7w99.cloudfront.net/n/b/0/c/c/b0ccd871b187f9fe91e90cbdfb86b5ad72a7a8aa_Oils_388043_01.jpg",
                descripcion: "Member's Selection Aceite de Oliva Extra Virgen Extraído en Frío 2 L"
            }, {
                name: "Atún en Agua",
                precio: 249.95,
                imagen:"https://d1cft8rz0k7w99.cloudfront.net/n/e/3/6/9/e3691860ae6543d718f538acc3793e88d993d1cd_CannedSeafood_320840_01.jpg",
                descripcion: "Member's Selection Atún en Agua 6 Unidades / 170 g"
            },
            {
                name: "Pringles",
                precio: 659.95,
                imagen:"https://d1cft8rz0k7w99.cloudfront.net/n/b/6/9/2/b692d2acffe85e4cbbeb4828695e537ce8320674_Snacks_505090_01.jpg",
                descripcion: "Pringles Paquete Surtido 48 Unidades / 20 g"
            }, {
                name: "Kirkland Signature",
                precio: 879.95,
                imagen:"https://d1cft8rz0k7w99.cloudfront.net/n/f/7/9/7/f797fb847fbb2e1e0d69c21c0fdcfc0b7dfc88a1_ACatFood_195622_01.jpg",
                descripcion: "Kirkland Signature Alimento Completo para Gato Pollo y Arroz / 11.34 Kg"
            },
            {
                name: "Purina Dog Chow",
                precio: 1799.95,
                imagen:"https://d1cft8rz0k7w99.cloudfront.net/n/b/2/8/a/b28a0ebc423ea62acd20015b9600b5957625755d_DdogFood_398389_01.jpg",
                descripcion: "Purina Dog Chow Adulto Raza Grande 55 lb / 25 kg"
            }, {
                name: "Suavitel",
                precio: 529.95,
                imagen:"https://d1cft8rz0k7w99.cloudfront.net/n/3/e/3/b/3e3b07f1624ff679273ec13472f608818fab48c4_LaundrySupplie_285634_01.jpg",
                descripcion: "Suavitel Complete Suavizante Todo en Uno con Aroma a Fresca Primavera 8.5 L"
            },
            {
                name: "OxiClean",
                precio: 474.95,
                imagen:"https://d1cft8rz0k7w99.cloudfront.net/n/b/e/c/d/becdbdb774628eb6a00ecca54a7ef92d3376c260_LaundrySupplies_427612_01.jpg",
                descripcion: "OxiClean Removedor de Manchas 4.98 kg / 235 lavadas"
            }, {
                name: "Axion ",
                precio: 184.95,
                imagen:"https://d1cft8rz0k7w99.cloudfront.net/n/a/c/c/0/acc0a639b01a2718ef428fb8ddcad6691d7e86cf_DishDetergents_319109_01.jpg",
                descripcion: "Axion Lavaplatos en Crema Aloe 6 Unidades / 425 g"
            },
            {
                name: "Scotch-Brite",
                precio: 157.95,
                imagen:"https://d1cft8rz0k7w99.cloudfront.net/n/b/5/c/6/b5c68c52941e0f21f42e4f2f481f6ab42744219b_84229_01.jpg",
                descripcion: "Scotch-Brite Fibra Verde Limpieza Pesada 12 Unidades"
            },
        ]

    },{
        name: "cinabon",
        imagen: "https://1000marcas.net/wp-content/uploads/2021/05/Cinnabon-Logo.png",
        idCategoria: 3,
        productos: [
            {
                name: "rol de canela",
                precio: 120,
                imagen:"https://tofuu.getjusto.com/orioneat-prod/AuN8mnWuE4zALHpoW-Cinnabon%20Cl%C3%A1sico.png",
                descripcion: "canela"
            }, {
                name: "cafe",
                precio: 45,
                imagen:"data:image/jpeg;base64,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",
                descripcion: "cafe"
            },
        ]

    }, {
        name: "dk",
        imagen: "https://dunkin.hn/assets/images/logo-lc.png",
        idCategoria: 3,
        productos: [
            {
                name: "dona con cafe",
                precio: 65,
                imagen:"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/DonaCombo1024px-14_1611950052823.jpg",
                descripcion: "Nuestras Donas vienen en una variedad deliciosa de sabores ¡Disfrutala con tu café favorito"
            }, {
                name: "dona de chocolate",
                precio: 50,
                imagen:"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/Dona1024px-ad_1611950023983.jpg",
                descripcion: "chocolate"
            },
        ]

    }, {
        name: "dk",
        imagen: "https://dunkin.hn/assets/images/logo-lc.png",
        idCategoria: 3,
        productos: [
            {
                name: "dona con cafe",
                precio: 65,
                imagen:"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/DonaCombo1024px-14_1611950052823.jpg",
                descripcion: "Nuestras Donas vienen en una variedad deliciosa de sabores ¡Disfrutala con tu café favorito"
            }, {
                name: "dona de chocolate",
                precio: 50,
                imagen:"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/Dona1024px-ad_1611950023983.jpg",
                descripcion: "chocolate"
            },
        ]

    },

    {
        name: "farmacia kielsa",
        imagen: "https://kielsa.com/img/logo-kielsa-blanco.webp",
        idCategoria: 4,
        productos: [
            {
                name: "panadol",
                precio: 10,
                imagen:"https://kielsaimgrepositorio.s3.us-east-2.amazonaws.com/kimg/1210016852H",
                descripcion: "dolor"
            }, {
                name: "gripe y tos",
                precio: 7,
                imagen:"https://kielsaimgrepositorio.s3.us-east-2.amazonaws.com/kimg/1210001309.jpg",
                descripcion: "pastilla"
            },
        ]

    }, {
        name: "farmacia kielsa",
        imagen: "https://kielsa.com/img/logo-kielsa-blanco.webp",
        idCategoria: 4,
        productos: [
            {
                name: "panadol",
                precio: 10,
                imagen:"https://kielsaimgrepositorio.s3.us-east-2.amazonaws.com/kimg/1210016852H",
                descripcion: "dolor"
            }, {
                name: "gripe y tos",
                precio: 7,
                imagen:"https://kielsaimgrepositorio.s3.us-east-2.amazonaws.com/kimg/1210001309.jpg",
                descripcion: "pastilla"
            },
        ]

    }, {
        name: "farmacity",
        imagen: "https://ilacad.com/BO/img/empresa/logo_Farmacity_honduras.png",
        idCategoria: 4,
        productos: [
            {
                name: "panadol",
                precio: 10,
                imagen:"https://kielsaimgrepositorio.s3.us-east-2.amazonaws.com/kimg/1210016852H",
                descripcion: "dolor"
            }, {
                name: "gripe y tos",
                precio: 7,
                imagen:"https://kielsaimgrepositorio.s3.us-east-2.amazonaws.com/kimg/1210001309.jpg",
                descripcion: "pastilla"
            },
        ]

    }, {
        name: "farmacity",
        imagen: "https://ilacad.com/BO/img/empresa/logo_Farmacity_honduras.png",
        idCategoria: 4,
        productos: [
            {
                name: "panadol",
                precio: 10,
                imagen:"https://kielsaimgrepositorio.s3.us-east-2.amazonaws.com/kimg/1210016852H",
                descripcion: "dolor"
            }, {
                name: "gripe y tos",
                precio: 7,
                imagen:"https://kielsaimgrepositorio.s3.us-east-2.amazonaws.com/kimg/1210001309.jpg",
                descripcion: "pastilla"
            },
        ]

    }, {
        name: "jetstereo",
        imagen: "https://www.jetstereo.com/_next/image?url=https%3A%2F%2Fjet-web.s3.us-west-1.amazonaws.com%2Fimages%2Flogos%2Fjetstereo-logo.png&w=256&q=75",
        idCategoria: 5,
        productos: [
            {
                name: "Smartwatch Samsung",
                precio: 5195,
                imagen:"https://www.jetstereo.com/_next/image?url=https%3A%2F%2Fjet-web.s3.us-west-1.amazonaws.com%2Fimages%2Fcache%2Fcatalog%2Fpublic%2Fbe83aa2a09e2486126d0ce747e579fc6-350x350.webp&w=1080&q=75",
                descripcion: "Smartwatch Samsung Galaxy Watch4/ 40mm/ Black"
            },
            {
                name: "Audífonos JBL",
                precio: 1495,
                imagen:"https://www.jetstereo.com/_next/image?url=https%3A%2F%2Fjet-web.s3.us-west-1.amazonaws.com%2Fimages%2Fcache%2Fcatalog%2Fpublic%2Fa74950ca579482fa218e380ecf6c0076-350x350.webp&w=1080&q=75",
                descripcion: "Audífonos JBL/ Tune 510BT/ Inalámbrico/ Azul"
            }, {
                name: "Samsung Galaxy S21",
                precio: 17995,
                imagen:"https://www.jetstereo.com/_next/image?url=https%3A%2F%2Fjet-web.s3.us-west-1.amazonaws.com%2Fimages%2Fcache%2Fcatalog%2Fpublic%2FSM-G990EZWALTM%208-350x350.webp&w=1080&q=75",
                descripcion: "Samsung Galaxy S21 FE/ 6GB RAM/ 128GB/ Olive"
            },
            {
                name: "Huawei nova 9",
                precio: 7995,
                imagen:"https://www.jetstereo.com/_next/image?url=https%3A%2F%2Fjet-web.s3.us-west-1.amazonaws.com%2Fimages%2Fcache%2Fcatalog%2Fpublic%2F93da0e22f804a1b854f94ed6ce006e6b-350x350.webp&w=1080&q=75",
                descripcion: " 6GB RAM/ 128GB/ Crystal Blue"
            }, {
                name: "Xiaomi Redmi 10",
                precio: 5595,
                imagen:"https://www.jetstereo.com/_next/image?url=https%3A%2F%2Fjet-web.s3.us-west-1.amazonaws.com%2Fimages%2Fcache%2Fcatalog%2Fpublic%2Fbb4707e43aac5cac8af658dafffc1875-350x350.webp&w=1080&q=75",
                descripcion: "4GB RAM/ 64GB/ Carbon Gray"
            },
            {
                name: "Laptop Lenovo Yoga Slim",
                precio: 16995,
                imagen:"https://www.jetstereo.com/_next/image?url=https%3A%2F%2Fjet-web.s3.us-west-1.amazonaws.com%2Fimages%2Fcache%2Fcatalog%2Fpublic%2Fa0cc7f51db96f64dc026bbd8f58f7e1b-350x350.webp&w=1080&q=75",
                descripcion: "7 14 AMD/ Ryzen 5/ 8GB RAM/ 256GB SSD/ Gris"
            }, 
        ]


    }, {
        name: "jestereo",
        imagen: "https://www.jetstereo.com/_next/image?url=https%3A%2F%2Fjet-web.s3.us-west-1.amazonaws.com%2Fimages%2Flogos%2Fjetstereo-logo.png&w=256&q=75",
        idCategoria: 5,
        productos: [
            {
                name: "Smartwatch Samsung",
                precio: 5195,
                imagen:"https://www.jetstereo.com/_next/image?url=https%3A%2F%2Fjet-web.s3.us-west-1.amazonaws.com%2Fimages%2Fcache%2Fcatalog%2Fpublic%2Fbe83aa2a09e2486126d0ce747e579fc6-350x350.webp&w=1080&q=75",
                descripcion: "Smartwatch Samsung Galaxy Watch4/ 40mm/ Black"
            },
            {
                name: "Audífonos JBL",
                precio: 1495,
                imagen:"https://www.jetstereo.com/_next/image?url=https%3A%2F%2Fjet-web.s3.us-west-1.amazonaws.com%2Fimages%2Fcache%2Fcatalog%2Fpublic%2Fa74950ca579482fa218e380ecf6c0076-350x350.webp&w=1080&q=75",
                descripcion: "Audífonos JBL/ Tune 510BT/ Inalámbrico/ Azul"
            }, {
                name: "Samsung Galaxy S21",
                precio: 17995,
                imagen:"https://www.jetstereo.com/_next/image?url=https%3A%2F%2Fjet-web.s3.us-west-1.amazonaws.com%2Fimages%2Fcache%2Fcatalog%2Fpublic%2FSM-G990EZWALTM%208-350x350.webp&w=1080&q=75",
                descripcion: "Samsung Galaxy S21 FE/ 6GB RAM/ 128GB/ Olive"
            },
            {
                name: "Huawei nova 9",
                precio: 7995,
                imagen:"https://www.jetstereo.com/_next/image?url=https%3A%2F%2Fjet-web.s3.us-west-1.amazonaws.com%2Fimages%2Fcache%2Fcatalog%2Fpublic%2F93da0e22f804a1b854f94ed6ce006e6b-350x350.webp&w=1080&q=75",
                descripcion: " 6GB RAM/ 128GB/ Crystal Blue"
            }, {
                name: "Xiaomi Redmi 10",
                precio: 5595,
                imagen:"https://www.jetstereo.com/_next/image?url=https%3A%2F%2Fjet-web.s3.us-west-1.amazonaws.com%2Fimages%2Fcache%2Fcatalog%2Fpublic%2Fbb4707e43aac5cac8af658dafffc1875-350x350.webp&w=1080&q=75",
                descripcion: "4GB RAM/ 64GB/ Carbon Gray"
            },
            {
                name: "Laptop Lenovo Yoga Slim",
                precio: 16995,
                imagen:"https://www.jetstereo.com/_next/image?url=https%3A%2F%2Fjet-web.s3.us-west-1.amazonaws.com%2Fimages%2Fcache%2Fcatalog%2Fpublic%2Fa0cc7f51db96f64dc026bbd8f58f7e1b-350x350.webp&w=1080&q=75",
                descripcion: "7 14 AMD/ Ryzen 5/ 8GB RAM/ 256GB SSD/ Gris"
            }, 
        ]

    }, {
        name: "jestereo",
        imagen: "",
        idCategoria: 5,
        productos: [
            {
                name: "Smartwatch Samsung",
                precio: 5195,
                imagen:"https://www.jetstereo.com/_next/image?url=https%3A%2F%2Fjet-web.s3.us-west-1.amazonaws.com%2Fimages%2Fcache%2Fcatalog%2Fpublic%2Fbe83aa2a09e2486126d0ce747e579fc6-350x350.webp&w=1080&q=75",
                descripcion: "Smartwatch Samsung Galaxy Watch4/ 40mm/ Black"
            },
            {
                name: "Audífonos JBL",
                precio: 1495,
                imagen:"https://www.jetstereo.com/_next/image?url=https%3A%2F%2Fjet-web.s3.us-west-1.amazonaws.com%2Fimages%2Fcache%2Fcatalog%2Fpublic%2Fa74950ca579482fa218e380ecf6c0076-350x350.webp&w=1080&q=75",
                descripcion: "Audífonos JBL/ Tune 510BT/ Inalámbrico/ Azul"
            }, {
                name: "Samsung Galaxy S21",
                precio: 17995,
                imagen:"https://www.jetstereo.com/_next/image?url=https%3A%2F%2Fjet-web.s3.us-west-1.amazonaws.com%2Fimages%2Fcache%2Fcatalog%2Fpublic%2FSM-G990EZWALTM%208-350x350.webp&w=1080&q=75",
                descripcion: "Samsung Galaxy S21 FE/ 6GB RAM/ 128GB/ Olive"
            },
            {
                name: "Huawei nova 9",
                precio: 7995,
                imagen:"https://www.jetstereo.com/_next/image?url=https%3A%2F%2Fjet-web.s3.us-west-1.amazonaws.com%2Fimages%2Fcache%2Fcatalog%2Fpublic%2F93da0e22f804a1b854f94ed6ce006e6b-350x350.webp&w=1080&q=75",
                descripcion: " 6GB RAM/ 128GB/ Crystal Blue"
            }, {
                name: "Xiaomi Redmi 10",
                precio: 5595,
                imagen:"https://www.jetstereo.com/_next/image?url=https%3A%2F%2Fjet-web.s3.us-west-1.amazonaws.com%2Fimages%2Fcache%2Fcatalog%2Fpublic%2Fbb4707e43aac5cac8af658dafffc1875-350x350.webp&w=1080&q=75",
                descripcion: "4GB RAM/ 64GB/ Carbon Gray"
            },
            {
                name: "Laptop Lenovo Yoga Slim",
                precio: 16995,
                imagen:"https://www.jetstereo.com/_next/image?url=https%3A%2F%2Fjet-web.s3.us-west-1.amazonaws.com%2Fimages%2Fcache%2Fcatalog%2Fpublic%2Fa0cc7f51db96f64dc026bbd8f58f7e1b-350x350.webp&w=1080&q=75",
                descripcion: "7 14 AMD/ Ryzen 5/ 8GB RAM/ 256GB SSD/ Gris"
            }, 
        ]

    },{
        name: "radioshack",
        imagen: "https://www.radioshackla.com/media/logo/stores/25/radioshack-desktop.png",
        idCategoria: 5,
        productos: [
            {
                name: "mousepad+mouse",
                precio: 300,
                imagen:"https://www.radioshackla.com/media/catalog/product/2/6/2604771_mouse_combo.jpg?width=200&height=200&store=honduras_rs_espanol&image-type=small_image",
                descripcion: "RadioShack Black Soldier / Mousepad + Mouse /"
            },
        ]

    }
]