// const removeDuplicates = (nums) => {
//   let i = 0;

//   while (i < nums.length) {
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i + 1, 1);
//     } else {
//       i++;
//     }
//   }

//   return nums.length;
// };

// Solution from neetcode
// This solution is faster
const removeDuplicates = (nums) => {
  let left = 1;

  for (let right = 1; right < nums.length; right++) {
    if (nums[right] !== nums[right - 1]) {
      nums[left] = nums[right];
      left++;
    }
  }

  return left;
};

let nums = [1, 1, 2];

removeDuplicates(nums);
