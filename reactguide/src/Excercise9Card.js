export const Excercise9Card = ({ id, name, price }) => {
    return (
        <div>
            <li
                key={id}
                style={{
                    listStyle: "none",
                    border: "solid 1px black",
                    margin: "4px",
                    padding: "4px"
                }}>
                <p>name:{name}</p>
                <p>price:{price}</p>
            </li>
        </div>
    );
};
