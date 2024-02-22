import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from "../../assets/images/logo.png";
// import LogoSM from "../../assets/images/logo-sm.svg";

function NavBar() {
    return (
        <>
            {/* Navigation start */}
            <nav class="pc-sidebar ">
                <div class="navbar-wrapper">
                    <div class="m-header">
                        <a href="/" class="b-brand">
                            <img src={Logo} alt="" class="logo logo-lg" width="200" />
                            {/* <img src={LogoSM} alt="" class="logo logo-sm" /> */}
                        </a>
                    </div>

                    <div class="navbar-content">
                        <ul class="pc-navbar">
                            <li class="pc-item pc-caption">
                                <label>General</label>
                            </li>
                            <li class="pc-item active">
                                <a href="/" class="pc-link ">
                                    <span class="pc-micon">
                                        <i class="material-icons-two-tone">
                                            <FontAwesomeIcon icon="fa-solid fa-house" size="xs" color="#55bed2" />
                                        </i>
                                    </span>
                                    <span class="pc-mtext">Dashboard</span>
                                </a>
                            </li>
                            <li class="pc-item pc-hasmenu">
                                <a href="#!" class="pc-link">
                                    <span class="pc-micon">
                                        <i class="material-icons-two-tone">
                                            <FontAwesomeIcon icon="fa-solid fa-cubes" size="xs" />
                                        </i>
                                    </span>
                                    <span class="pc-mtext">Inventory</span>
                                    <span class="pc-arrow"><i data-feather="chevron-right"></i></span>
                                </a>
                                <ul class="pc-submenu">
                                    <li class="pc-item"><a class="pc-link" href="/" target="_blank">Menu 1</a></li>
                                    <li class="pc-item"><a class="pc-link" href="/" target="_blank">Menu 2</a></li>
                                </ul>
                            </li>
                            <li class="pc-item pc-hasmenu">
                                <a href="#!" class="pc-link">
                                    <span class="pc-micon">
                                        <i class="material-icons-two-tone">
                                            <FontAwesomeIcon icon="fa-solid fa-list-check" size="xs" />
                                        </i>
                                    </span>
                                    <span class="pc-mtext">Planning</span>
                                    <span class="pc-arrow"><i data-feather="chevron-right"></i></span>
                                </a>
                                <ul class="pc-submenu">
                                    <li class="pc-item"><a class="pc-link" href="/" target="_blank">Menu 1</a></li>
                                    <li class="pc-item"><a class="pc-link" href="/" target="_blank">Menu 2</a></li>
                                </ul>
                            </li>
                            <li class="pc-item pc-hasmenu">
                                <a href="#!" class="pc-link">
                                    <span class="pc-micon">
                                        <i class="material-icons-two-tone">
                                            <FontAwesomeIcon icon="fa-solid fa-dollar-sign" size="xs" />
                                        </i>
                                    </span>
                                    <span class="pc-mtext">&nbsp;&nbsp;Cost Tracking</span>
                                    <span class="pc-arrow"><i data-feather="chevron-right"></i></span>
                                </a>
                                <ul class="pc-submenu">
                                    <li class="pc-item"><a class="pc-link" href="/" target="_blank">Menu 1</a></li>
                                    <li class="pc-item"><a class="pc-link" href="/" target="_blank">Menu 2</a></li>
                                </ul>
                            </li>
                            <li class="pc-item pc-hasmenu">
                                <a href="#!" class="pc-link">
                                    <span class="pc-micon">
                                        <i class="material-icons-two-tone">
                                            <FontAwesomeIcon icon="fa-solid fa-chart-simple" size="xs" />
                                        </i>
                                    </span>
                                    <span class="pc-mtext">&nbsp;&nbsp;Report</span>
                                    <span class="pc-arrow"><i data-feather="chevron-right"></i></span>
                                </a>
                                <ul class="pc-submenu">
                                    <li class="pc-item"><a class="pc-link" href="/" target="_blank">Menu 1</a></li>
                                    <li class="pc-item"><a class="pc-link" href="/" target="_blank">Menu 2</a></li>
                                </ul>
                            </li>

                            <li class="pc-item pc-caption">
                                <label>Support</label>
                                <span>Assistance & Helping Hand</span>
                            </li>
                            <li class="pc-item">
                                <a href="#!" class="pc-link">
                                    <span class="pc-micon">
                                        <i class="material-icons-two-tone">
                                            <FontAwesomeIcon icon="fa-solid fa-circle-info" size="xs" />
                                        </i>
                                    </span>
                                    <span class="pc-mtext">Help</span>
                                </a>
                            </li>
                            <li class="pc-item">
                                <a href="#!" class="pc-link">
                                    <span class="pc-micon">
                                        <i class="material-icons-two-tone">
                                            <FontAwesomeIcon icon="fa-solid fa-gear" size="xs" />
                                        </i>
                                    </span>
                                    <span class="pc-mtext">Settings</span>
                                </a>
                            </li>
                            <li class="pc-item">
                                <a href="#!" class="pc-link">
                                    <span class="pc-micon">
                                        <i class="material-icons-two-tone">
                                            <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" size="xs" />
                                        </i>
                                    </span>
                                    <span class="pc-mtext">Log Out</span>
                                </a>
                            </li>

                            <li class="pc-item pc-caption">
                                <label>Other</label>
                                <span>Extra more things</span>
                            </li>
                            <li class="pc-item pc-hasmenu">
                                <a href="#!" class="pc-link">
                                    <span class="pc-micon">
                                        <i class="material-icons-two-tone">
                                            <FontAwesomeIcon icon="fa-solid fa-bars" size="xs" />
                                        </i>
                                    </span>
                                    <span class="pc-mtext">Dropdown</span>
                                    <span class="pc-arrow"><i data-feather="chevron-right"></i></span>
                                </a>
                                <ul class="pc-submenu">
                                    <li class="pc-item">
                                        <a class="pc-link" href="#!">Menu Level 2.1</a>
                                    </li>
                                    <li class="pc-item pc-hasmenu">
                                        <a href="#!" class="pc-link">
                                            Menu level 2.2<span class="pc-arrow"><i data-feather="chevron-right"></i></span>
                                        </a>
                                        <ul class="pc-submenu">
                                            <li class="pc-item pc-hasmenu">
                                                <a href="#!" class="pc-link">
                                                    Menu level 3.1<span class="pc-arrow"><i data-feather="chevron-right"></i></span>
                                                </a>
                                                <ul class="pc-submenu">
                                                    <li class="pc-item"><a class="pc-link" href="#!">Menu level 4.1</a></li>
                                                    <li class="pc-item"><a class="pc-link" href="#!">Menu level 4.2</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* Add media sosial button */}
                        </ul>
                    </div>

                </div>
            </nav>
            {/* Navigation end */}
        </>
    );
};

export default NavBar;
