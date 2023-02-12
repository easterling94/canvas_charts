import { IDotToPlot, prepareDots } from './dots-logic'; 
import './assets/styles.scss';
import { WIDTH, HEIGHT, DPI_WIDTH, DPI_HEIGHT, AXIS_LINES_Y,STEP_AXIS_LINES_Y, PADDING } from './consts'; 

const chart = document.getElementById("chart") as HTMLCanvasElement;
chart.addEventListener('click', generateChart)
const ctx = chart.getContext('2d')!;

chart.style.width = WIDTH + 'px';
chart.style.height = HEIGHT + 'px';
chart.width = DPI_WIDTH;
chart.height = DPI_HEIGHT + PADDING;

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

function createAxisLinesY() {
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.font = 'normal 20px Arial'
  ctx.strokeStyle = '#bbb'
  for (let i = 1; i < AXIS_LINES_Y + 1; i++) {
    const y = STEP_AXIS_LINES_Y * i;
    ctx.fillText((DPI_HEIGHT - y).toString(), 0, y - 10)
    ctx.moveTo(0, y);
    ctx.lineTo(DPI_WIDTH, y);
  }
  ctx.stroke();
  ctx.closePath();
}

function createAxisLinesX(labelsAxisX: Array<number>) {
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.font = 'normal 20px Arial'
  ctx.strokeStyle = '#bbb'
  for (let i = 1; i < labelsAxisX.length + 1; i++) {
    const x = DPI_WIDTH / (labelsAxisX.length + 1) * i;
    ctx.fillText(labelsAxisX[i - 1].toString(), x - 5, DPI_HEIGHT + 30)
    ctx.moveTo(x, 0);
    ctx.lineTo(x, DPI_HEIGHT);
  }
  ctx.stroke();
  ctx.closePath();
}
function generateChart() {
  const dotsToDraw = prepareDots(DPI_WIDTH, DPI_HEIGHT);
  if(chart) {
    createChart(dotsToDraw)
  }
}

window.onload = function () {
  generateChart();
}