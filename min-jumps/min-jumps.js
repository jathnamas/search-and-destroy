'use strict';

// Complete this algo

const maxNum = numArr => {
  
  
    for (let i = 0; numArr.length; i ++ ){
    let maxValue = numArr[0]
    let numToCheck = numArr[i]
    if (maxValue > numToCheck){
      maxValue = numToCheck
    }
    
    return maxValue
  
   }
  }
  
  
  const minJumps = arr => {
    let length = arr.length
     //amount of spaces we can jump (min/max)
    let fakeArr = []
    let counter = 0
    
    6/4 
  if (arr.length > 0){
   for (let i = 0, numJumps = arr[i]; i < numJumps ; i ++){
    fakeArr.push(arr[i])
    maxNum(fakeArr)
    counter ++ 
  
  
  } 
  
} 
else {
    return counter
}
   
  
  }



module.exports = minJumps