import React from "react";
import NavBar from "../components/NavBar";
import styles from "./ErrorPage.module.css";

export default function ErrorPage() {
    return (
        <div className={styles.root}>
            <NavBar />
            <h1 className={styles.main}>Oops!<br /><span className={styles.white}>Something Went Wrong. Go Back And Try Again...</span></h1>
        </div>
    )
} 