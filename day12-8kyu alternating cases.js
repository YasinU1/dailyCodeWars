// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case
// /toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) 
// such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:





String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    let arr = this.split("")
    let newArr = []
    arr.forEach((x) => (x === x.toLowerCase() ? newArr.push(x.toUpperCase()) : newArr.push(x.toLowerCase())))
    return newArr.join("")
}

  String.prototype.toAlternatingCase = function () {
    new_str = "";
    for(var i = 0; i < this.length; i++) {
      if(this[i] === this[i].toUpperCase()) {
        new_str += this[i].toLowerCase();
      }
      else {
        new_str += this[i].toUpperCase();
      }
    }
    return new_str;
  }