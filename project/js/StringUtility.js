/**
 * @title Get the Middle Character
 * @description You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
 * @version 0.0.1
 * @author <olivenbarcelon@gmail.com>
 * @param {string} text 
 * @returns {string}
 */
const getMiddle = (text) => {
    if(typeof(text) === 'number') throw new Error('Cannot read properties of string');
    return text.substring((text.length - 1) / 2, (text.length + 1) - text.length / 2);
};

module.exports = getMiddle;
