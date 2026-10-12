const batches = [
  { id: 1, productId: "p1", batchNo: "B-01", quantity: 40, expiryDate: "2026-08-15" },
  { id: 2, productId: "p2", batchNo: "B-02", quantity: 10, expiryDate: "2026-12-15" },
  { id: 3, productId: "p1", batchNo: "B-03", quantity: 25, expiryDate: "2026-10-01" },
  { id: 4, productId: "p3", batchNo: "B-04", quantity: 0,  expiryDate: "2027-03-20" },
  { id: 5, productId: "p2", batchNo: "B-05", quantity: 60, expiryDate: "2026-11-05" },
];

// what to do
// keep id, batchNo
//keep a new entry called isExpired which is essentially 
//comparing with the expirydate with today


//befrore returning isExpired as well lets just return id and batchNo

function toBatchRow(batches) {
    const today = new Date()
    return batches.map((b) => {
        return {id: b.id, batchNo: b.batchNo, isExpired: new Date(b.expiryDate) < today}
    })
}

console.log(toBatchRow(batches))