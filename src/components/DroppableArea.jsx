import {  useDroppable } from '@dnd-kit/core';


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
    // transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
    
  };


  const renderItem = (item) => {
    switch (item) {
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
      case 'Button':
        return <button>Button</button>;
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
        return <div>{item}</div>;
    }
  };

  return (
    <>
      <div  ref={setNodeRef} style={style} 
     
      >
      
        {items.map((item) => (
         <>
             {
            
             renderItem(item)
             
             
             }

         </>

       
        ))}
      </div>
    </>
  );
}

export default DroppableArea;







