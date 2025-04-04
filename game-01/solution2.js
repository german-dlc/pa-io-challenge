function findPairOptimal(M, N) {
  for (let i = 0; i < M.length; i++) {
    const currentNumber = M[i];
    const complementN = N - currentNumber;
    const complementIndex = M.lastIndexOf(complementN);

    const isComplementIndex = complementIndex > 0;
    const isComplementEqualCurrent = i === complementIndex;

    if (isComplementIndex && !isComplementEqualCurrent) {
      return [currentNumber, complementN];
    }
  }

  return [];
}

const M = [2, 5, 8, 14, 0];
const N = 10;

console.log('M = ', M);
console.log('N = ', N);
console.log('result', findPairOptimal(M, N));
