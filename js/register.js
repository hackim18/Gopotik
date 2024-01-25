function registerHandler() {
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    if (newUsername === "" || newPassword === "") {
        alert("Username dan password tidak boleh kosong ya:)");
    }
    else {
        if (register(newUsername, newPassword)) {
            alert("Registrasi berhasil, sekarang kamu sudah bisa login:)");
            window.location.href = "login.html";
        } else {
            alert("Registrasi gagal, coba pilih username yang lain!");
        }
    }
}

function register(username, password) {
    let userDatabase = JSON.parse(localStorage.getItem("users"));

    if (userDatabase[username]) {
        return false;
    }
    userDatabase[username] = { username, password };
    localStorage.setItem("users", JSON.stringify(userDatabase));

    return true;
}
