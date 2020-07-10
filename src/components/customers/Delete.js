import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import './Customers.css';
import AppSideBar from '../AppSideBar';
import AppFooter from '../AppFooter';
import agent from '../../agent';
import AppAlert from '../AppAlert';

import { deleteCustomer } from '../../actions';

const DeleteCustomer = (props) => {
    const error = useSelector(state => state.common.error);
    const isLoading = useSelector(state => state.common.fetching);
    const dispatch = useDispatch();
    const custId = props.match.params.id;

    const deleteSelectedCust = (customer) => {
        dispatch(deleteCustomer(customer));
    }

    const [customer, setCustomer] = useState({});
    useEffect(() => {
        agent.Customer.view(custId)
            .then(resp => {
                setCustomer(resp);
                console.log(resp);

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
                                                <span className="color-cust-navy">Customers</span>
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active">Delete</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        {
                            customer &&
                            <div class="container-fluid mt-4">
                                <div class="card mb-4">
                                    <div class="card-header py-2 d-flex justify-content-between bg-cust-navy">
                                        <span className="h4 color-cust-warm">Delete  Customer - {customer.customerName}</span>
                                        <Link to="/customers">
                                            <button type="button" className="btn bg-cust-warm pull-right font-weight-bold">&nbsp;Back&nbsp;</button>
                                        </Link>
                                    </div>
                                    <div class="card-body">
                                    {error && <AppAlert isError={true} content={error} />}
                                            <div className="form-row">
                                                <div className="col-md-12">
                                                    <div className="form-group font-weight-bolder"><label className="mb-2" for="fulname">Customer Name</label>
                                                        <input className="form-control py-4" id="fullname" disabled type="text"
                                                            placeholder="Enter Customer fullname" value={customer.customerName} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-12 col-md-6">
                                                    <div className="form-group font-weight-bolder"><label className="mb-2" for="inputPassword">Email</label>
                                                        <input className="form-control py-4" disabled id="email" type="email"
                                                            placeholder="Enter customer email" value={customer.email} />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="form-group font-weight-bolder"><label className="mb-2" for="phone">Phone Number</label>
                                                        <input className="form-control py-4" disabled id="phone" type="text"
                                                            placeholder="Enter phone number" value={customer.phoneNumber} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-12 col-md-6">
                                                    <div className="form-group font-weight-bolder"><label className="mb-2" for="rate">Rate</label>
                                                        <input className="form-control py-4" disabled id="rate" type="number"
                                                            placeholder="Enter rate" value={customer.rate} />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="form-group font-weight-bolder"><label className="mb-2" for="balance">Balance</label>
                                                        <input className="form-control py-4" disabled id="balance" type="number"
                                                            placeholder="Enter balance" value={customer.balance} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group font-weight-bolder"><label className="mb-2" for="address">Address</label>
                                                <textarea className="form-control py-4" disabled id="address"
                                                    placeholder="Enter address" value={customer.address}></textarea>
                                            </div>
                                            <div className="mt-2 mb-0 float-right">
                                                <button type="submit" className="btn bg-danger text-light" disabled={isLoading} 
                                                onClick={() => deleteSelectedCust(customer.id)}>
                                                    {isLoading ? 'deleting' : 'Delete Customer'}
                                                </button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </main>
                    <AppFooter />
                </div>
            </div>

        </React.Fragment>
    )
}

export default DeleteCustomer;