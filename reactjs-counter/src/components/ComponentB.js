export default function ComponentB({ onClick }) {
  return (
    <div className="component-b">
      <h2>Component B</h2>
      <button className="button-b" onClick={onClick}>
        Click B
      </button>
    </div>
  );
}
