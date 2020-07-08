import React from 'react';
import './Dashboard.css';
import { useDispatch} from 'react-redux';

import AppSideBar from '../AppSideBar';
import AppFooter from '../AppFooter';
import AppAlert from '../AppAlert';

const Dashboard = () => {

    const dispatch = useDispatch();
    
    return (
        <React.Fragment>
            <div id="layoutSidenav">
                <AppSideBar />
                 <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid mt-5">
                        {/* <AppAlert isWarning={true} content ={'Success content'} /> */}
                            <div className="d-flex justify-content-between align-items-sm-center flex-column flex-sm-row mb-4">
                                <div className="mr-4 mb-3 mb-sm-0">
                                    <h3 className="mb-3 color-cust-navy">Admin Dashboard</h3>
                                    <div className="small font-weight-bold"><span className=" text-primary">Friday</span> &#xB7; {Date()} &#xB7;</div>
                                </div>
                                <div className="dropdown">
                                    <a className="btn  btn-sm font-weight-500 line-height-normal py-2 dropdown-toggle bg-cust-navy text-light" id="dropdownMenuLink" href="/" role="button" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false"><i className="text-primary mr-2" data-feather="calendar"></i>Jan - Feb 2020</a>
                                    <div className="dropdown-menu dropdown-menu-sm-right animated--fade-in" aria-labelledby="dropdownMenuLink">
                                        <a className="dropdown-item" href="#!">Last 30 days</a><a className="dropdown-item" href="#!">Last week</a><a className="dropdown-item" href="#!">This year</a><a className="dropdown-item" href="#!">Yesterday</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#!">Custom</a>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </main>
                    <AppFooter />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dashboard;