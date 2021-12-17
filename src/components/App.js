import React,{useState} from "react";
import Header from "./header"
import Footer from "./footer"
import Form from "./Form"
import Noteshow from "./Noteshow"



function App(){

    const [notes,setNotes] = useState([]);

    function addNewNote(newNote){
         setNotes(prevNote =>{
            return [...prevNote,newNote];
        });
    }

    function deleteNote(id){
        setNotes(prevNote =>{
            return prevNote.filter((noteItem,index) => {
              return index!==id;
            });
        });
    }


    return <div>
         <Header />
         <Form addNote={addNewNote} />
         {notes.map((noteItem, index) => {
        return (
          <Noteshow
            key={index}
            id={index}
            title={noteItem.htitle}
            content={noteItem.bcontent}
            delNote={deleteNote}
          />
        );
      })}
         <Footer />
       </div>

}

export default App;