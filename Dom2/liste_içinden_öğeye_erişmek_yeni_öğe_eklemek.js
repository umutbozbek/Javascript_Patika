
//video

// let lastChild =document.querySelector("ul#list>li:last-child");

// // console.log(lastChild);

// lastChild.innerHTML="son öge değişti...";

// let firstChild =document.querySelector("ul#list>li:first-child");
// firstChild.innerHTML="ilk öge değişti...";


// let ulDOM=document.querySelector("ul#list");

// let liDOM=document.createElement('li');


// liDOM.innerHTML="bizim oluşturduğumuz element";

// ulDOM.append(liDOM); en sona eklemek

// ulDOM.prepend(liDOM); //en başa ekler

//dökümantasyon

//id ile ulaşmak

var one =document.getElementById(walterwhite);

//class ile ulaşmak

var two=document.getElementsByClassName("alternate");

for(var i=0;i<two.length;i++){
    two[i].style.color="red";
}

//etiket adı ile 

var list=document.querySelector("ul");

//liste içerisine öğe eklemek

var urun=document.querySelector("#veri");
var ekle=document.querySelector('#ekle');

ekle.addEventListener("click",function(){
    //createElement ile yeni bir lisItem (li) oluşturuyoruz
    var li=document.createElement("li");
    //input ile gelen veriyi "li" içerisine metin olarak almak
    li.textContent=veri.value;
    //appendChild ile oluşturduğumuz elementi "liste" isimli değişkenimizin içerisine ekliyoruz
    list.appendChild(li);
    //veri inputu içerisindeki metni siliyoruz
    veri.value="";
    
});

