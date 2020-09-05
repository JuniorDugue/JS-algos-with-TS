// learning typescript

// assigning types to variables
function add(num1: number, num2: number): number {
  //any type that'll allow us to put any data type in []
  const example: any[] = [];
  const example1: any[] = [""]; //strings
  const example2: any[] = ["", 0, 12]; //numbers
  const example3: any[] = [true]; //booleans

  // number type and we're expecting everything in the array to be a number
  const example4: number[] = []; //stating this is a number type
  const example5: number[][] = [[1, 2, 9]]; //we can use nested arrays
  return num1 + num1;
}
