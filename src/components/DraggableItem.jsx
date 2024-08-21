import { useDraggable } from '@dnd-kit/core';

function DraggableItem({ id, children, source }) {
  const { attributes, listeners, setNodeRef, transform, over,collisions } = useDraggable({
    id,
    data: {
      source: source,
    },
  });

  const style = {
    transform:
   `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
     
    padding: '10px',
    border: '1px solid gray',
    cursor: 'grab',
    background :  over?.id === 'canvas' && 'blue',
    marginBottom: '10px',
  };
  console.log(source, 'id:', id,  "collisionsHere", collisions);
  if (over?.id === 'canvas') {
    console.log(over.id, 'over');
  }

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
}

export default DraggableItem;
