import React from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';

const Register = () => {

    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <div id="layoutAuthentication" className="Login bg-cust-navy">
                <div id="layoutAuthentication_content">
                    <main className="py-3">
                        <p className="h1 py-3 text-white text-center">Savlite</p>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7">
                                    <div className="card shadow-lg border-0 rounded-lg mt-4">
                                        <div className="card-header justify-content-center bg-cust-warm color-cust-navy"><h3 className="font-weight-normal my-3">Create User Account</h3></div>
                                        <div className="card-body">
                                            <form>
                                                <div className="form-row">
                                                    <div className="col-md-12">
                                                        <div className="form-group font-weight-bolder"><label className="mb-2" for="fulname">Full Name</label>
                                                            <input className="form-control py-4" id="fullname" type="text" placeholder="Enter user fullname" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-md-12">
                                                        <div className="form-group font-weight-bolder"><label className="mb-2" for="username">User Name</label>
                                                            <input className="form-control py-4" id="username" type="text" placeholder="Enter username" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-12 col-md-6">
                                                        <div className="form-group font-weight-bolder"><label className="mb-2" for="inputPassword">Email</label>
                                                            <input className="form-control py-4" id="email" type="email" placeholder="Enter email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <div className="form-group font-weight-bolder"><label className="mb-2" for="pghone">Phone Number</label>
                                                            <input className="form-control py-4" id="phone" type="text" placeholder="Enter phone number" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group font-weight-bolder"><label className="mb-2" for="address">Address</label>
                                                    <textarea className="form-control py-4" id="address" placeholder="Enter address"></textarea>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-md-12">
                                                        <div class="form-group font-weight-bolder">
                                                            <label for="userrole">User Role</label><select class="form-control" id="userrole">
                                                                <option>Select user role</option>
                                                                <option>Accountant</option>
                                                                <option>Cashier</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-2 mb-0 float-right"><a className="btn bg-cust-navy text-light" href="login-basic.html">Create Account</a></div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center bg-cust-light py-4">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div id="layoutAuthentication_footer">
                    <footer className="footer mt-auto footer-dark">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 font-weight-normal text-center">Copyright &#xA9; Savlite 2020</div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Register;