import { RANDOM_MAX, RANDOM_MIN, DPI_HEIGHT, SQUEEZE_Y_COEFF } from './consts';
import { ctx } from './index';

export interface IDotToPlot {
  name: number,
  coordinates: {
    x: number,
    y: number | null,
  }
}

const createAxisX = () => {
  let testDotsArr:Array<IDotToPlot> = [];
  const randomX = Math.floor(Math.random() * (RANDOM_MAX - RANDOM_MIN + 1) + RANDOM_MIN);
  
  for (let i = 0; i < randomX; i++) {
    const dot: IDotToPlot = {
      name: i + 1,
      coordinates: {
        x: i,
        y: null,
      }
    }
    testDotsArr = [...testDotsArr, dot]
  }
  return testDotsArr;
}

export const prepareDots = (canvasWidth: number, canvasHeight: number) => {
  let dotsArr = createAxisX();
  let preparedDots: Array<IDotToPlot> = [];
  for (let i = 0; i < dotsArr.length; i++) {
    const coordinateX = Math.floor(canvasWidth * (1 + dotsArr[i].coordinates.x) / (dotsArr.length + 1));
    const randomY = Math.random();
    const randomYDir = Math.floor(Math.random() * 2);
    const coordinateY = Math.floor((canvasHeight * SQUEEZE_Y_COEFF) / 2 * (randomYDir === 1 ? (1 + randomY) : (1 - randomY)));
    const dotToDraw: IDotToPlot = dotsArr[i];
    dotToDraw.coordinates.x = coordinateX;
    dotToDraw.coordinates.y = coordinateY ;
    preparedDots.push(dotToDraw);
  }
  return preparedDots;
}

export const drawDots = (array: Array<IDotToPlot>) => {

  for (let i = 0; i < array.length; i++) {
    ctx.beginPath();
    ctx.strokeStyle = '#000000'
    ctx.arc(array[i].coordinates.x, DPI_HEIGHT - array[i].coordinates.y!, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.stroke();
  }

}