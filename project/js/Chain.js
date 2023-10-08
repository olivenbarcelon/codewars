"use strict";

class Chain {
    result = 0;

    sum = (augend, addend) => {
        this.result = augend + addend;
        return this;
    }

    double = () => {
        this.result *= 2;
        return this;
    }

    addOne = () => {
        this.result += 1;
        return this;
    }

    minusOne = () => {
        this.result -= 1;
        return this;
    }

    execute = () => this.result;
}

module.exports = Chain;
