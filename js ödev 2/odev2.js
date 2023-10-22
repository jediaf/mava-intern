/*let rNum = Math.random() * 90 + 10; //random number
rNum = Math.floor(rNum);
let rOnluk = Math.floor(rNum / 10);
let rBir = rNum % 10;
let yNum = parseInt(prompt("iki basamaklı bir sayı giriniz: ", "10")); //your number
let yOnluk = Math.floor(yNum / 10);
let yBir = yNum % 10;
if (rNum === yNum) {
  console.log("aynı sayıyı tahmin ettin! 10k kazandın");
} else if (rOnluk === yBir && rBir === yOnluk) {
  console.log("switchledin süper! 5k kazandın" + yNum + rNum);
} else if (rOnluk === yOnluk || rBir === yBir) {
  console.log(
    "sadece bir numarayı tutturabildin 1k kazandın senin numaran:" +
      yNum +
      "random numara:" +
      rNum
  );
} else {
  console.log("losers gonna lose");
}
console.log("random sayı:" + rNum);
------------------------------------------------------
örnek1: klavyeden girilen üc şayının ortalamasını al 
*/
/*
let num1 = parseInt(prompt("enter number 1: ", "10"));
let num2 = parseInt(prompt("enter number 2: ", "10"));
let num3 = parseInt(prompt("enter number 3: ", "10"));
let averageNum = (num1 + num2 + num3) / 3;
alert("the average of inputs is:" + averageNum);
*/
/*
örnek2: klavyeden girilen vize ve final notlarına göre geçme durumu
geçme notu 50 vize%40 final %60 etkiliyor
*/
/*let vize = parseInt(prompt("vize notu:"));
let final = parseInt(prompt("final notu:"));
let sonuc = (vize * 40) / 100 + (final * 60) / 100;
if (sonuc > 50) {
  console.log("tebrikler geçtin! ortalaman:" + sonuc);
} else if (sonuc < 50) {
  console.log("sınıfta kaldın. notun:" + sonuc);
}
*/
/*
soru3:kendi adımı 5 kez yazdırmama gerek tüm döngülerle*/
/*for (let i = 0; i < 5; i++) {
  console.log("Ceyda");
}
let j = 0;
while (j < 5) {
  console.log("Ceyda" + (j + 1));
  j++;
}
let k = 0;
do {
  console.log("Ceyda");
  k++;
} while (k < 5); */ /*
soru4:
1 den 100 e kadar olan sayıların toplamını bulan uygulamayı yaz*/
let toplam = 0;
for (let i = 1; i < 100; i++) {
  toplam = toplam + i;
}
console.log("1'den 100 e kadar olan sayıların toplamı:" + toplam);
