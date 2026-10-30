import { useState } from "react";

import type { Note } from "./utils/types";

import Sidebar from "./components/Sidebar";
import NoteEditor from "./components/NoteEditor";
import NotePreview from "./components/NotePreview";

function App() {
  // const [notes, setNotes] = useState<Note[]>([]);
  const [markd, setMarkd] = useState<string>('');

  return (
    <>
      <main className="flex overflow-hidden">
        <aside className="relative w-1/5">
          <Sidebar />
        </aside>
        <section className="w-2/5">
          <NoteEditor onTextChange={setMarkd}/>
        </section>
        <section className="w-2/5">
          <NotePreview markd={markd}/>
        </section>
      </main>
    </>
  );
}

export default App;
