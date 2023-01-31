// window.alert("deneme")
// alert("merhabalar");

// console.log(" ı am console.log");
// console.warn(" ı am console.warn");
// console.info(" ı am console.info");
// console.error(" ı am console.info");
// document.writeln("Merhabalar1");
//console.log(typeof number1);

// SAF
// Kullanıcı tarafından alınan iki sayıyı toplayan js algoritmasını yazınız ?
// function twoNumberSum1() {
//     let number1,number2; 
//     number1= Number(prompt("Lütfen 1.sayıyı giriniz."));
//     number2 = Number(prompt("Lütfen 2.sayıyı giriniz"));
//     const number3 = number1 + number2;
//     console.log(number3);
// }
// //twoNumberSum1()

// //Anonymous FC
//  let  twoNumberSum2= function () {
//     let number1,number2; 
//     number1= Number(prompt("Lütfen 1.sayıyı giriniz."));
//     number2 = Number(prompt("Lütfen 2.sayıyı giriniz"));
//     const number3 = number1 + number2;
//     console.log(number3);
// }
// //twoNumberSum2()

// //Arrow  FC
// let  twoNumberSum3=  () => {
//     let number1,number2; 
//     number1= Number(prompt("Lütfen 1.sayıyı giriniz."));
//     number2 = Number(prompt("Lütfen 2.sayıyı giriniz"));
//     const number3 = number1 + number2;
//     console.log(number3);
// }
// //twoNumberSum3()


// //Arrow  FC
// let  twoNumberSum4=  (number1,number2) => {
//     return number1 + number2;
// }
//  let number5= twoNumberSum4(4,5)
//  console.log(number5);

//2 tane sayının küçük olanın karekökünü hesaplayan algoritma ?
// let twoNumberSum5 = () => {
//     let number1, number2;
//     number1 = Number(prompt("Lütfen 1.sayıyı giriniz."));
//     number2 = Number(prompt("Lütfen 2.sayıyı giriniz"));
//     let data = Math.abs(Math.round(Math.sqrt(Math.min(number1, number2))));
//     console.log(data);
// }
// //twoNumberSum5();

// //NaN
// let data1=12/"asd";
// console.log(data1);

// //infinitiy
// try {
//   let data2=12/0;
// console.log(data2);  
// } catch (error) {
//     console.log(error);
//     console.log(error.message);
// }finally{
//     console.log("db.close");
// }

//if else
// let twoNumberSum7 = () => {
//     let number1, number2;
//     number1 = Number(prompt("Lütfen sayı giriniz."));

//     if (number1 < 0) {
//         console.log("negatif");
//     }else{
//         console.log("pozitif");
//     }
// }
// twoNumberSum7();


// let twoNumberSum9 = () => {
//     let number1;
//     number1 = Number(prompt("Lütfen sayı giriniz."));
//     let data = (number1 < 0) ? "negatif" : "pozitif";
//     console.log(data)
// }
// //twoNumberSum9();


// let twoNumberSum12 = () => {
//     console.log((Number(prompt("Lütfen sayı giriniz.")) < 0) ? "negatif" : "pozitif")
// }
// //twoNumberSum12();


// let twoNumberSum7 = () => {
//     let number1, number2;
//     number1 = Number(prompt("Lütfen sayı giriniz."));

//     if (number1 === 1) {
//         console.log("1");
//     } else if (number1 === 2) {
//         console.log("2");
//     } else if (number1 === 3) {
//         console.log("3");
//     } else if (number1 === 4) {
//         console.log("4");
//     } else if (number1 === 5) {
//         console.log("5");
//     } else {
//         console.log("1<=X<=5 dışındadır");
//     }
// }
// //twoNumberSum7();

//LOOP
//iterative
let data12 = () => {
    let number = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10);
    document.write(number + "<br/>")
}
//data12()


//for loop
let data13 = () => {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        //sum = sum + i;
        sum += i;
    }
    document.write(sum + "<br/>");
}
//data13()


//while loop
let data14 = () => {
    let sum = 0;
    let i = 1;
    while (i <= 10) {
        sum += i;
        i++;
    }
    document.write(sum + "<br/>");
}
//data14()

//do-while loop
let data15 = () => {
    let sum = 0;
    let i = 1;
    do {
        sum += i;
        i++;
    } while (i <= 10);
    document.write(sum + "<br/>");
}
//data15();


//1-10 arasındaki 2'ile bölünebilen sayıların toplamı veren algoritması ?
//for - if
let data16 = () => {
    let evenSum = 0, oddSum = 0;
    for (let i = 1; i <= 10; i++) {
        //çift
        if (i % 2 == 0) {
            evenSum += i;
        } else {
            oddSum += i;
        }
        console.log("çift: " + evenSum)
        console.log("tek: " + oddSum)
    }
}
//data16()
