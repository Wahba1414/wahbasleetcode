var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  // console.log(nums);

  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Filter out any duplication.
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    let targetSum, tempSum;
    targetSum = -nums[i];

    while (j < k) {

      tempSum = nums[j] + nums[k];

      if (targetSum == tempSum) {
        //new triplet
        result.push([nums[i], nums[j], nums[k]]);

        // Filter out any duplication.
        while (nums[j] == nums[j + 1]) j++;
        while (nums[k] == nums[k - 1]) k--;

        j++;
        k--;

      } else if (tempSum < targetSum) {
        j++;
      } else {
        k--;
      }
    }

  }

  return result;
};