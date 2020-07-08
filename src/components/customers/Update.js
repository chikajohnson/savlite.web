import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useForm from 'react-hook-form';

import './Customers.css';
import FormErrors from '../FormErrors';
import AppSideBar from '../AppSideBar';
import AppFooter from '../AppFooter';
import AppAlert from '../AppAlert';
import agent from '../../agent';

import { updateCustomer } from '../../actions';

const UpdateCustomer = (props) => {

    const dispatch = useDispatch();

    const error = useSelector(state => state.common.error);
    const isLoading = useSelector(state => state.common.fetching);
    const { register, errors, handleSubmit, formState } = useForm();
    const [customer, setCustomer] = useState({});
    const [showCard, setShowCard] = useState(false);

    const custId = props.match.params.id;

    const onSubmit = data => {
        data.id = custId;
        dispatch(updateCustomer(data));
    }

    const handleChange = (e) => {
        customer[e.target.name] = e.target.value
        setCustomer({ ...customer })
    }

    const showCardChange = (e) => {
        setShowCard(e.currentTarget.checked)
    }

    useEffect(() => {
        agent.Customer.view(custId)
            .then(resp => {
                setCustomer(resp);
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
                                            <Link to="/customers">
                                                <span className="color-cust-navy link-dark">Customers</span>
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active">Update</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div class="container-fluid mt-4">
                            <div class="card mb-4">
                                <div class="card-header py-2 d-flex justify-content-between bg-cust-navy">
                                    <span className="h4 color-cust-warm">Update Customer</span>
                                    <Link to="/customers">
                                        <button type="button" class="btn bg-cust-warm pull-right font-weight-bold">&nbsp;Back&nbsp;</button>
                                    </Link>
                                </div>
                                <div className="card-body">
                                {error && <AppAlert isError={true} content={error} />}
                                    <form autoComplete="false" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-row">
                                            <div className="col-md-12">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="fulname">Customer Name</label>
                                                    <span className=" font-weight-bold text-danger small">{errors.customerName && "* "}</span>
                                                    <input className="form-control py-4" name="customerName" id="customerName" value={customer.customerName}
                                                        type="text" placeholder="Enter Customer name" ref={register({ required: true })} onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-12 col-md-4">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="inputPassword">Email</label>
                                                    <span className="font-weight-bold text-danger small">{errors.fullname && " *"}</span>
                                                    <input className="form-control py-4" name="email" id="email" value={'example@yahoo.com'}
                                                        type="email" placeholder="Enter customer email" ref={register({ required: true })} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="phone">Phone Number</label>
                                                    <span className="font-weight-bold text-danger small">{errors.phoneNumber && " *"}</span>
                                                    <input className="form-control py-4" name="phoneNumber" id="phone" value={customer.phoneNumber} onChange={handleChange}
                                                        type="text" placeholder="Enter phone number" ref={register({ required: true })} />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-12 col-md-12">
                                            <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="address">Address</label>
                                                <span className="font-weight-bold text-danger small">{errors.address && " *"}</span>
                                                <textarea className="form-control py-4" name="address" id="address" value={customer.address}
                                                    placeholder="Enter address" ref={register({ required: true })} onChange={handleChange}></textarea>
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            {
                                                showCard && <>
                                                    <div className="col-12 col-md-4">
                                                        <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="rate">Card No.</label>
                                                            <span className="font-weight-bold text-danger small">{errors.rate && " *"}</span>
                                                            <input className="form-control py-4" name="newCardNo" id="newCardNo" value={customer.newCardNo}
                                                                type="number" placeholder="Enter new card number" ref={register({ required: true })} onChange={handleChange} />
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-md-4">
                                                        <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="rate">Rate</label>
                                                            <span className="font-weight-bold text-danger small">{errors.newRate && " *"}</span>
                                                            <input className="form-control py-4" name="newRate" id="newRate" 
                                                            value={customer.newRate}  min={1}
                                                                type="number" placeholder="Enter rate" ref={register({ required: true })} 
                                                                onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                            <div className="col-12 col-md-4">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" name="showCard" class="custom-control-input" id="customCheck1" onChange={showCardChange} />
                                                    <label class="custom-control-label font-weight-bolder" for="customCheck1">Add new card</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-2 mb-0 float-right">
                                            <button type="submit" className="btn bg-cust-navy text-light" disabled={isLoading}>
                                                {isLoading ? 'updating' : 'Update Customer'}
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

export default UpdateCustomer;