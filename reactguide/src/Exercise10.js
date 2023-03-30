const employees = [
    { id: "E1", name: "Arpit Jain", workExperience: 6 },
    { id: "E2", name: "Monica Jaiswal", workExperience: 4 },
    { id: "E3", name: "Priya Shetty", workExperience: 9 },
    { id: "E4", name: "Aman Sen", workExperience: 1 }
  ];

export const Exercise10 =({employeeheader})=>{
    return(
        <div>
            <h1>{employeeheader}</h1>
            {employees.map((employee)=>(
                <li key={employee.id}>
                    {employee.name}:{employee.workExperience}
                </li>
            ))}
            <p>----------------------------------------------------------------------------------------------</p>
        </div>
    )
}