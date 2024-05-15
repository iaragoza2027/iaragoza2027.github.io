var shopCatalogue=[];
var cartList=[];
cartList.push(null); // total

// list of catalogue items
var categoryTest = [];
categoryTest.push('categoryTest')
var testItem0 = {
    name: 'puyo puyo',
    description: 'puyo puyo',
    price: 2000,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.myfigurecollection.net%2Fupload%2Fitems%2F1%2F1274232-1a889.jpg&f=1&nofb=1&ipt=a279c96ee299d263ee63ffc2ed7ddfa557be8a9372704dd5af40d59be9cdd683&ipo=images',
}
categoryTest.push(testItem0);
var testItem1 = {
    name: 'puyo puyo puyo',
    description: 'puyo puyo',
    price: 2000,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2F64QAAOSwQXRjt7Oz%2Fs-l1600.jpg&f=1&nofb=1&ipt=c3a809d1341cc8b7d0858b6da5377ceabcefbb814a2fc345ce7ebcb9b8c24d54&ipo=images',
}
categoryTest.push(testItem1);
// functions
function generateCatalogue(category){
    document.getElementById('catalogue-list').innerHTML = ''; 
    for (var count=1; count<category.length; count++){
        addToCatalogue(category[count], count, category[0]);
    }
}
function addToCatalogue(item, id, category){
    document.getElementById('catalogue-list').innerHTML += '<div class="col-lg-3 col-sm-6"> <div class="card catalogue-item"> <div class="card-body px-3 mx-0"> <img src="'+item.image+'" alt="" class="card-img-top"> <h5 class="card-title mb-3">'+item.name+'</h5> <h6 class="card-subtitle text-secondary text-truncate mb-3" title="'+item.description+'">'+item.description+'</h6> <h6 class="card-text mb-3">₱'+item.price+ '</h6> <button class="btn btn-primary" onclick="pushToCartList('+category+','+id+')">Add to cart</button> </div> </div> </div>';
}
function pushToCartList(category, id){
    var cartItem = {
        name: category[id].name,
        price: category[id].price,
    }
    cartList.push(cartItem);
    generateCart();
}
function generateCart(){
    if (cartList.length>1){
        document.getElementById('shopping-cart').innerHTML = '';
        cartList[0] = 0;
        for (var count=1; count<cartList.length; count++){
            var cartItem = cartList[count];
            cartList[0] += cartList[count].price;
            addToCart(cartItem, count);
        }
        document.getElementById('cart-total').innerHTML = '<h6 class="mt-2">Total: ₱'+cartList[0]+' </h6>'
    } else if(cartList.length==1){
        document.getElementById('shopping-cart').innerHTML = '<ul id="shopping-cart" class="list-group list-group-flush"> <li class="list-group-item cart-item"> <span class="mt-2 gray-out" style="font-weight: bold;">Shopping item goes here.</span> <br> <span class="mb-2 gray-out">Price goes here.</span> <span class="mb-2 gray-out">Remove</span> </li> </ul>';
        document.getElementById('cart-total').innerHTML = '<h6 class="mt-2">Total: </h6>'
    }
}
function addToCart(item, id){
    document.getElementById('shopping-cart').innerHTML += '<li class="list-group-item cart-item"  id="cart' + id + '"> <span class="mt-2" style="font-weight: bold;">' + item.name + '</span> <br> <span class="mb-2">₱' + item.price + '</span> <span class="mb-2" onclick="removeFromCart(cart' + id + ')" style="color: firebrick; cursor: pointer;">Remove</span> </li>'
}
function removeFromCart(cartID){
    cartList.splice(cartID,1)
    generateCart();
}
function checkOut(){
    window.location.href = 'order.html';
}

// commands at start
generateCatalogue(categoryTest);