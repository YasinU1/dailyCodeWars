




function sumArray(array) {
    if (array == null || array == []){
      return 0
      }
    else if (array.length <= 2){
      return 0
    }
    else{
      return (array.reduce((acc, c) => acc + c, 0)) - (Math.max(...array) + Math.min(...array))
    }
  }



  function sumArray(array) {
    return Array.isArray(array) && array.length > 1
      ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
      : 0
  }