import ComponentB from "./ComponentB";

export default function ComponentA({ count, onClick }) {
  return (
    <div className="component-a">
      <div className="display-number">Number: {count}</div>
      <h2>Component A</h2>
      <ComponentB onClick={onClick} />
      <button className="button-a" onClick={onClick}>
        Click A
      </button>
    </div>
  );
}
