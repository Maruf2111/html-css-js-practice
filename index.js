
// function randomNum(min , max){
//     return Math.floor(Math.random()* (max - min + 1) +min);
// }

// console.log(randomNum(1, 6))



// const array = ["maruf", "jibon", "emon", "tarikul"];

// console.log(array.sort());



// const array = [12, 34, 3, 5, 345];

// console.log(array.sort(function(a, b){
//     return b - a;
// }));


// function leapYear(year){
//       if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
//         console.log("year is leap year")

//       }else{
//         console.log("year is not leap year")
//       }
// }

// leapYear(202)



// const vowel = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"]

// function countVowel(sentance){
//        let count = 0;
//        const letter = Array.from(sentance);
//        letter.forEach(function(value){
//         if(vowel.includes(value)){
//             count++
//         }
//        })
//        return count

// }

// console.log(countVowel("my name is maruf ahmod"))


// const number = [1,2,3,4,4,6,6,7,7,8,9,0,]

// const duplicate = number.filter(function(value, index, array){
//     return array.indexOf(value)=== index
// })

// console.log(duplicate);