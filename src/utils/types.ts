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
  title: string;
  isEditing: boolean;
  onNoteTitleChange: (id: string, newTitle: string) => void;
  onMarkdownTitleChange: (title: string) => void;
  onMarkdownChange: (markdonw: string) => void;
  onEditTitleClick: (value: boolean) => void;
}

export interface NotePreviewProps {
  markdown: string;
}
