import React from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';

import './User.css';
import AppContentHOC from '../AppContentHOC';
// import { createUser } from '../../actions';

const DeleteUser = (props) => {
    const isLoading = useSelector(state => state.common.fetching)


    return (
        <React.Fragment>
            <div className="page-header page-header-light bg-white shadow">
                <div className="container-fluid">
                    <div className="page-header-content py-4">
                        <ol className="breadcrumb mt-4 mb-0 font-weight-bold h5">
                            <li className="breadcrumb-item color-cust-navy">
                                <Link to="/customers">
                                    <span className="color-cust-navy">Users</span>
                                </Link>
                            </li>
                            <li className="breadcrumb-item active">Delete</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="container-fluid mt-4">
                <div class="card mb-4">
                    <div class="card-header py-2 d-flex justify-content-between bg-cust-navy">
                        <span className="h4 color-cust-warm">Delete  User</span>
                        <button type="button" class="btn bg-cust-warm pull-right font-weight-bold">&nbsp;Back&nbsp;</button>
                    </div>
                    <div class="card-body">
                        <form>
                            <div className="form-row">
                                <div className="col-md-12">
                                    <div className="form-group font-weight-bolder"><label className="mb-2" for="fulname">Full name</label>
                                        <input className="form-control py-4" id="fullname" disabled type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-12">
                                    <div className="form-group font-weight-bolder"><label className="mb-2" for="fulname">User Name</label>
                                        <input className="form-control py-4" id="fullname" disabled type="text" placeholder="Enter User fullname" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12 col-md-6">
                                    <div className="form-group font-weight-bolder"><label className="mb-2" for="inputPassword">Email</label>
                                        <input className="form-control py-4" disabled id="email" type="email" placeholder="Enter user email" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group font-weight-bolder"><label className="mb-2" for="phone">Phone Number</label>
                                        <input className="form-control py-4" disabled id="phone" type="text" placeholder="Enter phone number" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group font-weight-bolder"><label className="mb-2" for="address">Address</label>
                                <textarea className="form-control py-4" disabled id="address" placeholder="Enter address"></textarea>
                            </div>
                            <div className="form-row">
                                <div className="col-12 col-md-6">
                                    <div className="form-group font-weight-bolder"><label className="mb-2" for="rate">Role</label>
                                        <input className="form-control py-4" disabled id="role" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 mb-0 float-right">
                                <button type="submit" className="btn bg-danger text-light" disabled={isLoading}>
                                    {isLoading ? 'deleting' : 'Delete User'}
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default DeleteUser;