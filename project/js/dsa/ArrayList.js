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
     * @version 0.0.2
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.10.12
     * @updatedAt 2023.10.18
     * @param {any} element
     */
    add = (element) => {
        if(this.#index >= this.#size - 1) {
            this.#size *= 2;
            let temp = [...this.#array];
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
     * @version 0.0.2
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.10.12
     * @updatedAt 2023.10.14
     * @returns {any[]}
     */
    getAll = () => {
        let length = this.getLength();
        let temp = new Array(length);
        for(let i = 0;i < length;i++) {
            temp[i] = this.#array[i];
        }
        return temp;
    };

    /**
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.10.12
     * @returns {int}
     */
    getLength = () => this.#index;

    /**
     * @version 0.0.2
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.10.15
     * @updatedAt 2023.10.17
     * @param {int} element
     * @returns {int}
     */
    indexOf = (element) => {
        for(let i = 0;i < this.getLength();i++){
            if(element == this.#array[i]) {
                return i;
            }
        }
        return -1;
    }

    /**
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.10.18
     * @param {any} element
     */
    insert = (element) => {
        if(this.#index >= this.#size - 1) {
            this.#size *= 2;
            let temp = new Array(this.#size);
            for(let i = 0;i < this.getLength();i++) {
                temp[i] = this.#array[i];
            }
            this.#array = temp;
        }
        this.#array[this.#index++] = element;
    }

    /**
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.10.14
     * @param {int} index
     */
    remove = (index) => {
        for(let i = 0, j = 0;i < this.getLength();i++) {
            if(index == i) {
                continue;
            }
            this.#array[j++] = this.#array[i];
        }
        this.#index--;
    }

    /**
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.10.16
     */
    removeAll = () => {
        this.#index = 0;
        this.#size = 1;
        this.#array = new Array(this.#size);
    }
}
module.exports = ArrayList;
