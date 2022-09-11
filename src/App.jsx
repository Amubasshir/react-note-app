import React from 'react';
import NoteList from './components/NoteList';

const App = () => {
  const notes = [
    {
      id: 1,
      name: 'This is my first note',
      date: '09-09-22',
    },
    {
      id: 2,
      name: 'This is my second note',
      date: '09-09-22',
    },
    {
      id: 3,
      name: 'This is my third note',
      date: '09-09-22',
    },
    {
      id: 4,
      name: 'This is my last note',
      date: '09-09-22',
    },
  ];
  return (
    <div className="container">
      <NoteList notes={notes} />
    </div>
  );
};

export default App;
