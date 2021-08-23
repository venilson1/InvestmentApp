export default function calculatePercetage(values = null) {
  let percetage = [0]
  let x = 0
  for (let i = 1; i < values.length; i++) {
    percetage.push(
      parseFloat(
        (((values[i].value - values[x++].value)/100)*10).toFixed(2)
      )
    )
  }

  return percetage.map(e => e)
}