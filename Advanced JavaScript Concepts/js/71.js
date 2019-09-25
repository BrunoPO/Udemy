const array = [1,2,3,4];
//trying to have this coding working
for(var i=0; i < array.length; i++) {
    setTimeout(function(){
      console.log('I am at index ' + array[i])
    }, 3000)
}

//Mine - Solved 1 
for(let i=0; i < array.length; i++) {
    setTimeout(function(){
      console.log('I am at index ' + array[i])
    }, 3000)
}

//Prof - Solved 2
for(var i=0; i < array.length; i++) {
  (function(closureI) {
    setTimeout(function(){
      console.log('I am at index ' + array[closureI])
    }, 3000)
  })(i)
}