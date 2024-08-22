
import './App.css'
import DragAndDropBuilder from "./components/DragAndDropBuilder"
function App() {
  

  return (
    <div>
      <div className='DndWrappper'>
        <DragAndDropBuilder></DragAndDropBuilder>
      </div>
      <div className='bottom-button'>
        <button>save</button>
      </div>
    </div>
  );
}

export default App
