const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currValue = nums[i];
    const diff = target - currValue;
    const diffValue = map.get(diff);

    if (diffValue !== undefined) {
      return [diffValue, i + 1];
    } else {
      map.set(currValue, i + 1);
    }
  }
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
