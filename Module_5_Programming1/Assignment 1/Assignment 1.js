https://codepen.io/katherine-fernandez/pen/MWyeVrw

const weeklyIncome = parseInt(prompt("weeklyIncome:"))
const foodCost = parseInt(prompt("foodCost:"))
const housingCost = parseInt(prompt("housingCost:"))
const transportationCost = parseInt(prompt("transportationCost:"))
const otherCost = parseInt(prompt("otherCost:"))
const saveInAYear = parseInt(prompt("saveInAYear"))

const saveInAWeek = saveInAYear/52

const leftOverMoney = weeklyIncome - (foodCost+housingCost+transportationCost+otherCost)

if (leftOverMoney > saveInAWeek) {
  console.log("You are on track")
} else {
  const newString = "You are not on track.  You need to save an extra " + saveInAWeek - leftOverMoney + " dollars per week"
  console.log(newString)
}

const newString = "You are not on track.  You need to save an extra " + saveInAWeek - leftOverMoney + " dollars per week"
const alternative = `You are not on track.  You need to save an extra ${saveInAWeek - leftOverMoney} dollars per week`

const newString2 = newString + alternative + 'adding a new string'
