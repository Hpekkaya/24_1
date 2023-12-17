//date object 
// const myDate = new Date()
// console.log("Full Date :", myDate)
// console.log("Full Year :", myDate.getFullYear())
// console.log("Only Month :", myDate.getMonth()) //ocak 0 değerinden başlar
// console.log("Day of the week :", myDate.getDay()) //pazar 0 değerinden başlıyor
// console.log("Day of the Month :", myDate.getDate())
// console.log("Only Hour :", myDate.getHours())
// console.log("Only Hour :", myDate.getMinutes())
// console.log("Only Hour :", myDate.getSeconds())
// console.log("Previous Full Date  :", new Date("May 11 1970 05:10:"))

//math object
// console.log("The most close value  4.3-> ", 
// Math.round(4.3), " and and (4.55)-> ", Math.round(4.55)) 
// console.log("Rounded up to its nearest integer 4.3-> ",Math.ceil(4.3)) 
// console.log("Rounded down to its nearest integer  4.9-> ",Math.floor(4.9)) 
// console.log("Returns the integer part  4.55-> ",Math.trunc(4.55)) //tam sayı kısmı
// console.log("Returns the value of 2 to the power of 8-> ", Math.pow(8,2)) 
// console.log("Returns the squarroot of 64-> ",Math.sqrt(64)) 
// console.log("Find the lowest  value in (0,34,89,146) : ", Math.min(0,34,89,146)) 
// console.log("Find the highest  value in (0,34,89,146) : ", Math.max(0,34,89,146)) 
// console.log("Returns a random number bet  0-100 :", (Math.random()*100).toFixed(0))
// console.log("Returns a random number bet  0-100 :", Math.trunc(Math.random()*100))
// console.log("Returns the value of 1/4 to the power of 16->", Math.pow(16,1/4))


//comparison (karşılaştırma)
// let x = 8 ;
// let y = 20;
// console.log(" '==' '!=' compare only value \"8\" != x -> ")
// console.log( "8" != x, "There is no type precision ") 

// console.log(" '===' '!==' compare value  and type \"8\" != x -> ")
// console.log("\"8\" === x -> ", "8" === x, "--Compare both value and type ") 
// console.log("\"8\" !== x -> ", "8" !== x, "--Compare both value and type ") 

// console.log(!x)

//conditional (ternary) operatör 
// Condition ? if the condition true : if the condition false
// let age = 19;
// let votable = (age<18) ? "Too young to vote" : "Old enough to vote"
// console.log(votable)

// Logical Operators

// let name1 = "Mustafa"
// let name2; //undefined
// let name3 = null ;
// let name4 = 0 ;
// let name5 = "";
// let name6 = NaN;
// let text = "Shown text"

// console.log(name1 || text)
// console.log(name2 || text)
// console.log(name3 || text)
// console.log(name4 || text)
// console.log(name5 || text)
// console.log(name6 || text)
// console.log("---------------")
// // || Returns, if there is value in the left, else return the right 
// console.log(name1 && text)
// console.log(name2 && text)
// console.log(name3 && text)
// console.log(name4 && text)
// console.log(name5 && text)
// console.log(name6 && text)
// //&& Returns the right value if there is value in the left, else return the left
 
// Conditional statements (koşullu ifadeler)
// if, else, else if, switch

// if
// let hour= 19;
// if (hour < 18) {
//     console.log("Good Day")
// }
// if(hour > 18) {
//     console.log("Good Night")
// }

// else
// let hour= 19;
// if (hour < 18) {
//     console.log("Good Day")
// }
// else {
//     console.log("Good Night")
// }

//else if
// let hour = 4;
// let name = "Ahmet";
// if (hour < 10) {
//   if (isim == "Ahmet") {
//     console.log("Good Morning Ahmet");
//   } else {
//     console.log("Good Morning Foreigner");
//   }
// } else if (hour < 21) {
//   console.log("Good Evening ");
// } else {
//   console.log("Good Night ");
// }
 
//Switch; performs different actions based on different conditions.
// let day = new Date().getDay();
// let dayX = Math.abs((day + 10)%7);
// day= dayX
// switch(day ) {  
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday"
//         break;
//     case 2:
//         day = "Tuesday"
//         break;
//     case 3:
//         day= "Wednesday";
//         break;
//     case 4:
//         day="Thursday";
//         break;
//     case 5:
//         day="Friday";
//         break;
//     case 6:
//         day="Saturday"
//         break;
//     default:
//         day = "Incorrect data"
// }
// console.log(day) // type of cases have to be same

//Loops
// for, for/in, for/of, while, do/while

//For : Executes a block of code a number of times. 
// for (Definition (First value) ; Condition; new value after the code executed)

// for (let i = 0; i < 5; i++){
//     console.log("Loop runs")
//     console.log(`Value of i :  ${i}`)
// }

// let text = ""
// for (let i = 0 ; i < 5 ; i+=0.25){
//     // text += "The number is " + i + "\n"
//     console.log("The number is ", i.toFixed(2))
// }

// // for döngüsünde ilk kısım opsiyoneldir
// let j = 0;
// for(let k=1,l=10,m;j<=5;k++,l--){
// //coding
// console.log("k :",k," -  l :",l," - j : ", j)
// j++
// }


// const arr = [0, 1, 2 ,3, 4, 5]
// for(let l=0, r=arr.length-1; l<r; l++, r--){
//     console.log(" l: ",l, " Array[l]-> ", arr[l], " || r: ", r, " Array[r]-> ", arr[r])
// }
 





