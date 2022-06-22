class Cosmetic {
    constructor (number, productname, date, price, warehouse, img) {
        this.id= number;
        this.productname= productname;
        this.date= date;
        this.price= price;
        this.warehouse= warehouse;
        this.img = img;
    }
    getID() {
        return this.id;
    }
    getproductname() {
        return this.productname;
    }
    getDate() {
        return this.date;
    }
    getprice(){
        return this.price;
    }
    getwarehouse() {
        return this.warehouse;

    }
    getImg() {
        return this.img;
    }
    setID(id) {
        this.id=id;
    }
    setproductname(productname) {
        this.productname=productname;
    }
    setDate(date) {
        this.date=date;
    }
    setprice(price){
        this.price=price;
    }
    setwarehouse(warehouse) {
        this.warehouse=warehouse;
    }
    setImg(img){
        this.img=img;
    }

    edit(number, productname, date, price, warehouse, img){
        this.id= number;
        this.productname= productname;
        this.date= date;
        this.price= price;
        this.warehouse= warehouse;
        this.img = img;

    }
}