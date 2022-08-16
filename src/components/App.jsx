import React,{useState} from "react";
import AddItems from "./Todoitem";
import Input from "./Input";
function App() {
  
  
  const [items,setitem]=useState([]);
  
 
  
  function addItem(input)
  {
    setitem(prevVal=>{
      return [ ...prevVal,input]
    })
    
  }
  function deleteItem(id)
  {
   setitem((prevValue)=>{
      return prevValue.filter((item,index)=>{
        return index!==id
      })
    })
  }
 
  return (
    <div className="container">
      <div className="heading">
        <h1>ToDo List</h1>
      </div>
      <Input onAdd={addItem}/>
      <div>
        <ul>
          {items.map((todoitem,index)=>(
            <AddItems 
            key={index}
            id={index}
            text={todoitem}
            onChecked={deleteItem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
