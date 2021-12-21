
//Number veri türü tanımlamak

let price =100;
let tax=0.18;
let periceTax = price * tax;
let total =price+periceTax;
console.log("Fiyat:", price,"KDV Oranı:", tax,"KDV Tutarı:", periceTax,"Fiyat: ",total);

let stringNumber="11";
console.log(stringNumber);
let newNumber =Number(stringNumber);
console.log(newNumber);

//arttırma ve azaltma işlemleri 

let counter =320;

counter =counter +1; // uzun yol

counter +=1;  //orta yol

counter ++;

console.log(counter);

counter --;

console.log(counter);

counter *=10;
console.log(counter);

counter /=2 ;
console.log(counter);

// üs alma ** 

console.log(2**4);

//aşağı yuvarlama Math.floor
console.log(Math.floor(1.7)); 

//yukarıya yuvarlama Math.ceil

console.log(Math.ceil(1.2));

//yakın yuvarlama işlemi Math.round

console.log(Math.round(1.4));