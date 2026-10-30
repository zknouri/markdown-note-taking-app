import type { NoteEditorProps } from "../utils/types";

export default function NoteEditor({ onTextChange }: NoteEditorProps){
    return <textarea onChange={(event)=>{onTextChange(event.target.value)}} name="markdown" autoFocus className="w-full h-full p-2 m-0 resize-none outline-0 border-0"></textarea>
}