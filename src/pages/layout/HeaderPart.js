/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AdminPicture from '../../assets/images/admin.jpg';

function HeaderPart() {
    return (
        <>
            <header class="pc-header">
                <div class="header-wrapper">
                    {/* Welcome Message */}
                    <div class="mr-auto pc-mob-drp">
                        <ul class="list-unstyled" style={{ flexDirection: 'column' }}>
                            <li style={{ paddingTop: '20px' }}>
                                <span style={{ fontWeight: 'bold', fontSize: 20 }}>
                                    Welcome Back, <span style={{ color: '#55bed2' }}>Ady</span>
                                </span>
                            </li>
                            <li>
                                <span style={{ color: '#adb5bd', fontSize: 13 }}>Here are your real time updates.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Side */}
                    <div class="ml-auto" style={{ marginTop: '10px' }}>
                        <ul class="list-unstyled">
                            <li class="dropdown pc-h-item">
                                <a class="pc-head-link dropdown-toggle arrow-none mr-0" style={{ background: '#3b3e64', borderRadius: '7px', fontWeight: 'bold', marginRight: 35 }} data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    <i class="material-icons-two-tone" style={{ color: '#fff', backgroundColor: '#fff', fontSize: 14, marginRight: '100px', lineHeight: 1.3 }}>
                                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="xs" />&nbsp;&nbsp;Search
                                    </i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right pc-h-dropdown drp-search">
                                    <form class="px-3">
                                        <div class="form-group mb-0 d-flex align-items-center">
                                            <i data-feather="search"></i>
                                            <input type="search" class="form-control border-0 shadow-none" placeholder="Search here. . ." />
                                        </div>
                                    </form>
                                </div>
                                <a class="pc-head-link dropdown-toggle arrow-none mr-0" style={{ background: '#55bed5', borderRadius: '20px', fontWeight: 'bold' }} href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    <i class="material-icons-two-tone" style={{ color: '#fff', backgroundColor: '#fff', fontSize: 16, lineHeight: 1.3 }}>
                                        <FontAwesomeIcon icon="fa-solid fa-bell" color="#2f2c53" />
                                    </i>
                                </a>
                            </li>

                            {/* Profile Picture Part */}
                            <li class="dropdown pc-h-item">
                                <div style={{ borderLeft: '1px solid #6c757d', height: '80%' }} />
                                <a class="pc-head-link dropdown-toggle arrow-none mr-0" style={{ marginLeft: '20px', marginRight: '-15px' }} data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    <img src={AdminPicture} alt="user-image" class="user-avtar" />
                                    <span>
                                        <span class="user-name">Ady Syamsuri</span>
                                        <span class="user-desc">Product Manager</span>
                                    </span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right pc-h-dropdown">
                                    <div class=" dropdown-header">
                                        <h5 class="text-overflow m-0"><span class="badge bg-light-primary">Account</span></h5>
                                    </div>
                                    <a href="/" class="dropdown-item">
                                        <i class="material-icons-two-tone"><FontAwesomeIcon icon="fa-solid fa-right-from-bracket" size="xs" /></i>
                                        <span>Logout</span>
                                    </a>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderPart;
