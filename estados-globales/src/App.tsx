import './App.css'
import NewTask from './Tasks/NewTask'
import TaskList from './Tasks/TaskList'
import TaskProvider from './Tasks/TaskProvider'

function App() {

  return (
    <TaskProvider>
      <NewTask />
      <TaskList />
    </TaskProvider>
  )
}

export default App
