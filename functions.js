let items = [
    [3, 4],
    [2, 5]
];

// ADDITION
exports.add = () => {
    let output = []
    let additionItems = [
        [2, 3],
        [1, 6]
    ]
    
    console.log('-- ADDITION --')
    console.log('Starting numbers:\n', items)
    console.log('The numbers that will be added to starting numbers are:\n', additionItems)

    for (let i = 0; i <= items.length - 1; i++){
        output.push([])
        
        for(let a = 0; a <= 1; a++){
            output[i].push(items[i][a])
            output[i][a] += additionItems[i][a]
        }
    }
    console.log('After adding to items array, the new array is:\n', output, '\n')
}


// SUBTRACTION
exports.subtract = () => {
    let output = []
    let subtractionItems = [
        [9, 2],
        [3, 7]
    ]

    console.log('-- SUBTRACTION --')
    console.log('Starting numbers:\n', items)
    console.log('The numbers that will be subtracted from starting numbers are:\n', subtractionItems)
    
    for (let i = 0; i <= items.length - 1; i++){
        output.push([])
        
        for(let a = 0; a <= 1; a++){
            output[i].push(items[i][a])
            output[i][a] -= subtractionItems[i][a]
        }
    }
    console.log('After subtracting from items array, the new array is:\n', output, '\n')
}


// MULTIPLICATION
exports.multiply = () => {
    let output = []
    let multiplicationItems = [
        [2, 6],
        [8, 4]
    ]

    console.log('-- MULTIPLICATION --')
    console.log('Starting numbers:\n', items)
    console.log('The numbers that will be multiplied to starting numbers are:\n', multiplicationItems)
    
    for (let i = 0; i <= items.length - 1; i++){
        output.push([])
        
        for(let a = 0; a <= 1; a++){
            output[i].push(items[i][a])
            output[i][a] *= multiplicationItems[i][a]
        }
    }
    console.log('After multiplying from items array, the new array is:\n', output, '\n')
}


// DIVISION
exports.divide = () => {
    let output = []
    let divisionItems = [
        [4, 2],
        [1, 2]
    ]

    console.log('-- DIVISION --')
    console.log('Starting numbers:\n', items)
    console.log('The numbers that will be divided from starting numbers are:\n', divisionItems)
    
    for (let i = 0; i <= items.length - 1; i++){
        output.push([])
        
        for(let a = 0; a <= 1; a++){
            output[i].push(items[i][a])
            output[i][a] /= divisionItems[i][a]
        }
    }
    console.log('After dividing from items array, the new array is:\n', output, '\n')
}
