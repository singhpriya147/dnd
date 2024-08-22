









import { useDroppable } from '@dnd-kit/core';
import DraggableItem from './DraggableItem';

function DroppableArea({ items, setItems }) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'canvas',
  });

  const style = {
    backgroundColor: isOver ? 'lightgreen' : 'white',
    minHeight: '400px',
    border: '2px dashed black',
    padding: '20px',
    flex: 1,
  };

  const handleDoubleClick = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isEditing: true } : item
      )
    );
  };

  const handleChange = (e, id) => {
    const newText = e.target.value;
     console.log('Adding item with text:', newText);
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
    console.log('Adding item with text:', newText);
  };

  const handleBlur = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isEditing: false } : item
      )
    );
  };

  const renderItem = (id, type, text, isEditing) => {
       

    switch (type) {
      case 'Label':
        // console.log('Adding item with text:', text);
        return isEditing ? (
          <input
            type="text"
            value={text}
            onChange={(e) => handleChange(e, id)}
            onBlur={() => handleBlur(id)}
            autoFocus
          />
        ) : (
          <label onDoubleClick={() => handleDoubleClick(id)}>{text}</label>
        );
      case 'InputBox':
        return <input type='text' placeholder='Input' />;
      case 'CheckBox':
        return (
          
            <input type='checkbox' />
         
        );
      case 'button':
        return isEditing ? (
          <input
            type='text'
            value={text}
            onChange={(e) => handleChange(e, id)}
            onBlur={() => handleBlur(id)}
            autoFocus
          />
        ) : (
          <button onDoubleClick={() => handleDoubleClick(id)}>{text}</button>
        );
      case 'Table':
        return (
          <table>
            <thead>
              <tr>
                <th>Header 1</th>
                <th>Header 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
              </tr>
            </tbody>
          </table>
        );
      default:
        return <div>{id}</div>;
    }
  };

  return (
    <div ref={setNodeRef} style={style}>
      {items.map((item) => (
        <DraggableItem key={item.id} id={item.id} source='droppableArea'>
          <div
            style={{
              transform: `translate3d(${item?.x}px, ${item?.y}px, 0)`,
            }}
          >
            {renderItem(item.id, item.type, item.text, item.isEditing)}
            
          </div>
        </DraggableItem>
      ))}
    </div>
  );
}

export default DroppableArea;
