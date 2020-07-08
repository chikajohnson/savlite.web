import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useForm from 'react-hook-form';

import FormErrors from '../FormErrors';
import AppSideBar from '../AppSideBar';
import AppFooter from '../AppFooter';
import AppAlert from '../AppAlert';

import './Customers.css';
import { createCustomer } from '../../actions';

const CreateCustomer = (props) => {

    const dispatch = useDispatch();

    const error = useSelector(state => state.common.error);
    const isLoading = useSelector(state => state.common.fetching);
    const { register, errors, handleSubmit } = useForm();
    
    const onSubmit = data => {
        dispatch(createCustomer(data));
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
                                            <Link to="/customers">
                                                <span className="color-cust-navy">Customers</span>
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
                                    <span className="h4 color-cust-warm">Create Customer</span>
                                    <Link to="/customers">
                                        <button type="button" className="btn bg-cust-warm pull-right font-weight-bold">&nbsp;Back&nbsp;</button>
                                    </Link>
                                </div>
                                <div className="card-body">
                                {error && <AppAlert isError={true} content={error} />}
                                    <form autoComplete="false" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-row">
                                            <div className="col-md-12">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="fulname">Customer Name</label>
                                                    <span className=" font-weight-bold text-danger small">{errors.customerName && "* "}</span>
                                                    <input className="form-control py-4" name="customerName" id="fullname"
                                                        type="text" placeholder="Enter Customer name" ref={register({ required: true })} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-12 col-md-6">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="inputPassword">Email</label>
                                                    <span className="font-weight-bold text-danger small">{errors.fullname && " *"}</span>
                                                    <input className="form-control py-4" name="email" id="email"
                                                        type="email" placeholder="Enter customer email" ref={register({ required: true })} />
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
                                        <div className="form-row">
                                            <div className="col-12 col-md-6">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="rate">Rate</label>
                                                    <span className="font-weight-bold text-danger small">{errors.rate && " *"}</span>
                                                    <input className="form-control py-4" name="rate" id="rate" min={1}
                                                        type="number" placeholder="Enter rate" ref={register({ required: true })} />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="card">Card No.</label>
                                                    <span className="font-weight-bold text-danger small">{errors.card && " *"}</span>
                                                    <input className="form-control py-4" name="customerCardNo" id="card"
                                                        type="number" placeholder="Enter card number" ref={register({ required: false })} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="address">Address</label>
                                            <span className="font-weight-bold text-danger small">{errors.address && " *"}</span>
                                            <textarea className="form-control py-4" name="address" id="address"
                                                placeholder="Enter address" ref={register({ required: true })}></textarea>
                                        </div>
                                        <div className="mt-2 mb-0 float-right">
                                            <button type="submit" className="btn bg-cust-navy text-light" disabled={isLoading}>
                                                {isLoading ? 'creating' : 'Create Customer'}
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

export default CreateCustomer;