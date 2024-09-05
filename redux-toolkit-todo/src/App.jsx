import AddTodo from "./components/AddTodo"
import Todo from "./components/Todo"

function App() {

  return (
    <div className='flex flex-col justify-center m-auto w-[800px] gap-10 ' >
      <AddTodo/>
      <Todo/>
    </div>
  )
}

export default App
