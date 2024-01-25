let database = [
    {namaProduk: "Cetrizine", harga: 20_000, diskon: 20/100, sisaStock: 11},
    {namaProduk: "Bodrex", harga: 25_000, diskon: 10/100, sisaStock: 40},
    {namaProduk: "Panadol", harga: 30_000, diskon: 0/100, sisaStock: 200},
    {namaProduk: "Actifed", harga: 40_000, diskon: 10/100, sisaStock: 60},
    {namaProduk: "Metformin", harga: 45_000, diskon: 5/100, sisaStock: 90},
    {namaProduk: "Antimo", harga: 55_000, diskon: 10/100, sisaStock: 130},
    {namaProduk: "Rhinos", harga: 150_000, diskon: 20/100, sisaStock: 30},
    {namaProduk: "Loperamide", harga: 30_000, diskon: 0/100, sisaStock: 10}
];

function cardProduk(targetId, searchTerm = "") {
    let lowerCaseSearchTerm = searchTerm.toLowerCase();
    let targetElement = document.getElementById(targetId);
    targetElement.innerHTML = "";
    let namaProduk = "";
    let harga = 0;
    let stok = 0;
    let diskon = 0;
    for (let i = 0; i < database.length; i++) {
        namaProduk = database[i].namaProduk;
        harga = database[i].harga - (database[i].harga * database[i].diskon);
        stok = database[i].sisaStock;
        diskon = database[i].harga * database[i].diskon + harga;
        if (lowerCaseSearchTerm === "" || namaProduk.toLowerCase().includes(lowerCaseSearchTerm)) {
            if (diskon === harga) {
                diskon = "";
            }
            else {
                diskon = String("Rp. " + diskon);
            }
            console.log(namaProduk, harga, stok);
            let colElement = document.createElement('div');
            colElement.className = 'col mb-5';
            colElement.id = `card-${namaProduk}`;
            let cardElement = document.createElement('div');
            cardElement.className = 'card h-100';
            cardElement.innerHTML = `
            <div class="badge text-white position-absolute" style="top: 0.5rem; right: 0.5rem; background-color: green; " id="stock-${namaProduk}">Sisa Stok ${stok}</div>
            <img  class="card-img-top" src="img/${namaProduk}.jpg" alt="..." />
            <div class="card-body p-4" style="box-shadow: 5px 5px 30px rgba(0,0,0,.2);">
                <div class="text-center">
                    <h5 class="fw-bolder" style="color: black; font-family: montserrat;">${namaProduk}</h5>
                    <span class="text-muted text-decoration-line-through">${diskon}</span>
                    <span style="color: rgb(0, 164, 0); font-family: 'Oswald', sans-serif; font-weight: bold;">Rp. ${harga}</span>
                </div>
            </div>
            <div class="card-footer pt-0 border-top-0 bg-transparent" style="padding-left: 0; padding-right: 0;">
                <div class="text-center">
                    <a id="orderButton-${namaProduk}"  class="btn btn-outline-dark mt-auto" onclick="buttonOrder('${namaProduk}')" style="width: 100%; text-align: center; background-color: rgb(32, 94, 130); color: white; border: 0; font-family: 'Poppins', sans-serif; margin-bottom: 0;">Order</a>
                </div>
            </div>
            `;
            colElement.appendChild(cardElement);
            var targetElements = document.getElementById(targetId);
            targetElements.appendChild(colElement);

            // Tambahkan event listener untuk hover
            document.getElementById(`orderButton-${namaProduk}`).addEventListener("mouseover", function() {
                this.style.backgroundColor = "green";
            });
            document.getElementById(`orderButton-${namaProduk}`).addEventListener("mouseout", function() {
                this.style.backgroundColor = "rgb(32, 94, 130)";
            });
        }
    }
}



    // Fungsi searchProduct
    function searchProduct() {
        let searchTerm = document.getElementById("searchInput").value;
        cardProduk("card-parent", searchTerm);

        // ubah sumber gambar saat tombol di klik
        let searchButtonImage = document.querySelector('.d-flex button img');
        searchButtonImage.src = './assets/searchSelected.png';

        // Dapatkan elemen tombol
        let searchButton = document.querySelector('.d-flex button');


        // Tambahkan event listener untuk mouseout

        searchButton.addEventListener('mouseout', function() {
    // Ubah sumber gambar kembali ke gambar asli
    let searchButtonImage = document.querySelector('.d-flex button img');
    searchButtonImage.src = './assets/search.png';  // Ganti dengan sumber gambar asli
});

        
    }
    
    // Fungsi searchProduct dengan menekan Enter
    document.getElementById("searchInput").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            searchProduct();
        }
    });

    // Panggil fungsi cardProduk tanpa parameter search term
    cardProduk("card-parent");



function updateCartCount() {
    let cartItems = document.querySelectorAll('#cartItemList .list-group-item');
    let cartItemCount = document.getElementById('cartItemCount');
    cartItemCount.textContent = cartItems.length;
}

let bayar = false;
function bayarSekarang() {
    let total = document.getElementById(`totalHarga`);
    let username = document.getElementById(`User-Name`);
    if (total.innerText !== "Total: Rp0" && bayar === false) {
        bayar = true;
        alert(`Terimakasih ${username.innerText} sudah belanja ditoko kami dengan ${total.innerText} silahkan cek emailmu untuk transfer pembayaran`);
    }
    else if (total.innerText !== "Total: Rp0" && bayar === true) {
        alert("Konfirmasi pembayaran kamu sebelumnya");
    }
    else {
        alert(`Order produk terlebih dahulu!`);
    }
}

function buttonOrder(nama) {
    let namaProduk = "";
    let harga = 0;
    let stok = 0;
    let idStock = document.getElementById(`stock-${nama}`);
    if (Number(idStock.innerText) < 1) {
        console.log("Produk Habis");
        return "Produk Habis";
    }
    for (let i = 0; i < database.length; i++) {
        if (nama === database[i].namaProduk) {
            namaProduk = database[i].namaProduk;
            harga = database[i].harga - (database[i].harga * database[i].diskon);
            database[i].sisaStock--;
            stok = database[i].sisaStock;
        }
    }
    if (stok < 1) {
        idStock.innerText = `Produk Habis`;
        idStock.style.backgroundColor = "red";
        alert("Maaf stok produk ini habis!");
        return "Produk Habis";
    }
    else {
        idStock.innerText = `Sisa Stok ${stok}`;
        idStock.style.backgroundColor = "green";
    }

    if (idStock.style.backgroundColor === "red") {
        idStock.style.backgroundColor = "green";

    }

     // Tambahkan produk ke HTML keranjang belanja
     let cartItemList = document.getElementById('cartItemList');
     let cartItem = document.createElement('div');
     cartItem.className = 'list-group-item';
     cartItem.dataset.productId = namaProduk;  // Gunakan nama produk sebagai ID
     cartItem.innerHTML = `
         <div class="d-flex justify-content-between">
             <span>${namaProduk}</span>
             <span>Rp${harga}</span>
             <button class="btn btn-danger btn-sm" onclick="removeProduct('${namaProduk}')">Hapus</button>
         </div>
     `;
     cartItemList.appendChild(cartItem);
     updateTotal();

    // Perbarui jumlah item di keranjang
    updateCartCount();

        
    // Perbarui tampilan sisa stok
    let stockElement = document.getElementById(`stock-${namaProduk}`);
    stockElement.textContent = `Sisa Stok ${stok}`;

     return {namaProduk, harga, stok};
 }
 


// function kekeranjang() {
//     let obj = buttonOrder("Paracetamol");
//     let {namaProduk, harga, stok} = obj;
//     console.log(namaProduk, harga, stok);
// }


//////

function toggleCartMenu() {
    var cartMenu = document.getElementById("cartMenu");

    if (cartMenu.style.display === "none" || cartMenu.style.display === "") {
        cartMenu.style.display = "block";
    } else {
        cartMenu.style.display = "none";
    }
}

function showCheckoutPopup() {
    alert("Total Pembelian Anda: Rp" + totalAmount);
}

function removeProduct(productId) {
    var cartItem = document.querySelector(`#cartItemList [data-product-id="${productId}"]`);
    cartItem.remove();

    
 // Cari produk dalam database dan tambahkan stoknya
 for (let i = 0; i < database.length; i++) {
    if (database[i].namaProduk === productId) {
        database[i].sisaStock++;

        // Perbarui tampilan sisa stok
        let stockElement = document.getElementById(`stock-${productId}`);
        stockElement.textContent = `Sisa Stok ${database[i].sisaStock}`;

        if (database[i].sisaStock > 0) {
            stockElement.style.backgroundColor = "green";
        }


        break;
    }
}

    // Perbarui jumlah item di keranjang dan total harga
    updateTotal();
    updateCartCount();
}

function updateTotal() {
    let totalHarga = 0;
    let cartItems = document.querySelectorAll('#cartItemList .list-group-item');
    cartItems.forEach(function(cartItem) {
        let hargaProduk = parseFloat(cartItem.querySelector('span:nth-child(2)').textContent.replace('Rp', ''));
        totalHarga += hargaProduk;
    });

    // Perbarui tampilan total harga
    let totalElement = document.getElementById('totalHarga');
    totalElement.textContent = 'Total: Rp' + totalHarga;
}


function login() {
alert("Login berhasil!");
$('#loginModal').modal('hide');
}

function calculateTotal() {
    var totalPriceElements = document.querySelectorAll('#cartItemList span:last-child');
    var totalAmount = 0;
    totalPriceElements.forEach(function (priceElement) {
        totalAmount += parseFloat(priceElement.textContent.replace('Rp', ''));
    });
    return totalAmount;
}
function sortProductsByPrice(order) {
    var cardParent = document.getElementById("card-parent");
    var products = Array.from(cardParent.children);
    products.sort(function (a, b) {
        var priceA = parseFloat(a.querySelector('.text-center span:last-child').innerText.replace('Rp', '').replace('.', ''));
        var priceB = parseFloat(b.querySelector('.text-center span:last-child').innerText.replace('Rp', '').replace('.', ''));
        
        if (order === 'asc') {
            return priceA - priceB;
        } else {
            return priceB - priceA;
        }
    });
    cardParent.innerHTML = "";
    products.forEach(function (product) {
        cardParent.appendChild(product);
    });
}

document.getElementById("User-Name").innerHTML = JSON.parse(localStorage.getItem("currentUser")).username;


function testConsole(){
    
}
