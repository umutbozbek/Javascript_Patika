
// eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulunamadi yaz

let userName = prompt("Kullanici Bilginiz Yaziniz")
let info = document.querySelector("#info") //index.html deki h2 etiketinin id si olan info alınmıştır.

// ternary kullanimi:
// kosul ? dogruysa : yanlissa

// userName.length > 0 ? userName : "Kullani Bilginiz Bulunamadi :("

info.innerHTML = `${userName ? userName : "Kullani Bilginiz Bulunamadi :("}` 


// let boolean;

//     const isBooleanTrue = boolean ? true : false;

//     console.log(isBooleanTrue)
//     >> false

//     console.log(boolean)