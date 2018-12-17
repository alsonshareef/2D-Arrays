const {
    add,
    subtract,
    multiply,
    divide
} = require('./functions')

// ADDITION TEST

let additionTest = () => {
    let start = [[1, 2], [3, 4], [5, 6]],
    testArr = [[2, 3], [5, 6], [8, 9]],
    expectedAddition = [[3, 5], [8, 10], [13, 15]]

    if (add(start, testArr).toString() === expectedAddition.toString()) {
        console.log('** PASSED ** The "add" function output is EQUAL to expected output', '\n\n')
        console.log('Expected output:\n', expectedAddition, '\n')
    } else {
        console.log('** FAILED ** The "add" function output is NOT EQUAL to expected output', '\n\n')
        console.log('Expected output:\n', expectedAddition, '\n')
    }
}

additionTest()


// SUBTRACTION TEST

let subtractionTest = () => {
    let start = [[1, 2], [3, 4], [5, 6]],
    testArr = [[2, 3], [5, 6], [8, 9]],
    expectedSubtraction = [[-1, -1], [-2, -2], [-3, -3]]

    if (subtract(start, testArr).toString() === expectedSubtraction.toString()) {
        console.log('** PASSED ** The "subtract" function output is EQUAL to expected output', '\n\n')
        console.log('Expected output:\n', expectedSubtraction, '\n')
    } else {
        console.log('** FAILED ** The "subtract" function output is NOT EQUAL to expected output', '\n\n')
        console.log('Expected output:\n', expectedSubtraction, '\n')
    }
}

subtractionTest()


// MULTIPLICATION TEST

let multiplicationTest = () => {
    let start = [[1, 2], [3, 4]],
    testArr = [[5, 6], [7, 8]],
    expectedMultiplication = [[ 5, 18 ], [ 14, 32 ]]

    if (multiply(start, testArr).toString() === expectedMultiplication.toString()) {
        console.log('** PASSED ** The "multiply" function output is EQUAL to expected output', '\n\n')
        console.log('Expected output:\n', expectedMultiplication, '\n')
    } else {
        console.log('** FAILED ** The "multiply" function output is NOT EQUAL to expected output', '\n\n')
        console.log('Expected output:\n', expectedMultiplication, '\n')
    }
}

multiplicationTest()


// DIVISION TEST

let divisionTest = () => {
    let start = [[1, 2], [3, 4]],
    testArr = [[5, 6], [7, 8]],
    expectedDivision = [[ 0.2, 0.5 ], [ 0.2857142857142857, 0.5 ]]

    if (divide(start, testArr).toString() === expectedDivision.toString()) {
        console.log('** PASSED ** The "divide" function output is EQUAL to expected output', '\n\n')
        console.log('Expected output:\n', expectedDivision, '\n')
    } else {
        console.log('** FAILED ** The "divide" function output is NOT EQUAL to expected output', '\n\n')
        console.log('Expected output:\n', expectedDivision, '\n')
    }
}

divisionTest()