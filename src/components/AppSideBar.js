import React from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";

import { getCurrentUser, logout } from '../actions';

const AppSideBar = (props) => {
    const dispatch = useDispatch();
    const user = getCurrentUser();
    const logoutUser = () => {
        dispatch(logout());
    }

    return (
        <React.Fragment>
            <div id="layoutSidenav_nav">
                <nav className="sidenav shadow-right sidenav-dark bg-cust-navy">
                    <div className="sidenav-menu">
                        <div className="nav accordion pt-4 mt-4 font-weight-normal" id="accordionSidenav">
                            {/* dashboard */}
                            <NavLink className="nav-link collapsed"  to="/dashboard" data-toggle="collapse" data-target="#collapseDashboards"
                                aria-expanded="false" aria-controls="collapseDashboards"  activeClassName="selectedLink">
                                <div className="nav-link-icon"><i data-feather="activity"></i></div>
                                <span className="color-cust-warm" >Dashboards</span>
                                <div className="sidenav-collapse-arrow"></div>
                            </NavLink>

                            {/* users */}
                            {
                                ['IsSuperAdmin','IsAdministrator', 'IsCashier'].includes(user?.role) &&
                                <NavLink className="nav-link collapsed" to="/users"
                                ><div className="nav-link-icon"><i data-feather="layout"></i></div>
                                    <span className="color-cust-warm">Users</span>
                                    <div className="sidenav-collapse-arrow"></div></NavLink>
                            }


                            {/* Customers */}
                            <NavLink className="nav-link collapsed"  to="/customers"
                            ><div className="nav-link-icon"><i data-feather="package"></i></div>
                                <span className="color-cust-warm">Customers</span>
                                <div className="sidenav-collapse-arrow"></div></NavLink>

                            {/* Charges */}
                            <NavLink className="nav-link collapsed"  to="/charges"
                            ><div className="nav-link-icon"><i data-feather="tool"></i></div>
                                <span className="color-cust-warm">Charges</span>
                                <div className="sidenav-collapse-arrow"></div></NavLink>

                            {/* Cards */}
                            <NavLink className="nav-link collapsed"  to="/cards"
                            ><div className="nav-link-icon"><i data-feather="tool"></i></div>
                                <span className="color-cust-warm">Cards</span>
                                <div className="sidenav-collapse-arrow"></div></NavLink>

                            {/* transactions */}
                            <NavLink className="nav-link collapsed"  to="/transactions" data-toggle="collapse" data-target="#collapseTransaction" aria-expanded="false" aria-controls="collapseTransaction"
                            ><div className="nav-link-icon"><i data-feather="book-open"></i></div>
                                <span className="color-cust-warm">Transactions</span>
                                <div className="sidenav-collapse-arrow"><i className="fas fa-plus-circle color-cust-warm"></i></div></NavLink>
                            <div className="collapse" id="collapseTransaction" data-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav accordion font-weight-bold" id="accordionSidenavPagesMenu">
                                    <NavLink className="nav-link"  to="/transactions/credit">Post Credit</NavLink>
                                    <NavLink className="nav-link"  to="/transactions/debit">Post Debit</NavLink>
                                    <NavLink className="nav-link"  to="/transactions">View Transactions</NavLink>
                                </nav>
                            </div>

                            {/*  reports*/}
                            <NavLink className="nav-link collapsed"  to="reports" data-toggle="collapse" data-target="#collapseReports" aria-expanded="false" aria-controls="collapseReports"
                            ><div className="nav-link-icon"><i data-feather="book-open"></i></div>
                                <span className="color-cust-warm">Reports</span>
                                <div className="sidenav-collapse-arrow"><i className="fas fa-plus-circle color-cust-warm"></i></div></NavLink>
                            <div className="collapse" id="collapseReports" data-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav accordion font-weight-bold" id="accordionSidenavPagesMenu">
                                    <NavLink className="nav-link" to="blank.html"> Customer History</NavLink>
                                    <NavLink className="nav-link" to="blank.html"> Customer Account Statement</NavLink>
                                    <NavLink className="nav-link" to="blank.html">Transactions</NavLink>
                                    <NavLink className="nav-link" to="cards">Card List</NavLink>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="sidenav-footer">
                        <div className="sidenav-footer-content color-cust-warm text-center">
                            <div className="sidenav-footer-title font-weight-bolder py-2">{user.username} ({user.role})</div>
                            <div className="sidenav-footer-title font-weight-bolder">
                                <button className="btn btn-sm bg-white mx-2 py-0" onClick={() => logoutUser()}>logout</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
}

export default AppSideBar;