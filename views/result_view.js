const PubSub = require('../helpers/pub_sub.js')

const ResultView = function () {
    
}

ResultView.prototype.bindEvents = function () {
    PubSub.subscribe('FormView:number-submitted', (event) => {
        const isPrime = event.detail;
        this.displayResult(isPrime);
    });
}

ResultView.prototype.displayResult = function (result) {
    const primeOrNot = document.querySelector('#result');
    primeOrNot.textContent = `${result}`
}

module.exports = ResultView;