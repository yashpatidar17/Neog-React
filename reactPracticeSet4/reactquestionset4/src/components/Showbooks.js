export const Showbooks = ({ datarec }) => {
  return (
    <div>
      {datarec.map((book) => (
        <div>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
};
