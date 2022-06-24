let cosmetic = new Cosmetic('011', "Son 3CE", '20/12/2023', '120.000','100','http://product.hstatic.net/1000025647/product/3ce-private_grande.png' );
let cosmetic1 = new Cosmetic('012','Son Mac','05/02/2023','300.000', '1250','https://nuty.vn/wp-content/uploads/2017/09/son-mac-646-1.jpg');
let cosmetic2 = new Cosmetic('015','Phấn nước Missha','22/01/2023','200.000','40','https://cocoshop.vn/uploads/shops/phan-nuoc/phan-nuoc-missha.jpg');
let cosmetic3 = new Cosmetic('016','Son Black Rouge','22/10/2023','200.000','40','https://product.hstatic.net/200000061028/product/3023161-_1__59a1f4b1f0694c5d8ba0b32e747cbdb1_1024x1024.jpg');
let cosmetic4 = new Cosmetic('020','Bộ cọ trang điểm','15/01/2023','300.000','05','https://reviewaz.vn/storage/co-trang-diem-2.jpg');
let cosmetic5 = new Cosmetic('023','Phấn nước Ysl','11/01/2025','500.000','60','https://cocoshop.vn/uploads/shops/2020_01/phan-nuoc-ysl-le-cushion-encre-de-peau.jpg');
let cosmetic6 = new Cosmetic('024','Nước tẩy trang','25/01/2023','200.000','20','https://xachtaynhat.net/wp-content/uploads/2021/08/Loreal-cho-da-dau-m%E1%BB%A5n.jpg');
let cosmetic7 = new Cosmetic('026','Sữa rửa mặt','22/6/2023','400.000','40','https://xachtaynhat.net/wp-content/uploads/2017/10/S%E1%BB%ADa-r%E1%BB%ADa-m%E1%BA%B7t-%C3%BD-d%C4%A9-Hatomugi-Naturie-Nh%E1%BA%ADt-B%E1%BA%A3n.jpg');
let cosmetic8 = new Cosmetic('028','Mặt nạ','22/10/2022','20.000','1000','https://salt.tikicdn.com/ts/product/cd/12/d3/e036ed3c77d08b2508aeeae57ac7c1e4.jpg');
let cosmetic9 = new Cosmetic('040','Phấn nhũ bắt sáng','20/8/2022','100.000','1500','https://cdn.shopify.com/s/files/1/0494/2430/2231/products/EtudeHouseFaceShineHighlighter8.jpg?v=1623616645');
let cosmetic10 = new Cosmetic('045','Bảng phấn mắt','12/12/2022','200.000','1200','https://product.hstatic.net/1000379579/product/065cd71deb3c7a3705578d6b61212803_a11c73807c804fb0b2a336c3ac7dbeab_master.jpg');
let arr =[cosmetic, cosmetic1, cosmetic2, cosmetic3, cosmetic4, cosmetic5, cosmetic6, cosmetic7, cosmetic8, cosmetic9, cosmetic10];
let manage = new CosmeticManagement(arr);

function addCosmetic(){
    let id = document.getElementById('number').value;
    let productname = document.getElementById('productname').value;
    let date = document.getElementById('date').value;
    let price = document.getElementById('price').value;
    let warehouse = document.getElementById('warehouse').value;
    let img = document.getElementById('img').value;

    let cosmetic = new Cosmetic(id,productname,date,price,warehouse,img);
    manage.addCosmetic(cosmetic);
    manage.showList();
    clear();
}

function clear(){
    document.getElementById('number').value = '';
    document.getElementById('productname').value = '';
    document.getElementById('date').value = '';
    document.getElementById('price').value = '';
    document.getElementById('warehouse').value = '';
    document.getElementById('img').value= '';
}

function deleteCosmetic(id) {
    manage.delete(id);
    manage.showList();
}

let cosmeticId = 0;
function editCosmetic(id){
    cosmeticId = id;
    let cosmetic = manage.findCosmeticById(id);
    document.getElementById('number').value = cosmetic.id;
    document.getElementById('productname').value = cosmetic.productname;
    document.getElementById('date').value = cosmetic.date;
    document.getElementById('price').value = cosmetic.price;
    document.getElementById('warehouse').value = cosmetic.warehouse;
    document.getElementById('img').value = cosmetic.img;

    // cosmeticId = id;
}

function updateCosmetic(){
    let id = document.getElementById('number').value;
    let productname= document.getElementById('productname').value;
    let date = document.getElementById('date').value;
    let price = document.getElementById('price').value;
    let warehouse = document.getElementById('warehouse').value;
    let img = document.getElementById('img').value;

    // let cosmetic = manage.findCosmeticById(cosmeticId);
    manage.edit(cosmeticId,id,productname,date,price,warehouse, img);
    manage.showList();
    clear();
}

manage.showList();
