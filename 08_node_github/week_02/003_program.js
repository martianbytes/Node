// expirin in days
const batches = [
  { id: 1, productId: 101, batchNo: 'B-01', qty: 40, daysToExpiry: 12 },
  { id: 2, productId: 101, batchNo: 'B-02', qty: 25, daysToExpiry: 95 },
  { id: 3, productId: 102, batchNo: 'B-03', qty: 10, daysToExpiry: 5 },
  { id: 4, productId: 103, batchNo: 'B-04', qty: 60, daysToExpiry: 200 },
]

// in real app i might get /batches?expiringInDays=30
//meaning i need to filter the batches expiring in 30 days
//but first i need to check the expiring date if its actual positive integer or not
//if it is not i will reject it, with fail -> success: false, message: some message, data: null
//but there can be no batch expiring on that many days even if the number provided is positive integer
//I have to return the answer with ok -> success: true, message: message, data: result


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
    const number = Number(value);
    //null, nan, number
    if(number > 0 && Number.isInteger(number)) {
        return number
    }

    return null;
}

// now after getting positive number for the id/days
//i need to filter out the product expining
// b.daysToExpire <= daysGiven

function listExpiringBatches(batches, query = {}) {
    // start with the batches if the batches undefined , filter will crash
    // batches = batches
    const days = toPositiveInt(query.expiringInDays)
    // null or days within or not 
    if(days === null) {
        return fail('Not a valid day')
    }

    //days within in range
    const filteredDays = batches.filter((b) => b.daysToExpiry <= days)

    return ok('expiring products fetched successfully', filteredDays)
}


console.log(listExpiringBatches(batches, { expiringInDays: '30' }))
console.log(listExpiringBatches(batches, { expiringInDays: '0' }))
console.log(listExpiringBatches(batches, { productId: '101', expiringInDays: '30' }))
console.log(listExpiringBatches(batches, { expiringInDays: 'abc' }))


function listBatches(batches, query = {}) {
    let results = batches

    if(query.productId !== undefined) {
        const productId = toPositiveInt(query.productId)

        if(productId === null) {
            return fail("Invalid productId")
        }

        results = results.filter((b) => b.productId === productId)
    }


    if(query.expiringInDays !== undefined) {
        const days = toPositiveInt(query.expiringInDays)

        if(days === null) {
            return fail("Invalid expiringInDays")
        }

        results = results.filter((b) => b.daysToExpiry <= days)
    }

    if(query.minQty !== undefined) {
        // first convert it to proper value
        const qty = toPositiveInt(query.minQty)

        if(qty === null) {
            return fail("Invalid minQty")
        }

        results = results.filter((b) => b.qty >= qty)
    }

    return ok("Batches fetched successfully", results)
}


console.log(listBatches(batches))
console.log(listBatches(batches, { productId: '101' }))
console.log(listBatches(batches, { expiringInDays: '30' }))
console.log(listBatches(batches, { productId: '101', expiringInDays: '30' }))
console.log(listBatches(batches, { productId: 'abc' }))
console.log(listBatches(batches, { expiringInDays: 'abc' }))
console.log(listBatches(batches, { productId: '999' }))



console.log(listBatches(batches, { minQty: '25' }))
console.log(listBatches(batches, { productId: '101', minQty: '30' }))
console.log(listBatches(batches, { minQty: 'abc' }))