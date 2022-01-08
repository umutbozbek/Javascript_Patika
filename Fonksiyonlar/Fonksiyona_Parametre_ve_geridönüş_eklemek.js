


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

