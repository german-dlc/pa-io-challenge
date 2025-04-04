function findPair(M, N) {
  for (let i = 0; i < M.length; i++) {
    for (let j = i + 1; j < M.length; j++) {
      if (M[i] + M[j] === N) {
        return [M[i], M[j]];
      }
    }
  }
  return [];
}

const M = [2, 3, 5, 6, 7];
const N = 9;

console.log('M = ', M);
console.log('N = ', N);
console.log('result', findPair(M, N));
