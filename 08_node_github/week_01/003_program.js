

const marks = [40, 55, 70]
const boosted = marks.map((m) => m + 5)
console.log(boosted)

const title = ''
if (!title) {
    console.log('title is required')
}

// wrong: trust the client always sent a number
//correct : check before using

function toPositiveInt(value) {
    const n = Number(value)
    if (!Number.isFinite(n) || n <= 0 || !Number.isInteger(n)) {
        return null
    }
    return n
}

console.log(toPositiveInt(2.000))


const days = ['Mon', 'Tue', 'Wed']
// key in , data of
// since array is basically an object, in should return index
for (const day of days) {
    console.log(day)
}

for (const index in days) {
    console.log(index)
}

const mydays = {
    "i1": 'mon',
    "i2": 'tue',
    "i3": 'wed',
}

for (const index in mydays) {
    console.log(index)
}

// for(const data of mydays) {
//     console.log(data)
// }

// for of won't work in object because an object is not iterable

console.log(Object.keys(mydays))
console.log(Object.values(mydays))
console.log(Object.entries(mydays))

let newarr = []

for (const arrdata of Object.entries(mydays)) {
    newarr = [...arrdata]
}
console.log(newarr)
// this won't work , 1. assignment to constant, 2. overwrites


const newarray = [...Object.entries(mydays)]
console.log(newarray)


for (const arrdata of Object.entries(mydays)) {
    newarr = [...newarr, ...arrdata]
}

console.log(newarr)

for (const d of newarr) {
    console.log(d)
    console.log(newarr.length)
}

// map , filter, reduce, and find

const prices = [40, 120, 60]
const withTax = prices.map((price) => {
    return Number((price * 1.13).toFixed(2))
})

console.log(withTax)


const students = [
    { id: 1, name: 'Asha', passwordHash: 'secret1' },
    { id: 2, name: 'Ravi', passwordHash: 'secret2' }
]

const publicStudent = students.map((s) => {
    return {
        id: s.id,
        name: s.name
    }
})

console.log(publicStudent)


// filter
const products = [
  { id: 1, name: 'Notebook', category: 'stationery', price: 40 },
  { id: 2, name: 'USB Cable', category: 'electronics', price: 120 },
  { id: 3, name: 'Pen Pack', category: 'stationery', price: 60 }
]

const stationery = products.filter((p)=> p.category === 'stationery')
console.log(stationery)

// if not ... , if return filtered
function getProductsByCategory(products, category) {
    if(!category) {
        return {
            success: true,
            message: 'Products fetched successfully',
            data: products
        }
    }

    const filtered = products.filter((p)=>p.category === category)

    return {
        success: true,
        message: 'Products fetched successfully',
        data: filtered
    }
}
console.log("\n\n\nRahul\n\n")
console.log(getProductsByCategory(products, 'electronics'))


// find => get the first match
const myproducts = [
  { id: 1, name: 'Notebook', price: 40 },
  { id: 2, name: 'USB Cable', price: 120 }
]

const found = myproducts.find((p) => p.id === 2) 
console.log(found)


const missing = myproducts.find((p)=>p.id === 99)
console.log(missing) // undefined

// reduce boil down to 1 value

const cart = [
    { name: 'Notebook', price: 40 },
  { name: 'Pen Pack', price: 60 }
]

const total = cart.reduce((sum, item) => {
    return sum + item.price
}, 0)// 0 being the initial value of the sum

console.log(total)



const attendance = [
  { studentId: 1, status: 'present' },
  { studentId: 2, status: 'absent' },
  { studentId: 3, status: 'present' },
  { studentId: 4, status: 'present' }
]

const presentCount = attendance.reduce((count, row) => {
    if(row.status === 'present') {
        return count + 1
    }
    return count
}, 0)

console.log(`Present: ${presentCount}`)

