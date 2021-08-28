import styles from './NavBar.module.scss';
import {NavLink} from "react-router-dom";
import {useAuthContext} from "../../../context/auth";
import Button from "../Button/Button";

const NavBar = () => {
    const {auth, logout} = useAuthContext();

    const handleLogout = () => {
        logout();
        localStorage.removeItem('auth');
        localStorage.removeItem('name');
    }

    return (
        <div className={styles.header}>
            {
                auth.value ? (
                    <>
                        <NavLink className={styles.item}
                                 activeClassName={styles.active}
                                 to="/posts">
                            Posts
                        </NavLink>
                        <NavLink className={styles.item}
                                 activeClassName={styles.active}
                                 to="/about">
                            About
                        </NavLink>
                        <div style={{marginLeft: "auto", marginRight: 20}}>
                            Hello, {auth.name}
                        </div>
                        <Button onClick={handleLogout}>
                            Logout
                        </Button>
                    </>
                ) : (
                    <NavLink className={styles.item}
                             activeClassName={styles.active}
                             to="/login">
                        Login
                    </NavLink>
                )
            }
        </div>
    )
}

export default NavBar;