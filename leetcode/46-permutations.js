const permute = (nums) => {
  const results = solve(nums);
  return results;
};

const solve = (nums) => {
  let results = [];

  if (nums.length === 1) {
    // If array has only one number return the array
    return [[nums[0]]];
  }

  for (let i = 0; i < nums.length; i++) {
    // Remove the first item from the array
    const firstNumber = nums.shift();

    // Generate permutations of remaining numbers
    const treeResults = solve(nums);

    // Iterate over each permutation and add the removed number
    // Spread the results with existing permutations
    treeResults.forEach((sol) => sol.push(firstNumber));
    results = [...results, ...treeResults];

    // Restore removed number to array for next set of permutation
    nums.push(firstNumber);
  }

  return results;
};

const permutations = permute([1, 2, 3]);
console.log(permutations);
console.log(permutations.length);
