export const EmployeeCard =({id,name,designation,workExperience})=>{
    return(
        <div>
            {
                <li key={id}>
                   Name: {name} <span style={{color: 'green'}}>Designation:</span> {designation} <span style={{color:'blue'}}>workExperience:</span> {workExperience}
                </li>
            }
        </div>
    )
}