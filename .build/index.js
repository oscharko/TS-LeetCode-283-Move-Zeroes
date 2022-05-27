let nums = [0, 1, 0, 3, 12];
const moveZeroes = function(nums2) {
  let zeroArray = [];
  if (nums2.length > 1 && nums2.reduce((a, b) => a + b) != 0 && nums2.indexOf(0) != -1) {
    while (nums2.indexOf(0) != -1) {
      nums2.splice(nums2.indexOf(0), 1);
      zeroArray.push(0);
    }
    return nums2.concat(zeroArray);
  }
  return nums2;
};
const moveZeroesWhiteForLoop = function(nums2) {
  let zeroArray = [];
  if (nums2.length > 1 && nums2.reduce((a, b) => a + b) != 0 && nums2.indexOf(0) != -1) {
    while (nums2.indexOf(0) != -1) {
      nums2.splice(nums2.indexOf(0), 1);
      zeroArray.push(0);
    }
    for (let i = 0; i < zeroArray.length; i++) {
      nums2.push(0);
    }
    return nums2;
  } else {
    return nums2;
  }
};
console.log(moveZeroes(nums));
//# sourceMappingURL=index.js.map
