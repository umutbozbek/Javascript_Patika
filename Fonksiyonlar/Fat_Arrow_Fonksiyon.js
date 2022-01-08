
function hello(firstName){
    console.log(`Merhaba ${firstName}`);

}
hello('javascript');


const helloFunc1 =(firstName) => {console.log(`Merhaba ${firstName}`);}
helloFunc1("helloFunction1");



//bir paametre 1 dönüş işlemi
const helloFunc2= firstName => console.log(`Merhaba ${firstName}`)
helloFunc2("helloFunction2");



const helloFunc3= (firstName,lastName) => 
console.log(`Merhaba ${firstName} ${lastName}`)
helloFunc3("helloFunction3","last name ");




const helloFunc4= (firstName,lastName) => {
let info=`Merhaba ${firstName} ${lastName}`;
console.log(info);
return info;
}
helloFunc4("helloFunc4","info4");



//örnekler

// 1-es5
var sayi=function(x){
    return x*x
}
//1-es6
let sayi=x=>x*x;

//2-es5

var multipler=function(item,multi){
    return item*multi
};

multipler(5,2);

//2-es6

let multipler=(item,multi)=>item*multi;
multipler(5,2);

//3-es5

var myList = function(param1, param2) {
    return param1.concat(param2);
  };
  myList([1, 2], [3, 4, 5]); // output : [ 1, 2, 3, 4, 5 ]

const myList=(param1,param2) =>param1.concat(param2);

myList([1, 2], [3, 4, 5])

//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

var feedCat=(cat)=>{
    if (cat==='hungry'){
        return 'feed the cat';
    }else {
        return 'dont feed the cat';
    }
}

let movie = { 

    name: "La la land",
    
    thisInArrow:() => { 
    console.log("Movie name is " + this.name); // 'this' window'u referans gösterir. Bu yüzden name'yi bulamaz.
    }, 
    
    thisInRegular(){ 
    console.log("Movie name is " + this.name); // 'this' kendisini referans gösterir ve çalışır.
    } 
    
    };
    movie.thisInArrow(); // output : Movie name is
    movie.thisInRegular(); // output : Movie name is La la land


    