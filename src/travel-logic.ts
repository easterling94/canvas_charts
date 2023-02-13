import { IDotToPlot } from './dots-logic'

const TRAVEL_STEP = 10;

export const travelDotsCalculation = (oldArray: Array<IDotToPlot>, newArray: Array<IDotToPlot>) => {
  const ArrOldDots = oldArray.length;
  const ArrNewDots = newArray.length;
  let travelArray: Array<Array<IDotToPlot>> = []
  if (ArrOldDots > ArrNewDots) {
    travelArray.push(newArray);
    return travelArray
  }
  if (ArrOldDots < ArrNewDots) {
    // transforming old array to fit new array length
    let oldArrayTransformed: Array<IDotToPlot> = new Array(ArrNewDots);
    oldArrayTransformed[0] = oldArray[0];
    oldArrayTransformed[ArrNewDots - 1] = oldArray[ArrOldDots - 1];
    for (let i = 1; i < ArrOldDots - 1; i++) {
      oldArrayTransformed[i] = oldArray[i];
    }
    for (let i = 0; i < newArray.length; i++) {
      if (oldArrayTransformed[i] === undefined) {
        oldArrayTransformed[i] = structuredClone(oldArrayTransformed[i - 1])
      }
      oldArrayTransformed[i].name = newArray[i].name;
    }
    // calculating travel charts
    for (let i = 1; i < TRAVEL_STEP + 1; i++) {
      const travelChart:Array<IDotToPlot> = oldArrayTransformed.map((el, i) => {
        const x = Math.abs(el.coordinates.x - newArray[i].coordinates.x) * i / TRAVEL_STEP
        const y = Math.abs(el.coordinates.y! - newArray[i].coordinates.y!) * i / TRAVEL_STEP
        const name = el.name;
        return {name: name, coordinates: {x: x, y: y}}
      })
      travelArray.push(travelChart)
    }
    console.log(travelArray)
  } 
  if (ArrOldDots === ArrNewDots) {
    travelArray.push(newArray);
    return travelArray
  }
  return travelArray;
}