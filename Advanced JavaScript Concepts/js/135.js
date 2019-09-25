setTimeout(function() {
    console.log("Bf - Timer");
}, 0);

var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
  }, 0);
});

setTimeout(function() {
    console.log("Af - Timer");
}, 0);

console.log("Bf primise");
promise1.then(function(value) {
  console.log(value);
  console.log(value);
  throw Error("tipo inválido:");
  console.log(value);
  // expected output: "foo"
}).catch(err => console.log(err));
console.log("Af primise");

function retorna2() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('2');
    }, 999);
  });
}

async function asyncFunc(){
  setTimeout(function() {
    console.log('into async func - 1');
  }, 1000);
  
  var teste = await retorna2();
  
    console.log('into async func - ' + teste);
  
  setTimeout(function() {
    console.log('into async func - 3');
  }, 899);
}

asyncFunc()

console.log(promise1);
// expected output: [object Promise]

console.log("End execution");

