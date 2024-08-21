import  { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import DraggableItem from './DraggableItem';
import DroppableArea from './DroppableArea';


function DragAndDropBuilder() {
  const [items, setItems] = useState([]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
console.log("event",event);
    if ( active.data.current.source==='control' && over) {
      // Add the dragged item to the droppable area
      setItems((prevItems) => [...prevItems, active.id]);
    }
    else if(active.data.current.source==='droppableArea' && over)
    {
     console.log(event,"dragged"); 
    }
  };
 

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div
        style={{
          display: 'flex',
          backgroundColor: 'yellow',
          border: '1px solid red',
          // width: '50px',
        }}
      >
        <div className='controls' style={{ marginRight: '20px' }}>
          <DraggableItem id='Label' source='control'>
            Label
          </DraggableItem>
          <DraggableItem id='InputBox' source='control'>
            Input
          </DraggableItem>
          <DraggableItem id='CheckBox' source='control'>
            Check Box
          </DraggableItem>
          <DraggableItem id='Button' source='control'>
            Button
          </DraggableItem>
          <DraggableItem id='Table' source='control'>
            Table
          </DraggableItem>
        </div>
      </div>
    
        <DroppableArea items={items} />
    
    </DndContext>
  );
}

export default DragAndDropBuilder;




