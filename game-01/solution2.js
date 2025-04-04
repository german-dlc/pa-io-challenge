function findPairOptimal(M, N) {
  const complementMap = new Set();
  for (let i = 0; i < M.length; i++) {
    const currentNumber = M[i];
    const complementN = N - currentNumber;

    if (complementMap.has(complementN)) {
      return [complementN, currentNumber];
    }
    complementMap.add(currentNumber);
  }

  return [];
}

const M = [1, 2, 5, 9, 8, 14, 0];
const N = 10;

console.log('M = ', M);
console.log('N = ', N);
console.log('result', findPairOptimal(M, N));
