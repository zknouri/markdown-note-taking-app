import type { NoteEditorProps } from "../utils/types";

import saveIcon from "../assets/svg/save-outline-icon.svg";
import editIcon from "../assets/svg/wooden-yellow-pencil-icon.svg";

export default function NoteEditor({ onTextChange }: NoteEditorProps) {
  return (
    <>
      <div className="flex w-full h-[46px] items-center gap-0.5 bg-stone-100 p-0.5">
        <input
          type="text"
          value={"Untitled document.md"}
          className="p-2 border border-stone-500 rounded-md"
        />
        <div className="flex gap-0.5">
          <button className="size-10 p-0.5 bg-cyan-500 hover:bg-cyan-400 border border-stone-500 rounded-md cursor-pointer">
            <img src={editIcon} alt="" />
          </button>
          <button className="size-10 p-0.5 bg-green-200 hover:bg-green-100 border border-stone-500 rounded-md cursor-pointer">
            <img src={saveIcon} alt="" />
          </button>
        </div>
      </div>

      <textarea
        onChange={(event) => {
          onTextChange(event.target.value);
        }}
        name="markdown"
        autoFocus
        className="w-full h-[95%] p-2 m-0 resize-none outline-0 border-0 overflow-x-hidden overflow-y-scroll"
        placeholder="Start your markdown!"
      ></textarea>
    </>
  );
}
