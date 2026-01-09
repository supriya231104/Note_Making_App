import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  function getNotes() {
    const stored_notes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(stored_notes);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      getNotes();
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // cleanup (important)
  }, []);

  return (
    <div
      className={`w-full flex flex-col ${
        loading ? "justify-center" : "justify-start"
      } items-center   min-h-screen`}
    >
      {loading ? (
        <div className="flex flex-col w-[50%] h-full gap-10 items-center justify-center">
          <p className="font-semibold text-2xl">
            Please wait while notes are loading
          </p>
          <span className="loader"></span>
        </div>
      ) : (
        <div className=" w-full h-full flex flex-col items-center justify-around">
          <NoteForm notes={notes} setNotes={setNotes}></NoteForm>
          <NoteList notes={notes} setNotes={setNotes}></NoteList>
        </div>
      )}
    </div>
  );
}

export default App;
