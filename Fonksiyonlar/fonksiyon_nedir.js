

// function deneme(){
//     console.log("merhaba ")
// }




// const { func } = require("prop-types");

// function hello(){
//     console.log("umut");
//     deneme() //umut merhaba yazdırmak için 2. fonk 1. fonk sonuna ekledim
// }

//şuan hatalı ilerleyen derslerde düzelticez
// function userCheck(){
//     if (userName && age >= 18) {
//         info.innerHTML = "ehliyet alabilirsiniz"
//     } else if (!userName) {
//         info.innerHTML = "Kullanici Adiniz Yok"
//     } else if ( !(age >= 18) ) {
//         info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz"
//     }

// }




//denemeler 

// 1- function printHello(name){
//     console.log("merhaba " + name);
// }

// printHello("umut");

//Örneğin aşağıdaki fonksiyonunun amacı bizden iki adet değeri aldıktan
//sonra o değerlerin toplamını konsola yazdırmak:

// function addition(number1,number2){
//     console.log(number1+number2);
// }

// 3- function  addition(sayi1,sayi2){
//     return (sayi1+sayi2);
// }

// var add = addition(5,6);

// console.log(add);

//4-Fonksiyon Kapsamı

// let sayi1 =4;
// let sayi2=11;

// function addition(){

//     var sayi3=3;

//     return sayi1+sayi2+sayi3;
    
// }   


// function multiplication(){ 
//     return sayi1*sayi3;   çalışmaz çünkü sayi3 başka function da tanımlanmış

//Callback Fonksiyonlar ve Asenkron Çalışma

// function ilkekran(){
//     console.log("ilk ekran çıktısı");
// }

// function ikinciekran(){
//     setTimeout(function(){
//         console.log("ikinci ekran çıktısı")
//     },3000);
// }

// function ucuncuekran(){
//     console.log("üçüncü ekran çıktısı");
// }

// ilkekran();
// ikinciekran();
// ucuncuekran();

// ekran çıktısı 
// İlk ekran çıktısı
// Üçüncü ekran çıktısı
// İkinci ekran çıktısı

// function printScreen1() {
//     console.log("İlk ekran çıktısı");
//   }

//   function printScreen2(callback1, callback2) {
//     setTimeout(function () {
//       callback1();
//       console.log("İkinci ekran çıktısı")
//       callback2();
//     }, 3000);
//   }

//   function printScreen3() {
//     console.log("Üçüncü ekran çıktısı");
//   }


//  printScreen2(printScreen1, printScreen3);



// Fonksiyon Bildirimi(Function Declaration)

// function mesajver(){
//     alert('Merhaba');
// }

// mesajver();


// function mesaj(ad,soyad){
//     alert(`Merhaba ${ad} ${soyad}`)
// }
// mesaj("umut","bozbek");

// mesaj(); //undefinied döner

//Geri Dönüş Değeri (Return Value)

// function topla(sayi1,sayi2){
// return sayi1+sayi2;
// };

// let sonuc=topla(10,20);

// console.log(sonuc);

// function carp(sayi1,sayi2){
//     sayi1*sayi2; //return olmadığı için und
// };


// result=carp(10,20);
// let sonuc2=carp(10,20);
// console.log(sonuc2);


let carpim=(sayi1,sayi2) => sayi1*sayi2;
console.log(carpim(4,5));
/*
    // Daha uzun hali ise;
    const carpim = function(sayi1,sayi2){
      return sayi1 * sayi2;
    }
  */

    // let experience = prompt('Kac yillik gelistirici tecrubeniz var', 4);

    // const developer =
    //   experience > 5
    //     ? () => alert('Bir cok konuyu biliyorum')
    //     : () => alert('Hicbir sey bilmiyorum:)');
    
    // developer();

    // let toplam = (a, b) => {
    //     let result = a + b;
    //     return result;
        
    //   };
    //   console.log(toplam(1,2));

    //   Recursion
    // pow(2,2) = 4
    // pow(2,3) = 8
    // pow(2,4) = 16 değerlerini verecek şekilde diyelim.

    // 1.ci yol (recursion patterni ile düşünmeden)// 1.ci yol (recursion patterni ile düşünmeden)
// function pow(x, n) {
//     let result = 1;
  
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   alert(pow(2, 3)); // 8
//   // recursion ile
//   function pow(x, n) {
//     if (n == 1) {
//       return x;
//     } else {
//       return x * pow(x, n - 1);
//     }
//   }
  
//   alert(pow(2, 3)); // 8

// {
//     let message = 'Merhaba';
//     console.log(message);
//   }
  
//  {
//     let message = 'Hello';
//     console.log(message);
//   }