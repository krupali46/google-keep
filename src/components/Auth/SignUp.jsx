import React, { useState, useContext } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { AuthContext } from './AuthContext';

const SignUp = ({ open, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signUp } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signUp(email, password);
            onClose(); 
        } catch (error) {
            console.error(error);
        }
    };

    if (!open) return null; 

    return (
        <div>
            <Typography variant="h5">Sign Up</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

export default SignUp;