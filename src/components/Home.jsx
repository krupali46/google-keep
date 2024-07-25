import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import SwipeDrawer from './SwipeDrawer';
import Notes from './Notes/Notes';
import Archives from './Archives/Archives';
import DeleteNotes from './Delete/DeleteNotes';


const Home = () => {
    return (
        <Box style={{ display: 'flex', width: '100%' }}>
            <Router>
                <SwipeDrawer/>
                <Routes>        
                    <Route path='/' element={<Notes />} />
                    <Route path='/archive' element={<Archives />} />
                    <Route path='/delete' element={<DeleteNotes />} />
                    <Route path='/notes' element={<Home />} />
                    {/* <Route path="/login" component={<LogIn />} />
                    <Route path="/signup" component={<SignUp />} /> */}
                </Routes>
            </Router>
        </Box>
    )
}

export default Home;
