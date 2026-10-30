export interface Note {
    readonly id: string;
    title: string;
    content: string;
    updatedAt: number;
}

export interface NoteEditorProps {
    onTextChange: (text: string ) => void;
}
export interface NotePreviewProps {
    markd: string;
}