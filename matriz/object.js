//Variáveis//
const jogadorX = x
const jogadorO = o
let vitoriaX 
let vitoriaO
let p1Counter = 0
let p2Counter =0



//Tabuleiro//

  let board = [
   top ["", "", ""],
   mid ["", "", ""],
   bot ["", "", ""]
  ]
//Jogadores
  function vitoria() {
    if (vitoriaX == 1 && vitoriaO == 0){
      p1Counter = +1

    }

    if((board.top[0]) && (board.top[1]) && (board.top[2]) == x){
    vitoriaX = 1

  }

//Função parar gerar média aleatoria de velocidades/
function randomizeCar(min, max) {
  return Math.random() * (max - min) + min;
}


