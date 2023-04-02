export const Question7 = ({ studentList }) => {
  const { english, maths, computers } = studentList;

  const total = english + maths + computers;

 let grade;

  if (total >= 225) {
    grade = 'A';
  } else if (total >= 180) {
    grade = 'B';
  } else if (total >= 150) {
    grade = 'C';
  } else {
    grade = 'D';
  }

  return (
    <div>
      <h1>Question 7</h1>
      <p>Name: {studentList.name}</p>
      <p>English: {studentList.english}</p>
      <p>Maths: {studentList.maths}</p>
      <p>Computers: {studentList.computers}</p>
      <p>Total Marks : {total}</p>
      <p>Grades : {grade}</p>
    </div>
  );
};
