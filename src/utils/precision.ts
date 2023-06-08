export const precision = (appreciationBal) => {
  const precision = 2
  const precisionFactor = 10 ** precision

  const roundedBal = Math.floor(appreciationBal * precisionFactor) / precisionFactor
  const formattedBal = roundedBal.toFixed(precision)
  return formattedBal
}