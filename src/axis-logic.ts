import { DPI_WIDTH, DPI_HEIGHT, AXIS_LINES_Y,STEP_AXIS_LINES_Y } from './consts'; 
import { ctx } from './index';

export function createAxisLinesY() {
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#000000'
  for (let i = 1; i < AXIS_LINES_Y + 1; i++) {
    const y = STEP_AXIS_LINES_Y * i;
    ctx.moveTo(0, y);
    ctx.lineTo(DPI_WIDTH, y);
  }
  ctx.stroke();
  ctx.closePath();
}

export function createAxisLinesX() {
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.font = 'normal 20px Arial'
  ctx.strokeStyle = '#000000'
  ctx.moveTo(0, 0);
  ctx.lineTo(0, DPI_HEIGHT);
  ctx.stroke();
  ctx.closePath();
}