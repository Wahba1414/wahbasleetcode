/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  let map = {
    [nums[0]]: 0,
  };
  let score = nums[0];
  let maxScore = score;

  let start = 0;

  for (let i = 1; i < nums.length; i++) {
    score += nums[i];

    if (map[nums[i]] >= start) {
      for (let j = start; j <= map[nums[i]]; j++) {
        score -= nums[j];
      }

      start = map[nums[i]] + 1;
    }

    map[nums[i]] = i;

    if (score > maxScore) maxScore = score;

  }

  return maxScore;

};