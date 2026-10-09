// validate
// business logic
//read data
//respond

notices = [
  {id: 1, message: 'Notice for all', department: 'All'},
  {id: 2, message: 'Notice for CSE department', department: 'CSE'},
]


function getNoticeForDepartment(department) {
  // 1. validation
  if(!department || typeof department != 'string') {
    return {
      success: 'false',
      message: 'Department not found',
      data: null,
    }
  }
  // 2. business logic and read data
  const result = notices.filter((data)=>department==='All'||department===data.department);

  return {
    success: 'true',
    message: 'Notice fetched successfully',
    data: result
  }
}


console.log(JSON.stringify(getNoticeForDepartment('CSE')))