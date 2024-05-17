// initial variables //
var shopCatalogue=[];
var cartList=[];
cartList.push(null); // total

// list of catalogue items //
var generalCatalogueList = [];
// category 1
generalCatalogueList.push([]);

// test category
var categoryTest = [];
categoryTest.push('categoryTest')
var testItem0 = {
    name: 'puyo puyo',
    description: 'puyo puyo',
    price: 2000.00,
    image: 'https://static.myfigurecollection.net/upload/items/1/1274232-1a889.jpg'
}
categoryTest.push(testItem0);
var testItem1 = {
    name: 'puyo puyo puyo',
    description: 'puyo puyo',
    price: 2000.00,
    image: 'https://static.myfigurecollection.net/upload/items/1/1274233-c3d47.jpg'
}
categoryTest.push(testItem1);

// functions //
// catalogue functions
function generateCatalogue(category){
    document.getElementById('catalogue-list').innerHTML = ''; 
    for (var count=1; count<category.length; count++){
        addToCatalogue(category[count], count, category[0]);
    }
}
function generateGeneralCatalogue(){
    document.getElementById('catalogue-list').innerHTML = '';
    for (var count=0; count<generalCatalogueList.length; count++){
        generateCatalogue(generalCatalogueList[count]);
    }
}
function addToCatalogue(item, id, category){
    document.getElementById('catalogue-list').innerHTML += '<div class="col-lg-3 col-sm-6"> <div class="card catalogue-item"> <div class="card-body px-3 mx-0"> <img src="'+item.image+'" alt="" class="card-img-top"> <h5 class="card-title mb-3">'+item.name+'</h5> <h6 class="card-subtitle text-secondary text-truncate mb-3" title="'+item.description+'">'+item.description+'</h6> <h6 class="card-text mb-3">₱'+item.price+ '</h6> <button class="btn btn-primary" onclick="pushToCartList('+category+','+id+')">Add to cart</button> </div> </div> </div>';
}
// cart functions
function pushToCartList(category, id){
    var cartItem = {
        prod_name: category[id].name,
        prod_price: category[id].price,
    }
    cartList.push(cartItem);
    saveCartToLocal();
    generateCart();
}
function generateCart(){
    parseLocalCart();
    if (cartList.length>1){
        document.getElementById('shopping-cart').innerHTML = '';
        cartList[0] = 0;
        for (var count=1; count<cartList.length; count++){
            var cartItem = cartList[count];
            cartList[0] += cartList[count].prod_price;
            addToCart(cartItem, count);
        }
        document.getElementById('cart-total').innerHTML = 'Total: ₱'+cartList[0];
    } else if(cartList.length==1){
        document.getElementById('shopping-cart').innerHTML = '<ul id="shopping-cart" class="list-group list-group-flush"> <li class="list-group-item cart-item"> <span class="mt-2 gray-out" style="font-weight: bold;">Shopping item goes here.</span> <br> <span class="mb-2 gray-out">Price goes here.</span> <span class="mb-2 gray-out">Remove</span> </li> </ul>';
        document.getElementById('cart-total').innerHTML = '<h6 class="mt-2">Total: </h6>'
    }
}
function addToCart(item, id){
    document.getElementById('shopping-cart').innerHTML += '<li class="list-group-item cart-item"  id="cart' + id + '"> <span class="mt-2" style="font-weight: bold;">' + item.prod_name + '</span> <br> <span class="mb-2">₱' + item.prod_price + '</span> <span class="mb-2" onclick="removeFromCartList(&apos;' + id + '&apos;)" style="color: firebrick; cursor: pointer;">Remove</span> </li>'
}
function removeFromCartList(id){
    cartList.splice(id,1);
    saveCartToLocal();
    generateCart();
}
function checkOut(){
    window.location.href = 'order.html';
}
function inputCart(){
    parseLocalCart()
    document.getElementById('cart-input').value=JSON.stringify(cartList);
}
// local storage functions
function saveCartToLocal(){
    localStorage.setItem('local_cartList',JSON.stringify(cartList));
}
function parseLocalCart(){
    var local_JSONcartList = localStorage.getItem('local_cartList');
    var local_cartList = JSON.parse(local_JSONcartList);
    if (local_cartList!=null){
        cartList = local_cartList;
    }
}