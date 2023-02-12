import { IDotToPlot, prepareDots } from './dots-logic'; 
import './assets/styles.scss';
import { WIDTH, HEIGHT, DPI_WIDTH, DPI_HEIGHT, PADDING } from './consts'; 
import { createAxisLinesX, createAxisLinesY } from './axis-logic';
import { travelDotsCalculation } from './travel-logic';

const chart = document.getElementById("chart") as HTMLCanvasElement;
chart.addEventListener('click', generateChart)
export const ctx = chart.getContext('2d')!;

chart.style.width = WIDTH + 'px';
chart.style.height = HEIGHT + 'px';
chart.width = DPI_WIDTH;
chart.height = DPI_HEIGHT + PADDING;

let STARTING_DOTS: Array<IDotToPlot> = [
  {
    name: 1,
    coordinates: {
      x: 0,
      y: 0,
      }
  },
  {
    name: 2,
    coordinates: {
      x: 0,
      y: 0,
      }
  }
]

const createChart = (dotsToDraw: Array<IDotToPlot>) => {
  ctx.clearRect(0,0,DPI_WIDTH + PADDING, DPI_HEIGHT + PADDING);
  const labelsAxisX = dotsToDraw.map(dot => dot.name)
  createAxisLinesY();
  createAxisLinesX(labelsAxisX)
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#ff0000'
  for(let i = 0; i < dotsToDraw.length; i++) {
    ctx.lineTo(dotsToDraw[i].coordinates.x, DPI_HEIGHT - dotsToDraw[i].coordinates.y!)
  }
  ctx.stroke();
  ctx.closePath()
}

function generateChart() {
  const dotsToDraw = prepareDots(DPI_WIDTH, DPI_HEIGHT);
  const travelArray = travelDotsCalculation(STARTING_DOTS, dotsToDraw);
  STARTING_DOTS = dotsToDraw;
  // if(chart) {
  //   travelArray.forEach(array => {
  //     // setTimeout
  //     createChart(array)
  //   })
  // }
  createChart(dotsToDraw)
}

window.onload = function () {
  createChart(STARTING_DOTS)
}