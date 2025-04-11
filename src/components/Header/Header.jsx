import React from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import styles from "./Header.module.css"
const Header = ({title}) => {
    return(
        <header className={styles.header}>
            <h1>{title}</h1>
            <nav>
                <ul className={styles.navList}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
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


