var userScore = ''
var compScore = ''

for (let i = 0; i < 10; i++) {
  let choices = ['r', 'p', 's']
  let userChoice = prompt('Pick r, p, or s')
  let compChoice = choices[Math.floor(Math.random() * choices.length)]
  console.log(userChoice)
  console.log(compChoice)

  if (userChoice === 'r' && compChoice === 's') {
    userScore++
    alert(`You win! User: ${userScore}`)
  } else if (userChoice === 'r' && compChoice === 'p') {
    compScore++
    alert(`You lose. Comp: ${compScore}`)
  } else if (userChoice === compChoice) {
    alert(`Tie`)
  } else if (userChoice === 'p' && compChoice === 'r') {
    userScore++
    alert(`You win! User: ${userScore}`)
  } else if (userChoice === 'p' && compChoice === 's') {
    compScore++
    alert(`You lose. Comp: ${compScore}`)
  } else if (userChoice === 's' && compChoice === 'p') {
    userScore++
    alert(`You win! User: ${userScore}`)
  } else if (userChoice === 's' && compChoice === 'r') {
    compScore++
    alert(`You lose. Comp: ${compScore}`)
  }

  if (i === 9) {
    if (userScore > compScore) {
      alert(`Game over! YOU WIN!
             You: ${userScore}
             Comp: ${compScore}`)
    } else if (compScore > userScore) {
      alert(`Game over! YOU LOSE!
             Comp: ${compScore}
             You: ${userScore}`)
    } else if (userScore === compScore) {
      alert(`Game over! IT'S A TIE!
             You: ${userScore}
             Comp ${compScore}`)
    }
  }
}
