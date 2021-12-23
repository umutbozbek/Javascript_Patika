
let email="umutbozbek58@gmail.com";
let firstName="umut";
let lastName="BOZBEK";

 //string karakter sayısı lenght
console.log(email.length);

//ilk karakteri bulma [0]
console.log(firstName[0]);
console.log(firstName.charAt(0));

//büyük harf/küçük harf

firstName=firstName.toUpperCase();
console.log(firstName);

firstName=firstName.toLowerCase();
console.log(firstName);

//string içinde ,istediğimiz bilgiyi aramak ve yerini bulmak //search
console.log(email.search("@"));
// console.log(email[15]);


// belli bir yere kadar almak slice
console.log(email.slice(12));
let Domain=email.slice(email.search('@')+1);
console.log(Domain);
/* indexof kullanarak domain'in gmail kısmını alma */
Domain.slice(0,Domain.indexOf('.'));
console.log(Domain);

//bilgiyi değiştirmek -replace:

email=email.replace('gmail.com','hotmail.com');
console.log(email);


// istediğim bilgi varmı -incldes
email.includes('asdsad'); //false döner -1 değil 
email.includes('@'); //true döner ;

// istediğim bilgiyle başlayıp bitti mi? -startsWidh -endsWidh

console.log(email.endsWith('hotmail.com'));


 

// ilk harfleri büyük yapmak

let fullName=`${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`;

console.log(fullName);