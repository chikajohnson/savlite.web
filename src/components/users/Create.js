import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useForm from 'react-hook-form';

import FormErrors from '../FormErrors';
import AppSideBar from '../AppSideBar';
import AppFooter from '../AppFooter';

import './User.css';
import { createUser } from '../../actions';

const CreateUser = (props) => {

    const dispatch = useDispatch();

    const error = useSelector(state => state.common.error);
    const isLoading = useSelector(state => state.common.fetching);
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = data => {
        dispatch(createUser(data));
    }

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
                                        <li className="breadcrumb-item active">Create</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid mt-4">
                            <div className="card mb-4">
                                <div className="card-header py-2 d-flex justify-content-between bg-cust-navy">
                                    <span className="h4 color-cust-warm">Create User</span>
                                    <Link to="/users">
                                        <button type="button" className="btn bg-cust-warm pull-right font-weight-bold">&nbsp;Back&nbsp;</button>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <FormErrors error={error} />
                                    <form autoComplete="false" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-row">
                                            <div className="col-md-12">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="fullname">Full Name</label>
                                                    <span className=" font-weight-bold text-danger small">{errors.fullName && "* "}</span>
                                                    <input className="form-control py-4" name="fullname" id="fullname"
                                                        type="text" placeholder="Enter fullname" ref={register({ required: true })} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="userName">User Name</label>
                                                    <span className=" font-weight-bold text-danger small">{errors.userName && "* "}</span>
                                                    <input className="form-control py-4" name="userName" id="fullname"
                                                        type="text" placeholder="Enter User name" ref={register({ required: true })} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="password">Password</label>
                                                    <span className=" font-weight-bold text-danger small">{errors.password && "* "}</span>
                                                    <input className="form-control py-4" name="password" id="password"
                                                        type="password" placeholder="Enter password" ref={register({ required: true })} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-12 col-md-6">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="email">Email</label>
                                                    <span className="font-weight-bold text-danger small">{errors.email && " *"}</span>
                                                    <input className="form-control py-4" name="email" id="email"
                                                        type="email" placeholder="Enter user email" ref={register({ required: true })} />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="phone">Phone Number</label>
                                                    <span className="font-weight-bold text-danger small">{errors.phoneNumber && " *"}</span>
                                                    <input className="form-control py-4" name="phoneNumber" id="phone"
                                                        type="text" placeholder="Enter phone number" ref={register({ required: true })} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="address">Address</label>
                                            <span className="font-weight-bold text-danger small">{errors.address && " *"}</span>
                                            <textarea className="form-control py-4" name="address" id="address"
                                                placeholder="Enter address" ref={register({ required: true })}></textarea>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-12">
                                                <div class="form-group font-weight-bolder">
                                                    <label for="userrole">User Role</label>
                                                    <span className="font-weight-bold text-danger small">{errors.role && " *"}</span>
                                                    <select class="form-control" id="userrole" name="role" ref={register({ required: true })}>
                                                        <option value="">Select user role</option>
                                                        <option value="accountant">Accountant</option>
                                                        <option value="cashier">Cashier</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2 mb-0 float-right">
                                            <button type="submit" className="btn bg-cust-navy text-light" disabled={isLoading}>
                                                {isLoading ? 'creating' : 'Create User'}
                                            </button>
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

export default CreateUser;