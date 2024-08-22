
import './App.css'
import DragAndDropBuilder from "./components/DragAndDropBuilder"
function App() {
  

  return (
    <div>
      
      <div className="DndWrappper">
        
        <DragAndDropBuilder></DragAndDropBuilder>
      </div>
      <button>save</button>
    </div>
  );
}

export default App
