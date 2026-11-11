import type { SidebarProps } from "../utils/types";

import saveIcon from "../assets/svg/save-outline-icon.svg";
import deleteIcon from "../assets/svg/recycle-bin-line-icon.svg";
import createIcon from "../assets/svg/text-document-add-icon.svg";
import { useState } from "react";

export default function Sidebar({
  notesData,
  selectedNote,
  onSave,
  onNoteSelect,
  onNewNoteClick,
}: SidebarProps) {
  const [searchQuery, setSearchQueary] = useState<string>('');

  return (
    <nav className="fixed bg-olive-500 h-lvh w-1/5 p-2">
      <div className="flex flex-col border-b border-b-cyan-900 mb-2">
        <button
          onClick={onNewNoteClick}
          className="block bg-cyan-500 hover:bg-cyan-400 rounded-md p-2 mb-2 font-bold text-stone-600 cursor-pointer"
        >
          <div className="flex gap-1 justify-center items-center">
            <img src={createIcon} alt="" className="size-6" />
            <span>Create New Note</span>
          </div>
        </button>
        <button
          onClick={() => onSave(selectedNote?.id)}
          className="block bg-green-500 hover:bg-green-400 rounded-md p-2 mb-2 font-bold text-stone-600 cursor-pointer"
        >
          <div className="flex gap-1 justify-center items-center">
            <img src={saveIcon} alt="" className="size-6" />
            <span>Save Session</span>
          </div>
        </button>
        <button className="block bg-red-500 hover:bg-red-400 rounded-md p-2 mb-2 font-bold text-stone-600 cursor-pointer">
          <div className="flex gap-1 justify-center items-center">
            <img src={deleteIcon} alt="" className="size-6" />
            <span>Delete Document</span>
          </div>
        </button>
      </div>

      <input
        value={searchQuery}
        onChange={(event) => setSearchQueary(event.target.value)}
        type="text"
        className="bg-white w-full p-0.5 h-10 rounded-md text-center text-xl"
        placeholder="Search"
      />
      <div>
        <ul className="mt-4">
          {notesData.length > 0
            ? notesData.map((note) => note.title.toLowerCase().includes(searchQuery.toLowerCase()) ? (
                <li
                  onClick={() => onNoteSelect(note.id)}
                  key={note.id}
                  className={`mt-2 ${note.id === selectedNote?.id ? 'bg-olive-300' : 'bg-olive-400'}  hover:bg-olive-200 p-2 rounded-md font-bold text-lg cursor-pointer`}
                >
                  {note.title}
                </li>
              ) : null)
            : null}
        </ul>
      </div>
    </nav>
  );
}
