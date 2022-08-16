import React ,{useState}from "react";
function Input(props)
{
    const [input,setInput]=useState("");
    function update(props)
    {
      const newval=props.target.value
      setInput(newval);
    }
    function something(event) {
        if (event.keyCode === 13) {
          props.onAdd(input);
          setInput("");
        }
      }
    return(
    <div className="form">
        <input onChange={update} onKeyDown={(e) => something(e) } type="text" value={input}/>
        <button onClick={()=>{
            props.onAdd(input);
            setInput("");
        }}>
          <span>Add</span>
        </button>
      </div>
    );
}
export default Input;