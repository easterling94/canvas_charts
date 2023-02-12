import { IDotToPlot } from './dots-logic'

export const travelDotsCalculation = (oldArray: Array<IDotToPlot>, newArray: Array<IDotToPlot>) => {
  const ArrOldDots = oldArray.length;
  const ArrNewDots = newArray.length;
  let travelArray: Array<Array<IDotToPlot>> = []
  if (ArrOldDots > ArrNewDots) {

  }
  if (ArrOldDots < ArrNewDots) {
    const dotsToCreate = ArrNewDots - ArrOldDots;
    const copiesInBetween = dotsToCreate / (ArrOldDots - 1) // qty needed to 'empty' spaces between actual dots
    
  }
  if (ArrOldDots === ArrNewDots) {

  }
  return travelArray;
}