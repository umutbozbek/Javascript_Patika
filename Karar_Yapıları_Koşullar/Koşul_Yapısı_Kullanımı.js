
//Kullanıcı bilgisi varsa ekrana ismini yazdır

// let userName= prompt ("Kullanıcı adını giriniz");

// if (userName.length){  // her zaman true çalışır daha spesifik vermek itersek lenght>x kullanabiliz

//     console.log(`Kullanıcı bilginiz ${userName}`);
// }
// else {
//     console.log("bilgi yok")
// }



//örnek sorular

// 1)örnek 2 sayıdan büyük olanı bulalıms

// var x = 10 ;
// var y =5 ;

// if(x>y){

//     console.log(`${x} sayısı ${y} sayısından büyüktür `);
// }
// else {
//     console.log(`${y} sayısı ${x} sayısından büyüktür`);
// }


// 2.Örnek: Vize ve final notları belli olan bir öğrencinin yıl sonunda 
//dersten geçip geçmediğini hesaplayalım:

// Şartlar:

// Öğrencinin vize notunun %30'unu final notunun %70'ini alalım.
// Vize ve final notunun toplamından doğan not ortalaması eğer 0-30 aralığındaysa KALDINIZ (FF) yazdıralım.
// 31-49 aralığındaysa DC - KOŞULLU yazdıralım.
// 50- 84 aralığındaysa CC - GEÇTİNİZ! yazdıralım.
// 85-100 aralığındaysa Notunuz AA yazdıralım.

// let vizeNot = prompt("vize notunuzu giriniz");
// let finalNot = prompt("final notunuzu giriniz");
// let notOrt = ((vizeNot *0.3)+(finalNot*0.7));

// if(finalNot<50){
//     console.log(`Finalden en az 50 puan alma durumunu karşılayamadığınız için dersten kaldınız Fina notunuz ${finalNot} bütte tekrar deneyin`);
// }
// else if(notOrt>=0 && notOrt<=30){
//     console.log(`Not ortalamanız ${notOrt} bu yüzden KALDINIZ (FF)`);
// }else if(notOrt>=31 && notOrt<=49){
//     console.log(`Not ortalamanız ${notOrt} bu yüzden DC - KOŞULLU geçtiniz`);
// }else if(notOrt>=50 && notOrt<=84){
//     console.log(`Not ortalamanız ${notOrt} bu yüzden CC - GEÇTİNİZ!`);
// }else if(notOrt>=85 && notOrt<=100){
//     console.log(`Not ortalamanız ${notOrt} bu yüzden Notunuz AA `);
// }


//3.Örnek Tahmin Oyunu: Bilgisayar tarafından 10 'a kadar 
//tutulmuş olan rastgele sayıyı bulalım:










