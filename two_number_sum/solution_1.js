// Time  = O(n)
// Space = O(n)
const two_number_sum = function (list, number) {
  let complements = {};
  for (num of list) {
    console.log(num)
    console.log(complements)
    const complement = 10 - num;
    if (complements[complement]) return {
      hasPair: true,
      pair: [num, complement]
    };

    complements = {
      ...complements,
      [num]: true
    };
  }

  return {
    hasPair: false
  };
}

console.log(two_number_sum([3, 5, -4, 8, 11, 1, -1, 6], 10));
