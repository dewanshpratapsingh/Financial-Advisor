import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = ({ title }) => {
    return (
        <footer className={styles.footer}>
            <p className={styles.title}>{title}</p>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                    <li><Link to="/terms">Terms of Service</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </footer>
    );
};

Footer.propTypes = {
    title: PropTypes.string.isRequired,
};

Footer.defaultProps = {
    title: "© 2025 My Website",
};

export default Footer;
