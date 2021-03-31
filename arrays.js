var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element){
  let newArr = array;
  return newArr.unshift(element);
}

function destructivelyAddElementToBeginningOfArray (array, element){
  return array.unshift(element);
}