import { createContext, useState } from 'react';

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    const [notes, setNotes] = useState([]);
    const [archiveNotes, setAcrchiveNotes] = useState([]);
    const [deleteNotes, setDeleteNotes] = useState([]);

    const updateNote = async (updatedNote) => {
        try {
          const noteDoc = doc(db, 'notes', updatedNote.id);
          await updateDoc(noteDoc, updatedNote);
          setNotes((prevNotes) =>
            prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
          );
        } catch (error) {
          console.error('Error updating note:', error);
        }
      };

    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
            archiveNotes,
            setAcrchiveNotes,
            deleteNotes,
            setDeleteNotes,
            updateNote
            
        }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;