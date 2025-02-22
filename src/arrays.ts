/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const bookfirstlast = [];
    if (numbers.length === 0) {
        return [];
    }
    bookfirstlast.push(numbers[0], numbers[numbers.length - 1]);
    return bookfirstlast;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((numb: number): number => numb * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const convertString = numbers.map((nums: string): number =>
        parseInt(nums) ? parseInt(nums) : 0
    );
    return convertString;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollar = amounts.map((nums: string): number =>
        parseInt(nums.replace("$", "")) ? parseInt(nums.replace("$", "")) : 0
    );
    return noDollar;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const removeQuestion = messages.filter(
        (messages: string): boolean => !messages.endsWith("?")
    );
    const shouting = removeQuestion.map((removeQuestion: string): string =>
        removeQuestion.endsWith("!")
            ? removeQuestion.toUpperCase()
            : removeQuestion
    );
    return shouting;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter(
        (words: string): boolean => words.length < 4
    );
    const countShort = shortWords.length;
    return countShort;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        const rbg = colors.every(
            (colors: string): boolean =>
                colors === "red" || colors === "green" || colors === "blue"
        );

        return rbg;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    } else {
        const sum = addends.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const addition = addends.join("+");
        const newSum = sum.toString();
        const equals = newSum.concat("=");
        const equation = equals.concat(addition);
        return equation;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    if (values.every((values: number): boolean => values >= 0)) {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const final = [...values, sum];
        return final;
    } else {
        const firstNeg = values.findIndex(
            (values: number): boolean => values < 0
        );
        const values2 = [...values];
        const values3 = values2.slice(0, firstNeg);
        const sumOf = values3.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const valuesFin = [...values];
        valuesFin.splice(firstNeg + 1, 0, sumOf);
        return valuesFin;
    }

    return [];
}
