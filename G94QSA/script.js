// *I am so sorry to whoever has to read and understand this code. It's so confusing, and I'm surprised that I'm still able to make changes to this script file.

// initial variables //
var shopCatalogue=[];
var cartList=[];
cartList.push(null); // total

// list of catalogue items //
var catalogue = [];
// category 'Nike'
catalogue.push([
    'catalogue[0]',
    { name: 'Nike Air Max', description: 'Comfortable and stylish.', price: 4000.00, image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8cc40f5a-3693-4976-9ce0-70ec9687889b/air-max-90-shoes-K0mczj.png' },
    { name: 'Nike Air Force 1', description: 'Classic and durable.', price: 6200.00, image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png' },
    { name: 'Nike React', description: 'Lightweight and responsive.', price: 5500.00, image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/80499960-56cd-469b-bc55-2825f2366159/react-infinity-run-flyknit-2-road-running-shoes-n77q2N.png' },
    { name: 'Nike ZoomX', description: 'High performance running shoe.', price: 6000.00, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/49ec2d34-fc43-4ea6-9276-649b34c59cc6/vomero-17-road-running-shoes-49tSC9.png' },
    { name: 'Nike Pegasus', description: 'Everyday trainer.', price: 7800.00, image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3ed37c15-8f99-42dd-8582-cecef36df37c/pegasus-40-road-running-shoes-c44wF5.png' },
    { name: 'Nike Air Jordan 1', description: 'Flexible and natural feel.', price: 6600.00, image: 'https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/ni8ositdmvxmx1rqdd4x/air-jordan-1-low-gym-red-release-date.jpg' }
]);
// category 'Adidas'
catalogue.push([
    'catalogue[1]',
    { name: 'Adidas Ultraboost', description: 'Energy return and comfort.', price: 6500.00, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/89eace13aef44d55b4e9beb2ae0f128c_9366/Ultraboost_1.0_Shoes_Blue_ID2344_01_standard.jpg' },
    { name: 'Adidas NMD', description: 'Streetwear and performance.', price: 3800.00, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0fd9bc2bfc234ce0b69aaef900fddbdf_9366/NMD_R1_Shoes_Black_HQ4452_01_standard.jpg' },
    { name: 'Adidas Superstar', description: 'Iconic and stylish.', price: 6200.00, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg' },
    { name: 'Adidas Gazelle', description: 'Classic and versatile.', price: 5000.00, image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/698e41ae0196408eb16aa7fb008046ad_9366/Gazelle_Shoes_Blue_BB5478_01_standard.jpg' },
    { name: 'Adidas Yeezy', description: 'Exclusive and trendy.', price: 16500.00, image: 'https://cdn-images.farfetch-contents.com/17/25/38/87/17253887_35488785_600.jpg' },
    { name: 'Adidas Stan Smith', description: 'Timeless and sustainable.', price: 6400.00, image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg' }
]);
// category 'Under Armour'
catalogue.push([
    'catalogue[2]',
    { name: 'Under Armour Curry 11', description: 'Basketball Perforcmance.', price: 9200.00, image: 'https://underarmour.scene7.com/is/image/Underarmour/3026617-300_DEFAULT?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688' },
    { name: 'Under Armour Curry 7', description: 'Basketball performance.', price: 5600.00, image: 'https://images.stockx.com/360/Under-Armour-Curry-7-UNDRTD/Images/Under-Armour-Curry-7-UNDRTD/Lv2/img01.jpg?fm=webp&auto=compress&w=480&dpr=2&updated_at=1635319536&h=320&q=60' },
    { name: 'Under Armour Curry Flow G', description: 'Durable and tough.', price: 4200.00, image: 'https://sportscentral.ph/cdn/shop/files/White-s7.3026274-101_DEFAULT_2048x.jpg?v=1687081442' },
    { name: 'Under Armour Embiid 1', description: 'Basketball Performance.', price: 5300.00, image: 'https://about.underarmour.com/content/ua/about/en/stories/2020/08/the-ua-embiid-one-releases-september-18/jcr%3acontent/root/container/container/image.coreimg.jpg/1663118840912.jpg' },
    { name: 'Under Armour Curry 4 Flotro Low', description: 'Light and responsive.', price: 7600.00, image: 'https://underarmour.scene7.com/is/image/Underarmour/3026620-100_DEFAULT?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688' },
    { name: 'Under Armour Spawn 3', description: 'High performance basketball.', price: 4900.00, image: 'https://underarmour.scene7.com/is/image/Underarmour/3023738-002_A?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688' }
]);
// category 'New Balance'
catalogue.push([
    'catalogue[3]',
    { name: 'New Balance 990', description: 'Heritage style.', price: 5500.00, image: 'https://nb.scene7.com/is/image/NB/u990tg4_nb_02_i?$pdpflexf2$&wid=440&hei=440' },
    { name: 'New Balance 574', description: 'Classic and versatile.', price: 5200.00, image: 'https://nb.scene7.com/is/image/NB/ml574evg_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600' },
    { name: 'New Balance Fresh Foam 1080', description: 'Comfort and support.', price: 3800.00, image: 'https://m.media-amazon.com/images/I/717cJkPDNOL._AC_SL1500_.jpg' },
    { name: 'New Balance Minimus', description: 'Minimalist design.', price: 5400.00, image: 'https://d1nymbkeomeoqg.cloudfront.net/photos/15/75/279051_21303_XL.jpg' },
    { name: 'New Balance FuelCell', description: 'High performance.', price: 5600.00, image: 'https://nb.scene7.com/is/image/NB/wrcella4_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600' },
    { name: 'New Balance 993', description: 'Premium quality.', price: 5000.00, image: 'https://imagedelivery.net/2DfovxNet9Syc-4xYpcsGg/c287a736-ab02-4a72-33c0-700a7707b500/product' }
]);
// test category
var test = [
    'test',
    { name: 'bayoen!', description: 'puyo puyo puyo puyo puyo puyo', price: 2000.00,image: 'https://static.myfigurecollection.net/upload/items/1/1274232-1a889.jpg'}, 
    { name: 'melody scale!', description: 'puyo puyo puyo puyo puyo puyo', price: 2000.00,image: 'https://static.myfigurecollection.net/upload/items/1/1274231-bc0de.jpg'}, 
    { name: 'catastrophe!', description: 'puyo puyo puyo puyo puyo puyo', price: 2000.00, image: 'https://static.myfigurecollection.net/upload/items/1/1274233-c3d47.jpg'}, 
    { name: 'i want you!', description: 'puyo puyo puyo puyo puyo puyo', price: 2000.00, image: 'https://static.myfigurecollection.net/upload/items/1/1274236-a8359.jpg'}, 
    { name: 'ugh...', description: 'puyo puyo puyo puyo puyo puyo puyo', price: 2000.00, image: 'https://static.myfigurecollection.net/upload/items/1/1274234-a0409.jpg'}, 
    { name: 'creme double!', description: 'puyo puyo puyo puyo puyo puyo', price: 2000.00, image: 'https://static.myfigurecollection.net/upload/items/1/1274235-79413.jpg'}, 
];

// functions //
// catalogue functions
function generateCatalogue(category){ // *this function is an absolute mess of a loop croissant, but it works, right? ahahahahahahaha (ノ￣□￣)ノ ~┻━┻
    document.getElementById('catalogue-list').innerHTML = ''; 
    if (category == 'all'){
        for (var categCount=0; categCount<catalogue.length; categCount++){
            subCategory = catalogue[categCount];
            for (var genCount=1; genCount<subCategory.length; genCount++){
                addToCatalogue(subCategory[genCount], genCount, subCategory[0]);
            }
        }
    } else{
        for (var genCount=1; genCount<category.length; genCount++){
            addToCatalogue(category[genCount], genCount, category[0]);
        }
    }
}
function addToCatalogue(item, id, category){
    document.getElementById('catalogue-list').innerHTML += '<div class="col-lg-4 col-sm-6"> <div class="card catalogue-item"> <img src="'+item.image+'" alt="" class="card-img-top"> <div class="card-body px-3 mx-0"> <h5 class="card-title mb-3">'+item.name+'</h5> <h6 class="card-subtitle text-secondary text-truncate mb-3" title="'+item.description+'">'+item.description+'</h6> <h6 class="card-text mb-3">₱'+item.price+ '</h6> <button class="btn btn-primary" onclick="pushToCartList('+category+','+id+')">Add to cart</button> </div> </div> </div>';
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
    var inputCartList = cartList;
    inputCartList.shift();
    document.getElementById('cart-input').value=JSON.stringify(inputCartList);
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