import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary my-navbar">
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <a
                        className={
                            window.location.pathname === "/"
                                ? "nav-link active"
                                : "nav-link"
                        }
                        href="/">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={
                            window.location.pathname === "/profile"
                                ? "nav-link active"
                                : "nav-link"
                        }
                        href="/profile">
                        Profile
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={
                            window.location.pathname === "/friends"
                                ? "nav-link active"
                                : "nav-link"
                        }
                        href="/friends">
                        Friends
                    </a>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a
                            className={
                                window.location.pathname === "/sing-up"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                            href="/sing-up">
                            {" "}
                            Sign Up
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className={
                                window.location.pathname === "/sign-in"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                            href="/sign-in">
                            <i className="fa fa-sign-in" aria-hidden="true" />{" "}
                            Sign in
                        </a>
                    </li>
                </ul>
            </form>
        </div>
    </nav>
);

export default Navbar;
