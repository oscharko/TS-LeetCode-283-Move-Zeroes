let nums = [0, 1, 0, 3, 12]

const moveZeroesWhithConcat = function(nums: number[]): number[] {
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

const moveZeroesWhiteForLoop = function (nums: number[]): number[]{
  let zeroArray: number[]= []
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

console.log(moveZeroes(nums))
