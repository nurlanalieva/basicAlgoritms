//alqoritms

//stringin tersden yazilmasi alqoritmi
// function reverseString(str) {
//     var splitString = str.split(""); // var splitString = "hello".split("");
//     var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     console.log(splitString, "splitString");
//     console.log(reverseArray, "reverseArray");
//     console.log(joinArray, "joinArray");
//     return joinArray; // "olleh"
// }
//   reverseString("Nurlana Aliyeva");


//stringin tersden yazilmasi alqoritmi versiya 2
// function reverseString(str) {
//     console.log(str.split("").reverse().join(""));
//     return str.split("").reverse().join("");
// }
//   reverseString("Nurlana Aliyeva");


//stringin tersden yazilmasi alqoritmi versiya 3 for-la
// function reverseStringWithLoop(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     console.log(newString, "newString");
//     return newString;
// }
//   reverseStringWithLoop("Nurlana Aliyeva");


//selsinin farenheite cevirilmesi alqoritmi
// function convertToF(celsius) {
//     let fahrenheit = celsius * 9/5 + 32;
//     console.log(fahrenheit);
//     return fahrenheit;
//   }
//   convertToF(30);

//ededin faktorilalini tapilamsi alqoritmi
// function factorialize(num) {
//     for (var item = 1; num > 0; num--) {
//        item *= num;
//    }
//    console.log(item, "item factorial");
//      return item;
//    }

//    factorialize(5);


//stringde en uzun sozu tapmaq ucun alqroitm
// function findLongestWordLength(str) {
//   let strLength = str.split(" ");
//   let letterCount = 0
//   for (let i = 0; i < strLength.length; i++) {
//       const element = strLength[i];
//       console.log(element);
//       if (element.length > letterCount) {
//           letterCount = element.length
//       }
//   }
//   console.log(letterCount, "letterCount");
//     return letterCount;
//   }

//   findLongestWordLength("Bu stringdeki en uzun soz hansidir goresen?");

//arrayin icindeki un boyuk reqemleri qaytarir

//   largestOfFour([[4, 9, 1, 3], [13, 26, 18, 26], [32, 35, 67, 39], [10008, 1001, 857, 1]]);

//   function largestOfFour(arr) {
//     var results = [];
//     for (var n = 0; n < arr.length; n++) {
//       var largestNumber = arr[n][0];
//       for (var k = 1; k < arr[n].length; k++) {
//         if (arr[n][k] > largestNumber) {
//           largestNumber = arr[n][k];
//         }
//       }
//       results[n] = largestNumber;
//     }
//     console.log(results, "results");
//     return results;
//   }

//sonu bu herifle qurtarib qurtarmadigini yoxlayr
// function confirmEnding(str, target) {
//     //belede yazmaq  olar lakin qisalmish formada
//     // var isEndWith = false;
//     // if(str.slice(-target.length) === target){
//     //   isEndWith = true;
//     // }else{
//     //     false;
//     // }
//     // console.log(isEndWith ,"isEndWith");
//     // return isEndWith;

//     // formada bee yaza bilerik
//     console.log(str.slice(-target.length) === target);
//     return str.slice(-target.length) === target;
// }
// confirmEnding("Nurlana", "a");

//bir stringi verilen reqem qeder rekrar eletddirmek
// function repeatStringNumTimes(str, num) {
//     let acuumulateStr = ""
//    for (let i = 1; i <= num; i++) {
//        if (num<0) {
//         acuumulateStr = "";
//        }else{
//         acuumulateStr += str; 
//        }
//    }
//    console.log(acuumulateStr, "str");
//     return acuumulateStr;
//   }

//   repeatStringNumTimes("nurlana", 3);
//qisa yazilishi

//   function repeatStringNumTimes(str, num) {
//     return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
//   }

//Verilmiş  stringin uzunluğundan  verilmish reqem  boyukdurse   stringi kəsin. Kəsilmiş stringe  ... sonluqlugunun elave edilmesi .
// function truncateString(str, num) {
//     if (str.length > num) {
//         console.log(str.slice(0, num) + "..." , "str.slice(0, num) +");
//       return str.slice(0, num) + "...";
//     } else {
//         console.log(str, "str");
//       return str;
//     }
//   }
//   truncateString("nurlana", 3);

////verilmish arrayin icinde dovredib verilmish funkisyani odeyen reqemi tapmaq ucun alqoritm
// function findElement(arr, func) {
//     let num = 0;
//     for (let i = 0; i < arr.length; i++) {
//         num = arr[i];
//         // console.log(num);    

//         if (func(num)) {
//             console.log(num);
//             return num;
//         }
//     }
//     console.log(num);
//     return underfined;
// }
////qisa yazilish
// function findElement(arr, func) {
//     return arr.find(func);
// }
// findElement([1, 48, 3, 4], num => num % 2 === 0);

// elemntin boolean olub olmamasini yoxlamaq 
// function booWho(bool) {
//     console.log(typeof bool === "boolean", "typeof bool === 'boolean'");
//     return typeof bool === "boolean";
//   } 
  
//   booWho(null);
  