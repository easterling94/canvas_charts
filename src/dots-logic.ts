interface IDots {
  x: number,
  y: number,
}


export const createDots = () => {
  let testDotsArr:Array<IDots>;
  const random = Math.random();
  console.log(random);
  testDotsArr = [
    {
      x: 1,
      y: 10,
    },
    {
      x: 2,
      y: 10,
    },
    {
      x: 3,
      y: 40,
    },
    {
      x: 4,
      y: 15,
    },
    {
      x: 5,
      y: 10,
    }
  ];
  return testDotsArr;
}