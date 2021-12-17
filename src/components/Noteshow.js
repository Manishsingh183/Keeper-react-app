import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';



function Noteshow(props){

    function handleChange(){
      props.delNote(props.id);
    } 
   

    return <div class="Note">
       <h1>{props.title}</h1>
       <p>{props.content}</p>
       <button onClick={handleChange}><DeleteIcon/></button>
    </div>
}
export default Noteshow;