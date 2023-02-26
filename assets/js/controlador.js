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

    var ban = false;

    users.forEach(user => {
        if (user.email.trim() === emailUser.trim()) {
            if (user.password.trim() === passUser.trim()) {
                window.location = 'home.html';
                ban = true;
                return;
            } else {
                alert("password incorrect");
                return;
            }
        }
    });

    if (!ban) {
        alert("User not exist")
    }

}


function sign() {
    const emailUser = document.getElementById("emailSignup").value;
    const passUser = document.getElementById("numberSignup").value;
    const nameUser= document.getElementById("usernameSignup").value;
    const numberUser= document.getElementById("numberSignup").value;
     user.forEach(user=>{
        if((user.email.trim() === emailUser.trim()) ){
            alert("User alreay exist")
        }
     })
}

