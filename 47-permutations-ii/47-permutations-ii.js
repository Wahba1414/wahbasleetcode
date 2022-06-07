/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let result = [];

  nums.sort((a, b) => a - b);
  solver(result, [], nums);

  return result;
};

function solver(result, sol, nums) {
  let len = nums.length;

  if (len == 0) {
    result.push(JSON.parse(JSON.stringify(sol)));
  }

  let i = 0;
  while (i < len) {
    while (nums[i] == nums[i + 1]) i++; //with earlier sorting to get unique solutions 
    //Another tricks: (hash map, or filter out any similar number from the list)

    sol.push(nums[i]);

    let newNums = JSON.parse(JSON.stringify(nums));
    newNums.splice(i, 1);

    solver(result, sol, newNums);

    sol.pop();

    i++;
  }

}