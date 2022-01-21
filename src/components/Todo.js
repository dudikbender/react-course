function Todo(props) {
    function deleteHandler() {
        console.log('Clicked');
        console.log(props.title)
    }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="button" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
