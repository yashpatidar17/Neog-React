import { useState } from "react";

const employees = [
    { id: "E1", name: "Arpit Jain", workExperience: 6 },
    { id: "E2", name: "Monica Jaiswal", workExperience: 4 },
    { id: "E3", name: "Priya Shetty", workExperience: 9 },
    { id: "E4", name: "Aman Sen", workExperience: 1 }
  ];

  export const Exercise14 = () =>{
    const[highlight,sethighlight] = useState(false)

    const shouldHighlight = ()=>{
        sethighlight(true);
    }
    return(
        <div>
            {employees.map(({name,workExperience})=>(
                <p style={{color: highlight && workExperience>5 ? "red":"black"}}>{name}: {workExperience}</p>
            ))}

            <button onClick={shouldHighlight}>Highlight</button>
            <button onClick={() => sethighlight(false)}>Reset</button>
        </div>
    )
  }