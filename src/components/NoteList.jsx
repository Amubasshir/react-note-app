import React from 'react';
import Note from './Note';

const NoteList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note id={note.id} name={note.name} date={note.date} />
      ))}
    </div>
  );
};

export default NoteList;
