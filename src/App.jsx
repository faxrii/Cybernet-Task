
import './App.css'
import AddBox from './components/Addbox/AddBox'
import ToDoBox from './components/ToDoBox/ToDoBox'
import Header from './layout/Header'

function App() {

  return (
    <>
      <Header/>
      <main>
        <div className="container">
          <ToDoBox/>
          <AddBox/>
        </div>
      </main>
    </>
  )
}

export default App
