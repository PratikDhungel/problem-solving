// const twoSum = (nums, target) => {
//   const map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const currValue = nums[i];
//     const diff = target - currValue;
//     const diffValue = map.get(diff);

//     if (diffValue !== undefined) {
//       return [diffValue, i + 1];
//     } else {
//       map.set(currValue, i + 1);
//     }
//   }
// };

// Updated solution, since input array is sorted
// User two pointers
const twoSum = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const leftValue = nums[left];
    const rightValue = nums[right];

    const currSum = leftValue + rightValue;

    if (currSum === target) return [left + 1, right + 1];
    if (currSum > target) {
      right--;
    }
    if (currSum < target) {
      left++;
    }
  }
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
