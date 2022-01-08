


 let firstName="lorem";

function greetings(firstName="",lastName=""){
    // console.log(`merhaba ${firstName}`);
    console.log(`Merhaba ${firstName} ${lastName}`);
}

greetings("parametre");

//bir yada birden fazla parametre alabilir yada hiç parametre almayabilir

function greetings2(firstName,lastName){
    let info=`Merhaba ${firstName} ${lastName}`;
    return info ;
}

let info=greetings2("Ad","Soyad");
//let info="deneme" hata verir info daha önce tanımlandığı için

console.log(info);


function domIdWriteInfo(id,info){

    let domobject=document.querySelector(`#${id}`);
    domobject.innerHTML=info;
}
let htmlInfo='<span style="color:red">Color Red</span>'

domIdWriteInfo('info',htmlInfo)
domIdWriteInfo('greeting',greetings2("lorem","ipsum"));

function daireAlaniHesaplama (r, PI = 3.14) 
{ 
    return PI*r*r;		
}

function carpma (a1, a2)
{
    return a1*a2;
}

var alan1 = daireAlaniHesaplama(5); // 5 ve 6 argümanları için dairelerin alanları hesaplandı.
var alan2 = daireAlaniHesaplama(6); 
var donenSonuc = carpma(alan1, alan2); // Hesaplanan alanlar argüman olarak verildi.
console.log(donenSonuc); 