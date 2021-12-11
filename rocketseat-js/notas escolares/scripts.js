function scoreConverter(score) {
  let convertedScore;
  if (score < 60 && score >= 0) {
    convertedScore = "F"
  }
  else if (score >= 60 && score <= 69) {
    convertedScore = "D"
  }
  else if (score >= 70 && score <= 79) {
    convertedScore = "C"
  }
  else if (score >= 80 && score <= 89) {
    convertedScore = "B"
  }
  else if (score >= 90 && score <= 100) {
    convertedScore = "A"
  }
  else {
    return "Nota invalida"
  }

  return convertedScore
}


let note = 90

console.log(scoreConverter(note))