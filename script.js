// Load Products

function loadProducts(){

let products = JSON.parse(localStorage.getItem("products")) || [];

let container = document.getElementById("productContainer");

if(container){

container.innerHTML = "";

products.forEach((product,index)=>{

container.innerHTML += `

<div class="product">

<img src="${product.image}" width="200">

<h3>${product.title}</h3>

<p>${product.description}</p>

<h4>₹ ${product.price}</h4>

</div>

`;

});

}

}

loadProducts();


// Add Product

function addProduct(){

let image = document.getElementById("image").value;

let title = document.getElementById("title").value;

let description = document.getElementById("description").value;

let price = document.getElementById("price").value;

let products = JSON.parse(localStorage.getItem("products")) || [];

products.push({

image,

title,

description,

price

});

localStorage.setItem("products", JSON.stringify(products));

alert("Product Added!");

location.reload();

}


// Delete All Products

function deleteProducts(){

localStorage.removeItem("products");

alert("All Products Deleted");

location.reload();

}
