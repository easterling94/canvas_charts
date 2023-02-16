export const WIDTH = 600;
export const HEIGHT = 200;

export const DPI_WIDTH = WIDTH * 2;
export const DPI_HEIGHT = HEIGHT * 2;

export const PADDING = 15;

export const AXIS_LINES_Y = 1;
export const STEP_AXIS_LINES_Y = DPI_HEIGHT / AXIS_LINES_Y

export const RANDOM_MIN = 2;
export const RANDOM_MAX = 10;
export const TRAVEL_STEP = 20;

export const SQUEEZE_Y_COEFF = 0.9; // like in %

export const STARTING_DOTS_INITIAL = [
  {
    name: 1,
    coordinates: {
      x: 400,
      y: 300,
      }
  },
  {
    name: 2,
    coordinates: {
      x: 800,
      y: 200,
      }
  }
]