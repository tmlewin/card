




class Calulator {

    constructor(name) {
      this.name = name
      this.result = 0;
    }
  
    add(num) {
      // summation code
      return this.result += num
    }
  
    subtract(num) {
      // subtraction code
      return this.result -= num
    }
  
    clear() {
      //clear result
      return this.result = 0
    }
  
    print() {
      console.log(this.result)
    }
  }
  
  // delcare and instantiate class
  let dec = new Calulator('Thomas');
  console.log(dec)
  dec.add(5)
  dec.subtract(2)
  dec.print()
  
  
  

  
  
  // have fun with the calculator