function isPrime(number){
    if(number == 2)
        return true;
    else if(number == 1 || number % 2 == 0)
        return false;
    for(let i = 3; i * i <= number; i += 2)
        if(number % i == 0)
            return false;
    return true;
}

for(let i = 1; i <= 100; i++)
    console.log(`${i} the value of prime is ${isPrime(i)}`);

module.exports = {
    isPrime: isPrime
};