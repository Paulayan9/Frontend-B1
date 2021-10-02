//    Arithmatic operators in JavaScript
// variables
    var num1 = 4;
    var num2 = 2;

   document.write('The value of num1 + num2 is' + (num1 + num2));
   document.write("<br>")
   document.write('The value of num1 - num2 is' + (num1 - num2));
   document.write("<br>")
   document.write('The value of num1 * num2 is' + (num1 * num2));
   document.write("<br>")
   document.write('The value of num1 / num2 is' + (num1 / num2));
   document.write("<br>")
//    exponential operator
   document.write('The value of num1 ** num2 is' + (num1 ** num2));
   document.write("<br>")
//    post-incremental operator
   document.write('The value of num1++  is' + (num1++));
   document.write("<br>")
//    if we clear the post incremental then it gives as 5 cause value is getting stored same in decremental
//    pre-incremental operator
   document.write('The value of ++num1  is' + (++num1));
   document.write("<br>")
//   post-decremental operator
   document.write('The value of num1--  is' + (num1--));
   document.write("<br>")
//    pre-decremental operator
   document.write('The value of --num1  is' + (--num1));
   document.write("<br>")
   document.write("<br>")
   document.write("<hr>")
   //    to display in console
   console.log(num1+num2);

document.getElementById('content').innerHTML ='Arrays in JS concept'
// Arrays 
//  we can use let and const in place of var as it is not very effective
    let LGM = [1,2,3,4,5];

    
    document.write(LGM);
    //    to display in console
    console.log(LGM)
    document.write("<br>");
    document.write("<br>");
    // let LGM1 =[5,3,2,'Ayan',undefined];
    let LGM1 = new Array(5,3,9,'Ayan',undefined);//alternative way to represent array
    document.write(LGM1);
    document.write("<br>");
    document.write(LGM1.length);//shows the length of the array

    // console.log(LGM1);
    console.log(LGM1.length);//to see the length of the array
    LGM1 = LGM1.sort();//to sort the array in ascending order
    console.log(LGM1);
    document.write("<hr>");

    var times = 100;
    for (var i = 0; i < times; i += 1) //or can use i++
     {
      console.log('My Name Is Ayan Pal! # '+i); //to print in console     
      document.write('My Name Is Ayan Pal! #'+i);     
    }   
    
    
    