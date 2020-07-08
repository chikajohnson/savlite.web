import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import './Charge.css';
import AppSideBar from '../AppSideBar';
import AppFooter from '../AppFooter';
import AppAlert from '../AppAlert';
import agent from '../../agent';

import { deleteCharge } from '../../actions';

const DeleteCharge = (props) => {

    const error = useSelector(state => state.common.error);
    const isLoading = useSelector(state => state.common.fetching);
    const dispatch = useDispatch();
    const custId = props.match.params.id;

    const deleteSelectedCharge = (charge) => {
        dispatch(deleteCharge(charge));
    }

    const [charge, setCharge] = useState({});
    useEffect(() => {
        agent.Charge.view(custId)
            .then(resp => {
                setCharge(resp);
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
                                            <Link to="/charges">
                                                <span className="color-cust-navy">Charges</span>
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
                                    <span className="h4 color-cust-warm">Delete  Charge</span>
                                    <button type="button" class="btn bg-cust-warm pull-right font-weight-bold">&nbsp;Back&nbsp;</button>
                                </div>
                                <div class="card-body">
                                {error && <AppAlert isError={true} content={error} />}
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
                                        <div className="mt-2 mb-0 float-right">
                                            <button type="submit" className="btn bg-danger text-light" disabled={isLoading} onClick={() => deleteSelectedCharge(charge.id)}>
                                                {isLoading ? 'deleting' : 'Delete Charge'}
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

export default DeleteCharge;