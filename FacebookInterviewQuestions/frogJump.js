/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
  for (let i = 3; i < stones.length; i++) {
    if (stones[i] > stones[i - 1] * 2) {
      return false;
    }
  }

  let set = new Set();
  for (let stone of stones) {
    set.add(stone);
  }
  let destination = stones[stones.length - 1];
  let positions = [];
  let jumps = [];
  positions.push(0);
  jumps.push(0);

  while (positions.length !== 0) {
    let position = positions.pop();
    let jumpDistance = jumps.pop();

    for (let i = jumpDistance - 1; i <= jumpDistance + 1; i++) {
      if (i <= 0) {
        continue;
      }
      let nextPosition = position + i;
      if (nextPosition === destination) {
        return true;
      } else if (set.has(nextPosition)) {
        positions.push(nextPosition);
        jumps.push(i);
      }
    }
  }
  return false;
};
