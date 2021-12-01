// Time  = O(n Log(n))
// Space = O(1)
const two_number_sum = function (list, number) {
  let higher = list.sort().length - 1;
  let lower = 0;
  while (lower < higher) {
    sum = list[lower] + list[higher];
    if (sum === number) return {
      hasPair: true,
      pair: [list[lower], list[higher]]
    };
    if (sum <= number) higher--;
    else lower++;
  }
  return {
    hasPair: false
  }
}

console.log(two_number_sum([3, 5, -4, 8, 11, 1, -1, 6], 10));
