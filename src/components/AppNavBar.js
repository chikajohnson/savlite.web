import React  from "react";

const AppNavBar = (props) => {
    return (
        <React.Fragment>
            <nav className="topnav navbar navbar-expand shadow navbar-light bg-white" id="sidenavAccordion">
                <a className="navbar-brand d-none d-sm-block p-2 text-center color-cust-navy" href="index.html">Savlite Admin</a><button className="btn btn-icon btn-transparent-dark order-1 order-lg-0 mr-lg-2" id="sidebarToggle" href="#"><i data-feather="menu"></i></button>
                <ul className="navbar-nav align-items-center ml-auto">
                    <li className="nav-item dropdown no-caret mr-3">
                        <div className="dropdown-menu dropdown-menu-right py-0 o-hidden mr-n15 mr-lg-0 animated--fade-in-up" aria-labelledby="navbarDropdownDocs">
                            <a className="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-admin-pro" target="_blank" rel="noopener noreferrer" 
                            ><div className="icon-stack bg-primary-soft text-primary mr-4"><i data-feather="book"></i></div>
                                <div>
                                    <div className="small text-gray-500">Documentation</div>
                                Usage instructions and reference
                            </div></a
                            >
                            <div className="dropdown-divider m-0"></div>
                            <a className="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-admin-pro/components" target="_blank" rel="noopener noreferrer" 
                            ><div className="icon-stack bg-primary-soft text-primary mr-4"><i data-feather="code"></i></div>
                                <div>
                                    <div className="small text-gray-500">Components</div>
                                Code snippets and reference
                            </div></a
                            >
                            <div className="dropdown-divider m-0"></div>
                            <a className="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-admin-pro/changelog" target="_blank" rel="noopener noreferrer" 
                            ><div className="icon-stack bg-primary-soft text-primary mr-4"><i data-feather="file-text"></i></div>
                                <div>
                                    <div className="small text-gray-500">Changelog</div>
                                Updates and changes
                            </div></a
                            >
                        </div>
                    </li>
                    <li className="nav-item dropdown no-caret mr-3 dropdown-notifications">
                        <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownAlerts" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="bell"></i></a>
                        <div className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownAlerts">
                            <h6 className="dropdown-header dropdown-notifications-header"><i className="mr-2" data-feather="bell"></i>Alerts Center</h6>
                            <a className="dropdown-item dropdown-notifications-item" href="#!"
                            ><div className="dropdown-notifications-item-icon bg-cust-warm"><i data-feather="activity"></i></div>
                                <div className="dropdown-notifications-item-content">
                                    <div className="dropdown-notifications-item-content-details">December 29, 2019</div>
                                    <div className="dropdown-notifications-item-content-text">This is an alert message. It&apos;s nothing serious, but it requires your attention.</div>
                                </div></a
                            ><a className="dropdown-item dropdown-notifications-item" href="#!"
                            ><div className="dropdown-notifications-item-icon bg-info"><i data-feather="bar-chart"></i></div>
                                <div className="dropdown-notifications-item-content">
                                    <div className="dropdown-notifications-item-content-details">December 22, 2019</div>
                                    <div className="dropdown-notifications-item-content-text">A new monthly report is ready. Click here to view!</div>
                                </div></a
                            ><a className="dropdown-item dropdown-notifications-item" href="#!"
                            ><div className="dropdown-notifications-item-icon bg-danger"><i className="fas fa-exclamation-triangle"></i></div>
                                <div className="dropdown-notifications-item-content">
                                    <div className="dropdown-notifications-item-content-details">December 8, 2019</div>
                                    <div className="dropdown-notifications-item-content-text">Critical system failure, systems shutting down.</div>
                                </div></a
                            ><a className="dropdown-item dropdown-notifications-item" href="#!"
                            ><div className="dropdown-notifications-item-icon bg-success"><i data-feather="user-plus"></i></div>
                                <div className="dropdown-notifications-item-content">
                                    <div className="dropdown-notifications-item-content-details">December 2, 2019</div>
                                    <div className="dropdown-notifications-item-content-text">New user request. Woody has requested access to the organization.</div>
                                </div></a
                            ><a className="dropdown-item dropdown-notifications-footer" href="#!">View All Alerts</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown no-caret mr-3 dropdown-notifications">
                        <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownMessages" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="mail"></i></a>
                        <div className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownMessages">
                            <h6 className="dropdown-header dropdown-notifications-header"><i className="mr-2" data-feather="mail"></i>Message Center</h6>
                            <a className="dropdown-item dropdown-notifications-item" href="#!"
                            ><img className="dropdown-notifications-item-img" src="" alt="" />
                                <div className="dropdown-notifications-item-content">
                                    <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                    <div className="dropdown-notifications-item-content-details">Emily Fowler &#xB7; 58m</div>
                                </div></a
                            ><a className="dropdown-item dropdown-notifications-item" href="#!"
                            ><img className="dropdown-notifications-item-img" src="" alt="" />
                                <div className="dropdown-notifications-item-content">
                                    <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                    <div className="dropdown-notifications-item-content-details">Diane Chambers &#xB7; 2d</div>
                                </div></a
                            ><a className="dropdown-item dropdown-notifications-footer" href="#!">Read All Messages</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown no-caret mr-3 dropdown-user">
                        <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img className="img-fluid" src="assets/img/avatar.jpg" alt="" /></a>
                        <div className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownUserImage">
                            <h6 className="dropdown-header d-flex align-items-center">
                                <img className="dropdown-user-img" src="assets/img/avatar.jpg" alt="" />
                                <div className="dropdown-user-details">
                                    <div className="dropdown-user-details-name">Valerie Luna</div>
                                    <div className="dropdown-user-details-email">vluna@aol.com</div>
                                </div>
                            </h6>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#!"
                            ><div className="dropdown-item-icon"><i data-feather="settings"></i></div>
                            Account</a
                            ><a className="dropdown-item" href="#!"
                            ><div className="dropdown-item-icon"><i data-feather="log-out"></i></div>
                            Logout</a
                            >
                        </div>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
};


export default AppNavBar;