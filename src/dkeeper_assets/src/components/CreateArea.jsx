import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    id:0,
    title: "",
    content: ""
  });

  const [click,upClick]=useState({
    stat:false,
    len:1,
    hid:"hidden"
  })

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      id:note.id+1,
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function changClick(){
    upClick({
      stat:true,
    len:3,
    hid:""
    })
  }

  return (
    <div>
      <form className="create-note">
      <Zoom in={click.stat}>
        <input
        type={click.hid}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        </Zoom>
        <textarea
          name="content"
          onClick={changClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={click.len}
        />
        <Zoom in={click.stat}>
        <Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
