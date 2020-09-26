checkSpeed(130)

function checkSpeed(speed) {
  let speedLimit = 70
  let kmPerPoint = 5
  
  if (speed < speedLimit + kmPerPoint) {
    console.log('Ok')
  } else { 
    const points = Math.floor((speed - speedLimit) / kmPerPoint)
    if (points >= 12){
      console.log('License suspended')
    } else {
      console.log('Points', points)
    }
  }
}
