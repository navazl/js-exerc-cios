function calculateBalance(family) {
  let totalIncomes = 0
  let totalExpenses = 0
  for (gain of family["incomes"]){
    totalIncomes += gain
  }
  for (spent of family["expenses"]) {
    totalExpenses += spent
  }
  totalBalance = totalIncomes - totalExpenses

  if (totalBalance >= 0) {
    console.log(`Seu saldo é ${totalBalance}: Positivo`)
  }
  else {
    console.log(`Seu saldo é ${totalBalance}: Negativo`)
  }
}

let family = {
  incomes: [2500, 3200, 250.43, 360.45],
  expenses: [320.34, 128.45, 176.87, 1450.00]
}
calculateBalance(family)