import type { NoteEditorProps } from "../utils/types";

import saveIcon from "../assets/svg/save-outline-icon.svg";
import editIcon from "../assets/svg/pencil-icon.svg";
import { useEffect, useState } from "react";

export default function NoteEditor({
  title,
  markdown,
  selectedNote,
  isEditing,
  onNoteTitleChange,
  onMarkdownChange,
  onMarkdownTitleChange,
  onEditTitleClick,
}: NoteEditorProps) {
  const [markdownInput, setMarkdownInput] = useState<string>(markdown); // For markdown input change 

  useEffect(() => {
    // Updates input state when editing a selected markdown
    setMarkdownInput(markdown); 
  }, [markdown]);

  // Title Edit - Button
  // Sets selected Note title to text input
  // Enables title text input
  function onEditClickHandler() {
    if (selectedNote) {
      onMarkdownTitleChange(title);
    }
    onEditTitleClick(true);
  }

  // Title Save - Button
  // Disables tilte text input
  // Sends the new Title to be saved in the Notes Data
  function onSaveClickHandler() {
    onEditTitleClick(false);
    if (selectedNote) {
      onNoteTitleChange(selectedNote.id, title);
    }
  }

  // Makdown Editing - Textarea
  // Handles input change on Editor side
  // Handles the app markdown change(debouncing preview)
  function markdownEditingHandler(value: string) {
    setMarkdownInput(value); // editor
    onMarkdownChange(value); // app
  }

  return (
    <>
      <div className="flex w-full h-11.5 items-center gap-0.5 bg-stone-100 p-0.5">
        {isEditing ? (
          <input
            type="text"
            value={selectedNote && !isEditing ? selectedNote.title : title}
            onChange={(event) => onMarkdownTitleChange(event.target.value)}
            className="p-2 border border-stone-500 rounded-md"
          />
        ) : (
          <input
            disabled
            type="text"
            value={selectedNote && isEditing ? selectedNote.title : title}
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
        value={markdownInput}
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
