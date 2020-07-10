import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useForm from 'react-hook-form';

import AppSideBar from '../AppSideBar';
import AppAlert from '../AppAlert';
import AppFooter from '../AppFooter';

import './Transaction.css';
import { createTransaction } from '../../actions';
import agent from '../../agent';
import { onModelCreationFailed, errorMessageCleared } from "../../actionCreators";

const PostDebit = (props) => {

    const dispatch = useDispatch();
    const error = useSelector(state => state.common.error);
    const isLoading = useSelector(state => state.common.fetching);
    const [amount, setAmount]  = useState(0);
    const [card, setCard] = useState({});


    const { register, errors, handleSubmit } = useForm();

    const checkAmount = (e) => {
        const amount = e.target.value;
        if (amount) {
            setAmount(parseFloat(amount));
            amount > card.balance && dispatch({ 
                type: "MODEL_CREATION_FAILED", 
                error : `DEBIT AMOUNT (#${amount}.00) cannot be more than the CARD BALANCE (#${card.balance}.00)`
              });

            amount <= card.balance && dispatch(errorMessageCleared());
        }    
    }
    const onSubmit = data => {
        data.customerId = card.customerId;
        data.customerName = card.customerName;
        data.balance = card.balance;
        data.rate = card.rate;
        console.log(data);

        dispatch(createTransaction(data));
    }

    const getCustomer = (e) => {
        const cardNo = e.target.value;

        agent.Customer.loadByCard(cardNo)
            .then((resp) => {
                if (resp) {
                    setCard(resp)
                    dispatch(errorMessageCleared());
                } else {
                    setCard({})
                    dispatch(onModelCreationFailed(`Customer Card Number "${cardNo}" does not exist`));
                }
            });         
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
                                            <Link to="/transactions">
                                                <span className="color-cust-navy">Transactions</span>
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
                                    <span className="h4 color-cust-warm">Post Debit</span>
                                    <Link to="/transactions">
                                        <button type="button" className="btn bg-cust-warm pull-right font-weight-bold">&nbsp;Back&nbsp;</button>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    {error && <AppAlert isError={true} content={error} />}
                                    <form autoComplete="false" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-row">
                                            <div className="col-sm-12 col-md-6">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="referenceNo">Cross Reference</label>
                                                    <span className=" font-weight-bold text-danger small">{errors.referenceNo && "* "}</span>
                                                    <input className="form-control py-4" name="referenceNo" id="referenceNo" onBlur={getCustomer}
                                                        type="number" placeholder="Enter Card number" ref={register({ required: true })} />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="customer">Customer</label>
                                                    <span className=" font-weight-bold text-danger small">{errors.customer && "* "}</span>
                                                    <input className="form-control py-4" name="customerName" id="referenceNo" value={card?.customerName || ''}
                                                        readOnly type="text" placeholder="Enter Card number" ref={register({ required: true })} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="amount">Transaction Type</label>
                                                    <span className="font-weight-bold text-danger small">{errors.transactionType && " *"}</span>
                                                    <input className="form-control py-4" name="transactionType" id="transactionType"
                                                        type="text" ref={register({ required: true })} value="debit" readOnly />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="balance">Balance</label>
                                                    <span className="font-weight-bold text-danger small">{errors.balance && " *"}</span>
                                                    <input className="form-control py-4" name="balance" id="balance" value={card?.balance || 0}
                                                        readOnly type="number" placeholder="account balance" ref={register({ required: true })} />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="amount">Amount</label>
                                                    <span className="font-weight-bold text-danger small">{errors.amount && " *"}</span>
                                                    <input className="form-control py-4" name="amount" id="amount" min={1}  readOnly={!card.balance}
                                                        type="number" placeholder="Enter amount" ref={register({ required: true })} onBlur={checkAmount}/>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="remark">Remark</label>
                                                    <span className="font-weight-bold text-danger small">{errors.remark && " *"}</span>
                                                    <input className="form-control py-4" name="remark" id="remark"
                                                        type="text" placeholder="Enter remark" ref={register({ required: true })} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2 mb-0 float-right">
                                            <button type="submit" className="btn bg-cust-navy text-light" 
                                                disabled={isLoading || card.balance <= 0 || amount > card.balance || error}>
                                                {isLoading ? 'creating' : 'Create Transaction'}
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

        </React.Fragment >
    )
}

export default PostDebit;