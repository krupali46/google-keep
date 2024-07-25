import React, { useState, useContext } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { AuthContext } from './AuthContext';

const LogIn = ({ open, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await login(email, password);
            onClose(); 
        } catch (error) {
            
            console.error(error);
        }
    };

    if (!open) return null; 

    return (
        <div>
            <Typography variant="h5">Login</Typography>
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
                    Login
                </Button>
            </form>
        </div>
    );
};

export default LogIn