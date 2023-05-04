let users = [
    {
        "username": "hola",
        "email": "hola",
        "password": "x",
        "orders": []
    },
    {
        "username": "hola",
        "email": "hola@.es",
        "password": "xxxxxxx",
        "orders": []
    },
];

function btnlogin() {

    document.getElementById('btnLogin').className = "active";
    window.location = 'login.html';
}
function btnsign() {
    document.getElementById('btnSign').className = "active";
    window.location = 'signup.html'
}

function login() {
    const emailUser = document.getElementById("emailLogin").value;
    const passUser = document.getElementById("passwordLogin").value;

    let _datos = {
        email : emailUser,
        password: passUser, 
    }

    fetch('https://backend-jahxr.vercel.app/client/login', {
        method: "POST",
        body: JSON.stringify(_datos),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => {
        window.localStorage.setItem('user', json._id)
        window.location = 'home.html';
    })
    .catch(err => {
        alert("password incorrect");
        return;
    });
}


function sign() {
    const emailUser = document.getElementById("emailSignup").value;
    const passUser = document.getElementById("passwordLogin").value;
    const nameUser= document.getElementById("usernameSignup").value;
    const numberUser= document.getElementById("numberSignup").value;

    let _datos = {
        email : emailUser,
        phone: numberUser,
        username: nameUser,
        password: passUser, 
    }

    fetch('https://backend-jahxr.vercel.app/client/signin', {
        method: "POST",
        body: JSON.stringify(_datos),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => {
        window.localStorage.setItem('user', json._id)
        window.location = 'home.html';
    })
    .catch(err => {
        alert("User alreay exist")
        return;
    });
}

