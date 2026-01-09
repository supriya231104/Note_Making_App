import React from 'react'
import NoteItem from './NoteItem';

function NoteList({ notes, setNotes }) {

   
  
    if (notes.length === 0) {
      return (
        <p className="text-black text-center mt-6 text-xl">
          No notes available.
          Add your first Note
        </p>
      );
    }
  
    return (
      <div className="w-full max-w-3xl mt-6 grid gap-4">
        {notes.map((oneNote, i) => (
          <NoteItem key={i} oneNote={oneNote}  i={i} setNotes={setNotes} notes={notes}></NoteItem>
        ))}
      </div>
    );
  }
  

  
  
  export default NoteList;
  
