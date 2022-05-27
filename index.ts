let nums = [1]

const moveZeroesWhithConcat = function (nums: number[]): number[] {
  let zeroArray: number[] = []
  if (nums.length > 1 && nums.reduce((a, b) => a + b) != 0 && nums.indexOf(0) != -1) {
    while (nums.indexOf(0) != -1) {
      nums.splice(nums.indexOf(0), 1)
      zeroArray.push(0)
    }
    return nums.concat(zeroArray)
  }
  return nums
}

const moveZeroesWhiteForLoop = function (nums: number[]): number[] {
  let zeroArray: number[] = []
  if (nums.length > 1 && nums.reduce((a, b) => a + b) != 0 && nums.indexOf(0) != -1) {
    while (nums.indexOf(0) != -1) {
      nums.splice(nums.indexOf(0), 1)
      zeroArray.push(0)
    }
    for (let i = 0; i < zeroArray.length; i++) {
      nums.push(0)
    }
    return nums
  } else {
    return nums
  }
}

function moveZeroesFoorLoop(nums: number[]): number[] {
  let j: number = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const zeroes = nums[i]
      nums[i] = 0
      nums[j++] = zeroes
    }
  }
  return nums
};

function moveZeroes(nums: number[]): number[] {
  /*
  # Description for array v:
  #   - v[0] = input array and also output rotate array
  #   - v[1] = increment runner for while loop condition
  #   - v[2] = increment runner in if condition for index put array output
  #   - v[3] = memory for elements from array greater zero
  */
  let v: [number[], number, number, number] = [nums, 0, 0, 0]
  while (v[1] < v[0].length) {
    if (v[0][v[1]] !== 0) {
      v[3] = v[0][v[1]]
      v[0][v[1]] = 0
      v[0][v[2]++] = v[3]
    }
    v[1]++
  }
  return v[0]
};

console.log(moveZeroes(nums))
