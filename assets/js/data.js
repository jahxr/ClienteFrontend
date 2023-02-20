var categorias = [
    //TODO: CAMBIAR ICONOS Y BGCOLOR DE LAS CATEGORIAS

    {
        "name": "Comida",
        "id":0,
        "color":"rgb(126,195,34) linear-gradient(0deg, rgba(126,195,34,1) 0%, rgba(253,187,45,1) 100%);",
        "icono": '<i class="fa-solid fa-burger"></i>'
    },
    {
        "name": "bebidas",
        "id":1,
        "color":"rgb(169,34,195)linear-gradient(0deg, rgba(169,34,195,1) 0%, rgba(47,34,195,1) 100%);",
        "icono": '<i class="fa-solid fa-champagne-glasses"></i>'
    },
    {
        "name": "super",
        "id":2,
        "color":"rgb(34,195,191)linear-gradient(0deg, rgba(34,195,191,1) 0%, rgba(126,253,45,1) 100%);",
        "icono": '<i class="fa-solid fa-store"></i>'
    },
    {
        "name": "postres",
        "id":3,
        "color":"rgb(195,34,34)linear-gradient(0deg, rgba(195,34,34,1) 0%, rgba(185,34,195,1) 100%);", 
        "icono": '<i class="fa-solid fa-cookie-bite"></i>'
    },
    {
        "name": "farmacia",
        "id":4,
        "color":"rgb(80,34,195)linear-gradient(0deg, rgba(80,34,195,1) 0%, rgba(34,191,195,1) 100%);",
        "icono": '<i class="fa-solid fa-prescription-bottle-medical"></i>'
    },
    {
        "name": "tecnologia",
        "id":5,
        "color":"rgb(195,182,34)linear-gradient(0deg, rgba(195,182,34,1) 0%, rgba(195,34,34,1) 100%);",
        "icono": '<i class="fa-solid fa-microchip"></i>'
    },
]
//TODO: CREAR MAS TIENDAS
var tiendas = [
    {
        name:"denny's •Areopuerto",
        imagen:"",
        idCategoria:0,
        productos: [
            {
                name:"CLASSIC CHEESEBURGER",
                precio: 209,
                descripcion:"Una porción de carne y tu elección de queso americano, suizo o cheddar. Servida con mayonesa, lechuga, tomate, pepinillos y cebolla roja."
            },
            {
                name:"AMERICA’S DINNER DOUBLE",
                precio: 279,
                descripcion:"Dos porciones de carne, queso americano, cebollas caramelizadas y salsa All-American en un pan brioche."
            },
            {
                name:"BACON SLAMBURGER",
                precio: 229,
                descripcion:"Una hamburguesa 100% carne de res, con crujientes papas hash browns, un huevo cocinado a tu gusto, dos tiras de tocino y todo cubierto de salsa de queso."
            },
            {
                name:"CLUB SANDWICH",
                precio: 229,
                descripcion:"Finas rebanadas de pechuga de pavo, tocino crujiente, lechuga, tomate y mayonesa en pan de 7 granos tostado."
            },
            {
                name:"AVOCADO CAESAR SALAD",
                precio: 239,
                descripcion:"Elige entre una pechuga de pollo o un filete de salmón salvaje de Alaska, ambos perfectamente sazonados y asados, acompañados de aguacate fresco, tocino crujiente desmoronado y quesos italianos rallados por encima de lechuga romana fresca, mezclado con aderezo caesar y acompañada de pan."
            },
            {
                name:" CRANBERRY APPLE CHICKEN SALAD",
                precio: 169,
                descripcion:"Pechuga de pollo asada, nueces glaseadas y arándanos secos, sobre lechuga mixta. Servida con aderezo de vinagre balsámico o tu elección de aderezo y pan."
            },
            {
                name:"JUMBO BUFFALO WINGS",
                precio: 235,
                descripcion:"Orden de 6 alitas grandes fritas bañadas en salsa buffalo. Servidas con apio y salsa dip de tu elección."
            },
            {
                name:"MEGA PRIME RIB PHILLY MELT",
                precio: 279,
                descripcion:"Carne de res prime rib, con champiñones, mezcla de pimientos y cebollas asadas, cubiertas con salsa de queso pepper jack y una mezcla de quesos rallados en pan hoagie a la plancha con una sabrosa mantequilla de ajo."
            },
        ]

    },
    {
        name:"denny;s•Mall Multiplaza",
        imagen:"",
        idCategoria:0,
        productos: [
            {
                name:"CLASSIC CHEESEBURGER",
                precio: 209,
                descripcion:"Una porción de carne y tu elección de queso americano, suizo o cheddar. Servida con mayonesa, lechuga, tomate, pepinillos y cebolla roja."
            },
            {
                name:"AMERICA’S DINNER DOUBLE",
                precio: 279,
                descripcion:"Dos porciones de carne, queso americano, cebollas caramelizadas y salsa All-American en un pan brioche."
            },
            {
                name:"BACON SLAMBURGER",
                precio: 229,
                descripcion:"Una hamburguesa 100% carne de res, con crujientes papas hash browns, un huevo cocinado a tu gusto, dos tiras de tocino y todo cubierto de salsa de queso."
            },
            {
                name:"CLUB SANDWICH",
                precio: 229,
                descripcion:"Finas rebanadas de pechuga de pavo, tocino crujiente, lechuga, tomate y mayonesa en pan de 7 granos tostado."
            },
            {
                name:"AVOCADO CAESAR SALAD",
                precio: 239,
                descripcion:"Elige entre una pechuga de pollo o un filete de salmón salvaje de Alaska, ambos perfectamente sazonados y asados, acompañados de aguacate fresco, tocino crujiente desmoronado y quesos italianos rallados por encima de lechuga romana fresca, mezclado con aderezo caesar y acompañada de pan."
            },
            {
                name:" CRANBERRY APPLE CHICKEN SALAD",
                precio: 169,
                descripcion:"Pechuga de pollo asada, nueces glaseadas y arándanos secos, sobre lechuga mixta. Servida con aderezo de vinagre balsámico o tu elección de aderezo y pan."
            },
            {
                name:"JUMBO BUFFALO WINGS",
                precio: 235,
                descripcion:"Orden de 6 alitas grandes fritas bañadas en salsa buffalo. Servidas con apio y salsa dip de tu elección."
            },
            {
                name:"MEGA PRIME RIB PHILLY MELT",
                precio: 279,
                descripcion:"Carne de res prime rib, con champiñones, mezcla de pimientos y cebollas asadas, cubiertas con salsa de queso pepper jack y una mezcla de quesos rallados en pan hoagie a la plancha con una sabrosa mantequilla de ajo."
            },
         
        ]

    },
    {
        name:"McDonald's • Kennedy",
        imagen:"",
        idCategoria:0,
        productos: [
            {
                name:"McMuffin™ de Salchicha y Huevo",
                precio: 133,
                descripcion:"an muffin inglés cubierto de margarina suave, una rodaja de jamón, huevo y queso cheddar amarillo."
            },
            {
                name:"McMuffin™ de Tocino Doble y Huevo",
                precio: 143,
                descripcion:"Pan muffin inglés tostado, con doble tocino, huevo y queso cheddar amarillo."
            },{
                name:"Cajita Feliz™ de Hotcakes",
                precio: 140,
                descripcion:"Cajita Feliz de desayuno. Deliciosos hotcakes doraditos con mantequilla suave y el dulce sabor de la miel de maple, acompañado de puré de manzana, yogurt de fresas, jugo de naranja o jugo de manzana, y un juguete de la promoción vigente."
            },{
                name:"Cajita Feliz™ McMuffin™ Huevo y Queso",
                precio: 140,
                descripcion:"Cajita Feliz de desayuno. Delicioso McMuffin en pan inglés de huevo y queso acompañado de puré de manzana y yogurt de fresa, jugo de naranja o jugo de manzana, un juguete de la promoción vigente."
            },{
                name:"Cajita Feliz™ McMuffin™ Huevo y Frijol",
                precio: 140,
                descripcion:"Cajita Feliz de desayuno. Delicioso McMuffin, huevo y frijol acompañado de puré de manzana y yogurt de fresa, jugo de naranja o jugo de manzana, y un juguete de la promoción vigente."
            },{
                name:"McMenú Familiar",
                precio: 407,
                descripcion:"Disfruta de este delicioso McMenú con tu familia en donde puedes elegir cuatro de las siguientes opciones: McMuffin Salchicha & Huevo, Egg McMuffin, McMuffin Salchicha, y Hotcakes. Incluye 4 bebidas hasbrown para tus McMuffins."
            },{
                name:"Papas",
                precio: 59,
                descripcion:"Las papas más famosas del mundo elaboradas con papas de la más alta calidad, son papas fritas épicas, doradas y saladitas por fuera y esponjosas por dentro."
            },{
                name:"Big Mac™",
                precio: 183,
                descripcion:"La perfección: dos deliciosas tortas de carne 100% de res y salsa Big Mac, entre un pan de semillas de sésamo. Se completa con pepinillos, lechuga rallada, cebolla finamente picada y queso americano para una hamburguesa con un sabor sin igual."
            },{
                name: "Cuarto de Libra",
                precio: 187,
                descripcion:"Hamburguesa de 1/4 de libra de carne 100% de res deliciosamente jugosa. Se sazona con una pizca de sal y pimienta, acompañada de cebolla, kétchup, mostaza, dos rebanadas de queso cheddar amarillo en un pan de semillas de sésamo."
            }, {
                name: "QuesoHamburguesa",
                precio: 55,
                descripcion:"Nuestra sencilla y clásica hamburguesa con queso cheddar amarillo, con una torta de carne 100% de res sazonada con una pizca de sal y pimienta, acompañada con un pepinillo, cebolla picada, kétchup y mostaza."
            }
        ]

    },  {
        name:"McDonald's • Cascadas",
        imagen:"",
        idCategoria:0,
        productos: [
            {
                name:"McMuffin™ de Salchicha y Huevo",
                precio: 133,
                descripcion:"an muffin inglés cubierto de margarina suave, una rodaja de jamón, huevo y queso cheddar amarillo."
            },
            {
                name:"McMuffin™ de Tocino Doble y Huevo",
                precio: 143,
                descripcion:"Pan muffin inglés tostado, con doble tocino, huevo y queso cheddar amarillo."
            },{
                name:"Cajita Feliz™ de Hotcakes",
                precio: 140,
                descripcion:"Cajita Feliz de desayuno. Deliciosos hotcakes doraditos con mantequilla suave y el dulce sabor de la miel de maple, acompañado de puré de manzana, yogurt de fresas, jugo de naranja o jugo de manzana, y un juguete de la promoción vigente."
            },{
                name:"Cajita Feliz™ McMuffin™ Huevo y Queso",
                precio: 140,
                descripcion:"Cajita Feliz de desayuno. Delicioso McMuffin en pan inglés de huevo y queso acompañado de puré de manzana y yogurt de fresa, jugo de naranja o jugo de manzana, un juguete de la promoción vigente."
            },{
                name:"Cajita Feliz™ McMuffin™ Huevo y Frijol",
                precio: 140,
                descripcion:"Cajita Feliz de desayuno. Delicioso McMuffin, huevo y frijol acompañado de puré de manzana y yogurt de fresa, jugo de naranja o jugo de manzana, y un juguete de la promoción vigente."
            },{
                name:"McMenú Familiar",
                precio: 407,
                descripcion:"Disfruta de este delicioso McMenú con tu familia en donde puedes elegir cuatro de las siguientes opciones: McMuffin Salchicha & Huevo, Egg McMuffin, McMuffin Salchicha, y Hotcakes. Incluye 4 bebidas hasbrown para tus McMuffins."
            },{
                name:"Papas",
                precio: 59,
                descripcion:"Las papas más famosas del mundo elaboradas con papas de la más alta calidad, son papas fritas épicas, doradas y saladitas por fuera y esponjosas por dentro."
            },{
                name:"Big Mac™",
                precio: 183,
                descripcion:"La perfección: dos deliciosas tortas de carne 100% de res y salsa Big Mac, entre un pan de semillas de sésamo. Se completa con pepinillos, lechuga rallada, cebolla finamente picada y queso americano para una hamburguesa con un sabor sin igual."
            },{
                name: "Cuarto de Libra",
                precio:  187,
                descripcion:"Hamburguesa de 1/4 de libra de carne 100% de res deliciosamente jugosa. Se sazona con una pizca de sal y pimienta, acompañada de cebolla, kétchup, mostaza, dos rebanadas de queso cheddar amarillo en un pan de semillas de sésamo."
            }, {
                name: "QuesoHamburguesa",
                precio: 55 ,
                descripcion:"Nuestra sencilla y clásica hamburguesa con queso cheddar amarillo, con una torta de carne 100% de res sazonada con una pizca de sal y pimienta, acompañada con un pepinillo, cebolla picada, kétchup y mostaza."
            }
        ]

    },  {
        name:"McDonald's • Suyapa",
        imagen:"",
        idCategoria:0,
        productos: [
            {
                name:"McMuffin™ de Salchicha y Huevo",
                precio: 133,
                descripcion:"an muffin inglés cubierto de margarina suave, una rodaja de jamón, huevo y queso cheddar amarillo."
            },
            {
                name:"McMuffin™ de Tocino Doble y Huevo",
                precio: 143,
                descripcion:"Pan muffin inglés tostado, con doble tocino, huevo y queso cheddar amarillo."
            },{
                name:"Cajita Feliz™ de Hotcakes",
                precio: 140,
                descripcion:"Cajita Feliz de desayuno. Deliciosos hotcakes doraditos con mantequilla suave y el dulce sabor de la miel de maple, acompañado de puré de manzana, yogurt de fresas, jugo de naranja o jugo de manzana, y un juguete de la promoción vigente."
            },{
                name:"Cajita Feliz™ McMuffin™ Huevo y Queso",
                precio: 140,
                descripcion:"Cajita Feliz de desayuno. Delicioso McMuffin en pan inglés de huevo y queso acompañado de puré de manzana y yogurt de fresa, jugo de naranja o jugo de manzana, un juguete de la promoción vigente."
            },{
                name:"Cajita Feliz™ McMuffin™ Huevo y Frijol",
                precio: 140,
                descripcion:"Cajita Feliz de desayuno. Delicioso McMuffin, huevo y frijol acompañado de puré de manzana y yogurt de fresa, jugo de naranja o jugo de manzana, y un juguete de la promoción vigente."
            },{
                name:"McMenú Familiar",
                precio: 407,
                descripcion:"Disfruta de este delicioso McMenú con tu familia en donde puedes elegir cuatro de las siguientes opciones: McMuffin Salchicha & Huevo, Egg McMuffin, McMuffin Salchicha, y Hotcakes. Incluye 4 bebidas hasbrown para tus McMuffins."
            },{
                name:"Papas",
                precio: 59,
                descripcion:"Las papas más famosas del mundo elaboradas con papas de la más alta calidad, son papas fritas épicas, doradas y saladitas por fuera y esponjosas por dentro."
            },{
                name:"Big Mac™",
                precio: 183,
                descripcion:"La perfección: dos deliciosas tortas de carne 100% de res y salsa Big Mac, entre un pan de semillas de sésamo. Se completa con pepinillos, lechuga rallada, cebolla finamente picada y queso americano para una hamburguesa con un sabor sin igual."
            },{
                name: "Cuarto de Libra",
                precio:  187,
                descripcion:"Hamburguesa de 1/4 de libra de carne 100% de res deliciosamente jugosa. Se sazona con una pizca de sal y pimienta, acompañada de cebolla, kétchup, mostaza, dos rebanadas de queso cheddar amarillo en un pan de semillas de sésamo."
            }, {
                name: "QuesoHamburguesa",
                precio: 55 ,
                descripcion:"Nuestra sencilla y clásica hamburguesa con queso cheddar amarillo, con una torta de carne 100% de res sazonada con una pizca de sal y pimienta, acompañada con un pepinillo, cebolla picada, kétchup y mostaza."
            }
        ]

    },  {
        name:"Mcdonald's • Morazán",
        imagen:"",
        idCategoria:0,
        productos: [
            {
                name:"McMuffin™ de Salchicha y Huevo",
                precio: 133,
                descripcion:"an muffin inglés cubierto de margarina suave, una rodaja de jamón, huevo y queso cheddar amarillo."
            },
            {
                name:"McMuffin™ de Tocino Doble y Huevo",
                precio: 143,
                descripcion:"Pan muffin inglés tostado, con doble tocino, huevo y queso cheddar amarillo."
            },{
                name:"Cajita Feliz™ de Hotcakes",
                precio: 140,
                descripcion:"Cajita Feliz de desayuno. Deliciosos hotcakes doraditos con mantequilla suave y el dulce sabor de la miel de maple, acompañado de puré de manzana, yogurt de fresas, jugo de naranja o jugo de manzana, y un juguete de la promoción vigente."
            },{
                name:"Cajita Feliz™ McMuffin™ Huevo y Queso",
                precio: 140,
                descripcion:"Cajita Feliz de desayuno. Delicioso McMuffin en pan inglés de huevo y queso acompañado de puré de manzana y yogurt de fresa, jugo de naranja o jugo de manzana, un juguete de la promoción vigente."
            },{
                name:"Cajita Feliz™ McMuffin™ Huevo y Frijol",
                precio: 140,
                descripcion:"Cajita Feliz de desayuno. Delicioso McMuffin, huevo y frijol acompañado de puré de manzana y yogurt de fresa, jugo de naranja o jugo de manzana, y un juguete de la promoción vigente."
            },{
                name:"McMenú Familiar",
                precio: 407,
                descripcion:"Disfruta de este delicioso McMenú con tu familia en donde puedes elegir cuatro de las siguientes opciones: McMuffin Salchicha & Huevo, Egg McMuffin, McMuffin Salchicha, y Hotcakes. Incluye 4 bebidas hasbrown para tus McMuffins."
            },{
                name:"Papas",
                precio: 59,
                descripcion:"Las papas más famosas del mundo elaboradas con papas de la más alta calidad, son papas fritas épicas, doradas y saladitas por fuera y esponjosas por dentro."
            },{
                name:"Big Mac™",
                precio: 183,
                descripcion:"La perfección: dos deliciosas tortas de carne 100% de res y salsa Big Mac, entre un pan de semillas de sésamo. Se completa con pepinillos, lechuga rallada, cebolla finamente picada y queso americano para una hamburguesa con un sabor sin igual."
            },{
                name: "Cuarto de Libra",
                precio:  187,
                descripcion:"Hamburguesa de 1/4 de libra de carne 100% de res deliciosamente jugosa. Se sazona con una pizca de sal y pimienta, acompañada de cebolla, kétchup, mostaza, dos rebanadas de queso cheddar amarillo en un pan de semillas de sésamo."
            }, {
                name: "QuesoHamburguesa",
                precio: 55 ,
                descripcion:"Nuestra sencilla y clásica hamburguesa con queso cheddar amarillo, con una torta de carne 100% de res sazonada con una pizca de sal y pimienta, acompañada con un pepinillo, cebolla picada, kétchup y mostaza."
            }
        ]

    },  {
        name:"tapacula • foodtruckers UNAH",
        imagen:"",
        idCategoria:0,
        productos: [
            {
                name:"guacamole & chips",
                precio: 89,
                descripcion:"copa de 6 onzas de aguacate,cilantro,limon y chips para compartir"
            },
            {
                name:"papas preparadas & trocitos de res",
                precio: 149,
                descripcion:"papas y res"
            }, {
                name:"tacos suaves(4unidades)",
                precio: 169,
                descripcion:"doble tortilla,proteina pico de gallo,salsa de aguacate,cilantro y limon"
            }, {
                name:"tacos de birria (4unidades)",
                precio: 169,
                descripcion:"doble tortilla,carne de res condimentada en caldo de birria quesillo derretido, limon,cilantro y media copa de birria con res"
            }, {
                name:"tacos de carnita asada (4unidades)",
                precio: 179,
                descripcion:"doble tortilla ,carne asada,cebolla,cilantro,chile,aderezo,guacamole, y pico de gallo"
            }, {
                name:"crunchy tacos (4unidades)",
                precio: 169,
                descripcion:"crunchy tortilla,con la carne de tu eleccion,lechuga,tomate en trocitos,aderezo y cheddar rallado con chile"
            }
            
        ]

    },  {
        name:"El Pinche Plaza ventu",
        imagen:"",
        idCategoria:0,
        productos: [
            {
                name:"guacamole & chips",
                precio: 89,
                descripcion:"copa de 6 onzas de aguacate,cilantro,limon y chips para compartir"
            },
            {
                name:"papas preparadas & trocitos de res",
                precio: 149,
                descripcion:"papas y res"
            }, {
                name:"tacos suaves(4unidades)",
                precio: 169,
                descripcion:"doble tortilla,proteina pico de gallo,salsa de aguacate,cilantro y limon"
            }, {
                name:"tacos de birria (4unidades)",
                precio: 169,
                descripcion:"doble tortilla,carne de res condimentada en caldo de birria quesillo derretido, limon,cilantro y media copa de birria con res"
            }, {
                name:"tacos de carnita asada (4unidades)",
                precio: 179,
                descripcion:"doble tortilla ,carne asada,cebolla,cilantro,chile,aderezo,guacamole, y pico de gallo"
            }, {
                name:"crunchy tacos (4unidades)",
                precio: 169,
                descripcion:"crunchy tortilla,con la carne de tu eleccion,lechuga,tomate en trocitos,aderezo y cheddar rallado con chile"
            }
        ]

    },  {
        name:"Little Caesars • Santa Mónica",
        imagen:"",
        idCategoria:0,
        productos: [
            {
                name:"clasica con queso",
                precio: 109,
                descripcion:"Pizza gigante Hot Ready con una mezcla de quesos Mozarella y Muenster."
            },
            {
                name:"clasica pepperoni",
                precio:129,
                descripcion:"La original pizza gigante Hot - and – Ready recién salida del horno, acompañada de abundante pepperoni y una mezcla de queso mozarella y muenster."
            },  {
                name:"paquete fiesta",
                precio:359,
                descripcion:"¡Cada fiesta tiene un anfitrión! Serás el mejor al elegir este paquete con la mejor pizza, al mejor precio. Incluye: - 2 Pizzas Gigantes de un ingrediente. - 1 Crazy Bread o Canelitas ( 8 unidades ). - 1 Refresco 2L"
            },  {
                name:"paquete full",
                precio:569,
                descripcion:"¡Un paquete para compartir con todos! Incluye: - 1 Pizza Clásica de Pepperoni - 1 Pizza Ultimate Deluxe - 1 Crazy Cheese Bread - 6 Caesar Wings - 1 Salsa Ranch"
            },  {
                name:"super cheese cheddar",
                precio:329,
                descripcion:"Con el nuevo paquete 4N1 Super Cheesy Cheddar disfruta de 4 especialidades con una base de queso cheddar, Todo en una sola pizza con orilla de queso; acompañada de los deliciosos Crazy Puff"
            },  {
                name:"crazy puff",
                precio:75,
                descripcion:"4 piezas de pan rellenas de jamón y piña con salsa de pizza, cubiertos de mantequilla de ajo y especias italiana"
            },  {
                name:"4N1 cheesy cheddar",
                precio:235,
                descripcion:"Llevamos la experiencia Pizza! Pizza! a otro nivel con la nueva 4n1 Cheesy Cheddar; disfruta de 4 sensaciones en una sola pizza con base de queso cheddar. ¡Es para todos, pero no querrás compartir!"
            },  {
                name:"super cheese pepperoni",
                precio:199,
                descripcion:"Deliciosa pizza gigante de pepperoni, con mezcla de queso mozzarella y muenster. Tiene un borde relleno de queso, cubierto con mantequilla de ajo y queso parmesano."
            },
        ]

    },  {
        name:"Little Caesars • Las Torres",
        imagen:"",
        idCategoria:0,
        productos: [
            {
                name:"clasica con queso",
                precio: 109,
                descripcion:"Pizza gigante Hot Ready con una mezcla de quesos Mozarella y Muenster."
            },
            {
                name:"clasica pepperoni",
                precio:129,
                descripcion:"La original pizza gigante Hot - and – Ready recién salida del horno, acompañada de abundante pepperoni y una mezcla de queso mozarella y muenster."
            },  {
                name:"paquete fiesta",
                precio:359,
                descripcion:"¡Cada fiesta tiene un anfitrión! Serás el mejor al elegir este paquete con la mejor pizza, al mejor precio. Incluye: - 2 Pizzas Gigantes de un ingrediente. - 1 Crazy Bread o Canelitas ( 8 unidades ). - 1 Refresco 2L"
            },  {
                name:"paquete full",
                precio:569,
                descripcion:"¡Un paquete para compartir con todos! Incluye: - 1 Pizza Clásica de Pepperoni - 1 Pizza Ultimate Deluxe - 1 Crazy Cheese Bread - 6 Caesar Wings - 1 Salsa Ranch"
            },  {
                name:"super cheese cheddar",
                precio:329,
                descripcion:"Con el nuevo paquete 4N1 Super Cheesy Cheddar disfruta de 4 especialidades con una base de queso cheddar, Todo en una sola pizza con orilla de queso; acompañada de los deliciosos Crazy Puff"
            },  {
                name:"crazy puff",
                precio:75,
                descripcion:"4 piezas de pan rellenas de jamón y piña con salsa de pizza, cubiertos de mantequilla de ajo y especias italiana"
            },  {
                name:"4N1 cheesy cheddar",
                precio:235,
                descripcion:"Llevamos la experiencia Pizza! Pizza! a otro nivel con la nueva 4n1 Cheesy Cheddar; disfruta de 4 sensaciones en una sola pizza con base de queso cheddar. ¡Es para todos, pero no querrás compartir!"
            },  {
                name:"super cheese pepperoni",
                precio:199,
                descripcion:"Deliciosa pizza gigante de pepperoni, con mezcla de queso mozzarella y muenster. Tiene un borde relleno de queso, cubierto con mantequilla de ajo y queso parmesano."
            },
        ]

    },  {
        name:"Little Caesars • Cascadas Mall",
        imagen:"",
        idCategoria:0,
        productos: [
            {
                name:"clasica con queso",
                precio: 109,
                descripcion:"Pizza gigante Hot Ready con una mezcla de quesos Mozarella y Muenster."
            },
            {
                name:"clasica pepperoni",
                precio:129,
                descripcion:"La original pizza gigante Hot - and – Ready recién salida del horno, acompañada de abundante pepperoni y una mezcla de queso mozarella y muenster."
            },  {
                name:"paquete fiesta",
                precio:359,
                descripcion:"¡Cada fiesta tiene un anfitrión! Serás el mejor al elegir este paquete con la mejor pizza, al mejor precio. Incluye: - 2 Pizzas Gigantes de un ingrediente. - 1 Crazy Bread o Canelitas ( 8 unidades ). - 1 Refresco 2L"
            },  {
                name:"paquete full",
                precio:569,
                descripcion:"¡Un paquete para compartir con todos! Incluye: - 1 Pizza Clásica de Pepperoni - 1 Pizza Ultimate Deluxe - 1 Crazy Cheese Bread - 6 Caesar Wings - 1 Salsa Ranch"
            },  {
                name:"super cheese cheddar",
                precio:329,
                descripcion:"Con el nuevo paquete 4N1 Super Cheesy Cheddar disfruta de 4 especialidades con una base de queso cheddar, Todo en una sola pizza con orilla de queso; acompañada de los deliciosos Crazy Puff"
            },  {
                name:"crazy puff",
                precio:75,
                descripcion:"4 piezas de pan rellenas de jamón y piña con salsa de pizza, cubiertos de mantequilla de ajo y especias italiana"
            },  {
                name:"4N1 cheesy cheddar",
                precio:235,
                descripcion:"Llevamos la experiencia Pizza! Pizza! a otro nivel con la nueva 4n1 Cheesy Cheddar; disfruta de 4 sensaciones en una sola pizza con base de queso cheddar. ¡Es para todos, pero no querrás compartir!"
            },  {
                name:"super cheese pepperoni",
                precio:199,
                descripcion:"Deliciosa pizza gigante de pepperoni, con mezcla de queso mozzarella y muenster. Tiene un borde relleno de queso, cubierto con mantequilla de ajo y queso parmesano."
            },
        ]

    },  {
        name:"espresso americano",
        imagen:"",
        idCategoria:1,
        productos: [
            {
                name:"",
                precio: 0,
                descripcion:""
            },
            {
                name:"",
                precio: 0,
                descripcion:""
            }, {
                name:"",
                precio: 0,
                descripcion:""
            },
            {
                name:"",
                precio: 0,
                descripcion:""
            },   {
                name:"",
                precio: 0,
                descripcion:""
            },
            {
                name:"",
                precio: 0,
                descripcion:""
            }, {
                name:"",
                precio: 0,
                descripcion:""
            },
            {
                name:"",
                precio: 0,
                descripcion:""
            },
        ]

    },  {
        name:"espresso americano2",
        imagen:"",
        idCategoria:1,
        productos: [
            
        ]

    },  {
        name:"espresso americano3 ",
        imagen:"",
        idCategoria:1,
        productos: [

        ]
         

    },  {
        name:"alcohol",
        imagen:"",
        idCategoria:1,
        productos: [
            
        ]

    },  {
        name:"alcohol2",
        imagen:"",
        idCategoria:1,
        productos: [

        ]
           

    },  {
        name:"walmart cascadas",
        imagen:"",
        idCategoria:2,
        productos: [
            {
                name:"Azucar Blanca",
                precio: 43.40,
                descripcion:"Marca Dona Matilde - 1800gr"
            },
            {
                name:"Pasta",
                precio: 9.70,
                descripcion:"Tipo Spaghetti Marca Bruni - 200gr"
            }, {
                name:"Frijol",
                precio: 95.70,
                descripcion:"Grano Rojo Marca Sabemas En Bolsa - 1400gr"
            },
            {
                name:"Gaseosa",
                precio: 42.20,
                descripcion:"Marca Coca Cola En Envase Tipo Pet - 2000 Ml"
            },   {
                name:"Jugo",
                precio: 62,
                descripcion:"Sula De Naranja Premium Sin Pulpa- 1890 Ml"
            },
            {
                name:"Medallon",
                precio: 65.50,
                descripcion:"Empanizado Junior Pollo Rey - 324gr"
            }, {
                name:"Cajilla De Huevos",
                precio: 139.50,
                descripcion:"Blancos Marca Don Cristobal Tamaño Grande - 30 unidades"
            }, {
                name:"Leche",
                precio: 617,
                descripcion:" Instantánea Nestlé® NIDO® 1+ Protección® Alimento Complementario Lata- 2.2kg"
            },
            {
                name:"Leche",
                precio: 38,
                descripcion:"Leche Entera Sula Uht Enriquecida y Fortificada - 0.946ml"
            }, {
                name:"Jamón",
                precio: 79,
                descripcion:"JamónDe Pavo Fud 250 Gr"
            },
            {
                name:"Tocino",
                precio: 65,
                descripcion:"Tocino Chimex Ahumado De Cerdo - 170gr"
            },   {
                name:"Papa",
                precio: 22,
                descripcion:"Papa Clasificada Libra - 2 Unidades Por Lb."
            }, {
                name:"Banano",
                precio: 7.70,
                descripcion:"Banano Dátil Del Fresco Libra - 4 Unidades Por Lb. Aproximadamente"
            },
            {
                name:"Pechuga",
                precio: 78,
                descripcion:"Pechuga Deshuesada Marca Don Cristobal Fresco Grane"
            }, {
                name:"Costilla Cerdo ",
                precio: 84.85,
                descripcion:"Costilla Cerdo Premium Progcarne Fresco Granel - 1Lb"
            },
            {
                name:"Papel Higienico",
                precio: 147,
                descripcion:"apel Higienico Marca Rosal Plus Doble Hoja 12 Rollos XG"
            },   
            
        ]

    },  {
        name:"walmart anillo periferico",
        imagen:"",
        idCategoria:2,
        productos: [
            {
                name:"Azucar Blanca",
                precio: 43.40,
                descripcion:"Marca Dona Matilde - 1800gr"
            },
            {
                name:"Pasta",
                precio: 9.70,
                descripcion:"Tipo Spaghetti Marca Bruni - 200gr"
            }, {
                name:"Frijol",
                precio: 95.70,
                descripcion:"Grano Rojo Marca Sabemas En Bolsa - 1400gr"
            },
            {
                name:"Gaseosa",
                precio: 42.20,
                descripcion:"Marca Coca Cola En Envase Tipo Pet - 2000 Ml"
            },   {
                name:"Jugo",
                precio: 62,
                descripcion:"Sula De Naranja Premium Sin Pulpa- 1890 Ml"
            },
            {
                name:"Medallon",
                precio: 65.50,
                descripcion:"Empanizado Junior Pollo Rey - 324gr"
            }, {
                name:"Cajilla De Huevos",
                precio: 139.50,
                descripcion:"Blancos Marca Don Cristobal Tamaño Grande - 30 unidades"
            }, {
                name:"Leche",
                precio: 617,
                descripcion:" Instantánea Nestlé® NIDO® 1+ Protección® Alimento Complementario Lata- 2.2kg"
            },
            {
                name:"Leche",
                precio: 38,
                descripcion:"Leche Entera Sula Uht Enriquecida y Fortificada - 0.946ml"
            }, {
                name:"Jamón",
                precio: 79,
                descripcion:"JamónDe Pavo Fud 250 Gr"
            },
            {
                name:"Tocino",
                precio: 65,
                descripcion:"Tocino Chimex Ahumado De Cerdo - 170gr"
            },   {
                name:"Papa",
                precio: 22,
                descripcion:"Papa Clasificada Libra - 2 Unidades Por Lb."
            }, {
                name:"Banano",
                precio: 7.70,
                descripcion:"Banano Dátil Del Fresco Libra - 4 Unidades Por Lb. Aproximadamente"
            },
            {
                name:"Pechuga",
                precio: 78,
                descripcion:"Pechuga Deshuesada Marca Don Cristobal Fresco Grane"
            }, {
                name:"Costilla Cerdo ",
                precio: 84.85,
                descripcion:"Costilla Cerdo Premium Progcarne Fresco Granel - 1Lb"
            },
            {
                name:"Papel Higienico",
                precio: 147,
                descripcion:"apel Higienico Marca Rosal Plus Doble Hoja 12 Rollos XG"
            },   
        ]

    },  {
        name:"pricesmart anillo periferico",
        imagen:"",
        idCategoria:2,
        productos: [
            {
                name:"Eggo Waffles",
                precio: 314.95,
                descripcion:"40 Unidades / 35 g / 1.2 oz"
            },
            {
                name:"Aceite de Oliva Extra Virgen ",
                precio: 419.95,
                descripcion:"Member's Selection Aceite de Oliva Extra Virgen Extraído en Frío 2 L"
            }, {
                name:"Atún en Agua",
                precio: 249.95,
                descripcion:"Member's Selection Atún en Agua 6 Unidades / 170 g"
            },
            {
                name:"Pringles",
                precio: 659.95,
                descripcion:"Pringles Paquete Surtido 48 Unidades / 20 g"
            },   {
                name:"Kirkland Signature",
                precio: 879.95,
                descripcion:"Kirkland Signature Alimento Completo para Gato Pollo y Arroz / 11.34 Kg"
            },
            {
                name:"Purina Dog Chow",
                precio: 1799.95,
                descripcion:"Purina Dog Chow Adulto Raza Grande 55 lb / 25 kg"
            }, {
                name:"Suavitel",
                precio: 529.95,
                descripcion:"Suavitel Complete Suavizante Todo en Uno con Aroma a Fresca Primavera 8.5 L"
            },
            {
                name:"OxiClean",
                precio: 474.95,
                descripcion:"OxiClean Removedor de Manchas 4.98 kg / 235 lavadas"
            }, {
                name:"Axion ",
                precio: 184.95,
                descripcion:"Axion Lavaplatos en Crema Aloe 6 Unidades / 425 g"
            },
            {
                name:"Scotch-Brite",
                precio: 157.95,
                descripcion:"Scotch-Brite Fibra Verde Limpieza Pesada 12 Unidades"
            }, 
        ]

    },  {
        name:"pricesmart mall multiplaza",
        imagen:"",
        idCategoria:2,
        productos: [
            {
                name:"Eggo Waffles",
                precio: 314.95,
                descripcion:"40 Unidades / 35 g / 1.2 oz"
            },
            {
                name:"Aceite de Oliva Extra Virgen ",
                precio: 419.95,
                descripcion:"Member's Selection Aceite de Oliva Extra Virgen Extraído en Frío 2 L"
            }, {
                name:"Atún en Agua",
                precio: 249.95,
                descripcion:"Member's Selection Atún en Agua 6 Unidades / 170 g"
            },
            {
                name:"Pringles",
                precio: 659.95,
                descripcion:"Pringles Paquete Surtido 48 Unidades / 20 g"
            },   {
                name:"Kirkland Signature",
                precio: 879.95,
                descripcion:"Kirkland Signature Alimento Completo para Gato Pollo y Arroz / 11.34 Kg"
            },
            {
                name:"Purina Dog Chow",
                precio: 1799.95,
                descripcion:"Purina Dog Chow Adulto Raza Grande 55 lb / 25 kg"
            }, {
                name:"Suavitel",
                precio: 529.95,
                descripcion:"Suavitel Complete Suavizante Todo en Uno con Aroma a Fresca Primavera 8.5 L"
            },
            {
                name:"OxiClean",
                precio: 474.95,
                descripcion:"OxiClean Removedor de Manchas 4.98 kg / 235 lavadas"
            }, {
                name:"Axion ",
                precio: 184.95,
                descripcion:"Axion Lavaplatos en Crema Aloe 6 Unidades / 425 g"
            },
            {
                name:"Scotch-Brite",
                precio: 157.95,
                descripcion:"Scotch-Brite Fibra Verde Limpieza Pesada 12 Unidades"
            }, 
        ]

    },  {
        name:"cinabon",
        imagen:"",
        idCategoria:3,
        productos: [
            
        ]

    },  {
        name:"dk",
        imagen:"",
        idCategoria:3,
        productos: [
           
        ]

    },{
        name:"dk",
        imagen:"",
        idCategoria:3,
        productos: [
            
        ]

    },
    
    {
        name:"farmacia kielsa",
        imagen:"",
        idCategoria:4,
        productos: [
            
        ]

    },  {
        name:"farmacia kielsa",
        imagen:"",
        idCategoria:4,
        productos: [
            
        ]

    },  {
        name:"farmacity",
        imagen:"",
        idCategoria:4,
        productos: [
           
        ]

    },  {
        name:"farmacity",
        imagen:"",
        idCategoria:4,
        productos: [
           
        ]

    },  {
        name:"jetstereo",
        imagen:"",
        idCategoria:5,
        productos: [
            {
                name:"Smartwatch Samsung",
                precio: 5195,
                descripcion:"Smartwatch Samsung Galaxy Watch4/ 40mm/ Black"
            },
            {
                name:"Audífonos JBL",
                precio: 1495,
                descripcion:"Audífonos JBL/ Tune 510BT/ Inalámbrico/ Azul"
            }, {
                name:"Samsung Galaxy S21",
                precio: 17995,
                descripcion:"Samsung Galaxy S21 FE/ 6GB RAM/ 128GB/ Olive"
            },
            {
                name:"Huawei nova 9",
                precio: 7995,
                descripcion:" 6GB RAM/ 128GB/ Crystal Blue"
            },   {
                name:"Xiaomi Redmi 10",
                precio: 5595,
                descripcion:"4GB RAM/ 64GB/ Carbon Gray"
            },
            {
                name:"Laptop Lenovo Yoga Slim",
                precio: 16995,
                descripcion:"7 14 AMD/ Ryzen 5/ 8GB RAM/ 256GB SSD/ Gris"
            }, {
                name:"Honor 70",
                precio: 15995,
                descripcion:"/ 8GB RAM/ 256GB/ Crystal Silver"
            },
            {
                name:"Audífonos JBL",
                precio: 1595,
                descripcion:"Audífonos JBL/ Vibe 100/ Inalámbrico/ Negro"
            },
        ]
        

    },  {
        name:"jestereo",
        imagen:"",
        idCategoria:5,
        productos: [
            {
                name:"Smartwatch Samsung",
                precio: 5195,
                descripcion:"Smartwatch Samsung Galaxy Watch4/ 40mm/ Black"
            },
            {
                name:"Audífonos JBL",
                precio: 1495,
                descripcion:"Audífonos JBL/ Tune 510BT/ Inalámbrico/ Azul"
            }, {
                name:"Samsung Galaxy S21",
                precio: 17995,
                descripcion:"Samsung Galaxy S21 FE/ 6GB RAM/ 128GB/ Olive"
            },
            {
                name:"Huawei nova 9",
                precio: 7995,
                descripcion:" 6GB RAM/ 128GB/ Crystal Blue"
            },   {
                name:"Xiaomi Redmi 10",
                precio: 5595,
                descripcion:"4GB RAM/ 64GB/ Carbon Gray"
            },
            {
                name:"Laptop Lenovo Yoga Slim",
                precio: 16995,
                descripcion:"7 14 AMD/ Ryzen 5/ 8GB RAM/ 256GB SSD/ Gris"
            }, {
                name:"Honor 70",
                precio: 15995,
                descripcion:"/ 8GB RAM/ 256GB/ Crystal Silver"
            },
            {
                name:"Audífonos JBL",
                precio: 1595,
                descripcion:"Audífonos JBL/ Vibe 100/ Inalámbrico/ Negro"
            },
        ]

    },  {
        name:"jestereo",
        imagen:"",
        idCategoria:5,
        productos: [
            {
                name:"Smartwatch Samsung",
                precio: 5195,
                descripcion:"Smartwatch Samsung Galaxy Watch4/ 40mm/ Black"
            },
            {
                name:"Audífonos JBL",
                precio: 1495,
                descripcion:"Audífonos JBL/ Tune 510BT/ Inalámbrico/ Azul"
            }, {
                name:"Samsung Galaxy S21",
                precio: 17995,
                descripcion:"Samsung Galaxy S21 FE/ 6GB RAM/ 128GB/ Olive"
            },
            {
                name:"Huawei nova 9",
                precio: 7995,
                descripcion:" 6GB RAM/ 128GB/ Crystal Blue"
            },   {
                name:"Xiaomi Redmi 10",
                precio: 5595,
                descripcion:"4GB RAM/ 64GB/ Carbon Gray"
            },
            {
                name:"Laptop Lenovo Yoga Slim",
                precio: 16995,
                descripcion:"7 14 AMD/ Ryzen 5/ 8GB RAM/ 256GB SSD/ Gris"
            }, {
                name:"Honor 70",
                precio: 15995,
                descripcion:"/ 8GB RAM/ 256GB/ Crystal Silver"
            },
            {
                name:"Audífonos JBL",
                precio: 1595,
                descripcion:"Audífonos JBL/ Vibe 100/ Inalámbrico/ Negro"
            },
        ]

    },
    {
        name:"radioshack",
        imagen:"",
        idCategoria:5,
        productos: [
            
        ]

    }
]