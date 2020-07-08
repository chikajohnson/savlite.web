import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useForm from 'react-hook-form';

import './Charge.css';
import AppSideBar from '../AppSideBar';
import AppFooter from '../AppFooter';
import AppAlert from '../AppAlert';
import agent from '../../agent';

import { updateCharge } from '../../actions';

const UpdateCharge = (props) => {

    const dispatch = useDispatch();

    const error = useSelector(state => state.common.error);
    const isLoading = useSelector(state => state.common.fetching);
    const { register, errors, handleSubmit } = useForm();
    const [charge, setCharge] = useState({});

    const custId = props.match.params.id;


    const onSubmit = data => {
        data.id = custId;
        dispatch(updateCharge(data));
    }

    const handleChange = (e) => {
        charge[e.target.name] = e.target.value
        setCharge({ ...charge })
    }
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
                                        <li className="breadcrumb-item active">Update</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div class="container-fluid mt-4">
                            <div class="card mb-4">
                                <div class="card-header py-2 d-flex justify-content-between bg-cust-navy">
                                    <span className="h4 color-cust-warm">Update Charge</span>
                                    <Link to="/charges">
                                        <button type="button" class="btn bg-cust-warm pull-right font-weight-bold">&nbsp;Back&nbsp;</button>
                                    </Link>
                                </div>
                                <div className="card-body">
                                {error && <AppAlert isError={true} content={error} />}
                                    <form autoComplete="false" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-row">
                                            <div className="col-md-12">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="chargeName">Charge Name</label>
                                                    <span className=" font-weight-bold text-danger small">{errors.chargeName && "* "}</span>
                                                    <input className="form-control py-4" name="chargeName" id="chargeName"
                                                    value = {charge.chargeName}
                                                        type="text" placeholder="Enter name of charge" ref={register({ required: true })} onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-12">
                                                <div className="form-group font-weight-bolder"><label className="mb-2" htmlFor="amount">Amount</label>
                                                    <span className="font-weight-bold text-danger small">{errors.fullname && " *"}</span>
                                                    <input className="form-control py-4" name="amount" id="amount"
                                                     value = {charge.amount}
                                                        type="number" placeholder="Enter charge amount" ref={register({ required: true })} onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2 mb-0 float-right">
                                            <button type="submit" className="btn bg-cust-navy text-light" disabled={isLoading}>
                                                {isLoading ? 'creating' : 'Update Charge'}
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

export default UpdateCharge;