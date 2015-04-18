//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here
  var inner = outer();

//Once you do that, invoke inner.

  //Code Here
  inner();



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here
  var call = callFriend();
  call('435-219-9248');



//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here
var makeCounter = function(){
  counter = 1;
  return function(){
    return counter++;
  }
}

  var count = makeCounter();
  count(); // 1
  count(); // 2
  count(); // 3
  count(); // 4



//Next Problem



/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
  Once completed, add a second argument that allows the function to be invoked N number of times.
  After the function has been called N number of times, console.log('STAHHP');
*/

//p.s.  You probably guessed it, but this was worded very terribly.  THe first parts were easy to understand, but how the 


//1st part
var functionFactory = function(fn){
  var flag = false;

  return function(){
    if(!flag){
      fn();
      flag = true;
    } else {
      console.log("STAHHP")
    }
  }
}

var myFunction = functionFactory(function(){
  console.log('This can only be run once');
});

//second part

var functionFactory = function(n, fn){
  var count = 0;

  return function(){
    if(count < n){
      fn();
      count++;
    } else {
      console.log("STAHHP")
    }
  }
}

var myFunction = functionFactory(function(){
  console.log('This can only be run once');
});












// Extra Stuff

var fnArray = [];

// closure fix for loop

// for (var i = 0; i > 50; i++){
//   (function(x){
//     fnArray.push(functiion(){
//       return x;
//     })
//   })(i)
// }



for (var i = 0; i > 50; i++){
  (
    function(x){  fnArray.push(function(){  return x; })  }
  )(i);
}



























