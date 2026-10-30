import Markdown from "react-markdown";
import type { NotePreviewProps } from "../utils/types";

export default function NotePreview({markd}: NotePreviewProps){
    return <div className="prose-base w-full h-full bg-stone-100 p-2 overflow-hidden"><Markdown>{markd}</Markdown></div>
}