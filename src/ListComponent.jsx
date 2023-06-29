import { useState, useEffect } from "react";

function ListComponent() {
  let [people, setPeople] = useState([
    { id: 1, name: "john" },
    { id: 2, name: "peter" },
    { id: 3, name: "susan" },
    { id: 4, name: "anna" },
  ]);

  let [value, setValue] = useState(0);

  const remove = (id) => {
    let newArray = people.filter((person) => person.id !== id);
    setPeople(newArray);
  };
  useEffect(() => {
    console.log("from useeffect hook with People dependency");
  }, [people]);

  useEffect(() => {
    console.log("from useeffect hook with value dependency");
  }, [value]);

  useEffect(() => {
    console.log("from useeffect hook with no dependency");
  }, []);

  return (
    <div>
      {" "}
      <div>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id}>
              <h4>{name}</h4>
              <button
                onClick={() => {
                  remove(id);
                }}>
                Remove
              </button>
            </div>
          );
        })}
        <button
          style={{ marginTop: "2rem" }}
          onClick={() => {
            setPeople([]);
          }}>
          Remove All
        </button>
      </div>
      <div>
        <h1>value:{value}</h1>
        <button className="btn" onClick={() => setValue(value + 1)}>
          change value
        </button>
      </div>
    </div>
  );
}

export default ListComponent;
