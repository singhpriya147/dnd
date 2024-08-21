
import { useDraggable } from '@dnd-kit/core';

function DraggableItemSingle({ id, children }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useDraggable({
      id,
    });

  const style = {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    transition: transition || 'transform 200ms ease', // Fallback to a default transition if `transition` is undefined
    // Add additional styling if needed
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
}

export default DraggableItemSingle;
