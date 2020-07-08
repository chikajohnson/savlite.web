import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import AppSideBar from '../AppSideBar';
import AppFooter from '../AppFooter';
import agent from '../../agent';

import './Charge.css';

const ViewCharge = (props) => {

    const custId = props.match.params.id;

    const [charge, setCharge] = useState({});

    useEffect(() => {
        agent.Charge.view(custId)
            .then(resp => {
                setCharge(resp);
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
                                            <Link to="/charges">
                                                <span className="color-cust-navy">Charges</span>
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
                                    <span className="h4 color-cust-warm">View  Charge</span>
                                    <Link to="/charges">
                                        <button type="button" className="btn bg-cust-warm pull-right font-weight-bold">&nbsp;Back&nbsp;</button>
                                    </Link>
                                </div>
                                <div class="card-body">
                                    <form>
                                        <div className="form-row">
                                            <div className="col-md-12">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="chargeName">Charge Name</label>
                                                    <input className="form-control py-4" name="chargeName" id="chargeName" value={charge.chargeName}
                                                        type="text" readOnly placeholder="Enter name of charge" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-12">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="amount">Amount</label>
                                                    <input className="form-control py-4" name="amount" id="amount" value={charge.amount}
                                                        type="number" readOnly placeholder="Enter charge amount" />
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

export default ViewCharge;