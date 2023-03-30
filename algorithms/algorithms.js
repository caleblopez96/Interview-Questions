//* Fibonacci sequence:

// Given a number 'n', find the first 'n' elements of the Fibonacci sequence.

// In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.

// The first two numbers in the sequence are 0 and 1.

function fibonacci(n) {
    const fib = [0, 1];
    for(let i = 0; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// Big-O = O(n)




//* Factorial of a number:

// Give an integer 'n', find the factorial of that integer.

// In mathematics, the factorial of a non-negative integer 'n', denoted !n, is the prodict of all positive integers lesss than or equal to 'n'.

function factorial(n) {
    let result = 1;
    for(let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}

// Big - O = O(n)




//* Prime number:

// Given a natural number 'n', determine if the number is prime or not.

// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

function isPrime(n) {
    if(n < 2) {
        return false;
    }
    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            return false;
        } 
    }
    return true;
}

// Big - O = O(n)




//* Power of two:

// Given a positive integer 'n', determine if the number is a power of 2 or not.

// An integer is a power of two if ther exists an integer 'x', such that 'n' === 2x

function isPowerOfTwo(n) {
    if(n < 1) {
        return false;
    }
    while(n > 1) {
        if(n % 2 !== 0) {
            return false
        }
        n = n / 2
    }
    return true
}

// Big - O = O(logn)