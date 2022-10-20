


function titleCase(title, minorWords) {
    let result = ''
    if (title == ""){
      return ""
    }
    else{
    let arr = title.toLowerCase().split(" ")
    arr.forEach((x,i) => {
      if (!minorWords.includes(x)){
        result += ` ${x[0].toUpperCase() + x.substring(1)}`
      }
      else{
        if (i == 0){
          result += `${x[0].toUpperCase() + x.substring(1)}`
        }
        else{
          result += ` ${x}`
        }
  
      }
    })
    return result
    }
  }
  

  function titleCase(title, minorWords) {
    if (title == '')
      return '';
    
    if (minorWords != undefined)
      minorWords = minorWords.toLowerCase().split(' ');
    
    var array = title.split(' ');
    
    for (var i=0, l=array.length; i<l; ++i)
    {
      array[i] = array[i].toLowerCase();
      
      if (i == 0 || !minorWords || minorWords.indexOf(array[i]) == -1)    
        array[i] = array[i][0].toUpperCase() + (array[i].length > 1 ? array[i].slice(1) : '');
    }
    
    return array.join(' ');
  }