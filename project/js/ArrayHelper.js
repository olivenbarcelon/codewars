"use strict";

class ArrayHelper {
    /**
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.10.11
     * @param {int[]} arr
     * @returns {int}
     */
    static findPeak = (arr) => {
        let length = arr.length;
        return this.#findPeakUtil(arr, 0, length, length);
    }

    /**
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.10.11
     * @param {int[]} arr
     * @param {int} low
     * @param {int} high
     * @param {int} n
     * @returns {int}
     */
    static #findPeakUtil = (arr, low, high, n) => {
        let l = low;
        let r = high - 1;
        let mid;
        while(l <= r) {
            mid = (l + r) >> 1;
            if((mid == 0 || arr[mid - 1] <= arr[mid]) && (mid == n - 1 || arr[mid + 1] <= arr[mid])) {
                break;
            }
            if(mid > 0 && arr[mid - 1] > arr[mid]) {
                r = mid - 1; 
            }
            else {
                l = mid + 1;
            }
        }
        return mid; 
    }

    /**
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.10.10
     * @param {int[]} arr
     * @returns {int[]}
     */
    static getMinMax = (arr) => {
        let minmax = new  Array();
        let i;
        let length = arr.length;
        if(length == 1) {
            minmax.max = arr[0];
            minmax.min = arr[0];
            return minmax;
        }

        if(arr[0] > arr[1]) {
            minmax.max = arr[0];
            minmax.min = arr[1];
        }
        else {
            minmax.max = arr[1];
            minmax.min = arr[0];
        }

        for(i = 2;i < length;i++) {
            if(arr[i] > minmax.max) {
                minmax.max = arr[i];
            }
            else if(arr[i] < minmax.min) {
                minmax.min = arr[i];
            }
        }
        return minmax;
    }

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
