import { NavLink } from "react-router-dom";
import { IoGameController } from "react-icons/io5";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import { auth, logout } from "../../apis/firebase";
import { Nav, Button } from 'react-bootstrap';
// styles
import styles from "./Header.module.css";

const Header = () => {
  const activeStyle = {
    color: "#fff",
  }

  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const logoutHandler = async () => {
        await logout();
        navigate('/')
    }
  

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <NavLink to="/">
          <IoGameController className={styles.logo} />
        </NavLink>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="popular"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="favorites"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Favorites
              </NavLink>
            </li>
            <li>
          
                        <Nav.Link style={{ color: 'white', }} disabled>{user !== null ? user.email : ""}</Nav.Link>
                        {user !== null ?
                            <Button size='lg' variant='danger' onClick={logoutHandler}><LoginIcon style={{ marginRight: '0.6rem' }} />Logout</Button> :
                            <Button size='lg'><LoginIcon style={{ marginRight: '0.6rem' }} /><Link style={{ textDecoration: 'none', color: 'white' }} to="/login">Login</Link></Button>}
           
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
