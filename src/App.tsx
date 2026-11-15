import { useState } from "react";

import type { Note } from "./utils/types";

import Sidebar from "./components/Sidebar";
import NoteEditor from "./components/NoteEditor";
import NotePreview from "./components/NotePreview";

function App() {
  const [notes, setNotes] = useState<Note[]>([]); // Notes Data
  const [selectedNote, setSelectedNote] = useState<Note>(); // User selected Note to edit or preview
  const [markdown, setMarkdown] = useState<string>(""); // Markdown change
  const [docTitle, setDocTitle] = useState<string>(""); // Marikdown title change
  const [isEditing, setIsEditing] = useState<boolean>(false); // Title text input

  {
    /* ------ Sidebar-start ------ */
  }

  // Create New Note - Button
  // Prop: onNewNoteClick()
  // - Clears markdown
  // - Clears title and title editing
  // - Clears if there is a selected Note
  function createNewNoteHandler(): void {
    setSelectedNote(undefined);
    setMarkdown("");
    setDocTitle("");
    setIsEditing(false); // Title editing
  }

  // Selects a Note to read it - List
  // Prop: onNoteSelect()
  // Filters the selected Note from Notes data
  // Sets the selected Note
  // Sets the Note markdown and title in the NoteEditor
  function selectedNoteHandler(id: string): void {
    const note: Note = notes.filter((note) => note.id === id)[0];
    setSelectedNote(note);
    setMarkdown(note.content);
    setDocTitle(note.title);
  }

  // Session Save - Button
  // Prop: onSave()
  // Save if the Note in New
  // Updates if there is a selected Note
  function noteSavingHandler(id: string | undefined): void {
    if (!id) {
      setNotes((prevNotes) => [
        ...prevNotes,
        {
          id: crypto.randomUUID(),
          title: docTitle !== "" ? docTitle : "UntitledFile.md",
          content: markdown,
          updatedAt: Temporal.Now.plainDateTimeISO(),
        },
      ]);
    } else {
      const updatedNotes = notes.map((note) =>
        note.id === id ? { ...note, content: markdown } : note,
      );
      setNotes(updatedNotes);
    }
  }

  {
    /* ------ Sidebar-end ------ */
  }

  {
    /* ------ NoteEditor-start ------ */
  }

  // Markdown Editing - Textarea
  // Prop: onMarkdownChange()
  // Sets markdown change
  function markdownChangeHandler(markd: string): void {
    setMarkdown(markd);
  }

  // Note Title Update - Text Input
  // Prop: onNoteTitleChange()
  // Updates selected Note title
  // Sets Updated Notes
  function noteTitleChangeHandler(id: string, newTitle: string): void {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, title: newTitle } : note,
    );
    setNotes(updatedNotes);
  }

  // New markdown title change - Text Input
  // Prop: onMarkdownTitleChange()
  // Sets new markdown title
  function markdownTitleChangeHandler(title: string): void {
    setDocTitle(title);
  }

  // Enable/Disable title text input
  // Prop: onEditTitleClick()
  // true: Enables text input, save button and disables edit button
  // false: Disables text input, save button and enables edit button
  function setIsEditingHandler(value: boolean): void {
    setIsEditing(value);
  }

  {
    /* ------ NoteEditor-end ------ */
  }

  console.log(notes);

  return (
    <>
      <main className="flex overflow-hidden">
        <aside className="relative w-1/5">
          <Sidebar
            notesData={notes} // Notes List
            selectedNote={selectedNote} // Note Update(onSave()) and selected note marking
            onSave={noteSavingHandler}
            onNoteSelect={selectedNoteHandler}
            onNewNoteClick={createNewNoteHandler}
          />
        </aside>
        <section className="w-2/5">
          <NoteEditor
            onNoteTitleChange={noteTitleChangeHandler}
            onMarkdownChange={markdownChangeHandler}
            onMarkdownTitleChange={markdownTitleChangeHandler}
            onEditTitleClick={setIsEditingHandler}
            selectedNote={selectedNote} // Show selected note
            markdown={markdown} // Markdown change before saving
            title={docTitle} // Title change before saving
            isEditing={isEditing} // Enable/Disable Title text input and Save/Edit buttons
          />
        </section>
        <section className="w-2/5">
          <NotePreview markdown={markdown} // Markdown to HTML preview
           />
        </section>
      </main>
    </>
  );
}

export default App;
