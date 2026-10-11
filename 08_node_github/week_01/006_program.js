// putting it all together - mini controller style, without express

const notices = [
  { id: 1, title: 'Fest registration', department: 'ALL', active: true },
  { id: 2, title: 'CSE meetup', department: 'CSE', active: true },
  { id: 3, title: 'Old circular', department: 'ECE', active: false }
]


function listNotices(query) {
    const department = query && query.department
    const onlyActive = query && query.active === true

    let results = [...notices]

    if(onlyActive) {
        results = results.filter((n)=>n.active)
    }

    if(department) {
        results = results.filter((n) => {
            return n.department === 'ALL' || n.department === department
        })
    }

    return {
        success: true,
        message: "Notice fetched successfully",
        data: results
    }
}

console.log(listNotices({department: 'CSE', active: true}))

console.log(typeof [])