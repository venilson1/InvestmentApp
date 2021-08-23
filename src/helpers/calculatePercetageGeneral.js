export default function calculatePercetageGeneral(values = []){

  values = values.map(e => e.value)
  const firstElement = values.shift();
  const lastElement = values.pop();

  // eslint-disable-next-line no-unused-expressions
  let result = (lastElement - firstElement).toFixed(2)
  let percetage = (((lastElement - firstElement)/100)*10).toFixed(2)

  return {
    result,
    percetage
  }
}