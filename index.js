function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  o(n**2) because its a nested loop
*/

/* 
  Add your pseudocode here
  start at the first number in array
  add to next number, then next, etc
  until solution of target found
  if no solution found continue steps one thru three until solution found
  if solution is found console log true 
  if not log false
*/

/*
  Add written explanation of your solution here
  more or less just tweaked the laundry code to fit this problem the outer loop iterates through the array starting at 0 while the inner loop starts at 1
  they do this until they find a pair that equals the target in which case true is returned. If all pairs are checked loop will stop and return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
