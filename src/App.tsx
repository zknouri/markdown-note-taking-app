import { useState } from "react";

import type { Note } from "./utils/types";

import Sidebar from "./components/Sidebar";
import NoteEditor from "./components/NoteEditor";
import NotePreview from "./components/NotePreview";

// ///////////////////////////////
// title change input is not working properly
// 
/////////////////////////////////////

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note>();
  const [markdown, setMarkdown] = useState<string>("");
  const [docTitle, setDocTitle] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  function markdownChangeHandler(markd: string): void {
    setMarkdown(markd);
    setSelectedNote(undefined);
  }

  function noteSavingHandler(): void {
    // You mest check if the note already exists and modify it
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: crypto.randomUUID(),
        title: docTitle !== "" ? docTitle : "UntitledFile.md",
        content: markdown,
        updatedAt: Temporal.Now.plainDateTimeISO(),
      },
    ]);
  }

  function titleChangeHandler(id: string, newTitle: string): void {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, title: newTitle } : note,
    );
    setNotes(updatedNotes);
  }

  function selectedNoteHandler(id: string): void {
    const note: Note = notes.filter((note) => note.id === id)[0];
    setSelectedNote(note);
    setMarkdown(note.content);
  }

  function createNewNoteHandler(): void {
    setSelectedNote(undefined);
    setMarkdown("");
    setDocTitle("");
    setIsEditing(false);
  }

  function markdownTitleChangeHandler(title: string): void {
    setDocTitle(title);
  }

  function setIsEditingHandler(value: boolean){
    setIsEditing(value);
  }

  console.log(notes);

  return (
    <>
      <main className="flex overflow-hidden">
        <aside className="relative w-1/5">
          <Sidebar
            notesData={notes}
            onSave={noteSavingHandler}
            onNoteSelect={selectedNoteHandler}
            onNewNoteClick={createNewNoteHandler}
          />
        </aside>
        <section className="w-2/5">
          <NoteEditor
            onNoteTitleChange={titleChangeHandler}
            onMarkdownChange={markdownChangeHandler}
            onMarkdownTitleChange={markdownTitleChangeHandler}
            onEditTitleClick={setIsEditingHandler}
            selectedNote={selectedNote}
            markdown={markdown}
            title={docTitle}
            isEditing={isEditing}
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
