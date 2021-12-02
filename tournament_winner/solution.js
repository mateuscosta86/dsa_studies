const get_winner = function (list, results) {
  let winner = "";
  const scores = {
    [winner]: 0,
  };

  for (let i = 0; i < list.length; i++) {
    const w = results[i] ? list[i][0] : list[i][1]

    if (scores[w]) scores[w] += 3
    else scores[w] = 3

    if (scores[winner] < scores[w]) winner = w;
  }
  return winner;
}

console.log(get_winner([
  ["Mateus", "Aline"],
  ["Aline", "Mateus"]
], [0, 1]));
// Mateus
