import React from "react";
import PropTypes from "prop-types"
import styles from "./Header.module.css"
const Header = ({title}) => {
    return(
        <header className={styles.header}>
            <h1>{title}</h1>
            <nav>
                <ul className={styles.navList}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
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


