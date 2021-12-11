function transformDegree(degree) {
  const celsiusExist = degree.toUpperCase().includes('C')
  const fahrenheitExist = degree.toUpperCase().includes('F')
  let newDegree;

  if (celsiusExist) {
    degree = degree.replace("C", "")
    newDegree = `${Number(degree) * 9/5 + 32}F` //  Transforma fahrenheits em celsius
  }
  else if (fahrenheitExist) {
    degree = degree.replace("F", "")
    newDegree = `${(Number(degree) - 32) * 5/9}C`
  }
  else {
    throw new Error("Grau não identificado")
  }
  return newDegree
}

try{
  console.log(transformDegree("10C"))
  console.log(transformDegree("50F"))
} catch (error){
  console.log(error)
}
