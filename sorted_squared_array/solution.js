// T = O(n)
// S = O(n)
const sorted_squared_array = function (list) {
  let lower = 0;
  let higher = list.length - 1
  const sorted_squared = [];
  while (higher >= lower) {
    const absLower = Math.abs(list[lower])
    const absHigher = Math.abs(list[higher])
    if (absLower >= absHigher) {
      sorted_squared.unshift(absLower * absLower)
      lower++;
    } else {
      sorted_squared.unshift(absHigher * absHigher)
      higher--;
    }
  }
  return sorted_squared;
}

console.log(sorted_squared_array([-7, -4, -1, 0, 2, 5, 8, 11]));
// [0, 1, 4, 16, 25, 49, 64, 121]
console.log(sorted_squared_array([0]));
// [0]
console.log(sorted_squared_array([0, 2]));
// [0, 4]
console.log(sorted_squared_array([-1, 0]));
// [0, 1]
