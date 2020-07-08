import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import useForm from 'react-hook-form';

import './Login.css';
import AppAlert from '../AppAlert';
import { loginUser } from '../../actions';


const Login = () => {
    const dispatch = useDispatch();

    const error = useSelector(state => state.common.error)
    const isLoading = useSelector(state => state.common.fetching)

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = data => {
        const { username, password } = data
        dispatch(loginUser(username, password));       
    }

    return (
        <React.Fragment>
            <div id="layoutAuthentication" className="Login bg-cust-navy">
                <div id="layoutAuthentication_content">
                    <main className="py-4">
                        <p className="h1 py-4 text-white text-center">Savlite</p>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                {error && <AppAlert isError={true} content={error} />}
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header justify-content-center bg-cust-warm bg-cust-warm"><h3 className="font-weight-normal my-4">Login</h3></div>
                                        <div className="card-body">
                                            <form  autoComplete="false"  onSubmit={handleSubmit(onSubmit)}>
                                                <div className="form-group font-weight-bolder">
                                                    <label className="mb-3" for="username">Email</label>
                                                    <span className="float-right text-danger small">{errors.username && "username is required"}</span>
                                                    <input className="form-control py-4" name="username" id="username" type="text" placeholder="Enter username" ref={register({ required: true })} />
                                                </div>
                                                <div className="form-group font-weight-bolder" >
                                                    <label className="mb-3" for="inputPassword">Password</label>
                                                    <span className="float-right text-danger small">{errors.password && "username is required"}</span>
                                                    <input className="form-control py-4" name="password" id="inputPassword" type="password" placeholder="Enter password" ref={register({ required: true })} />
                                                </div>

                                                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                    <a className="font-weight-bold" href="password-basic.html">Forgot Password?</a>
                                                    <button className="btn bg-cust-navy text-light px-3" type="submit" disabled={isLoading}>
                                                        {isLoading ? 'Logging in' : 'Login'}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center py-4 bg-cust-warm">
                                            {/* <div className="font-weight-bold text-dark"><a href="register-basic.html">Need an account? Sign up!</a></div> */}
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

export default Login;