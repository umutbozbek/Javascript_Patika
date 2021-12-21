


let userName="umut";

const Domain="kodluyoruz.org";

let email=userName  + "@" +Domain;

let info =`Merhaba ${userName} sitemize hoşgeldin. mail idresin:${email}
mail adresinin uzunluğu ${email.length}
borcunuz:${(2+3)*10}TL
günün saat bilgisi:${new Date().getHours()}`;

console.log(info);