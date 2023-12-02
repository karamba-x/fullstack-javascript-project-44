const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return 'no';
    }
    if (num !== 0) {
        return 'yes';
    } else {
        return 'no';
    }
}

export default isPrime;