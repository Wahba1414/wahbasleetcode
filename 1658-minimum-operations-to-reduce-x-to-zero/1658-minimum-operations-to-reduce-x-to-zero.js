/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  let sum = nums.reduce((prev, next) => prev + next, 0);

  let target = sum - x;

  if (target == 0) return nums.length;
  if (target < 0) return -1;

  let res = -1, slidingSum = 0, left = 0;

  for (let i = 0; i < nums.length; i++) {
    slidingSum += nums[i];

    while (slidingSum > target) {
      slidingSum -= nums[left];
      left++;
    }

    if (slidingSum == target) {
      res = Math.max(res, i - left + 1);
    }
  }

  return (res == -1) ? -1 : nums.length - res;

};