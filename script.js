// Load Products

function loadProducts(){

let products = JSON.parse(localStorage.getItem("products")) || [];

let container = document.getElementById("productContainer");

if(container){

container.innerHTML = "";

products.forEach((product,index)=>{

let imagesHTML="";

product.images.forEach(img=>{

imagesHTML += `
<img src="${img}" width="100" style="margin:5px;">
`;

});

container.innerHTML += `

<div class="product">

<div>
${imagesHTML}
</div>

<h3>${product.title}</h3>

<p>${product.description}</p>

<h4>₹ ${product.price}</h4>

<button onclick="deleteSingle(${index})"
style="margin-top:10px;padding:8px;">
Delete
</button>

</div>

`;

});

}

}

loadProducts();


// Add Product

function addProduct(){

let imagesInput =
document.getElementById("images").value;

let images =
imagesInput.split(",");

let title =
document.getElementById("title").value;

let description =
document.getElementById("description").value;

let price =
document.getElementById("price").value;

let products =
JSON.parse(localStorage.getItem("products")) || [];

products.push({

images,

title,

description,

price

});

localStorage.setItem(
"products",
JSON.stringify(products)
);

alert("Product Added!");

location.reload();

}


// Delete Single Product

function deleteSingle(index){

let products =
JSON.parse(localStorage.getItem("products")) || [];

products.splice(index,1);

localStorage.setItem(
"products",
JSON.stringify(products)
);

location.reload();

}


// Delete All Products

function deleteProducts(){

localStorage.removeItem("products");

alert("All Products Deleted");

location.reload();

}
