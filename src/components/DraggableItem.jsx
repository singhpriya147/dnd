
import { useDraggable } from '@dnd-kit/core';

function DraggableItem({ id, children }) {
  const { attributes, listeners, setNodeRef, } = useDraggable({
    id,
  });

  const style = {
    // transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
    padding: '10px',
    border: '1px solid gray',
    cursor: 'grab',
    marginBottom: '10px',
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
}

export default DraggableItem;


