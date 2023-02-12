import { DPI_WIDTH, DPI_HEIGHT, AXIS_LINES_Y,STEP_AXIS_LINES_Y } from './consts'; 
import { ctx } from './index';

export function createAxisLinesY() {
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

export function createAxisLinesX(labelsAxisX: Array<number>) {
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