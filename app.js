// --------------------------------CHAP#21-25-----------------------------

//----------------------------------Task-1--------------------------------
// var firstName = prompt("Enter Your First Name","Enter....");
// var lastName = prompt("Enter Your Last Name","Enter...");
// var fullName = firstName + " " + lastName;
// alert("Hello," + fullName + "!Welcome!");


//----------------------------------Task-2--------------------------------
// var mobileMode = ("Enter Your Favourite Mobile ");
// document.write(`My favourite Phone is :${mobileMode} <br> `);
// document.write(`Length of string : ${mobileMode.length} `);


//----------------------------------Task-3--------------------------------
// let word = "Pakistani";
// document.write(`<b> String :${word }</b> <br> `);
// document.write(`<b> Index on 'n': ${word .indexOf("n")}</b> `);

//----------------------------------Task-4--------------------------------
// let word = "Hello World"
// document.write(`<b> String : ${word} </b> <br>`);
// document.write(`<b> Last index 'l': ${word.lastIndexOf("l")}</b>`);

//----------------------------------Task-5--------------------------------
// let word = "Pakistani";
// document.write(`<b> String :${word }</b> <br> `);
// document.write(`<b> Character at index 3: ${word[3]}</b> `);

//----------------------------------Task-6---------.-----------------------
// let firstName = prompt("Enter your first name : ");
// let lastName = prompt("Enter your last name : ");
// let fullName = firstName.concat(lastName);
// console.log(`Welcome! ${fullName}`);

//----------------------------------Task-7--------------------------------
// var city = "Hyderabad";
// var replace =  city.replace("Hyder","Islam");
// document.write(`<b> City : ${city}</b> <br>`)
// document.write(`<b> Atfer replacement : ${replace}</b>`);

//----------------------------------Task-8--------------------------------
// var message ="Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.replaceAll("and","&");
// document.write(`${replace}`);

//----------------------------------Task-9--------------------------------
// var value = "472";
// document.write(`<b>value : ${value}</b><br>`);
// document.write(`<b>Type : ${typeof(value)}</b> <br>`);
// var change = Number(value)
// document.write(`<b>value : ${change}</b> <br>`);
// document.write(`<b>Type : ${typeof(change)}</b>`);

//----------------------------------Task-10-------------------------------
// var userInput = prompt("Enter ");
// var changeCase = userInput.toUpperCase();
// document.write(`<b>User Input : ${userInput}</b><br>`);
// document.write(`<b>Upper case : ${changeCase}</b>`);

//----------------------------------Task-11-------------------------------
// let word = prompt("Enter any word : ");
// let firstChar = word.slice(0,1);
// let othersChars = word.slice(1);
// firstChar = firstChar.toUpperCase();
// othersChars = othersChars.toLowerCase();
// let fullName = firstChar + othersChars;
// document.write(`User Input : ${word} <br>`);
// document.write(`Title Case : ${fullName}`);

//----------------------------------Task-12-------------------------------
// let num = 35.36;
// let  numToString =num.toString();
// let numWithoutDot = numToString.replace('.', '');
// document.write(`Number : ${num}<br>`)
// document.write(`Result : ${numWithoutDot}`);

//----------------------------------Task-13-------------------------------
// missing
//----------------------------------Task-14-------------------------------
// let arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");
// let flag = true;

// for (let i = 0; i <= arr.length; i++) {
//   if (userInput == arr[i]) {
//     flag = false;
//     console.log(`${userInput} is avaliable at index ${i} in our bakery`);
//     break;
//   }
// }
// if (flag == true) {
//   console.log(`We are sorry. ${userInput} is not avaliable in our bakery`);
// }
//----------------------------------Task-15-------------------------------
// missing
//----------------------------------Task-16-------------------------------
// var university = "University of Karachi";
// var separate = university.split("");
// for (let i = 0; i < separate.length; i++) {
// document.write(separate[i]+"<br>");
// }

//----------------------------------Task-17-------------------------------

// var word = prompt("Enter any word : ");
// let word1 = word.slice(-1);
// document.write(`User input : ${word} <br>`);
// document.write(`Last character of input : ${word1}`);

//----------------------------------Task-18-------------------------------
// let sentence = "The quick brown fox jumps over the lazy dogs";
// let wordToCount = "the";
// let lowercaseSentence = sentence.toLowerCase();
// let word = lowercaseSentence.split(" ");
// let count = 0;
// for (let i = 0; i <= lowercaseSentence.length; i++) {
//   if (wordToCount === word[i]) {
//     count++;
//   }
// }
// console.log(`Text : ${sentence}`);
// console.log(`There are ${count} occurences of word ${wordToCount}`);



// --------------------------------CHAP#26-30-----------------------------

//----------------------------------Task-1-------------------------------

// var num = +prompt("Enter any positive number : ");
// var num1 = Math.round(num);
// var num2 = Math.floor(num);
// var num3 = Math.ceil(num);
// console.log(`number : ${num}`);
// console.log(`round off value : ${num1}`);
// console.log(`floor value : ${num2}`);
// console.log(`ceil value : ${num3}`);

//----------------------------------Task-2-------------------------------

// var  num = +prompt("Enter any negative number : ");
// var num1 = Math.round(num);
// var num2 = Math.floor(num);
// var num3 = Math.ceil(num);
// console.log(`number : ${num}`);
// console.log(`round off value : ${num1}`);
// console.log(`floor value : ${num2}`);
// console.log(`ceil value : ${num3}`);

//----------------------------------Task-3-------------------------------

// var num = -4;
// var num1 = Math.abs(num);
// console.log(`The absolute value of ${num} is ${num1}`)

//----------------------------------Task-4-------------------------------

// var num = Math.floor(Math.random() * 6) + 1
// console.log(`random dice value : ${num}`)

//----------------------------------Task-5-------------------------------

// var num = Math.floor(Math.random() * 2) + 1;
// if (num === 1) {
//   console.log(`Random coin value : Heads`);
// } else {
//   console.log(`Random coin value : Tails`);
// }

//----------------------------------Task-6-------------------------------

// let num = Math.floor(Math.random()*100)+1;
// console.log(`Random numbers between 1 and 100 : ${num}`)

//----------------------------------Task-7-------------------------------

// let secretNum = 5;
// let userInput = +prompt("Enter a number between 1 and 10 : ");
// if (userInput === secretNum) {
//   console.log("Congratulation! You guessed it right.");
// } else {
//   console.log(`Sorry! Try again!`);
// }