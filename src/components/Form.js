import React,{useState} from "react";

function Form(props){

    const [note,setNote] = useState({htitle:" ",bcontent: " "});


    function handleChange(event){
       const {value,name} = event.target;
       setNote(prevValue =>{
        return {...prevValue,[name]:value}
       });
    }

    function submitNote(event){
         props.addNote(note);
         setNote({
             htitle:"",
             bcontent:""
         });
         event.preventDefault();
    }

    return <div>
         <form>
           <input name="htitle"  
                  placeholder="Title" 
                  value={note.htitle} 
                  onChange={handleChange} />
           <textarea name="bcontent" 
                     placeholder="Take a note...." 
                     value={note.bcontent}  
                     onChange={handleChange} />
           <button onClick={submitNote}>Create</button>
         </form>
        </div>
}
export default Form;