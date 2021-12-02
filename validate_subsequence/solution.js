// Time  = O(n)
// Space = O(1)
const validade = function (sequence, sub) {
  if (sub.length > sequence.length) return false;

  subMarker = 0;

  for (item of sequence) {
    if (item === sub[subMarker]) subMarker++;
    if (sub.length === subMarker) return true
  }
  return false;
}

console.log(validade([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
console.log(validade([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 11]))
console.log(validade([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10]))
console.log(validade([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10, 11]))
