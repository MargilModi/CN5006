const dateofBirth = "25/12/2002"

// getting user name and campus details
const getstudentname = () =>{
    return "Margil" 
}

const getcampusname = () => {
    return "docland"
}
 
exports.getName = getstudentname
exports.Location = getcampusname
exports.dob = dateofBirth

// export function with parameter

exports.studentgrade=(marks) =>{
    if (marks> 50 && marks<70 )
        return ("Grade B")
    else 
    return ("Grade A")
}