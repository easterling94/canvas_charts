import { IDotToPlot, prepareDots, drawDots } from './dots-logic'; 
import './assets/styles.scss';
import { WIDTH, HEIGHT, DPI_WIDTH, DPI_HEIGHT, PADDING, STARTING_DOTS_INITIAL } from './consts'; 
import { createAxisLinesX, createAxisLinesY } from './axis-logic';
import { travelDotsCalculation } from './travel-logic';

const chart = document.getElementById("chart") as HTMLCanvasElement;
chart.addEventListener('click', generateChart)
export const ctx = chart.getContext('2d')!;

chart.style.width = WIDTH + 'px';
chart.style.height = HEIGHT + 'px';
chart.width = DPI_WIDTH;
chart.height = DPI_HEIGHT + PADDING;

let STARTING_DOTS:Array<IDotToPlot> = STARTING_DOTS_INITIAL;

const createChart = async (dotsToDraw: Array<IDotToPlot>) => {
  ctx.clearRect(0,0,DPI_WIDTH + PADDING, DPI_HEIGHT + PADDING);
  createAxisLinesY();
  createAxisLinesX();
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#000000'
  for(let i = 0; i < dotsToDraw.length; i++) {
    ctx.lineTo(dotsToDraw[i].coordinates.x, DPI_HEIGHT - dotsToDraw[i].coordinates.y!)
  }
  ctx.stroke();
  ctx.closePath()
  drawDots(dotsToDraw);
}

async function generateChart() {
  const dotsToDraw = prepareDots(DPI_WIDTH, DPI_HEIGHT);
  const travelArray = travelDotsCalculation(STARTING_DOTS, dotsToDraw)!;
  STARTING_DOTS = dotsToDraw;

  for (let i = 0; i < travelArray.length; i++) {
    const promise: Array<IDotToPlot> = await new Promise((res, rej) => {
      setTimeout(() => res(travelArray[i]), 10)
    })
    await createChart(promise)
  }
}

window.onload = function () {
  createChart(STARTING_DOTS)
}