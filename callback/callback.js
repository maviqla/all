const array = []
for (let i = 1; i < 61; i++) {
  array.push(i)
}
const max = 60
const min = 1
const randomArray = []
let j = 0

function allNumbers() {
  const randomNumber = Math.floor(Math.random() * ((max - j) - min) + min) 
  let slice = array.splice(randomNumber, 1)
  randomArray.push(slice)
  j++
  if (randomArray.length == 6) {
    clearInterval(interval)
  }

  console.log(randomArray)

}

let interval = setInterval(allNumbers, 1000)

