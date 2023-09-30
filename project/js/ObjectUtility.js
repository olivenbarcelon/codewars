"use strict";

class ObjectUtility {
    /**
     * @version 0.0.1
     * @author <olivenbarcelon@gmail.com>
     * @createdAt 2023.09.08
     * @updatedAt 2023.09.30
     * @param {any[]} arr
     * @returns {object}
     */
    static arrayCountValues = (arr) => {
        return arr.reduce((a, v) => {
            a[v] = (a[v] ?? 0) + 1;
            return a;
        }, {});
    }
}

module.exports = ObjectUtility;
