const Header = ({ onAdd, showAdd }) => {
  return (
    <div className="d-flex p-3 justify-content-between mb-4">
      <h1 className="text-success">ToDo List</h1>
      <button
        className={
          showAdd ? "btn btn-outline-danger" : "btn btn-outline-success"
        }
        onClick={onAdd}
      >
        {showAdd ? "Close" : "Add"}
      </button>
    </div>
  );
};

export default Header;
