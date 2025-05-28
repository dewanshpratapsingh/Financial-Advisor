import React from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import styles from "./Header.module.css"
const Header = ({title}) => {
    return(
        <header className={styles.header}>
            <p className={styles.title}>{title}</p>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><Link to="/">Dashboards</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </nav>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

Header.defaultProps = {
    title: "My Website",
};

export default Header;


