import  { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import DraggableItem from './DraggableItem';
import DroppableArea from './DroppableArea';

function DragAndDropBuilder() {
  const [items, setItems] = useState([]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over) {
      // Add the dragged item to the droppable area
      setItems((prevItems) => [...prevItems, active.id]);
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
          <DraggableItem id='Label'>Label</DraggableItem>
          <DraggableItem id='InputBox'>Input</DraggableItem>
          <DraggableItem id='CheckBox'>Check Box</DraggableItem>
          <DraggableItem id='Button'>Button</DraggableItem>
          <DraggableItem id='Table'>Table</DraggableItem>
        </div>
      </div>
     
        <DroppableArea items={items} />
    
    </DndContext>
  );
}

export default DragAndDropBuilder;




