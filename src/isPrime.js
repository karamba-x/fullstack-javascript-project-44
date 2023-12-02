const isPrime = (n) => {
  if (n <= 1) {
    return 'no';
  }

  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

export default isPrime;
