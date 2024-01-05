import { useState } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Footer from './components/Footer'
import TaskList from './components/TaskList'
// import Update from './components/Update';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(
    [{ id: 1001, title: "Record react Lectures", description: "Edure Institute, Daniel Gilbert in React", completed: "completed" },
    { id: 1002, title: "Edit react Lectures", description: "Edure Institute, Daniel Gilbert in React", completed: "incomplete" },
    { id: 1003, title: "Watch react Lectures", description: "Edure Institute, Daniel Gilbert in React", completed: "incomplete" }]
  )

  const [isAdding, setIsAdding] = useState(false);
  const [selectedId, setSelectedId] = useState(null)
  // console.log(selectedId);
  return (
    <div className="App">
      <Header />
      <main>
        {/* {!isAdding && ( */}
        {/* <Update */}
        {/* // products={products}
          // selectedProduct={selectedProduct}
          // setProducts={setProducts}

          // tasks={tasks} setTasks={setTasks}
          /> */}

        {/* )} */}
        {/* {isAdding && ( */}
        <AddTask
          // products={products}
          // setProducts={setProducts}
          // setIsAdding={setIsAdding}
          tasks={tasks} setTasks={setTasks} isAdding={isAdding}
          setIsAdding={setIsAdding} selectedId={selectedId}
          setSelectedId={setSelectedId}
        />

        {/* )} */}

        {/* <AddTask tasks={tasks} setTasks={setTasks} /> */}
        <TaskList tasks={tasks} setTasks={setTasks} selectedId={selectedId}
          setSelectedId={setSelectedId} setIsAdding={setIsAdding} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
