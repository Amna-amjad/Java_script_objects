//    CHAPTER 1 (ALERTS)


// Q-1 =  Write a script to greet your website visitor using JS alert box . .

//  alert("Hey Welcome to my website");

//  Q-2 =  Write a script to display following message on your web  page:

//  alert("Please enter a valid password");

// Q-3 = . Write a script to display following message on your web  page: (Hint : Use line break) 

//   var str = "Welcome to JS Land...\n Happy Coding";
 
//   alert(str);

// Q- 4. Write a script to display following messages in sequence:
   
//  alert("Welcome to JS Land..");
//    alert("Happy Coding");

//Q- 5. Generate the following message through browser’s  developer console: 
   
    //  console.log("Hello... I can run JS through my web browser");
    //  document.write("Hello... I can run JS through my web browser");


//   CHAPTER 2 (VARIABLES FOR STRINGS)

// 1. Declare a variable called username.
  // var username
 
// 2. Declare a variable called myName & assign to it a string
//      that represents your Full Name.

 //  var myName = "Amna Khan";

//  3. Write script to
//  a) Declare a JS variable, titled message.
//  b) Assign “Hello World” to variable message
//  c) Display the message in alert box.

//  var message = "Hello World";
//   alert(message);


// 4. Write a script to save student’s bio data in JS variables and
//   show the data in alert boxes.

//   var name1 = "Jhone Doe";
//   var age = "15";
//   var certificate = "Certified Mobile Application Development";
//   alert( name1);
//   alert(age);
//   alert(certificate);


// 5. Write a script to display the following alert using one JS
//variable:

// var pizza = " Pizza \n Pizz \n Piz \n Pi \n P";
// alert(pizza);


// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

//   var email = "amnakhan8685@gmail.com";
//   alert("my email address is " + email);


// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

//  var book = " A smarter way to learn JavaScript."
//  alert("I am trying to learn javasript from the Book" + book);


// 9. Store following string in a variable and show in alert and
//  browser through JS
//  “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
  
      // var value = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
      // alert(value);


  // CHAPTER 3 - Variables for Numbers

  //  var age = "15";
  //  alert("my age is" + age + " years old");



  // 2. Declare & initialize a variable to keep track of how many
  // times a visitor has visited a web page. Show his/her
  // number of visits on your web page. For example: “You
  // have visited this site N times”.

  // var times_visited = 5;
  // alert("You have visited this site " + times_visited + " times")


  // 3. Declare a variable called birthYear & assign to it your
  // birth year. Show the following message in your browser:

  //  var birthYear = "1990 <br/> Data type of my declared variable is numbers"; 
  //  document.write("My birth year is" + birthYear );
  


  // 4. A visitor visits an online clothing store
  // www.xyzClothing.com . Write a script to store in variables
  // the following information:
  // a. Visitor’s name
  // b. Product title
  // c. Quantity i.e. how many products a visitor wants to
  // order
  // Show the following message in your browser: “John
  // Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

    // var visitorName =  " <b> John Doe </b>"; 
    // var productTitle = "<b> \n T-shirt(s) </b>";
    // var quantity = "<b>5</b>";
    //  document.write(visitorName  + " ordered " +  quantity  +  productTitle + " on XYZ Clothing store");



    // CHAPTER - 4 VARIABLE NAMES: LEGAL & ILLEGAL

    // 1. Declare 3 variables in one statement.
     
    // var person = "Ali ", age = 15, height = " 5ft" ;
    //  document.write(person + age + height);

    // CHAPTER - 5

    //1. Write a program that take two numbers & add them in a  new variable. Show the result in your browser. 
    //  var num = 3;
    //  var num2 = 5;
    //  var num3 = num + num2;
    //  document.write("The sum of " + num + " and " + num2 + " is "+ num3)

    // 2. Repeat task1 for subtraction, multiplication, division & modulus

      // var num = 5;
      // var num2 = 3;
      // var num3 = num - num2;
      // document.write("The sum of " + num + " and " + num2 + " is " + num3);

      // var num = 5;
      // var num2 = 3;
      // var num3 = num * num2;
      // document.write("The sum of " + num + " and " + num2 + " is " + num3);

      // var num = 5;
      // var num2 = 3;
      // var num3 = num / num2;
      // document.write("The sum of " + num + " and " + num2 + " is " + num3);

      // var num = 5;
      // var num2 = 3;
      // var num3 = num % num2;
      // document.write("The sum of " + num + " and " + num2 + " is " + num3);


      // Q-3
      // var num;
      // document.write("Value after variable declaration is ", num + "<br/>");
       // num = 10;
       // document.write("Initial value: ", num +"<br/>");
       // var a = ++num;
       // document.write("Num after increment is: ", a + "<br/>") ;
       // var a = a + 6;
       // document.write("Value after addition is:  ", a  + "<br/>");
       // var a = a -1;
       // document.write("Value after subtraction is:  ", a  + "<br/>");
       // var a = a  / 3 ;
       // document.write("The remainder is:  ", a  + "<br/>");

        //Q- 6. The Temperature Converter: It’s hot out! Let’s make a  converter based on the steps here. 
        // a. Store a Celsius temperature into a variable. 
        // b. Convert it to Fahrenheit & output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”. 
      
        //  var c = 32;
        // f = (c*9/5)+32;
        // document.write( c +"oC" + " is "+ f+"oF" + "<br/>");

        // var f = 86;
        // c = ( f - 32) * 5 / 9;
        // document.write( f + "oF" +" is " + c + "oC");

       // 7. Write a program to implement checkout process of a  shopping cart system for an e-commerce website. Store  the following in variables..

       //   var price_of_item_1 = 600;
       //   var ordered_quantity_of_item_1 = 4;
       //   var price_of_item_2 = 1000;
       //   var ordered_quantity_of_item_2 = 2;
       //   var shipping_charges = 200;
       //  var total = (price_of_item_1 * ordered_quantity_of_item_1 + price_of_item_2 * ordered_quantity_of_item_2 + shipping_charges);
       //   document.write("Price of item 1 is "+price_of_item_1 + "<br/>" + "Ordered quantity of item 1 is  " + ordered_quantity_of_item_1 + "<br/>" + "Price of item 2 is  " + price_of_item_2 + "<br/>" +
       //   " Ordered quantity of item 2 is  " + ordered_quantity_of_item_2 + "<br/>" + "Shipping Charges  " + shipping_charges + "<br/>") ;

       //   document.write("Total cost of your order is: " + total);
      



       // 8. Store total marks & marks obtained by a student in 2  variables. Compute the percentage & show the result in  your browser
            
        // var marks_sheet = " <h1> Marks Sheet </h1> ";
        // document.write(marks_sheet + "<br/>" + "<br/>");

        // var total_marks = 1100;
        // var marks_obtained = 950;
        // var percentage = 950 / 1100 * 100;
        // document.write("Total marks: " + total_marks + "<br/>");
        // document.write("Marks obtained: " + marks_obtained + "<br/>");
        // document.write("Percentage is: " + percentage );


        // 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
        // script to convert the total currency to Pakistani Rupees.
        // Perform all calculations in a single expression.
        // (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
        // and 1 Saudi Riyal = 28 Pakistani Rupee)
        
        // var ExchangeIntoPkr = 10*104.8 + 25*28;
        
        // document.write(ExchangeIntoPkr);
        
        // 10. Write a program to initialize a variable with some
        // number and do arithmetic in following sequence:
        // a. Add 5
        // b. Multiply by 10
        // c. Divide the result by 2
        // Perform all calculations in a single expression
        
        // var calculation = ((9+5)*10)/2;
        // document.write(calculation);
        
        // 11. The Age Calculator: Forgot how old someone is?
        // Calculate it!
        // a. Store the current year in a variable.
        // b. Store their birth year in a variable.
        // c. Calculate their 2 possible ages based on the stored
        // values.
        // Output them to the screen like so: “They are either NN or NN
        // years old”.
        // var CurrYear = 1999;
        // var birthYear = +prompt("Enter you birth year");
        // var age = CurrYear-birthYear;
        // var totalAge = CurrYear-birthYear-1
        // document.write("your age is  " + age + " or " + totalAge + "years");
        
        // 12. The Geometrizer: Calculate properties of a circle.
        // a. Store a radius into a variable.
        // var radius = +prompt("enter radius");
        // b. Calculate the circumference based on the radius, and
        // output “The circumference is NN”.
        // (Hint : Circumference of a circle = 2 π r , π = 3.142)
        // var circum = 2*3.142*radius;
        // document.write("the circumference is " + circumference);
        // Calculate the area based on the radius, and output “The
        // area is NN”. (Hint : Area of a circle = π r 2 , π = 3.142)
        // var area = 3.142*radius^2;
        // document.write("the area of circle is " +area);
        
        // 13. The Lifetime Supply Calculator: Ever wonder how
        // much a “lifetime supply” of your favorite snack is?
        // Wonder no more.
        // a. Store your favorite snack into a variable
        // b. Store your current age into a variable.
        // c. Store a maximum age into a variable.
        // d. Store an estimated amount per day (as a number).
        // e. Calculate how many would you eat total for the rest of
        // your life.
        // var favouriteSnack = "Lays";
        // var CurrAge = 35;
        // var maximumAge = 80;
        // var amountPerDay = 10;
        // var LifeTimeSupply = (amountPerDay*365)*(maximumAge-CurrAge);
        // Output the result to the screen like so: “You will need
        // NNNN to last you until the ripe old age of NN”.
        // document.write("you will need "+LifeTimeSupply + " "+favSnack+ " to last you untill the ripe old age of " +maxAge + "years");
        
        // CHAPTER 5 end 
        
        // CHAPTER 6 START
        
        // 1. Write a program to take a number in a variable, do the
        // required arithmetic to display the following result in your
        // browser:
        // var num = 50;
        // document.write("the value of num is: " +num + " <br><br>");
        // document.write("the value of ++num is: " + ++num + " <br><br>");
        // document.write("the value of num++ is: " + num++ + " <br><br>");
        // document.write("now the value of num is: " + num + " <br><br>");
        // document.write("the value of --num is: " + --num + " <br><br>");
        // document.write("now the value of num is: " + num + " <br><br>");
        // document.write("the value of num-- is: " + num-- + " <br><br>");
        // document.write("now the value of num is: " + num + " <br><br>");
        
        
        // 2. What will be the output in variables a, b & result after
        // execution of the following script:
        // var a = 5, b = 8;
        // var result;
        
        // Explain the output at each stage:
        //  next --a;
        // result = --a
        // document.write("the value of --a is: " + result + " <br><br>");
        // //  next --a - --b;
        // result = result - --b;
        // document.write("the value of --a - --b is: " + result + " <br><br>");
        
        //  next --a - --b + ++b;
        // result =  result + ++b;
        // document.write("the value of --a - --b + ++b is: " +result+ " <br><br>");
        
        //  next --a - --b + ++b + b--;
        // result = result +b--;
        // document.write("the value of --a - --b + ++b + b-- is: " + result + " <br><br>");
        // document.write( "result is : " + result);
        
        // 3. Write a program that takes input a name from user &
        // greet the user.
        // var user = prompt("Enter your Name");
        // alert("Welcome " + user + ":)");
        
        // 5. Write a program to take input a number from user &
        // display it’s multiplication table on your browser. If user
        // does not enter a new number, multiplication table of 5
        // should be displayed by default.
        // var table = +prompt("Which table do you want?");
        // if (!table) {
        //     table = 10;
        // }
        
        // for (var i = 1; i <= 10; i++) {
        //     document.write(table + " x " + i + " = " + table * i + "<br>");
        
        // }
        
        
        // 6. Take
        // a) Take three subjects name from user and store them in 3
        // different variables.
        // var subjOne = prompt("Enter first subject");
        // var subjTwo = prompt("Enter second subject");
        // var subjThree = prompt("Enter third subject");
        // // b) Total marks for each subject is 100, store it in another
        // // variable.
        // var maxmarksOfsub = 100;
        // var totalMarks = 300;
        // // c) Take obtained marks for first subject from user and
        // // stored it in different variable.
        // // d) Take obtained marks for remaining 2 subjects from user
        // // and store them in variables.
        // var marksOfSub1 = +prompt("enter marks of subjOne out of 100");
        // var marksOfSub2 = +prompt("enter marks of subjTwo out of 100");
        // var marksOfSub3 = +prompt("enter marks of subjThree out of 100");
        // // e) Now calculate total marks and percentage and show the
        // // result in browser like this.(Hint: user table)
        // var percentage_of_Sub1 = marksOfSub1/maxmarksOfsub*100;
        // var percentage_of_Sub2 = marksOfSub2/maxmarksOfsub*100;
        // var percentage_of_Sub3 = marksOfSub3/maxmarksOfsub*100;
        // var total_obtained_marks = marksOfSub1 +marksOfSub2 +marksOfSub3;
        // var total_Percentage = totalobtainedmarks/totalMarks *100;
        // document.write(`<table>
        // <tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>
        // <tr><td>${subjOne}</td><td>${maxmarksOfsub}</td><td>${marksOfSub1}</td><td>${percentofSub1}</td></tr>
        // <tr><td>${subjTwo}</td><td>${maxmarksOfsub}</td><td>${marksOfSub2}</td><td>${percentofSub2}</td></tr>
        // <tr><td>${subjThree}</td><td>${maxmarksOfsub}</td><td>${marksOfSub3}</td><td>${percentofSub3}</td></tr>
        // <tr><td></td><td>${totalMarks}</td><td>${totalobtainedmarks}</td><td>${totalPercentage}</td></tr>
        // </table>`);
        
        // CHAPTER 6 to 9 ended
        
        // CHAPTER 9 to 11 started
        
        
        // 1. Write a program to take “city” name as input from user. If
        // user enters “Islamabad”, welcome the user like this:
        // “Welcome to the Capital of Pakistan”
        // var city = prompt("enter city name");
        // if (city == "Islamabad") {
        //     alert("welcome to the Capital of Pakistan");
        // } else {
        //     alert("welcome");
        // }
        
        // 2. Write a program to take “gender” as input from user. If the
        // user is male, give the message: Good Morning Sir. If the
        // user is female, give the message: Good Morning Ma’am.
        // var user = prompt("enter your gender");
        // if(user == "male"){
        //     alert("good morning sir!!");
        // }else if(user == "female"){
        //     alert("good morning ma'am!!");
        // }else{
        //     alert("good morning");
        // }
        
        // 3. Write a program to take input color of road traffic signal
        // from the user & show the message according to this table:
        // var signalColor = prompt("enter signal color");
        // if (signalColor == "red") {
        //            alert("must stop");
        // } else if(signalColor == "yellow") {
        //     alert(" get ready to move");
        // } else if(signalColor == "green"){
        //     alert("move now");
        // }else{
        //     alert("signal color is not valid!!");
        // }
        
        // 4. Write a program to take input remaining fuel in car (in
        //     litres) from user. If the current fuel is less than 0.25litres,
        //     show the message “Please refill the fuel in your car”
        
        // var currFuel = prompt("enter remaining fuel in car in liters");
        // if(currFuel<0.25){
        //     alert("Please refill the fuel in car!");
        // }else{
        //     alert("good");
        // }
        
        // 5. Run this script, & check whether alert message would be
        // displayed or not. Record the outputs.
        //  var x = 10;
        // if (++x === 5){
        // alert("given condition for variable x is true");
        // }
        //  var y = 20;
        // if (y++ === 53){
        // alert("given condition for variable y is true");
        // }
        //  var z = 15;
        // if (z++ === 18){
        // alert("condition 1 is true");
        // }
        // if (z === 18){
        // alert("condition 2 is true");
        // }
        // if (++z < 19){
        // alert("condition 3 is true");
        // }
        // if(c === 19){
        // alert("condition 4 is true");
        // }
        //  var matCost = 20000;
        // var labourCost = 2000;
        // var totalCost = matCost + labourCost;
        // if (totalCost === labourCost + matCost){
        // alert("The cost equals");
        // }
        // if (true){
        // alert("True");
        // }
        // if (false){
        // alert("False");
        // }
        // if("car" < "cat"){
        //     alert("car is smaller than cat");
        //     }
      
        
        
        // 6. Write a program to take input the marks obtained in three
        // subjects & total marks. Compute & show the resulting
        // percentage on your page. Take percentage & compute
        // grade as per following table:
        
        // var maxMarks = 100;
        // var totalMarks = 300;
        // var marksOfSub1 = +prompt("enter marks of sub_1 out of 100");
        // var marksOfSub2 = +prompt("enter marks of sub_2 out of 100");
        // var marksOfSub3 = +prompt("enter marks of sub_3 out of 100");
        // var totalobtainedmarks = marksOfSub1 +marksOfSub2 +marksOfSub3;
        // var totalPercentage = totalobtainedmarks/totalMarks *100;
        // var grade = '';
        // var remarks = '';
        // if (totalPercentage >= 80 ) {
        //     grade = "A+"
        //     remarks = "Excellent"
        
        // }else if(totalPercentage>=70){
        //     grade = "A"
        //     remarks = "Good"
        // }else if(totalPercentage>=60){
        //     grade = "B"
        //     remarks = "You need to improve"
        // }else if(totalPercentage<60){
        //     grade = "FAIL"
        //     remarks = "Sorry"
        // }
        
        
        // document.write(`total marks : ${totalMarks} <br>
        //     Marks obtained: ${totalobtainedmarks}<br>
        //     percentage: ${totalPercentage}%<br>
        //     Grade: ${grade}<br>
        //     remarks: ${remarks}<br>
        //     `)
        
        // 7. Guess game:
        // Store a secret number (ranging from 1 to 10) in a variable.
        // Prompt user to guess the secret number.
        // a. If user guesses the same number, show “Bingo! Correct
        // answer”.
        // b. If the guessed number +1 is the secret number, show
        // “Close enough to the correct answer”.
        // var secretNumber = 9;
        // var guess = +prompt("guess the secret num");
        // if (secretNumber == guess) {
        //     alert("Bingo! Correct Answer");
        // } else if(secretNumber == guess +1 || secretNumber == guess-1) {
        //     alert("Close enough to the correct answer");
        
        // }else{
        //     alert(" oops! TRY AGAIN  ")
        // }
        
        // 8. Write a program to check whether the given number is
        // divisible by 3. Show the message to the user if the number
        // is divisible by 3.
        // var numGiven = +prompt("enter no.");
        // if (numGiven%3 === 0) {
        //     alert("given number is divisible by 3");
        
        // } else {
        //     alert("given number is not divisible by 3")
        
        // }
        
        // 9. Write a program that checks whether the given input is an
        // even number or an odd number.
        // var numGiven = +prompt("enter no.");
        // if (numGiven%2 === 0) {
        //     alert("given number is even");
        
        // } else {
        //     alert("given number is odd")
        
        // }
        
        // 10. Write a program that takes temperature as input and
        // shows a message based on following criteria
        // a. T > 40 then “It is too hot outside.”
        // b. T > 30 then “The Weather today is Normal.”
        // c. T > 20 then “Today’s Weather is cool.”
        // d. T > 10 then “OMG! Today’s weather is so Cool.”
        
        // var temp = prompt(" What's the temperature today? ");
        // if (temp>40) {
        //     alert("It is too hot outside.")
        
        // } else if(temp>30) {
        //     alert("The Weather today is Normal.")
        
        // }else if (temp>20){
        //     alert("Today’s Weather is cool.")
        // }
        // else if(temp>10){
        //     alert(" Today’s weather is so Cool.")
        // }
        // else if(temp<10){
        //     alert("OMG! Today’s weather is so Cool.")
        // }else{
        //     alert("incorrect temperature")
        // }
        
        // 11.
        // Write a program to create a calculator for +,-,*, / & %
        // using if statements. Take the following input:
        // a. First number
        // b. Second number
        // c. Operation (+, -, *, /, %)
        // Compute & show the calculated result to user.
        // var firstNum = +prompt("first no.?");
        // var secondNum = +prompt("second no.?");
        // var Operation = prompt("operator??");
        // if (Operation == "+") {
        //     alert(firstNum+secondNo)
        // } else if (Operation == "-" ) {
        //     alert(firstNum-secondNo)
        // }else if (Operation == "*" ) {
        //     alert(firstNum*secondNo)
        // }else if (Operation == "/" ) {
        //     alert(firstNum/secondNo)
        // }else if (Operation == "%" ) {
        //     alert(firstNum%secondNo)
        // }else{
        //     alert("Error")
        // }
        
        // CHAPTER 9 to 11 ENDED

        // CHAPTER 12 to 13 STARTED
        
        // 1. Write a program that takes a character (number or string)
        // in a variable & checks whether the given input is a
        // number, uppercase letter or lower case letter. (Hint: ASCII
        // codes:- A=65, Z=90, a=97, z=122).
        
        // var character = prompt("enter character");
        // if (character>=65 && character<=90) {
        //     alert ("input is in uppercase");
        
        // } else if(character>=97 && character<=122){
        
        //       alert ("input is in lowercase");
        // } else{
        //     alert("random");
        // }
        
        // 2. Write a JavaScript program that accept two integers and
        // display the larger. Also show if the two integers are equal.
        // var int_1 = +prompt("enter first integer");
        // var int_2 = +prompt("enter second integer");
        // if (int_1>int_2) {
        //     alert(int_1+" is greater")
        // } else if (int_1<int_2) {
        //     alert(int2+" is greater")
        // } else if (int_1==int_2) {
        //     alert("both are equal")
        // } else{
        //     alert("sorry")
        // }
        
        // 3. Write a program that takes input a number from user &
        // state whether the number is positive, negative or zero.
        
        // var number = prompt("enter a no.");
        // if (number>0) {
        //     alert("no is positive");
        // } else if (number==0) {
        //     alert("no is zero");
        // }else if(number<0){
        //     alert("no is negetive");
        // }
        
        // 4. Write a program that takes a character (i.e. string of
        // length 1) and returns true if it is a vowel, false otherwise
        
        // var characters = prompt("enter a character of length 1");
        // var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
        // var match = false;
        
        // for (let i = 0; i < vowels.length; i++) {
        //     if (characters === vowel[i]) {
        //         alert("is vowel");
        //         match = true;
        //     }
        // }
        
        // if (!match) {
        //     alert('not a vowel');
        // }
        
        
        // 5. Write a program that
        // a. Store correct password in a JS variable.
        // b. Asks user to enter his/her password
        // c. Validate the two passwords:
        // i. Check if user has entered password. If not, then
        // give message “ Please enter your password”
        // ii. Check if both passwords are same. If they are
        // same, show message “Correct! The password you
        // entered matches the original password”. Show
        // “Incorrect password” otherwise.
        
        // var corr_Pass = "correct"
        // var user_input = prompt("enter password");
        // if (userinput === "") {
        //     alert("please enter password");
        
        // }else if (userinput === corr_Pass) {
        //     alert("Correct! The password you entered matches the original password");
        
        // }
        
        // 6. This if/else statement does not work. Try to fix it:
        // var greeting;
        // var hour = 13;
        // if (hour < 18) {
        // greeting = "Good day";
        // else
        // greeting = "Good evening";
        // }
        // right way
        // if (hour < 18) {
        // greeting = "Good day";}
        // else{
        // greeting = "Good evening";
        // }
        // alert(greeting);
        
        
        // 7. Write a program that takes time as input from user in 24
        // hours clock format like: 1900 = 7pm. Implement the
        // following case using if, else & else if statements
        
        // var time = prompt("enter current time");
        // if (time >= 0000 && time<=1100) {
        //     alert("Good morning");
            
        // }else if (time >= 1100 && time<=1700) {
        //     alert("Good afternoon");
            
        // }else if (time >= 1700 && time<=2200) {
        //     alert("Good evening");
            
        // }else if (time >= 2200 && time<=2359) {
        //     alert("Good night");
            
        // }else{
        //     alert("wrong input");
        // }
        
      // CHAPTER 14 to 16 STARTED  
       
        // 1. Declare an empty array using JS literal notation to store student names in future.

// var arr = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var arr_1 = new Array();

// 3. Declare and initialize a strings array.

// var stringArray = ["hello","world","anytime"];

// 4. Declare and initialize a numbers array.

// var noArray = [8,9,10];
// 5. Declare and initialize a boolean array.

// var boolArray = [true,false];

// 6. Declare and initialize a mixed array.

// var mixArray = ["hello", 3 , false];


// 7.
//  Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var qualificationInPak = ['SSC','HSC', 'PHD' , 'BCOM' , 'M.Phil' , 'BCS' , 'BS' , 'MSC'];
// for (let i = 0; i < qualificationInPak.length; i++) {
//     document.write("("+i+' '+qualificationInPak[i] + "<br>");
// }

// 8.Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var students = ['Muhammad', 'Abdul Hannan', 'Maryam'];
// var marks = [450, 590, 500];
// var percentage;
// for (var i = 0; i < students.length; i++) {
//     percentage = marks[i] / 500 * 100;
//     document.write('score of ' + students[i] + ' is ' + marks[i] + ' and percentage is ' + percentage + '<br>');
// }


// 9. 
// Initialize an array with color names. Display the array
// elements in your browser.

// document.write("<b>old colors </b>" + "<br>");
// var colors = ['red', 'yellow', 'green', 'black'];
// document.write(colors.join("<br>"));
// document.write("<br><b>New colors </b><br>");

// // a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// var do_choice = prompt("enter any color to add at begining");
// colors.unshift(do_choice);
// document.write(colors.join("<br>"));
// document.write("<br><b>last color Array</b><br>");

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// var do_choice2 = prompt("enter any color to add at end");
// colors.push(do_choice2);
// document.write(colors.join("<br>"));

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

// document.write("<b>New colors </b><br>");
// colors.unshift("blue","light");
// document.write(colors.join("<br>"));


// d. Delete the first color in the array. Display the updated
// array in your browser.

// document.write("<br><b>removing first color</b><br> ")
// colors.shift();
// document.write(colors.join("<br>"));

// e. Delete the last color in the array. Display the updated
// array in your browser.

// document.write("<br><b>removing last color</b> <br>" )
// colors.pop();
// document.write(colors.join("<br>"));

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// // browser.

// var position = +prompt("At which position do you want to add color?");
// var color_Name = prompt('write color name');
// document.write("<br><b>adding color at index</b> " + position + "<br>")
// colors.splice(position,0 ,color_Name);
// document.write(colors.join("<br>"));

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// document.write("<br><b>rmoving colors frome given index</b> <br>")
// var positionToRemove = +prompt("At which position do you want to delete color?");
// var last_ position = +prompt("how many colors you want to delete?");

// colors.splice(positionToRemove,last_ position);
// document.write(colors.join("<br>"));


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.


// var studentScores = [100, 60, 70, 80, 120];
// studentScores.sort((a, b) => a - b);
// document.write(studentScores);

// // 11.
// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
// var cityNames = ['islamabad','karachi','lahore','quetta','abbotttabad','mansehra','peshawar'];
// var selectedCities = cityNames.slice(1,4);
// document.write(selectedCities);


// 12. 
// Write a program to create a single string from the
// below mentioned array:
// (Use array’s join method)
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// var arr = ["This", "is" ,  "my" ,  "cat"];
// var x = arr.join(" ");
// document.write(x);



// 13.
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// var newArr = [];
// newArr.push("Amna");
// newArr.push("Amna_1");
// newArr.push("Amna_2");
// newArr.push("Amna_3");
// newArr.push("Amna_4");

// document.write(newArr + "<br>");
// var elements = newArr.shift();
// document.write("<br>OUT:<br>"+elements);
// elements = newArr.shift();
// document.write("<br>OUT:<br>"+elements);
// elements = newArr.shift();
// document.write("<br>OUT:<br>"+elements);
// elements = newArr.shift();
// document.write("<br>OUT:<br>"+elements);
// elements = newArr.shift();
// document.write("<br>OUT:<br>"+elements);

// 14.
// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)


//  var newArr = [];
// newArr.push("Amna");
// newArr.push("Amna1");
// newArr.push("Amna2");
// newArr.push("Amna3");
// newArr.push("Amna4");
// document.write(newArr + "<br>");
// var elements = newArr.pop();
// document.write("<br>OUT:<br>"+elements);
// elements = newArr.pop();
// document.write("<br>OUT:<br>"+elements);
// elements = newArr.pop();
// document.write("<br>OUT:<br>"+elements);
// elements = newArr.pop();
// document.write("<br>OUT:<br>"+elements);
// elements = newArr.pop();
// document.write("<br>OUT:<br>"+elements);


// 15.
// Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:
// var phone = ["Nokia" , "Samsung" , "Haier" , "Sony" , "Apple" , "Motorola"];
// document.write( <select>
// <option>${phone[0]}</option>
// <option>${phone[1]}</option>
// <option>${phone[2]}</option>
// <option>${phone[3]}</option>
// <option>${phone[4]}</option>
// <option>${phone[5]}</option>
// </select>)
        
        
//CHAPTERS 21 to 25 STARTED


// Q-1 Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
// function person(){
// }
// person.prototype.first_name=function(){
//   return "Amna"
// }
// Person.prototype.last_name=function(){
//   return "Khan"
// }
// Person.prototype.fullname=function(){
//   return this.first_name() + this.last_name()
// }
// var c = new_person();
// console.log(c.fullname());

// Q-2 Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browse
// var phone = prompt("Please enter your user input here");
// if (phone != null) {
//   document.getElementById("demo").innerHTML += "Hello " + phone + "My favourite phone is iPhone 12 Pro Max length of string:28";
// }
// Q-3  Write a program to find the index of letter "n" in the word
// "Pakistani" and display the result in your browser
// var str = "pakistani!";
// var position = str.indexOf("n");
// alert(str, position);

// Q-4 Write a program to find the last index of letter "l" in the
// word "Hello World" and display the result in your browser.
// var b ="Hello World";
// var position = b.indexOf("l")
// document.write(position);

// Q-5 Write a program to find the character at 3rd index in the
// word "Pakistani" and display the result in your browser.
// var nam = "Pakistani";
// var lastThird = nam.substr(id.length - 3); 
// var lastChar = nam.substr(id.length - 1);
// lastThird+lastChar;
// var lastThird=lastChar;
// alert(lastThird+lastChar);

// Q -6. Repeat Q1 using string concat() method.
// var str0 = "Hello ";
// var str1 = "world!";
// var str2 = " How are you?";
// var res = str0.concat(str0, str2);

// Q-7: Write a program to replace the "Hyder" to "Islam" in the
// word "Hyderabad" and display the result in your browser.
// var City1 = ["hyder","Islam"]
// var City2 = City1.replace("Hyderabad", "Islamabad");
// City1+City2
// document.write(City1+City2);

//  Q -8:  Write a program to replace all occurrences of "and" in the
//  string with "&" and display the result in your browser.
// var message = "Ali and Sami are best friends. They play cricket and
// football together.";
// let msg = "Ali and Sami are best friends. ".replaceAll("&", "they play cricket and football together");
// console.log(msg);
