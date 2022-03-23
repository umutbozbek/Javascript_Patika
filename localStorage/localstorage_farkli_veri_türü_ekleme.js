
let user={userName:"umutbozbek",isActive:true};
console.log(user);  

localStorage.setItem("userInfo",JSON.stringify(user));

let userInfo= localStorage.getItem("userInfo") //bilgi alma

userInfo=JSON.parse(userInfo);

console.log(userInfo)