import React, {  useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Input, Dialog } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Auth/AuthContext ';

// Import Avatar and Btn from Material-UI if used
// import { Avatar, Button as Btn } from '@mui/material';

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Heading = styled(Typography)`
  color: #5f6368;
  font-size: 24px;
  margin-left: 25px;
`;

const HeaderBar = ({ open, handleDrawer }) => {
  // const { user, logout } = useContext(AuthContext);
  // const [loginOpen, setLoginOpen] = useState(false);
  // const [signUpOpen, setSignUpOpen] = useState(false);
  // const navigate = useNavigate();

  // const handleLoginOpen = () => setLoginOpen(true);
  // const handleLoginClose = () => setLoginOpen(false);
  // const handleSignUpOpen = () => setSignUpOpen(true);
  // const handleSignUpClose = () => setSignUpOpen(false);

  const logo =
    'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';

  return (
    <>
      <Header open={open}>
        <Toolbar>
          <IconButton onClick={handleDrawer} sx={{ marginRight: '20px' }} edge="start">
            <Menu />
          </IconButton>
          <img src={logo} alt="logo" style={{ width: 30 }} />
          <Heading>Keep</Heading>
          <div className="p col-5">
            <input className="form-control me-2 col-2" type="search" placeholder="Search" aria-label="Search" />
          </div>
          <div className="p2">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" fill="currentColor" className="bi bi-arrow-clockwise i-c" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
            </svg>
          </div>
          <div className="p3">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" fill="currentColor" className="bi bi-border-all i-c" viewBox="0 0 16 16">
              <path d="M0 0h16v16H0zm1 1v6.5h6.5V1zm7.5 0v6.5H15V1zM15 8.5H8.5V15H15zM7.5 15V8.5H1V15z" />
            </svg>
          </div>
          <div className="p3">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
            </svg>
          </div>
          {/* {user ? (
            <>
              Replace with Avatar and Btn components
              <Avatar src={user.photoURL || "https://via.placeholder.com/40"} alt="User Avatar" />
              <Btn onClick={logout} color="inherit">Logout</Btn>
            </>
          ) : (
            <>
              <Btn onClick={handleLoginOpen} color="inherit">Login</Btn>
              <Btn onClick={handleSignUpOpen} color="inherit">Sign Up</Btn>
            </>
          )} */}
        </Toolbar>
      </Header>
      {/* <Dialog open={loginOpen} onClose={handleLoginClose}>
        <Login open={loginOpen} onClose={handleLoginClose} />
      </Dialog>
      <Dialog open={signUpOpen} onClose={handleSignUpClose}>
        <SignUp open={signUpOpen} onClose={handleSignUpClose} />
      </Dialog> */}
    </>
  );
};

export default HeaderBar;
