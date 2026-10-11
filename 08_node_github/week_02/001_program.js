// batch-practice
const batches = [
  { id: 1, productId: 101, batchNo: 'B-01', qty: 40, daysToExpiry: 12 },
  { id: 2, productId: 101, batchNo: 'B-02', qty: 25, daysToExpiry: 95 },
  { id: 3, productId: 102, batchNo: 'B-03', qty: 10, daysToExpiry: 5 },
  { id: 4, productId: 103, batchNo: 'B-04', qty: 60, daysToExpiry: 200 },
]

console.log(Number('3'), Number('abc'), Number(''), Number(null))
console.log(Number(undefined), Number('2.5'), Number('-4'))

// to positive int

// first check if number -> return null if not
// convert into number

function toPositiveInt(value) {
    const number = Number(value);
    
    if(number > 0 && Number.isInteger(number)) {
        return number;
    }
    return null;
}

//ok and fail that will basically return obj with success, message, data keys

function ok(message, data) {
    return {
        success: true,
        message: message,
        data: data
    }
}

function fail(message) {
    return {
        success: false,
        message: message,
        data: null,
    }
}


// get batch by id now
function getBatchById(batches, rawId) {
    const id = toPositiveInt(rawId)
    
    if(id === null) {
        return fail('Invalid batch id')
    }

    // if not null now we need to find the batch using the id
    const batch = batches.find((b)=>b.id === id)
    if(!batch) {
        return fail('Batch not found')
    }
    return ok('Batch fetched successfully', batch)
}

console.log(getBatchById(batches, '3'))
console.log(getBatchById(batches, 'abc'))
console.log(getBatchById(batches, ''))
console.log(getBatchById(batches, null))
console.log(getBatchById(batches, undefined))
console.log(getBatchById(batches, '2.5'))
console.log(getBatchById(batches, '-4'))
console.log(getBatchById(batches, 3))
console.log(getBatchById(batches, '0'))
console.log(getBatchById(batches, 99))