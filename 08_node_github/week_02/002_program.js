const batches = [
  { id: 1, productId: 101, batchNo: 'B-01', qty: 40, daysToExpiry: 12 },
  { id: 2, productId: 101, batchNo: 'B-02', qty: 25, daysToExpiry: 95 },
  { id: 3, productId: 102, batchNo: 'B-03', qty: 10, daysToExpiry: 5 },
  { id: 4, productId: 103, batchNo: 'B-04', qty: 60, daysToExpiry: 200 },
]

//listbatches


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
        data: null
    }
}


function toPositiveInt(value) {
    const number = Number(value)
    //nan, null, negative, positive
    if(number > 0 && Number.isInteger(number)) {
        return number
    }

    return null
}

function getBatchById(batches, rawId) {
    //conver the rawid into valid id
    const id = toPositiveInt(rawId)
    // null or positive number expected
    if(id === null) {
        return fail('Invalid id')
    }

    // find the batch
    const batch = batches.find((b) => b.id === id)

    if(batch) {
        return ok('data fetched successfully', batch)
    }

    return fail('batch not found')
}

function listBatches(batches, query = {}) {
    // start with all batches
    // if query.productId was sent
        // convert it to positive int
        // if null , return fail invalid productid
        // otherwise keep only the batches with that productId
    // return ok with the result for now
    let result = batches

    if(query.productId !== undefined) {
        const id = toPositiveInt(query.productId)
        // null or a value that is good
        if (id === null) {
            return fail('Invalid id')
        }
        result = result.filter((b) => b.productId === id)
    }

    return ok("batches fetched successfully", result)

}

console.log(listBatches(batches))
console.log(listBatches(batches, { productId: '101' }))
console.log(listBatches(batches, { productId: 'abc' }))
console.log(listBatches(batches, { productId: '999' }))