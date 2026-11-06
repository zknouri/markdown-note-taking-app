import type { SidebarProps } from "../utils/types";

import saveIcon from "../assets/svg/save-outline-icon.svg";
import deleteIcon from "../assets/svg/recycle-bin-line-icon.svg";
import createIcon from "../assets/svg/text-document-add-icon.svg";

export default function Sidebar({
  notesData,
  onSave,
  onNoteSelect,
}: SidebarProps) {
  return (
    <nav className="fixed bg-olive-500 h-lvh w-1/5 p-2">
      <div className="flex flex-col border-b border-b-cyan-900 mb-2">
        <button className="block bg-cyan-500 hover:bg-cyan-400 rounded-md p-2 mb-2 font-bold text-stone-600 cursor-pointer">
          <div className="flex gap-1 justify-center items-center">
            <img src={createIcon} alt="" className="size-6" />
            <span>Create New Note</span>
          </div>
        </button>
        <button
          onClick={onSave}
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
        type="text"
        className="bg-white w-full p-0.5 h-10 rounded-md text-center text-xl"
        placeholder="Search"
      />
      <div>
        <ul className="mt-4">
          {notesData.length > 0
            ? notesData.map((note) => (
                <li
                  onClick={() => onNoteSelect(note.id)}
                  key={note.id}
                  className="mt-2 bg-olive-400 hover:bg-olive-300 p-2 rounded-md font-bold text-lg cursor-pointer"
                >
                  {note.title}
                </li>
              ))
            : null}
        </ul>
      </div>
    </nav>
  );
}
