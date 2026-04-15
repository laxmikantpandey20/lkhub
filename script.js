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


// Add Product with Image Upload

function addProduct(){

let title =
document.getElementById("title").value;

let description =
document.getElementById("description").value;

let price =
document.getElementById("price").value;

let imageFiles =
document.getElementById("productImages").files;

let products =
JSON.parse(localStorage.getItem("products")) || [];

let imagesArray=[];

if(imageFiles.length > 0){

let loadedCount=0;

for(let i=0;i<imageFiles.length;i++){

let reader = new FileReader();

reader.onload=function(e){

imagesArray.push(e.target.result);

loadedCount++;

if(loadedCount===imageFiles.length){

saveProduct();

}

};

reader.readAsDataURL(imageFiles[i]);

}

}
else{

saveProduct();

}

function saveProduct(){

let product={

title:title,
description:description,
price:price,
images:imagesArray

};

products.push(product);

localStorage.setItem(
"products",
JSON.stringify(products)
);

alert("Product Added Successfully!");

document.getElementById("title").value="";
document.getElementById("description").value="";
document.getElementById("price").value="";
document.getElementById("productImages").value="";

}

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
// Search Products

function searchProducts(){

let input =
document.getElementById("searchInput").value.toLowerCase();

let products =
JSON.parse(localStorage.getItem("products")) || [];

let container =
document.getElementById("productContainer");

container.innerHTML="";

products.forEach((product,index)=>{

if(product.title.toLowerCase().includes(input)){

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

}

});

}
