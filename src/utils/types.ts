export interface Note {
  readonly id: string;
  title: string;
  content: string;
  updatedAt: Temporal.PlainDateTime;
}

export interface SidebarProps {
  notesData: Note[];
  onSave: () => void;
  onNewNoteClick: () => void;
  onNoteSelect: (id: string) => void;
}

export interface NoteEditorProps {
  selectedNote: Note | undefined;
  markdown: string;
  onTitleChange: (id: string, newTitle: string) => void;
  onMarkdownChange: (markdonw: string) => void;
}

export interface NotePreviewProps {
  markdown: string;
}
