

function deneme(){
    console.log("merhaba ")
}

function hello(){
    console.log("umut");
    deneme() //umut merhaba yazdırmak için 2. fonk 1. fonk sonuna ekledim
}

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


hello()
