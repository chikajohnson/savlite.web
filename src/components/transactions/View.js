import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import AppSideBar from '../AppSideBar';
import AppFooter from '../AppFooter';
import agent from '../../agent';

import './Transaction.css';

const ViewTransaction = (props) => {

    const custId = props.match.params.id;
    const [transaction, setTransaction] = useState({});

    useEffect(() => {
        agent.Transaction.view(custId)
            .then(resp => {
                setTransaction(resp);
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
                                            <Link to="/transactions">
                                                <span className="color-cust-navy">Transactions</span>
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
                                    <span className="h4 color-cust-warm">View  Transaction</span>
                                    <Link to="/transactions">
                                        <button type="button" className="btn bg-cust-warm pull-right font-weight-bold">&nbsp;Back&nbsp;</button>
                                    </Link>
                                </div>
                                <div class="card-body">
                                    <form>
                                        <div className="form-row">
                                            <div className="col-sm-12 col-md-4">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="referenceNo">Cross Reference</label>
                                                    <input className="form-control py-4" name="referenceNo" id="referenceNo" readOnly
                                                        type="text" placeholder="Enter reference number" value={transaction?.referenceNo} />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="transactionType">Transaction Type</label>
                                                    <input className="form-control py-4" name="transactionType" id="transactionType"
                                                        type="text" placeholder="" readOnly value={transaction?.transactionType} />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="transactionDate">Transaction Date</label>
                                                    <input className="form-control py-4" name="transactionDate" id="transactionDate"
                                                        type="text" placeholder="" readOnly value={new Date(transaction?.transactionDate).toLocaleDateString()} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row">                                     
                                            <div className="col-sm-12 col-md-6">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="balance">Balance</label>
                                                    <input className="form-control py-4" name="balance" id="balance" 
                                                        type="text" placeholder="" readOnly value={transaction?.balance}/>
                                                </div>
                                            </div>                                       
                                            <div className="col-sm-12 col-md-6">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="amount">Amount</label>
                                                    <input className="form-control py-4" name="amount" id="amount"
                                                        type="number" placeholder="Enter Amount" readOnly value={transaction?.amount} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-12">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="remark">remark</label>
                                                    <input className="form-control py-4" name="remark" id="remark"
                                                        type="text" placeholder="" readOnly value={transaction?.remark} />
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

export default ViewTransaction;