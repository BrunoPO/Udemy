//Make a bind function
Function.prototype.bind = function(whoIsCallingMe, ...args){
  const self = this;
  return function(){
    return self.apply(whoIsCallingMe, args);
  };
}

var teste = function(v){console.log(this.name+" "+v)}.bind({name:'me'}, 'teste')
teste();