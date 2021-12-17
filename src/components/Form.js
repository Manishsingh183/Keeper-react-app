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
           <input type="text" name="htitle"  placeholder="Title" value={note.htitle} onChange={handleChange} />
           <textarea type="text" name="bcontent" placeholder="Take a note...." value={note.bcontent}  onChange={handleChange} rows="3"/>
           <button type="submit" onClick={submitNote}>Create</button>
         </form>
        </div>
}
export default Form;