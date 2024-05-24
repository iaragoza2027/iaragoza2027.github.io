// *I am so sorry to whoever has to read and understand this code. It's so confusing, and I'm surprised that I'm still able to make changes to this script file.

// initial variables //
var shopCatalogue=[];
var cartList=[];
cartList.push(null); // total

// list of catalogue items //
var catalogue = [
    [ // Nike
        'catalogue[0]',
        { name: 'Nike Air Max', description: 'Comfortable & stylish.', price: 4000.00, image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8cc40f5a-3693-4976-9ce0-70ec9687889b/air-max-90-shoes-K0mczj.png' },
        { name: 'Nike Air Force 1', description: 'Classic & durable.', price: 6200.00, image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png' },
        { name: 'Nike React', description: 'Lightweight', price: 5500.00, image: 'https://www.cosmossport.gr/2688626-product_large/nike-w-react-r3vision.jpg' },
        { name: 'Nike ZoomX', description: 'Running shoe.', price: 6000.00, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/49ec2d34-fc43-4ea6-9276-649b34c59cc6/vomero-17-road-running-shoes-49tSC9.png' },
        { name: 'Nike Pegasus', description: 'Everyday trainer.', price: 7800.00, image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3ed37c15-8f99-42dd-8582-cecef36df37c/pegasus-40-road-running-shoes-c44wF5.png' },
        { name: 'Nike Air Jordan 1', description: 'Flexible & natural feel.', price: 6600.00, image: 'https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/ni8ositdmvxmx1rqdd4x/air-jordan-1-low-gym-red-release-date.jpg' }    
    ], [ // Adidas
        'catalogue[1]',
        { name: 'Adidas Ultraboost', description: 'Energy return', price: 6500.00, image: 'https://cdn.awsli.com.br/600x1000/1064/1064602/produto/248351200/2369321d-532a-4c52-b95b-2f044a090d49-my6b0wfbyh.jpg' },
        { name: 'Adidas NMD', description: 'Modern & stylish.', price: 5500.00, image: 'https://s.yimg.com/ob/image/94851679-56fd-41d5-b5be-7f4d3f85ce8d.jpg' },
        { name: 'Adidas Superstar', description: 'Iconic & timeless.', price: 4800.00, image: 'https://media.shoesonline.co.il/2021/04/women-Adidas-Egle-Superstar-2.0__Q47223-1-500x500.jpg' },
        { name: 'Adidas Gazelle', description: 'Retro & versatile.', price: 3800.00, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/659a50e02eeb4977b7cca7fb0080500e_9366/Gazelle_Shoes_Blue_BB5478_06_standard.jpg' },
        { name: 'Adidas Ultra Bounce', description: 'Trendy & comfortable.', price: 5500.00, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c65fcfc14f36409d99ba6170cb21e03c_9366/Ultrabounce_Shoes_Blue_ID2247_06_standard.jpg' },
        { name: 'Adidas Stan Smith', description: 'Timeless & clean.', price: 4300.00, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/eb99e11030304222b5abf94f470f7642_9366/Stan_Smith_Shoes_White_IG1320_06_standard.jpg' }
    ], [ // New Balance
        'catalogue[2]',
        { name: 'NB 990v5', description: 'Made in the USA w/ quality.', price: 8200.00, image: 'https://media.stylerunner.com/products/ed9d5097/w990gl5_2.jpg' },
        { name: 'NB 574', description: 'Classic & versatile.', price: 3500.00, image: 'https://cdn-images.buyma.com/imgdata/item/230913/0098833092/567682072/org.jpg' },
        { name: 'NB Fresh Foam', description: 'Cushioned & lightweight.', price: 6000.00, image: 'https://cdn11.bigcommerce.com/s-21x65e8kfn/images/stencil/original/products/67120/324250/NEW695331_1000_11__01216.1710854052.jpg'},
        { name: 'NB FuelCell', description: 'High performance running.', price: 7000.00, image: 'https://s.yimg.com/zp/MerchandiseImages/7AAC979849-SP-14085579.jpg' },
        { name: 'NB Minimus', description: 'Natural feel & flexible.', price: 5300.00, image: 'https://www.footlocker.ph/media/catalog/product/0/8/0803-NEWMFCXLJ400W10H-2.jpg' },
        { name: 'NB Hierro', description: 'Trail running & durable.', price: 6400.00, image: 'https://cdna.lystit.com/photos/amazon/243f2a80/new-balance-Mindful-Grijs-Calm-Taupe-Fresh-Foam-X-Hierro-V7-Trail-Running-Schoen.jpeg' }
    ], [ // Puma
        'catalogue[3]',
        { name: 'Puma Ignite Limitless', description: 'Unleash your full potential.', price: 5200.00, image: 'https://images.jdmagicbox.com/quickquotes/images_main/puma-ignite-limitless-2-evoknit-mens-running-shoes-191441-black-9-164635584-5qq3m.jpg' },
        { name: 'Puma RS-X Reinvention', description: 'Futuristic design.', price: 6800.00, image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/369579/04/sv01/fnd/PNA/fmt/jpg/Rs-x-Reinvention-Men%E2%80%99s-Sneakers.jpg' },
        { name: 'Puma Rider Twofold', description: 'Vintage vibes', price: 4900.00, image: 'https://img01.ztat.net/article/spp-media-p1/14a874c19eb34df9bfa4f9a8dac2c7da/991f8f392d894c7b83b08838ee91d86c.jpg' },
        { name: 'Puma Cell Alien Kotto', description: 'Urban explorers.', price: 6000.00, image: 'https://hypebeast.com/image/2019/08/puma-cell-alien-white-1.jpg' },
        { name: 'Puma NRGY Comet', description: 'Comfortable & stylish', price: 3200.00, image: 'https://img.mirusports.com/images/products/puma/shoes/59dc219e/default/l/1632660941800.jpeg' },
        {name: 'Puma Axelion Block', description: 'Durable & supportive ', price: 4500.00, image: 'https://i.pinimg.com/474x/bb/17/28/bb1728fbcf1b7696e6e0908e594698a1.jpg' }
    ]
];
catalogue.push();
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
    document.getElementById('catalogue').innerHTML = ''; 
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
    document.getElementById('catalogue').innerHTML += '<div class="col-lg-4 col-sm-6"> <div class="card catalogue-item float"> <img src="'+item.image+'" alt="" class="card-img-top"> <div class="card-body px-3 mx-0"> <h5 class="card-title mb-3">'+item.name+'</h5> <h6 class="card-subtitle text-secondary text-truncate mb-3" title="'+item.description+'">'+item.description+'</h6> <h6 class="card-text mb-3">₱'+item.price+ '</h6> <button class="btn btn-primary" onclick="pushToCartList('+category+','+id+')">Add to cart</button> </div> </div> </div>';
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
        document.getElementById('shopping-cart').innerHTML = '<ul id="shopping-cart" class="list-group list-group-flush"> <li class="list-group-item cart-item"  style="border-radius:20px;"> <span class="mt-2 gray-out" style="font-weight: bold;">Shopping item goes here.</span> <br> <span class="mb-2 gray-out">Price goes here.</span> <span class="mb-2 gray-out">Remove</span> </li> </ul>';
        document.getElementById('cart-total').innerHTML = '<h6 class="mt-2">Total: </h6>'
    }
}
function addToCart(item, id){
    document.getElementById('shopping-cart').innerHTML += '<li class="list-group-item cart-item"  id="cart' + id + '" style="border-radius:20px;"> <span class="mt-2" style="font-weight: bold;">' + item.prod_name + '</span> <br> <span class="mb-2">₱' + item.prod_price + '</span> <span class="mb-2" onclick="removeFromCartList(&apos;' + id + '&apos;)" style="color: firebrick; cursor: pointer;">Remove</span> </li>'
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