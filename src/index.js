/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let countTreangels = 0;

  for (let A = 1; A <= preferences.length; A++) {
    let B = preferences[A - 1];
    let C = preferences[B - 1];
    let X = preferences[C - 1];

    if (A !== B && B !== C && C !== X && A === X) {
      countTreangels++;
    }
  }

  return countTreangels / 3;
};
