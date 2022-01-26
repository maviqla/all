const sistemas = {
    primeiro: {
      nome: "Dungeons and Dragons",
      contexto: "Fantasia Medieval",
      niveldecomplexidade: "Medio",
    },
    segundo: {
      nome: "World of Darkness",
      contexto: "Contemporaneo",
      niveldecomplexidade: "Baixo",
    },
    terceiro: {
      nome: "Cyberpunk 2020",
      contexto: "Futurismo cibernetico",
      niveldecomplexidade: "Medio",
    },
    quarto: {
      nome: "GURPS",
      contexto: "Qualquer um",
      niveldecomplexidade: "Alto",
    },
  }
  
  function recursiveObj(obj){
  for (let key in obj) 
  if (typeof obj[key] === "object" ) {
  console.log(key)
  recursiveObj(obj[key])
  } else {
  console.log(`${key} = ${obj[key]}`);
  }
  }
  
  recursiveObj(sistemas)
  