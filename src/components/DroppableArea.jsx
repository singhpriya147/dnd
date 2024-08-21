



// DroppableArea.js
import { useDroppable } from '@dnd-kit/core';
import DraggableItem from './DraggableItem';

function DroppableArea({ items }) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'canvas',
  });

  const style = {
    backgroundColor: isOver ? 'lightgreen' : 'grey',
    minHeight: '400px',
    border: '2px dashed black',
    padding: '20px',
    flex: 1,
  };

  const renderItem = (id, type) => {
    switch (type) {
      case 'Label':
        return <label>Label</label>;
      case 'InputBox':
        return <input type='text' placeholder='Input' />;
      case 'CheckBox':
        return (
          <div>
            <input type='checkbox' />
          </div>
        );
      case 'button':
        return <button>button</button>;
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
              // background: 'red',
            }}
          >
            {renderItem(item?.id, item?.type)}
          </div>
        </DraggableItem>
      ))}
    </div>
  );
}

export default DroppableArea;
