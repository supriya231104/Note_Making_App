import React from "react";

function NoteItem({ oneNote, i ,setNotes,notes}) {
  const handleDelete = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };
  return (
    <div className="relative mb-2 bg-white border border-blue-100 rounded-lg shadow-md p-4 hover:shadow-lg transition flex w-full justify-between items-center">
      {/* Delete icon */}

      <div className="w-[70%]">
        <h2 className="text-lg font-semibold text-blue-700">{oneNote.title}</h2>

        <p className="text-sm text-gray-600 mt-1 text-wrap">
          {oneNote.description}
        </p>
      </div>
      <button
        onClick={() => handleDelete(i)}
        className="flex   bg-red-600  text-white px-2 py-1  rounded-md"
        title="Delete note"
      >
        Delete
      </button>
    </div>
  );
}

export default NoteItem;
