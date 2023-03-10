import { IDotToPlot } from './dots-logic'
import { TRAVEL_STEP } from './consts';

interface ICoefficientsArray {
  A: number,
  B: number,
  C: number,
}

export const travelDotsCalculation = (oldArray: Array<IDotToPlot>, newArray: Array<IDotToPlot>) => {
  const check = oldArray.length === newArray.length;
  if (oldArray.length > newArray.length) {
    return OldMoreNew(oldArray, newArray, check)
  }
  if (oldArray.length < newArray.length) {
    return OldLessNew(oldArray, newArray, check)
  } 
  if (oldArray.length === newArray.length) {
    return OldEqualsNew(oldArray, newArray, check)
  }
}

const OldLessNew = (oldArray:Array<IDotToPlot>, newArray: Array<IDotToPlot>, check: boolean) => {
  let travelArray: Array<Array<IDotToPlot>> = [];

  let oldArrayTransformed: Array<IDotToPlot> = new Array(newArray.length);
  oldArrayTransformed[0] = oldArray[0];
  oldArrayTransformed[newArray.length - 1] = oldArray[oldArray.length - 1];
  for (let i = 1; i < oldArray.length - 1; i++) {
    oldArrayTransformed[i] = oldArray[i];
  }
  for (let i = 0; i < newArray.length; i++) {
    if (oldArrayTransformed[i] === undefined) {
      oldArrayTransformed[i] = structuredClone(oldArrayTransformed[i - 1]);
    }
  }
  for (let i = 0; i < newArray.length; i++) {
    oldArrayTransformed[i].name = newArray[i].name;
  }

  travelArray = travelLogic(oldArrayTransformed, newArray, check)
  return travelArray;
}

const OldMoreNew = (oldArray:Array<IDotToPlot>, newArray: Array<IDotToPlot>, check: boolean) => {
  let travelArray: Array<Array<IDotToPlot>> = [];

  oldArray.splice((newArray.length - 1),(oldArray.length - newArray.length))
  oldArray[oldArray.length - 1].name = newArray[oldArray.length - 1].name

  travelArray = travelLogic(oldArray, newArray, check)
  return travelArray
}

const OldEqualsNew = (oldArray:Array<IDotToPlot>, newArray: Array<IDotToPlot>, check: boolean) => {
  let travelArray: Array<Array<IDotToPlot>> = [];
  travelArray = travelLogic(oldArray, newArray, check)
  return travelArray
}

const travelLogic = (oldArray:Array<IDotToPlot>, newArray: Array<IDotToPlot>, check: boolean) => {
  let travelArray: Array<Array<IDotToPlot>> = [];
  let coefficientsArray: Array<ICoefficientsArray> = [];
  if (!check) {
    for (let i = 0; i < newArray.length; i++) {
      const Y1 = oldArray[i].coordinates.y!;
      const Y2 = newArray[i].coordinates.y!;
      const X1 = oldArray[i].coordinates.x;
      const X2 = newArray[i].coordinates.x;
      // coefficients for calculating line based on two points like Ax + By + C = 0
      let A = Y1 - Y2;
      let B = X2 - X1 === 0 ? 1 : X2 - X1;
      let C = X1 * Y2 - X2 * Y1;
      const coefficients:ICoefficientsArray = {A: A, B: B, C: C}
      coefficientsArray.push(coefficients)
    }
    // calculating travel charts
    for (let j = 1; j < TRAVEL_STEP + 1; j++) {
      const travelChart:Array<IDotToPlot> = oldArray.map((el, i) => {
        const X: number = Math.abs(el.coordinates.x + (newArray[i].coordinates.x - el.coordinates.x) * j / TRAVEL_STEP);
        const A: number = coefficientsArray[i].A;
        const B: number = coefficientsArray[i].B;
        const C: number = coefficientsArray[i].C;
        const Y: number = (-C - A * X) / B
        const name = el.name;
        return {name: name, coordinates: {x: X, y: Y}}
      })
      travelArray.push(travelChart)
    }
  }
  if (check) {
    for (let j = 1; j < TRAVEL_STEP + 1; j++) {
      const travelChart:Array<IDotToPlot> = oldArray.map((el, i) => {
        const X: number = newArray[i].coordinates.x;
        const Y: number = Math.abs(el.coordinates.y! + (newArray[i].coordinates.y! - el.coordinates.y!) * j / TRAVEL_STEP)
        const name = el.name;
        return {name: name, coordinates: {x: X, y: Y}}
      })
      travelArray.push(travelChart)
    }
  }
  return travelArray;
}