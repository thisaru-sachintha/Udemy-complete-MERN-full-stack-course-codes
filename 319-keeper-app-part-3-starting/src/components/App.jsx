import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);

  function addNote(note) {
    setNoteList((prevList) => {
      return [...prevList, note];
    });
    console.log(noteList);
  }

  function deleteItem(id) {
    setNoteList((prevList) => {
      return prevList.filter((item,index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {noteList.map((note, index) => {
        return <Note
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        onDelete={deleteItem}
      />;
      })}
      <Footer />
    </div>
  );
}

export default App;
