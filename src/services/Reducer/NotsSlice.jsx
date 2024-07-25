import { createSlice } from '@reduxjs/toolkit';
import { firestore } from '../../../fierbase';


export const NotesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
  },
  reducers: {
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
  },
});

export const { setNotes } = notesSlice.actions;

export const fetchNotes = (userId) => async (dispatch) => {
  try {
    const notesSnapshot = await firestore.collection('notes').where('userId', '==', userId).get();
    const notes = notesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    dispatch(setNotes(notes));
  } catch (error) {
    console.error(error);
  }
};

export const addNote = (note) => async (dispatch, getState) => {
  const userId = getState().auth.user.uid;
  try {
    await firestore.collection('notes').add({ ...note, userId });
    dispatch(fetchNotes(userId));
  } catch (error) {
    console.error(error);
  }
};

export const deleteNote = (noteId) => async (dispatch, getState) => {
  const userId = getState().auth.user.uid;
  try {
    await firestore.collection('notes').doc(noteId).delete();
    dispatch(fetchNotes(userId));
  } catch (error) {
    console.error(error);
  }
};

export default NotesSlice.reducer;
