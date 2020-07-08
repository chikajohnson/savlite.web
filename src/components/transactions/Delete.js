import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Transaction.css';
import AppSideBar from '../AppSideBar';
import AppFooter from '../AppFooter';
import agent from '../../agent';

import { deleteTransaction } from '../../actions';

const DeleteTransaction = (props) => {

    const isLoading = useSelector(state => state.common.fetching);
    const dispatch = useDispatch();
    const custId = props.match.params.id;

    const deleteSelectedTransaction = (transaction) => {
        console.log(transaction);
        alert(transaction.amount)
        dispatch(deleteTransaction(transaction.id));
    }

    const [transaction, setTransaction] = useState({});
    useEffect(() => {
        agent.Transaction.view(custId)
            .then(resp => {
                setTransaction(resp);
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
                                            <Link to="/transactions">
                                                <span className="color-cust-navy">Transactions</span>
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
                                    <span className="h4 color-cust-warm">Delete  Customer</span>
                                    <Link to="/transactions">
                                        <button type="button" className="btn bg-cust-warm pull-right font-weight-bold">&nbsp;Back&nbsp;</button>
                                    </Link>
                                </div>
                                <div class="card-body">
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
                                                    type="text" placeholder="" readOnly value={transaction?.balance} />
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
                                    <div className="mt-2 mb-0 float-right">
                                        <strong className="text-danger mr-4 h5">Are you sure you want to  delete this transaction? &nbsp;&nbsp;&nbsp;</strong>
                                        <button type="submit" className="btn bg-danger text-light" disabled={isLoading} onClick={() =>deleteSelectedTransaction(transaction)}>
                                            {isLoading ? 'deleting' : 'Delete Transaction'}
                                        </button>
                                    </div>
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

export default DeleteTransaction;