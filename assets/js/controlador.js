let users = [
    {
        "username":"hola",
        "email":"hola",
        "password":"x",
        "orders": []
    },
    {
        "username":"hola",
        "email":"hola@.es",
        "password":"xxxxxxx",
        "orders": []
    },
];

function login() {
    const emailUser = document.getElementById("emailLogin").value;
    const passUser = document.getElementById("passwordLogin").value;
    
    var ban = false;

    users.forEach(user => {
        if (user.email.trim() === emailUser.trim()) {
            if (user.password.trim() === passUser.trim()) {
                window.location = 'home.html';
                ban=true;
                return;
            }else{
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
    const nameSign = document.getElementById("nameSign").value;
}

