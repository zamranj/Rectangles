function makeLines(size){
 let lines = "";
 for(let i = 0; i <=size; i++){
   lines += "#";   
 }
return lines;
}
console.log(makeLines(5)+"\n===Squares===\n");

function makeSquare(size){
  height = size;
  width = size;
  let square = "";
  for(let i=0; i<=height; i++){
    square += (makeLines(width)+ "\n");
  }
return square

}

console.log(makeSquare(5)+"\n===Rectangles===\n");

function makeRectangle(width, height){
  let rectangle = "";
  for(let i=0; i<height; i++){
      rectangle += (makeLines(width)) + "\n";
  }
return rectangle;
}

console.log(makeRectangle(5, 3)+"\n===Stairs===\n");

function makeDownwardsStairs(height){
  let stairs = "";
  for(let i =0; i<height; i++){
    stairs += makeLines([i])+"\n";
  }
  return stairs;
}
console.log(makeDownwardsStairs(5)+"\n===Isosceles Triangle===\n");

function  makeSpaceLine(numSpaces,numChars){
  let spaces =" ";
  let chars = "#";
  let width = (numSpaces+numChars);
  let lines = "";
  spaces += numSpaces;
  chars += numChars;
  lines = spaces+numChars+spaces;
  return lines;
}

console.log(makeSpaceLine(3,5));

console.log("===============");

function makeIsoscelesTriangle(height) {
   let triangle = '';
   for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
   }
   return triangle.slice(0, -1);
}