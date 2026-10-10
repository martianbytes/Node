// attendance.js
// Topic 04 — find + filter + map for campus attendance

const roster = [
  { studentId: 1, name: 'Asha' },
  { studentId: 2, name: 'Ravi' },
  { studentId: 3, name: 'Meera' }
]

const rawAttendance = [
  { studentId: 1, status: 'present' },
  { studentId: 2, status: 'absent' },
  { studentId: 3, status: 'present' }
]


function buildAttendanceView(roasterList, attendanceList) {
    return roasterList.map((student) => {
        const row = attendanceList.find((a) => a.studentId === student.studentId)

        return {
            studentId : student.studentId,
            name: student.name,
            status: row ? row.status : 'missing'
        }
    })
}

function summarize(view) {
    const present = view.filter((r) => r.status === 'present')
    const absent = view.filter((r) => r.status === 'absent')


    return {
        success: true,
        message: 'Attendance summarized',
        data: {
            rows: view,
            presentCount: present.length,
            absentCount: absent.length,
            presentNames: present.map((r) => r.name)
        }
    }
}

const view = buildAttendanceView(roster, rawAttendance)
const summary = summarize(view)
console.log(JSON.stringify(summary, null, 2))
