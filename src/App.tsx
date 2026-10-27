import { useState } from "react";

import type { Note } from "./utils/type";
import Sidebar from "./components/Sidebar";
import NoteEditor from "./components/NoteEditor";
import NotePreview from "./components/NotePreview";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  return (
    <>
      <header>
        <Sidebar />
      </header>
      <main>
        <section>
          <NoteEditor />
        </section>
        <section>
          <NotePreview />
        </section>
      </main>
    </>
  );
}

export default App;
