import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useForm from 'react-hook-form';

import './Transaction.css';
import FormErrors from '../FormErrors';
import AppSideBar from '../AppSideBar';
import AppFooter from '../AppFooter';
import agent from '../../agent';

import { updateTransaction } from '../../actions';

const UpdateTransaction = (props) => {

    const dispatch = useDispatch();

    const error = useSelector(state => state.common.error);
    const isLoading = useSelector(state => state.common.fetching);
    const { register, errors, handleSubmit } = useForm();
    const [transaction, setTransaction] = useState({});

    const custId = props.match.params.id;


    const onSubmit = data => {
        data.id = custId;
        dispatch(updateTransaction(data));
    }

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
                                        <li className="breadcrumb-item active">Approve</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid mt-4">
                            <div className="card mb-4">
                                <div className="card-header py-2 d-flex justify-content-between bg-cust-navy">
                                    <span className="h4 color-cust-warm">Approve Transaction</span>
                                    <Link to="/transactions">
                                        <button type="button" className="btn bg-cust-warm pull-right font-weight-bold">&nbsp;Back&nbsp;</button>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <FormErrors error={error} />
                                    <form>
                                        <div className="form-row">
                                            <div className="col-md-12">
                                                <div className="col-sm-12 col-md-6">
                                                    <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="referenceNo">Cross Reference</label>
                                                        <input className="form-control py-4" name="referenceNo" id="referenceNo"
                                                            type="text" placeholder="Enter reference number" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6">
                                                    <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="referenceNo">Customer No</label>
                                                        <input className="form-control py-4" name="transactionID" id="transactionID"
                                                            type="text" placeholder="Enter transaction number" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="col-md-12">
                                                <div className="col-sm-12 col-md-6">
                                                    <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="referenceNo">Transaction</label>
                                                        <input className="form-control py-4" name="transactionID" id="transactionID"
                                                            type="text" placeholder="" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6">
                                                    <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="transactionType">Transaction Type</label>
                                                        <input className="form-control py-4" name="transactionType" id="transactionType"
                                                            type="text" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="col-12">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="amount">Amount</label>
                                                    <input className="form-control py-4" name="amount" id="amount"
                                                        type="number" placeholder="Enter Amount" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-12">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="balance">Balance</label>
                                                    <input className="form-control py-4" name="balance" id="balance"
                                                        type="number" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2 mb-0 float-right">
                                            <button type="submit" className="btn bg-success text-light" disabled={isLoading}>
                                                {isLoading ? 'approving' : 'Approve Transaction'}
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

export default UpdateTransaction;