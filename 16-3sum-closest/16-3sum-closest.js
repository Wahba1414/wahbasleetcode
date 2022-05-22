var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);

  console.log(nums);

  let result = {
    sum: 0,
    diff: Math.pow(2, 1000)
  };

  for (let i = 0; i < nums.length - 2; i++) {
    // Filter out any duplication.
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    let tempSum, diff;

    while (j < k) {

      tempSum = nums[i] + nums[j] + nums[k];

      diff = Math.abs(tempSum - target);

      if (diff < result.diff) {
        result = {
          sum: tempSum,
          diff
        }
      }

      if (tempSum < target) {
        j++;
      } else if (tempSum > target) {
        k--;
      } else {
        return target;
      }

    }

  }

  return result.sum;
};