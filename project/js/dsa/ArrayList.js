"use strict";

class ArrayList {
    #array;
    #size;
    #index;

    constructor() {
        this.#index = 0;
        this.#size = 1;
        this.#array = new Array(this.#size);
    }

    /**
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.10.12
     * @param {any} element
     */
    add = (element) => {
        if(this.#index >= this.#size - 1) {
            this.#size *= 2;
            let temp = [...this.#array]
            this.#array = new Array(this.#size);
            temp.map((v, k) => this.#array[k] = v);
        }
        this.#array[this.#index++] = element;
    }

    /**
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.10.13
     * @param {int} index
     * @returns {any}
     */
    get = (index) => {
        if(index < 0 || index >= this.#index) {
            throw new Error(`Index ${index} out of bounds for length ${this.#index}`);
        }
        return this.#array[index];
    }

    /**
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.10.12
     * @returns {any[]}
     */
    getAll = () => this.#array;

    /**
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.10.12
     * @returns {int}
     */
    getLength = () => this.#index;
}
module.exports = ArrayList;
