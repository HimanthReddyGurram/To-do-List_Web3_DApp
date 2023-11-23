import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { dkeeper } from "../../../declarations/dkeeper/index";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      dkeeper.createNote(newNote.id,newNote.title,newNote.content)
      return [newNote,...prevNotes];
    });
  }

  useEffect(()=>{
    console.log("rerendered");
    fetchData();
  },[])

  async function fetchData(){
const k = await dkeeper.readNotes();
setNotes(k);
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      dkeeper.deleteIt(id)
      return prevNotes.filter((noteItem) => {
        return noteItem.id !== id ;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
