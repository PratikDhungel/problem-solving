const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const leftValue = height[left];
    const rightValue = height[right];
    const minHeight = Math.min(leftValue, rightValue);

    const currArea = minHeight * width;

    maxArea = Math.max(maxArea, currArea);

    if (leftValue < rightValue) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
