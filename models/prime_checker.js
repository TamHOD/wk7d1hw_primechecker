const PubSub = require('../helpers/pub_sub.js')


const PrimeChecker = function (){

}

PrimeChecker.prototype.bindEvents = function(){
    PubSub.subscribe('FormView:number-submitted', (event) => {
        const isPrime = this.numberIsPrime(event.detail)
        PubSub.publish('FormView:number-calculated', isPrime)
    })
}

PrimeChecker.prototype.numberIsPrime = function (number) {
    if (number <= 1 || number % 2 === 0 || number % 5 === 0) {
        return `${number} is not prime.`;
    }
    for (let i = 2; i < number/2; i++) {
        if (number % i === 0) {
            return `${number} is not prime.`;
        }
    }
    return `${number} is prime.`;
}
module.exports = PrimeChecker;