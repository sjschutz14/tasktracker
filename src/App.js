import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Test1',
        day: 'Jan 3rd at 12:00pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Test2',
        day: 'Jan 3rd at 12:00pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Test3',
        day: 'Jan 3rd at 12:00pm',
        reminder: false,
    }
])

// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminder - currently only works in debug mode
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder: 
      !task.reminder} : task))
}

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      : 'No tasks here!'}
    </div>
  );
}

export default App;