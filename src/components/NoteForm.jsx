import React, { useState } from "react";

function NoteForm({notes,setNotes}) {
    console.log(notes);
  const [noteDetails,setNoteDetails]=useState({title:"",description:""})
  const [titleErr,setTitleErr]=useState(false)
  console.log(noteDetails);
  function handleSubmit(){
    let {title,description}=noteDetails
    title.trim()
    description.trim()
    if (!title) {

        setTitleErr(true)
        return
    }
    else{
      
        let newNotes=[...notes,{title,description}]
        localStorage.setItem('notes',JSON.stringify(newNotes))
        setNotes(newNotes)

    }
  }
  return (
<div className="w-1/2 mx-auto mt-10 bg-white rounded-xl shadow-lg border border-blue-100">
  <h1 className="text-2xl font-semibold text-blue-700 text-center py-4 border-b border-blue-100">
    Note Form
  </h1>

  <div className="flex flex-col gap-4 p-6">
    <div className="flex flex-col gap-1">
      <label htmlFor="title" className="text-sm font-medium text-blue-600">
        Title
      </label>
      <input
        onChange={(e)=>{

            setNoteDetails((prev)=>{
                let newNote={...prev,title:e.target.value}
                return newNote
            })
            setTitleErr(false)
        }}
        type="text"
        id="title"
        required
        placeholder="Enter note title"
        className={`px-3 py-2 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 `+(titleErr?' border border-red-500' :'border-blue-200')}
      />
     {titleErr &&  <p className="text-red-700">Title can not be empty</p>}
    </div>

    <div className="flex flex-col gap-1">
      <label htmlFor="description" className="text-sm font-medium text-blue-600">
        Description
      </label>
      <textarea
        onChange={(e)=>{
            setNoteDetails((prev)=>{
                let newNote={...prev,description:e.target.value}
                return newNote
            })
        }}
        id="description"
        required
        rows={4}
        placeholder="Enter note description"
        className="px-3 py-2 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 resize-none"
      />
    </div>

    <button
      onClick={handleSubmit}
      type="submit"
      className={`mt-2  text-white py-2 bg-blue-400 rounded-md font-medium  transition-colors ${titleErr?'':' bg-blue-800 hover:bg-blue-700'}`}
    >
      Submit
    </button>
  </div>
</div>

  );
}

export default NoteForm;
