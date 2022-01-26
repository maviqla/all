function multiply() {
    return function(x) {
      console.log(x * 2)
    }
  }
  multiply()
  
  const multiplier = multiply()
  
  multiplier(2)
  multiplier(4)
  multiplier(6)
  multiplier(10)
  multiplier(20)