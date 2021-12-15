//Variáveis//
let speedMin = 0
let speedMax = 0
let car = {
  velMinima: [0, 0],
  velMaxima: [0, 0],
  txDerrapagem: [0, 0],

}

//Tabuleiro//

  let board = [
    ["pos000", "pos010", "pos002"],
    ["pos001", "pos011", "pos012"],
    ["pos002", "pos021", "pos022"]
  ]

  function addX() {
    
  }




const sport = {
  velMinima: [125, 145],
  velMaxima: [195, 215],
  txDerrapagem: [0.02, 0.03],
}

const supersport = {
  velMinima: [140, 160],
  velMaxima: [210, 230],
  txDerrapagem: [0.01, 0.175],
}

//Função parar gerar média aleatoria de velocidades/
function randomizeCar(min, max) {
  return Math.random() * (max - min) + min;
}


//Gera o carro do Pedro//
function makeCar1() {
  let cartype
  let chance = randomizeCar(0, 100);
  if (chance < 60) {
    cartype = "Popular"
  } else if (chance < 95) {
    cartype = "Sport"
  } else if (chance >= 96) {
    cartype = "Super Sport"
  }

  if (cartype == "Popular") {
    car.speedMin = parseInt(randomizeCar(popular.velMinima[0], popular.velMinima[1]))
    car.speedMax = parseInt(randomizeCar(popular.velMaxima[0], popular.velMaxima[1]))
    car.derrapagem = parseInt(randomizeCar(popular.txDerrapagem[0], popular.txDerrapagem[1]))
  } else if (cartype == "Sport") {
    car.speedMin = parseInt(randomizeCar(sport.velMinima[0], sport.velMinima[1]))
    car.speedMax = parseInt(randomizeCar(sport.velMaxima[0], sport.velMaxima[1]))
    car.derrapagem = parseInt(randomizeCar(sport.txDerrapagem[0], sport.txDerrapagem[1]))
  } else if (cartype == "Super Sport") {
    car.speedMin = parseInt(randomizeCar(supersport.velMinima[0], supersport.velMinima[1]))
    car.speedMax = parseInt(randomizeCar(supersport.velMaxima[0], supersport.velMaxima[1]))
    car.derrapagem = parseInt(randomizeCar(supersport.txDerrapagem[0], supersport.txDerrapagem[1]))
  }

  console.log(cartype + " Vel Minima -  " + car.speedMin + " Vel Maxima - " + car.speedMax + " txDerrapagem -  " + car.derrapagem)

  document.getElementById("pedro").innerHTML = "<p>Pedro</p>" + "<p>Raridade:  " + cartype + "</p>" + "<p>Velocidade Máxima: " + car.speedMax + "</p>" + "  <p>Velocidade Mínima: " + car.speedMin + "</p>" + "  <p>Taxa de derrapagem:   " + parseInt(car.derrapagem) + "</p>"
}

//Gera o carro da Edna//
function makeCar2() {
  let cartype2
  let chance = randomizeCar(0, 100);
  if (chance < 60) {
    cartype2 = "Popular"
  } else if (chance < 95) {
    cartype2 = "Sport"
  } else if (chance >= 96) {
    cartype2 = "Super Sport"
  }

  if (cartype2 == "Popular") {
    car.speedMin2 = parseInt(randomizeCar(popular.velMinima[0], popular.velMinima[1]))
    car.speedMax2 = parseInt(randomizeCar(popular.velMaxima[0], popular.velMaxima[1]))
    car.derrapagem2 = parseInt(randomizeCar(popular.txDerrapagem[0], popular.txDerrapagem[1]))
  } else if (cartype2 == "Sport") {
    car.speedMin2 = parseInt(randomizeCar(sport.velMinima[0], sport.velMinima[1]))
    car.speedMax2 = parseInt(randomizeCar(sport.velMaxima[0], sport.velMaxima[1]))
    car.derrapagem2 = parseInt(randomizeCar(sport.txDerrapagem[0], sport.txDerrapagem[1]))
  } else if (cartype2 == "Super Sport") {
    car.speedMin2 = parseInt(randomizeCar(supersport.velMinima[0], supersport.velMinima[1]))
    car.speedMax2 = parseInt(randomizeCar(supersport.velMaxima[0], supersport.velMaxima[1]))
    car.derrapagem2 = parseInt(randomizeCar(supersport.txDerrapagem[0], supersport.txDerrapagem[1]))
  }

  console.log(cartype2 + " Vel Minima -  " + car.speedMin2 + " Vel Maxima - " + car.speedMax2 + " txDerrapagem -  " + car.derrapagem2)

  document.getElementById("edna").innerHTML = "<p>Edna</p>" + "<p>Raridade:  " + cartype2 + "</p>" + "<p>Velocidade Máxima: " + car.speedMax2 + "</p>" + "  <p>Velocidade Mínima: " + car.speedMin2 + "</p>" + "  <p>Taxa de derrapagem:   " + parseInt(car.derrapagem2) + "</p>"
}

//Gera o carro do Juca//
function makeCar3() {
  let cartype3
  let chance = randomizeCar(0, 100);
  if (chance < 60) {
    cartype3 = "Popular"
  } else if (chance < 95) {
    cartype3 = "Sport"
  } else if (chance >= 96) {
    cartype3 = "Super Sport"
  }

  if (cartype3 == "Popular") {
    car.speedMin3 = parseInt(randomizeCar(popular.velMinima[0], popular.velMinima[1]))
    car.speedMax3 = parseInt(randomizeCar(popular.velMaxima[0], popular.velMaxima[1]))
    car.derrapagem3 = parseInt(randomizeCar(popular.txDerrapagem[0], popular.txDerrapagem[1]))
  } else if (cartype3 == "Sport") {
    car.speedMin3 = parseInt(randomizeCar(sport.velMinima[0], sport.velMinima[1]))
    car.speedMax3 = parseInt(randomizeCar(sport.velMaxima[0], sport.velMaxima[1]))
    car.derrapagem3 = parseInt(randomizeCar(sport.txDerrapagem[0], sport.txDerrapagem[1]))
  } else if (cartype3 == "Super Sport") {
    car.speedMin3 = parseInt(randomizeCar(supersport.velMinima[0], supersport.velMinima[1]))
    car.speedMax3 = parseInt(randomizeCar(supersport.velMaxima[0], supersport.velMaxima[1]))
    car.derrapagem3 = parseInt(randomizeCar(supersport.txDerrapagem[0], supersport.txDerrapagem[1]))
  }

  console.log(cartype3 + " Vel Minima -  " + car.speedMin3 + " Vel Maxima - " + car.speedMax3 + " txDerrapagem -  " + car.derrapagem3)

  document.getElementById("juca").innerHTML = "<p>Juca</p>" + "<p>Raridade:  " + cartype3 + "</p>" + "<p>Velocidade Máxima: " + car.speedMax3 + "</p>" + "  <p>Velocidade Mínima: " + car.speedMin3 + "</p>" + "  <p>Taxa de derrapagem:   " + parseInt(car.derrapagem3) + "</p>"
}




//Função de corrida com número de voltas digitável//
function corrida() {

  //Variáveis de Voltas//
  let voltaPedro = +0
  let voltaJuca = +0
  let voltaEdna = +0
  //Número de Voltas//
  let numberVoltas = document.getElementById('voltas').value
  for (let i = 0; i < numberVoltas; i++) {
    //Performance do Pedro//
    let velocidadePedro = randomizeCar(car.speedMin, car.speedMax);
    velocidadePedro = parseInt(velocidadePedro - (velocidadePedro * car.derrapagem))

    console.log("Volta nº - " + (i + 1) + " - Velocidade: " + parseInt(velocidadePedro) + " Piloto - Pedro")


    //Performance da Edna//
    let velocidadeEdna = randomizeCar(car.speedMin2, car.speedMax2);
    velocidadeEdna = parseInt(velocidadeEdna - (velocidadeEdna * car.derrapagem2))
    console.log("Volta nº - " + (i + 1) + " - Velocidade: " + parseInt(velocidadeEdna) + " Piloto - Edna")


    //Performance do Juca//
    let velocidadeJuca = randomizeCar(car.speedMin3, car.speedMax3);
    velocidadeJuca = parseInt(velocidadeJuca - (velocidadeJuca * car.derrapagem3))
    console.log("Volta nº - " + (i + 1) + " - Velocidade: " + parseInt(velocidadeJuca) + " Piloto - Edna")

    //Contador de voltas vencidas//
    if (velocidadePedro > velocidadeJuca && velocidadePedro > velocidadeEdna) {
      voltaPedro++

    } else if (velocidadeJuca > velocidadePedro && velocidadeJuca > velocidadeEdna) {
      voltaJuca++

    } else if (velocidadeEdna > velocidadeJuca && velocidadeEdna > velocidadePedro) {
      voltaEdna++

    }
    console.log('Pedro venceu ' + voltaPedro + ' volta(s)')
    console.log('Juca venceu ' + voltaJuca + ' volta(s)')
    console.log('Edna venceu ' + voltaEdna + ' volta(s)')

    //Contador de Vítorias/Empates//
    if (voltaPedro > voltaJuca && voltaPedro > voltaEdna) {
      document.getElementById('voltasvencidas').innerHTML = '<p>O pedro venceu ' + voltaPedro + ' volta(s); ' + '<p>O Juca venceu ' + voltaJuca + ' volta(s);' + '<p>A Edna venceu ' + voltaEdna + ' volta(s); </p>'
      document.getElementById('resultado').innerHTML = 'O Pedro venceu a corrida'
    } else if (voltaPedro == voltaJuca && voltaPedro > voltaEdna) {
      document.getElementById('voltasvencidas').innerHTML = '<p>O pedro venceu ' + voltaPedro + ' volta(s); ' + '<p>O Juca venceu ' + voltaJuca + ' volta(s);' + '<p>A Edna venceu ' + voltaEdna + ' volta(s); </p>'
      document.getElementById('resultado').innerHTML = 'Pedro e Juca empataram'
    } else if (voltaPedro == voltaEdna && voltaPedro > voltaJuca) {
      document.getElementById('voltasvencidas').innerHTML = '<p>O pedro venceu ' + voltaPedro + ' volta(s); ' + '<p>O Juca venceu ' + voltaJuca + ' volta(s);' + '<p>A Edna venceu ' + voltaEdna + ' volta(s); </p>'
      document.getElementById('resultado').innerHTML = 'Pedro e Edna empataram'
    } else if (voltaJuca > voltaPedro && voltaJuca > voltaEdna) {
      document.getElementById('voltasvencidas').innerHTML = '<p>O pedro venceu ' + voltaPedro + ' volta(s); ' + '<p>O Juca venceu ' + voltaJuca + ' volta(s);' + '<p>A Edna venceu ' + voltaEdna + ' volta(s); </p>'
      document.getElementById('resultado').innerHTML = 'O Juca venceu a corrida'
    } else if (voltaEdna > voltaPedro && voltaEdna > voltaJuca) {
      document.getElementById('voltasvencidas').innerHTML = '<p>O pedro venceu ' + voltaPedro + ' volta(s); ' + '<p>O Juca venceu ' + voltaJuca + ' volta(s);' + '<p>A Edna venceu ' + voltaEdna + ' volta(s); </p>'
      document.getElementById('resultado').innerHTML = 'a Edna venceu a corrida'
    }

  }
}


function corridaButton(numeroVoltas) {

  //Variáveis de Voltas//
  let voltaPedro = +0
  let voltaJuca = +0
  let voltaEdna = +0
  //Número de Voltas//

  for (let i = 0; i < numeroVoltas; i++) {
    //Performance do Pedro//
    let velocidadePedro = randomizeCar(car.speedMin, car.speedMax);
    velocidadePedro = parseInt(velocidadePedro - (velocidadePedro * car.derrapagem))

    console.log("Volta nº - " + (i + 1) + " - Velocidade: " + parseInt(velocidadePedro) + " Piloto - Pedro")


    //Performance da Edna//
    let velocidadeEdna = randomizeCar(car.speedMin2, car.speedMax2);
    velocidadeEdna = parseInt(velocidadeEdna - (velocidadeEdna * car.derrapagem2))
    console.log("Volta nº - " + (i + 1) + " - Velocidade: " + parseInt(velocidadeEdna) + " Piloto - Edna")


    //Performance do Juca//
    let velocidadeJuca = randomizeCar(car.speedMin3, car.speedMax3);
    velocidadeJuca = parseInt(velocidadeJuca - (velocidadeJuca * car.derrapagem3))
    console.log("Volta nº - " + (i + 1) + " - Velocidade: " + parseInt(velocidadeJuca) + " Piloto - Edna")

    //Contador de voltas vencidas//
    if (velocidadePedro > velocidadeJuca && velocidadePedro > velocidadeEdna) {
      voltaPedro++

    } else if (velocidadeJuca > velocidadePedro && velocidadeJuca > velocidadeEdna) {
      voltaJuca++

    } else if (velocidadeEdna > velocidadeJuca && velocidadeEdna > velocidadePedro) {
      voltaEdna++

    }
    console.log('Pedro venceu ' + voltaPedro + ' volta(s)')
    console.log('Juca venceu ' + voltaJuca + ' volta(s)')
    console.log('Edna venceu ' + voltaEdna + ' volta(s)')

    //Contador de Vítorias/Empates//
    if (voltaPedro > voltaJuca && voltaPedro > voltaEdna) {
      document.getElementById('voltasvencidas').innerHTML = '<p>O pedro venceu ' + voltaPedro + ' volta(s); ' + '<p>O Juca venceu ' + voltaJuca + ' volta(s);' + '<p>A Edna venceu ' + voltaEdna + ' volta(s); </p>'
      document.getElementById('resultado').innerHTML = 'O Pedro venceu a corrida'
    } else if (voltaPedro == voltaJuca && voltaPedro > voltaEdna) {
      document.getElementById('voltasvencidas').innerHTML = '<p>O pedro venceu ' + voltaPedro + ' volta(s); ' + '<p>O Juca venceu ' + voltaJuca + ' volta(s);' + '<p>A Edna venceu ' + voltaEdna + ' volta(s); </p>'
      document.getElementById('resultado').innerHTML = 'Pedro e Juca empataram'
    } else if (voltaPedro == voltaEdna && voltaPedro > voltaJuca) {
      document.getElementById('voltasvencidas').innerHTML = '<p>O pedro venceu ' + voltaPedro + ' volta(s); ' + '<p>O Juca venceu ' + voltaJuca + ' volta(s);' + '<p>A Edna venceu ' + voltaEdna + ' volta(s); </p>'
      document.getElementById('resultado').innerHTML = 'Pedro e Edna empataram'
    } else if (voltaJuca > voltaPedro && voltaJuca > voltaEdna) {
      document.getElementById('voltasvencidas').innerHTML = '<p>O pedro venceu ' + voltaPedro + ' volta(s); ' + '<p>O Juca venceu ' + voltaJuca + ' volta(s);' + '<p>A Edna venceu ' + voltaEdna + ' volta(s); </p>'
      document.getElementById('resultado').innerHTML = 'O Juca venceu a corrida'
    } else if (voltaEdna > voltaPedro && voltaEdna > voltaJuca) {
      document.getElementById('voltasvencidas').innerHTML = '<p>O pedro venceu ' + voltaPedro + ' volta(s); ' + '<p>O Juca venceu ' + voltaJuca + ' volta(s);' + '<p>A Edna venceu ' + voltaEdna + ' volta(s); </p>'
      document.getElementById('resultado').innerHTML = 'a Edna venceu a corrida'
    }

  }
}
