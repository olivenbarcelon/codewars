"use strict";

/**
 * @title PaginationHelper
 * @description
 * For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.
 * The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.
 * @version 0.0.1
 * @author <olivenbarcelon@gmail.com>
 * @createdAt 2023.09.29
 */
class PaginationHelper {
    #arr;
    #num;
    #chunks;

    constructor(arr, num) {
        this.#arr = arr;
        this.#num = num;
        this.#chunks = Array.from({length: Math.ceil(this.itemCount() / num)}, (_, i) => arr.slice(i * num, i * num + num));
    }

    itemCount = () => {
        return this.#arr.length;
    }

    pageCount = () => {
        return this.#chunks.length;
    }

    pageIndex = (index) => {
        if(this.itemCount() == 0 || index < 0 || index >= this.itemCount()) {
            return -1;
        }

        for(let i = 0;i < this.pageCount();i++) {
            if(i * this.#num + this.#num > index) {
                return i;
            }
        }
    }

    pageItemCount = (index) => {
        return this.#chunks[index] != undefined ? this.#chunks[index].length : -1;
    }
}

module.exports = PaginationHelper;
