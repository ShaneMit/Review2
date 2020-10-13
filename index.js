for (let i = 0; i < 10; i++) {
  var userScore = ''
  var compScore = ''
  let choices = ['r', 'p', 's']
  let userChoice = prompt('Pick r, p, or s')
  let compChoice = choices[Math.floor(Math.random() * choices.length)]
  console.log(userChoice)
  console.log(compChoice)

  if (userChoice === 'r' && compChoice === 's') {
    userScore+
    alert(`You win! User: ${userScore}`)
  } else if (userChoice === 'r' && compChoice === 'p') {
    compScore+
    alert(`You lose. Comp: ${compScore}`)
  }

}