class Formatter {
  //add static methods here
  static capitalize (str) {
    const fL = str.charAt(0).toUpperCase();
    if (str.length === 1) return str.toUpperCase();
    else{
      return str.charAt(0).toUpperCase().concat(str.slice(1));
    }
  }

  static sanitize (str){
    console.log(str.replace(/[^A-Za-z0-9-']+/g, ""))
    const array = str.split(" ");
    let output = "";
    for (let i = 0; i < array.length; i++)
    {
      let clean = array[i].replace(/[^A-Za-z0-9-']+/g, "")
      output = output + " " + clean; 
    }
    return output.slice(1);
  }

  static titleize (str){
    const array = str.split(" ");
    for (let i=0; i<array.length; i++){
      if(array[i] !=="the" && array[i] !== 'a' && array[i] !=='an' && array[i] !=='but' && array[i] !=='of' && array[i] !=='and' && array[i] !=='for' && array[i] !=='at' && array[i] !=='by' && array[i] !=='and' && array[i] !=='from')
      {array[i] = this.capitalize(array[i]);}
    }
    array[0]=this.capitalize(array[0]);
    return array.join(" ");
  }
}

console.log(Formatter.titleize("hello my fired"));
