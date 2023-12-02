const isPrime = (n) => {
    if (n <= 1)
        return 'no';

    // Check from 2 to n-1 
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return 'no';

    return 'yes';
}

export default isPrime;