import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../../../fierbase';


export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export const Login = (email, password) => async (dispatch) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    dispatch(setUser(userCredential.user));
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await auth.signOut();
    dispatch(clearUser());
  } catch (error) {
    console.error(error);
  }
};

export default AuthSlice.reducer;
