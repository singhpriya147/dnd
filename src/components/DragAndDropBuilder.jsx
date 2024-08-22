




// DragAndDropBuilder.js
import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import DraggableItem from './DraggableItem';
import DroppableArea from './DroppableArea';
import {doc,setDoc,getDoc} from 'firebase/firestore';
import {db} from '../../firebase'

function DragAndDropBuilder() {
  const [items, setItems] = useState([]);
  const [layoutName,setLayoutName]=useState('');
  const saveLayout = async () => {
    if (layoutName.trim() === '') {
      alert('Please enter a layout name');
      return;
    }
    try {
      await setDoc(doc(db, 'layouts', 'layoutName'), {
        items,
      });
      alert('Layout saved successfully!');
    } catch (error) {
      console.error('Error saving layout: ', error);
      alert('Failed to save layout.');
    }
  };


  const loadLayout = async () => {
    try {
      const docRef = doc(db, 'layouts', 'layoutName');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setItems(docSnap.data().items); // Load the items into your state
        alert('Layout loaded successfully!');
      } else {
        alert('No saved layout found.');
      }
    } catch (error) {
      console.error('Error loading layout: ', error);
      alert('Failed to load layout.');
    }
  };

const publishLayout = () => {
  // Assuming you have a route that renders the layout dynamically
  window.open('/published-layout', '_blank');
};

  const handleDragEnd = (event) => {
    const { active, over, collisions, delta } = event;
    // console.log('eventHere', event);

    if (active.data.current.source === 'control' && over.id === 'canvas') {
      let type, text = '';
      switch (active.id) {
        case 'a1':
          type = 'Label';
          text = 'Editable Label';
          break;
        case 'input':
          type = 'InputBox';
          break;
        case 'a3':
          type = 'CheckBox';
          break;
        case 'a4':
          type = 'button';
          break;
        case 'a5':
          type = 'Table';
          break;
        default:
          type = 'Unknown';
      }

      // Add the dragged item to the droppable area
      setItems((prevItems) => [
        ...prevItems,
        { type, id: items.length + 1, x: 0, y: 0, isEditing: false, text },
      ]);
    } else if (
      active.data.current.source === 'droppableArea' &&
      collisions.length > 0 &&
      collisions[0]?.id === 'canvas'
    ) {
      const updatedArray = items.map((item) => {
        return item.id === active.id
          ? { ...item, x: item?.x + delta?.x, y: item?.y + delta?.y }
          : item;
      });
      // console.log(delta, 'delta comp');
      setItems(updatedArray);
      // console.log(event, 'dragged');
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div
        style={{
          display: 'flex',
          backgroundColor: '#A8A8A8',
          
        }}
      >
        <div className='controls' style={{ marginRight: '20px' }}>
          <DraggableItem id='a1' source='control'>
            Label
          </DraggableItem>
          <DraggableItem id='input' source='control'>
            Input
          </DraggableItem>
          <DraggableItem id='a3' source='control'>
            Check Box
          </DraggableItem>
          <DraggableItem id='a4' source='control'>
            Button
          </DraggableItem>
          <DraggableItem id='a5' source='control'>
            Table
          </DraggableItem>
        </div>
      </div>
      <div className='DroppableAreaWrapper'>
        <div className='DroppableAreaHeader'>
          <div className='DroppableAreaContent'>
            <label htmlFor='layoutName'>Enter the layout name </label>
            <input
              type='text'
              id='layoutName'
              value={layoutName}
              onChange={(e) => setLayoutName(e.target.value)}
            ></input>
            <button onClick={saveLayout}>Save layout</button>
            <button onClick={loadLayout}>Load Layout</button>
            <button onClick={publishLayout}>Publish</button>
          </div>
        </div>
        <DroppableArea items={items} setItems={setItems} />
      </div>
    </DndContext>
  );
}

export default DragAndDropBuilder;
