const diceRoller = (diceCount, dice) => {
  return diceCount * ( 1 + (Math.floor(Math.random() * (dice - 1 + 1))))
}

