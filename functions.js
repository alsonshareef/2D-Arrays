
// ADDITION
exports.add = (start, test) => {
    console.log('\n-- ADDITION --')
    console.log('Starting numbers:\n', start)
    console.log('The numbers that will be added to starting numbers are:\n', test)
    
    let output = []
    for (let i = 0; i <= start.length - 1; i++){
        output.push([])
        
        for(let a = 0; a <= 1; a++){
            output[i].push(start[i][a])
            output[i][a] += test[i][a]
        }
    }
    console.log('After adding to items array, the new array is:\n', output, '\n')
    return output
}


// SUBTRACTION
exports.subtract = (start, test) => {
    console.log('\n-- SUBTRACTION --')
    console.log('Starting numbers:\n', start)
    console.log('The numbers that will be subtracted from starting numbers are:\n', test)
    
    let output = []
    for (let i = 0; i <= start.length - 1; i++){
        output.push([])
        
        for(let a = 0; a <= 1; a++){
            output[i].push(start[i][a])
            output[i][a] -= test[i][a]
        }
    }
    console.log('After subtracting from items array, the new array is:\n', output, '\n')
    return output
}


// MULTIPLICATION
exports.multiply = (matA, matB) => {
    console.log('\n-- MULTIPLICATION --')
    console.log('Starting numbers:\n', matA)
    console.log('The numbers that will be multiplied to starting numbers are:\n', matB)
    
    let numRow = matA.length
    let numCol = matA[0].length
    let output = []
    for (let i = 0; i < numRow; i++){
        output.push([])
        
        for(let a = 0; a < numCol; a++){
            output[i].push(matA[a][i])
            output[i][a] *= matB[i][a]
        }
    }
    console.log('After multiplying from items array, the new array is:\n', output, '\n')
    return output
}


// DIVISION
exports.divide = (matA, matB) => {
    console.log('\n-- DIVIDE --')
    console.log('Starting numbers:\n', matA)
    console.log('The numbers that will be multiplied to starting numbers are:\n', matB)
    
    let numRow = matA.length
    let numCol = matA[0].length
    let output = []
    for (let i = 0; i < numRow; i++){
        output.push([])
        
        for(let a = 0; a < numCol; a++){
            output[i].push(matA[a][i])
            output[i][a] /= matB[i][a]
        }
    }
    console.log('After dividing from items array, the new array is:\n', output, '\n')
    return output
}
