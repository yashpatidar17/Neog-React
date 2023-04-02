import { EmployeeCard } from "./EmployeeCard";

export const Question1 = ({ employeeList, employeeHeader }) => {
  return (
    <div>
    <h2>Question 1</h2>
      <h2>{employeeHeader}</h2>
      <ul>
        {employeeList.map(({ id, name, designation, workExperience }) => (
          <div>
            <EmployeeCard id={id} name={name} designation={designation} workExperience={workExperience}/>
          </div>
        ))}
      </ul>
    </div>
  );
};
