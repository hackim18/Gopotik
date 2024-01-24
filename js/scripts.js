/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

/**
  CONTINUE SHOPPING COLOR CHANGE FUNCTION
 */
    // Mendapatkan elemen dengan id "shopping-text"
let shoppingText = document.getElementById("shopping-text");

    // Menambahkan event listener untuk mouseenter
shoppingText.addEventListener("mouseenter", function() {
        // Mengubah warna teks menjadi warna yang diinginkan ketika mouse masuk
    shoppingText.style.color = 'grey';
});

    // Menambahkan event listener untuk mouseleave
shoppingText.addEventListener("mouseleave", function() {
        // Mengembalikan warna teks ke warna asli ketika mouse keluar
     shoppingText.style.color = ""; // Menghapus properti warna
});

