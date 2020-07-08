import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import AppSideBar from '../AppSideBar';
import AppFooter from '../AppFooter';
import agent from '../../agent';

import './User.css';

const ViewUser = (props) => {

    const userId = props.match.params.id;

    const [user, setUser] = useState({});

    useEffect(() => {
        agent.User.view(userId)
            .then(resp => {
                setUser(resp);
            });
    }, [])

    return (
        <React.Fragment>
            <div id="layoutSidenav">
                <AppSideBar />
                <div id="layoutSidenav_content">
                    <main>
            <div className="page-header page-header-light bg-white shadow">
                <div className="container-fluid">
                    <div className="page-header-content py-4">
                        <ol className="breadcrumb mt-4 mb-0 font-weight-bold h5">
                            <li className="breadcrumb-item color-cust-navy">
                                <Link to="/users">
                                    <span className="color-cust-navy">Users</span>
                                </Link>
                            </li>
                            <li className="breadcrumb-item active">View</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="container-fluid mt-4">
                <div class="card mb-4">
                    <div class="card-header py-2 d-flex justify-content-between bg-cust-navy">
                        <span className="h4 color-cust-warm">View  User</span>
                        <Link to="/users">
                            <button type="button" className="btn bg-cust-warm pull-right font-weight-bold">&nbsp;Back&nbsp;</button>
                        </Link>
                    </div>
                    <div class="card-body">
                        <form>
                            <div className="form-row">
                                <div className="col-md-12">
                                    <div className="form-group font-weight-bolder"><label className="mb-2" for="fulname">Full name</label>
                                        <input className="form-control py-4" id="fullname" 
                                       value={user.fullName}  disabled type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-12">
                                    <div className="form-group font-weight-bolder"><label className="mb-2" for="fulname">User Name</label>
                                        <input className="form-control py-4" id="fullname" disabled type="text" 
                                        value={user.userName}  placeholder="Enter User fullname" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12 col-md-6">
                                    <div className="form-group font-weight-bolder"><label className="mb-2" for="inputPassword">Email</label>
                                        <input className="form-control py-4" disabled id="email" type="email" 
                                        value={user.email}  placeholder="Enter user email" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group font-weight-bolder"><label className="mb-2" for="phone">Phone Number</label>
                                        <input className="form-control py-4" disabled id="phone" type="text" 
                                        value={user.phoneNumber}  placeholder="Enter phone number" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group font-weight-bolder"><label className="mb-2" for="address">Address</label>
                                <textarea className="form-control py-4" disabled id="address" value={user.address}
                                placeholder="Enter address"></textarea>
                            </div>
                            <div className="form-row">
                                <div className="col-12 col-md-6">
                                    <div className="form-group font-weight-bolder"><label className="mb-2" for="rate">Role</label>
                                        <input className="form-control py-4" disabled id="role" type="text" value={user.role} />
                                    </div>
                                </div>
                            </div>
                        </form>

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

export default ViewUser;