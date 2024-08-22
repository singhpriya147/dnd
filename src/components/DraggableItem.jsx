import { useDraggable } from '@dnd-kit/core';

function DraggableItem({ id, children, source }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
      data: {
        source: source,
      },
    });

  const style = {
    transform: isDragging
      ? `translate3d(${transform?.x}px, ${transform?.y}px, 0)`
      : '',
    padding: '10px',
    cursor: 'grab',
    marginBottom: '10px',
    // border:'1px solid black'
  };


  // console.log(transform , 'transform comp')
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
}

export default DraggableItem;
