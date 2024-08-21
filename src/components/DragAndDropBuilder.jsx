// // import {  useState } from 'react';
// // import { DndContext } from '@dnd-kit/core';
// // import DraggableItem from './DraggableItem';
// // import DroppableArea from './DroppableArea';

// // function DragAndDropBuilder() {
// //   const [items, setItems] = useState([]);

// //   const handleDragEnd = (event) => {
// //     const { active, over, collisions, delta } = event;
// //     console.log('eventHere', event);
// //     if (active.data.current.source === 'control' && over.id === 'canvas') {
// //       // Add the dragged item to the droppable area
// //       setItems((prevItems) => [
// //         ...prevItems,
// //         { type: 'button', id: items.length + 1, x: 0, y: 0 },
// //       ]);
// //     } else if (
// //       active.data.current.source === 'droppableArea' &&
// //       collisions.length > 0 &&
// //       collisions[0]?.id === 'canvas'
// //     ) {
// //       const updatedArray = items.map((item) => {
// //         console.log(item, active.id);
// //         return item.id === active.id
// //           ? { ...item, x: item?.x + delta?.x, y:item?.y+ delta?.y } // Update the matching item
// //           : item;
// //       });
// //       console.log(delta , 'delta comp');
// //       setItems(updatedArray);
// //       console.log(event, 'dragged');
// //     }
// //   };

// //   return (
// //     <DndContext onDragEnd={handleDragEnd}>
// //       <div
// //         style={{
// //           display: 'flex',
// //           backgroundColor: 'yellow',
// //           border: '1px solid red',
// //           // width: '50px',
// //         }}
// //       >
// //         <div className='controls' style={{ marginRight: '20px' }}>
// //           <DraggableItem id='a1' source='control' >
// //              Label
// //           </DraggableItem>
// //           <DraggableItem id='input' source='control' >
// //             Input
// //           </DraggableItem>
// //           <DraggableItem id='a3' source='control'>
// //             Check Box
// //           </DraggableItem>
// //           <DraggableItem id='a4' source='control'>
// //             Button
// //           </DraggableItem>
// //           <DraggableItem id='a5' source='control'>
// //             Table
// //           </DraggableItem>
// //         </div>
// //       </div>

// //       <DroppableArea items={items} />
// //     </DndContext>
// //   );
// // }

// // export default DragAndDropBuilder;



// // DragAndDropBuilder.js
// import { useState } from 'react';
// import { DndContext } from '@dnd-kit/core';
// import DraggableItem from './DraggableItem';
// import DroppableArea from './DroppableArea';

// function DragAndDropBuilder() {
//   const [items, setItems] = useState([]);

//   const handleDragEnd = (event) => {
//     const { active, over, collisions, delta } = event;
//     console.log('eventHere', event);

//     if (active.data.current.source === 'control' && over.id === 'canvas') {
//       let type;
//       switch (active.id) {
//         case 'a1':
//           type = 'Label';
//           break;
//         case 'input':
//           type = 'InputBox';
//           break;
//         case 'a3':
//           type = 'CheckBox';
//           break;
//         case 'a4':
//           type = 'button';
//           break;
//         case 'a5':
//           type = 'Table';
//           break;
//         default:
//           type = 'Unknown';
//       }

//       // Add the dragged item to the droppable area
//       setItems((prevItems) => [
//         ...prevItems,
//         { type, id: items.length + 1, x: 0, y: 0 },
//       ]);
//     } else if (
//       active.data.current.source === 'droppableArea' &&
//       collisions.length > 0 &&
//       collisions[0]?.id === 'canvas'
//     ) {
//       const updatedArray = items.map((item) => {
//         console.log(item, active.id);
//         return item.id === active.id
//           ? { ...item, x: item?.x + delta?.x, y: item?.y + delta?.y }
//           : item;
//       });
//       console.log(delta, 'delta comp');
//       setItems(updatedArray);
//       console.log(event, 'dragged');
//     }
//   };

//   return (
//     <DndContext onDragEnd={handleDragEnd}>
//       <div
//         style={{
//           display: 'flex',
//           backgroundColor: 'yellow',
//           border: '1px solid red',
//         }}
//       >
//         <div className='controls' style={{ marginRight: '20px' }}>
//           <DraggableItem id='a1' source='control'>
//             Label
//           </DraggableItem>
//           <DraggableItem id='input' source='control'>
//             Input
//           </DraggableItem>
//           <DraggableItem id='a3' source='control'>
//             Check Box
//           </DraggableItem>
//           <DraggableItem id='a4' source='control'>
//             Button
//           </DraggableItem>
//           <DraggableItem id='a5' source='control'>
//             Table
//           </DraggableItem>
//         </div>
//       </div>

//       <DroppableArea items={items} />
//     </DndContext>
//   );
// }

// export default DragAndDropBuilder;




// DragAndDropBuilder.js
import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import DraggableItem from './DraggableItem';
import DroppableArea from './DroppableArea';

function DragAndDropBuilder() {
  const [items, setItems] = useState([]);

  const handleDragEnd = (event) => {
    const { active, over, collisions, delta } = event;
    console.log('eventHere', event);

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
      console.log(delta, 'delta comp');
      setItems(updatedArray);
      console.log(event, 'dragged');
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div
        style={{
          display: 'flex',
          backgroundColor: 'yellow',
          border: '1px solid red',
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

      <DroppableArea items={items} setItems={setItems} />
    </DndContext>
  );
}

export default DragAndDropBuilder;
