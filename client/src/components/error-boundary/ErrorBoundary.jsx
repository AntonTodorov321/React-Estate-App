import { Component } from "react";
import { Link } from "react-router-dom";

import styles from './ErrorBoundary.module.css';
import { Path } from "../../paths";

export default class ErrorBoundary extends Component {
    constructor() {
        super();

        this.state = {
            hasError: false,
        };
    };

    static getDerivedStateFromError(err) {
        console.log("getDerivedStateFromError");

        return {
            hasError: true
        };
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className={styles.container}>
                    <h1 className={styles.title}>Error 404</h1>
                    <p className={styles.message}>The page you are looking for could not be found.</p>
                    <Link to={Path.Home} className={styles.homeLink}>Go to Homepage</Link>
                </div>
            );
        };

        return this.props.children;
    };
};