// campus-report.js
// Topic 04 — map/filter/reduce + response shape

const students = [
  { id: 1, name: 'Asha', department: 'CSE', marks: 82 },
  { id: 2, name: 'Ravi', department: 'ECE', marks: 67 },
  { id: 3, name: 'Meera', department: 'CSE', marks: 91 },
  { id: 4, name: 'Imran', department: 'ME', marks: 54 },
  { id: 5, name: 'Sara', department: 'CSE', marks: 73 }
]

// okay and fail functions

function ok(message, data) {
    return {
        success: true,
        message: message, 
        data: data
    }
}

function fail(message, data) {
    return {
        success: false, 
        message: message,
        data: null
    }
}

// get report by department
//check if no department sent

function getReport(department) {
    if(!department || typeof department !== 'string') {
        return fail("department is required")
    }

    // filter by department
    const filtered = students.filter((s) => s.department === department)
    // if filtered is 0, no student in the department
    if(filtered.length === 0) {
        return fail(`No students found for the ${department}`)
    }

    const names = filtered.map((s) => s.name)

    const average = students.reduce((sum, s) => sum + s.marks, 0) / filtered.length

    // find the topper
    const topper = students.reduce((best, s) => {
        if(!best || s.marks > best.marks) {
            return s
        }
        return best
    }, null)

    //need to dry run this line of code
    // !best -> best ma value xaina, suru ma true kina ki best ma sachhai value xaina


    return ok(`${department} report generated`, {
        department: department,
        count: filtered.length,
        names: names,
        averageMarks: average,
        topper: {
            id: topper.id,
            name: topper.name,
            marks: topper.marks
        }
    })
}

const report = getReport('CSE')
console.log(JSON.stringify(report, null, 2))