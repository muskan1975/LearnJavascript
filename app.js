////declaire a variable and function
//
//var a="hello world";
//
//function b(){
//    console.log("b is called");
//}
//b();
//console.log(a);


//2]Lexical Environment:-Where something sites physically in the code you write

//"Lexical" means 'having to do with words or grammer'.A lexical environment exists in programming languages in which where you write something is important. 

//ex- function hello(){.....function
//    var name="cat";.....variable
//}




//3]Execution context:A wrapper to help manage the code that is runnig
//
//There are lots of logical environments. which one is currently runnig is managed via execution contexts.it can contain things beyond what you have written in your code




//4]Name/Value Pair:- A name which maps to a unique value
//
//The name may be defined more than once,but only can have one value in any given context 
//That value  may be more name/value pairs
//
//   name-->name="muskan";--<value
//   this is a name value pair
//   
//5]Object:- A collection of name value pairs
//
//The simplest defination when talking about javascript

//ex-
//    Address:            ----object
//    {
//        name:"Aplle",    }   name value pair 
//        Color:"red"      }
//        
//         Detail:              }object
//        {
//            Price:100,      }   name value pair 
//            weight:"500gm"  }
//            
//        }
//    }
//
//this is a name value pair example



//The Execution Context:- Creation And Hoisting
//
//1-Global object  2- this  3-Outer Environment
//
//                     "Hoisting"
//                   Variables SetUp
//            (and set equal to "undefined")
//               and functions setup


////special undefined keyword in js

//see..this program a is undefined
//var a;
//
//console.log(a);
//
//if(a=== undefined){
//    console.log("a is undefined");
//}
//else{
//    console.log("a is defined");
//}
//

////a is defined
//
//var a="hello";
//
//console.log(a);
//
//if(a===undefined){
//    console.log("a is undefined");
//}
//else{
//    console.log("a is defined");
//}



//function m(){
//    console .log("hi guys");
//}
//m();
//console.log(a);
//var a="apple";
//console.log(a);


//Single Threaded:
//One command at a time

//1]Synchronous:-one at a time


//2]Invocation:-  Runnig a Function
                //In javascript ,by using parenthesis() after //the function name to invoke the function

//ex-    function c(){
//       console.log("cat");
//     
//      }
//      c();


//4]Function Invocation and the Execution Stack:-create and                                                    execute


//5]Functions Context and Variable Environments
//*synchronized process

//function b(){
//
//    var myvar;
//        console.log("third var called");
//    console.log(myvar);
//}
//function a(){
//
//    var myvar=2;
//        console.log("second var called");
//    console.log(myvar);
//    b();
//    
//}
//
//var myvar=1;
//console.log("first var call")
//console.log(myvar);
//a();
//console.log(myvar);


//The Scope Chain
//Scope:- where a variable is available in your code 
         //And if its truly the same variable or a new copy

//function a(){
//    
//    function b(){
//        console.log("b is called");
//        console.log(myvar);
//    }
//    b();
//    
//    
//}
//var myvar=2;
//
//a();


//function b(){
//    console.log("b is called");
//    console.log(myvar);
//    
//}
//
//
//function a(){
//    b();
//    
//}
//var myvar=4;
//a();


//6]Asynchronous:- More than one at a time


//long running function
//function waitThreeSeconds(){
//    var ms=3000+new Date().getTime();
//    while(new Date() < ms){}
//        console.log("finished function");
//        
//    }
//    
//    function clickHandler(){
//        console.log("Click event");
//    }
//    //listen for the click event 
//    document.addEventListener('click',clickHandler());
//    
//    
//    waitThreeSeconds();
//    console.log("finished execution");


//Dynamic Typing : You dont tell the  engine what type of data a a variable holds it figures it out while your code is running
//
//Variables can hold different types of values because its all figured out during execution
//
//Dunamic Typic Example:
//
//       var isNew=true;
//       isNew="yes";
//       isNew =1;
//
//we are use isNew variable how much you need





//Primitive types:-A type of data that represents a single value 
//                 that is not an object


//1-UNDEFINED- undefined represents lack of existance 
//             (you should not set a variable to this)
//
//2-NULL- null represents lack of existance 
//        (you can set a variable to this)
//
//3-BOOLEAN- true or false
//
//
//4-NUMBER- floating point number (there are always some decimals).unlike other programming languages there are only one number type.. and it can make math weird
//
//
//5-STRING- a sequence of characters 
//           (both '' and "" can be used)
//
//6-SYMBOL-used in ES6 (the version of javascript)
//    



//Operator: A special function that is synthantically (written)
//          differently
//          
//          generally operators take two parameters and return one result
//

var a=2+5;
console.log(a);






