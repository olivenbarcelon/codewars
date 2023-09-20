"use strict";

class ObjectUtility {
    /**
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.08
     * @updatedAt 2023.09.20
     * @param {any[]} arr
     * @returns {object}
     */
    static arrayCountValues = (arr) => {
        return this.#arrayCountValue(arr, 0);
    }

    /**
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.08
     * @updatedAt 2023.09.20
     * @param {any[]} arr
     * @param {int} index
     * @param {object} freqs
     * @returns {object}
     */
    static #arrayCountValue = (arr, index, freqs = {}) => {
        if(index < arr.length) {
            let v = arr[index];
            if(freqs[v]) {
                freqs[v] += 1;
            }
            else {
                freqs[v] = 1;
            }
            this.#arrayCountValue(arr, ++index, freqs);
        }
        return freqs;
    }
}

module.exports = ObjectUtility;
