import React from "react";

function AddItems(props){

    // const [isDone,setDone] = useState(false);
    // style={{textDecoration: isDone ? "line-through" : "none"}}
    // function handleClick()
    // {
    //     setDone(prevVal => {
    //         return !prevVal;
    //     });
    // }
    
    return(
        <div onClick={()=>{
            props.onChecked(props.id)
        }}>
            <li >{props.text}</li>
        </div>
    );
}
export default AddItems;