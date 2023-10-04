function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++){
    const remainder = target - array[i]
    for(let j = i + 1; j < array.length; j++){
      if(array[j] === remainder){
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/
//0(n*n)

/* 
  Add your pseudocode here
*/
//writing a loop to iterate over the array for the first time
//Nest another loop inside the first loop
//Write an if statement to compare the two values to confirm if they add up to the target.

/*
  Add written explanation of your solution here
*/
// So from what I understand is that I am given an array and a target number. I should iterate through the array to get two numbers that add up to the target and if they do exist I should return true or false if the combination does not exist.

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
