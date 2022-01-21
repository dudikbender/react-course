import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Hello World" button="Press me" />
      <Todo title="Testing Again" button="Mash me" />
    </div>
  );
}

export default App;
