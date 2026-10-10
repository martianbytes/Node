

function ok(message, data) {
    return {
        success: false,
        message: message,
        data: data,
    }
}

function fail(message, data) {
    return {
        success: false,
        message: message,
        data: null
    }
}

console.log(ok('Student found', {id: 1, name: 'Asha'}))
console.log(fail('Student not found'))


