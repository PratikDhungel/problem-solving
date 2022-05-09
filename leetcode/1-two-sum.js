const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currValue = nums[i];
    const diff = target - currValue;
    const diffValue = map.get(diff);

    if (diffValue !== undefined) {
      return [diffValue, i];
    } else {
      map.set(currValue, i);
    }
  }
};

const nums = [3, 3];
const target = 6;
console.log(twoSum(nums, target));
