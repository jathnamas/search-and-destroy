'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	/*for (let i = 0; i < array.length; i++) {
    let currElem = array[i];
    if (currElem === target) {
      console.log(currElem, target);
      return true;
    }
  }
  return false; */
  return array.includes(target);
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
