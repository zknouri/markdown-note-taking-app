import { useState } from "react";

import type { Note } from "./utils/type";
import Sidebar from "./components/Sidebar";
import NoteEditor from "./components/NoteEditor";
import NotePreview from "./components/NotePreview";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  return (
    <>
      <main className="flex overflow-hidden">
        <aside className="w-1/5">
          <Sidebar />
        </aside>
        <section className="w-2/5">
          <NoteEditor />
        </section>
        <section className="w-2/5">
          <NotePreview />
        </section>
      </main>
    </>
  );
}

export default App;
