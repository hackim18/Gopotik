// string -> object = JSON.parse
// object -> string = JSON.stringify

localStorage.setItem("users", JSON.stringify({ //
    "wahyu": {
        username: "wahyu",
        password: "hacktiv8"
    },
    "hakim": {
        username: "hakim",
        password: "hacktiv8"
    },
    "raihan": {
        username: "raihan",
        password: "hacktiv8"
    },
    "carlos": {
        username: "carlos",
        password: "hacktiv8"
    }, 
    "abdul": {
        username: "abdul",
        password: "hacktiv8"
    },
    "arief": {
        username: "arief",
        password: "hacktiv8"
    },
    "billy": {
        username: "billy",
        password: "hacktiv8"
    },
    "robby": {
        username: "robby",
        password: "hacktiv8"
    },
    "triyas": {
        username: "triyas",
        password: "hacktiv8"
    },
    "artha": {
        username: "artha",
        password: "hacktiv8"
    }, 
    "dhiren": {
        username: "dhiren",
        password: "hacktiv8"
    },
    "vasu": {
        username: "vasu",
        password: "hacktiv8"
    },
    "ghazi": {
        username: "ghazi",
        password: "hacktiv8"
    }, 
    "rizki": {
        username: "rizki",
        password: "hacktiv8"
    },
    "robherto": {
        username: "robertho",
        password: "hacktiv8"
    },
    "namira": {
        username: "namira",
        password: "hacktiv8"
    },
    "kris": {
        username: "kris",
        password: "hacktiv8"
    },
    "andrean": {
        username: "andrean",
        password: "hacktiv8",
        cart: []

    },
}))
localStorage.setItem("currentUser", JSON.stringify({}))

function loginHandler () {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if (login(username, password)) {
        localStorage.setItem("currentUser", JSON.stringify({
            username,
            password
        }))
        window.location.href = "http://127.0.0.1:5500/Gopotik/index.html"
    } else {
        alert("Username or password is incorrect")
    }
}


function login (username, password) {
    let userDatabase = JSON.parse(localStorage.getItem("users"))
    
    if (userDatabase[username]) {
        if (userDatabase[username].password === password) {
            return true
        }
    }

    return false
}
