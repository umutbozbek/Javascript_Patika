
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







