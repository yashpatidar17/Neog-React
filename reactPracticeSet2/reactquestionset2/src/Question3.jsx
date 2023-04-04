export const Userprofile = ({ userdata }) => {
  return (
    <div>
      <h2>Question 3</h2>
        {Object.values(userdata).map((item)=>(
            <p>{item}</p>
        ))}
    </div>
  );
};
