import { useState } from "react";

import type { Note } from "./utils/types";

import Sidebar from "./components/Sidebar";
import NoteEditor from "./components/NoteEditor";
import NotePreview from "./components/NotePreview";

// ///////////////////////////////
// title persist after new note click
/////////////////////////////////////

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note>();
  const [markdown, setMarkdown] = useState<string>("");

  function markdownChangeHandler(markd: string) {
    setMarkdown(markd);
    setSelectedNote(undefined);
  }

  function noteSavingHandler() {
    // You mest check if the note already exists and modify it
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: crypto.randomUUID(),
        title: "UntitledFile.md",
        content: markdown,
        updatedAt: Temporal.Now.plainDateTimeISO(),
      },
    ]);
  }

  function titleChangeHandler(id: string, newTitle: string) {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, title: newTitle } : note,
    );
    setNotes(updatedNotes);
  }

  function selectedNoteHandler(id: string){
    const note: Note = notes.filter(note => note.id === id)[0];
    setSelectedNote(note);
    setMarkdown(note.content);
  }

  function createNewNoteHandler(){
    setSelectedNote(undefined);
    setMarkdown('');
  }

  console.log(notes);

  return (
    <>
      <main className="flex overflow-hidden">
        <aside className="relative w-1/5">
          <Sidebar notesData={notes} onSave={noteSavingHandler} onNoteSelect={selectedNoteHandler} onNewNoteClick={createNewNoteHandler}/>
        </aside>
        <section className="w-2/5">
          <NoteEditor
            onTitleChange={titleChangeHandler}
            onMarkdownChange={markdownChangeHandler}
            selectedNote={selectedNote}
            markdown={markdown}
          />
        </section>
        <section className="w-2/5">
          <NotePreview markdown={markdown} />
        </section>
      </main>
    </>
  );
}

export default App;
