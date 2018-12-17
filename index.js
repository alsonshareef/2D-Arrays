let items = [
    [3, 4],
    [2, 5]
];

// Adds every number of 'items' array to a new one and logs the new one 
let logNumbers = () => {
    let output = []

    for (let i = 0; i <= items.length - 1; i++){
        output.push([])
        for(let a = 0; a <= 1; a++){
            output[i].push(items[i][a])
        }
    }
        console.log('Item numbers:\n', output)
}

logNumbers()

// ADDITION

let add = () => {
    let output = []
    let additionItems = [
        [2, 3],
        [1, 6]
    ]
    
    for (let i = 0; i <= items.length - 1; i++){
        output.push([])
        
        for(let a = 0; a <= 1; a++){
            output[i].push(items[i][a])
            output[i][a] += additionItems[i][a]
        }
    }
    console.log('After adding to items array, the new array is:\n', output)
}

add()

// SUBTRACTION

let subtract = () => {
    let output = []
    let subtractionItems = [
        [9, 2],
        [3, 7]
    ]
    
    for (let i = 0; i <= items.length - 1; i++){
        output.push([])
        
        for(let a = 0; a <= 1; a++){
            output[i].push(items[i][a])
            output[i][a] -= subtractionItems[i][a]
        }
    }
    console.log('After subtracting from items array, the new array is:\n', output)
}

subtract()

// MULTIPLICATION

let multiply = () => {
    let output = []
    let multiplicationItems = [
        [2, 6],
        [8, 4]
    ]
    
    for (let i = 0; i <= items.length - 1; i++){
        output.push([])
        
        for(let a = 0; a <= 1; a++){
            output[i].push(items[i][a])
            output[i][a] *= multiplicationItems[i][a]
        }
    }
    console.log('After multiplying from items array, the new array is:\n', output)
}

multiply()

// DIVISION

let divide = () => {
    let output = []
    let divisionItems = [
        [4, 2],
        [1, 2]
    ]
    
    for (let i = 0; i <= items.length - 1; i++){
        output.push([])
        
        for(let a = 0; a <= 1; a++){
            output[i].push(items[i][a])
            output[i][a] /= divisionItems[i][a]
        }
    }
    console.log('After dividing from items array, the new array is:\n', output)
}

divide()