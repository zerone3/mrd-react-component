import React from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import ToDoIncrement from './components/ToDoIncrement';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Aplikasi ToDo List</h1>
      </header>

      <section>
        <ToDoIncrement />
      </section>

      <section style={{ margin: '1em 0em' }}>
        <ToDoForm />
        <ToDoList />
      </section>

      <footer>
        <h3>Dibuat oleh orang tidak jelas &copy; 2022</h3>
      </footer>
    </div>
  );
}

export default App;
