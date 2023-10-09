"use strict";

class ArrayHelper {
    /**
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.10.09
     * @param {any[]} arr
     * @returns any[]
     */
    static reverse = (arr) => {
        this.#reverse(arr, 0, arr.length);
        return arr.filter(f => f != undefined);
    }

    /**
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.10.09
     * @param {any[]} arr
     * @param {int} start
     * @param {int} end
     */
    static #reverse(arr, start, end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        if(start + 1 < end - 1) {
            this.#reverse(arr, start + 1, end - 1);
        }
    }
}
module.exports = ArrayHelper;
