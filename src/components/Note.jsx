import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
const Note = () => {
  return (
    <div className="note">
      <span>Hello from note </span>
      <div className="note-footer">
        <small>09-09-22</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};

export default Note;
