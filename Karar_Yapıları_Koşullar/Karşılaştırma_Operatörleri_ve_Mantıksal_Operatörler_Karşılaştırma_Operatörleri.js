

let price ='100'
let userName="umut";

// == eşitse
console.log('== :',price==1);
console.log('== :',price==100);

// === hem değeri hem de türü eşitse
console.log('=== :',price===1);
console.log('=== :',price===100);
console.log('=== :',price==='100');

// !=eşit dğilse
console.log(userName!='guest');

// < küçükse 
console.log('price<100:',price<100);

// <= küçük veya eşitse
console.log('price<=100:',price<=100);

// > büyükse 
console.log('price>200:',price>200);

// >= büyük veya eşitse
console.log('price>=100:',price>=100);

// && ve 
price =0 ;
console.log(price>0 && userName !='guest');

// || veya
console.log(price >0 || userName!='guest');

// ! değil (tersi) 
price=1;
userName ='guest';
console.log(price >0 && userName =='guest');
console.log(price<0 || !userName=='guest');
 




