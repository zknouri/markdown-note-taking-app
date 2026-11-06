import { useState } from "react";

import type { NoteEditorProps } from "../utils/types";

import saveIcon from "../assets/svg/save-outline-icon.svg";
import editIcon from "../assets/svg/pencil-icon.svg";

export default function NoteEditor({
  markdown,
  selectedNote,
  onTitleChange,
  onMarkdownChange,
}: NoteEditorProps) {
  const [docTitle, setDocTitle] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  function onEditClickHandler() {
    setIsEditing(true);
  }

  function onSaveClickHandler() {
    if (selectedNote) {
      onTitleChange(selectedNote.id, docTitle);
    }
  }

  function markdownEditingHandler(value: string) {
    onMarkdownChange(value);
  }

  return (
    <>
      <div className="flex w-full h-11.5 items-center gap-0.5 bg-stone-100 p-0.5">
        {isEditing ? (
          <input
            type="text"
            value={selectedNote ? selectedNote.title : docTitle}
            onChange={(event) => setDocTitle(event.target.value)}
            className="p-2 border border-stone-500 rounded-md"
          />
        ) : (
          <input
            disabled
            type="text"
            value={selectedNote ? selectedNote.title : docTitle}
            className="p-2 border border-stone-500 rounded-md"
          />
        )}
        <div className="flex gap-0.5">
          {isEditing ? (
            <>
              <button
                disabled
                className="size-10 p-0.5 bg-grey-200 border border-stone-500 rounded-md"
              >
                <img src={editIcon} alt="edit icon" />
              </button>
              <button
                onClick={onSaveClickHandler}
                className="size-10 p-0.5 bg-green-200 hover:bg-green-100 border border-stone-500 rounded-md cursor-pointer"
              >
                <img src={saveIcon} alt="save icon" />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={onEditClickHandler}
                className="size-10 p-0.5 bg-cyan-200 hover:bg-cyan-100 border border-stone-500 rounded-md cursor-pointer"
              >
                <img src={editIcon} alt="edit icon" />
              </button>
              <button
                disabled
                className="size-10 p-0.5 bg-grey-200 border border-stone-500 rounded-md"
              >
                <img src={saveIcon} alt="save icon" />
              </button>
            </>
          )}
        </div>
      </div>

      <textarea
        onChange={(event) => {
          markdownEditingHandler(event.target.value);
        }}
        value={selectedNote ? selectedNote.content : markdown}
        name="markdown"
        autoFocus
        className="w-full h-[95%] p-2 m-0 resize-none outline-0 border-0 overflow-x-hidden overflow-y-scroll"
        placeholder="Start your markdown!"
      >
        {selectedNote ? selectedNote.content : ""}
      </textarea>
    </>
  );
}
