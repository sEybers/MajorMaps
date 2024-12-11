class User {
    constructor(fname,lname, email, password,tel,dob) {
        this.fname = fname;
        this.lname = lname
        this.email = email;
        this.password = password;
        this.tel = tel;
        this.dob = dob;
    }

    displayInfo() {
        return `Name: ${this.fname} ${this.lname}, Email: ${this.email}`;
    }
};

class Map {
    constructor(name,major) {
        this.name = name;
        this.major = major;
    }
    displayInfo() {
        return `Name: ${this.name}, Major: ${this.major}`;
    }
};






















// class Product{
//     constructor(id,name,price){
//         this.productID=id;
//         this.productName=name;
//         this.productPrice=price;
//     }
//
//     //getter methods
//     getProductID(){
//         return this.productID;
//     }
//     getProductName(){
//         return this.productName;
//     }
//     getProductPrice(){
//         return this.productPrice;
//     }
//     //setter methods
//
//     setProductName(id) {
//         this.productID = id;
//     }
//     setProductName(name){
//         this.productName = name;
//     }
//     setProductPrice(price){
//         this.productPrice = price;
//     }
// }
//     const p1 = new Product(001,"Yoyo",5);
//     console.log(p1);
//     p1.setProductPrice(8)
//     console.log(p1);
//
//
// let findSum = (i1,i2,i3) => (i1+i2+i3);
//
// // let findAverage = (i1,i2,i3) => {
// //     let sum = findSum(i1,i2,i3)
// //     return sum/3
// // }
//
// let findAverage = (i1,i2,i3) => (findSum(i1,i2,i3))/3;
//
// console.log(findAverage(5,7,9));
//
//
// console.log("Hello World!")
//
// let random = ["pizza",9,false,4.56]
//
// for (let i = 0; i < random.length; i++) {
//
//     console.log(random[i])
// }


