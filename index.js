let num = parseInt(prompt('Pick a number'))

if (num % 2 === 0) {
  alert('Even')
} else if (num % 2 !== 0) {
  alert('Odd')
} else if (isNaN(num) === true) {
  alert('NaN')
}
