import React, { useState, useEffect } from 'react';
import './Charge.css';

import AppSideBar from '../AppSideBar';
import AppFooter from '../AppFooter';
import agent from '../../agent';

import { Link } from 'react-router-dom';

const ListCharges = (props) => {
    const [charges, setCharges] = useState([]);

    useEffect(() => {
        agent.Charge.load()
            .then(resp => {
                setCharges(resp.result);
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
                                <ol className="breadcrumb mt-4 mb-0 font-weight-normal h5">
                                    <li className="breadcrumb-item color-cust-navy">
                                        <Link to="/charges">
                                            <span className="color-cust-navy">Charges</span>
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active">List</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid mt-4">
                        <div class="card mb-4">
                            <div class="card-header py-2 d-flex justify-content-between bg-cust-navy">
                                <span className="h5 color-cust-warm">Charge List ({charges.length})</span>
                                <p className="pt-2">
                                    <Link to="charges/new">
                                        <button type="button" class="btn bg-light  text-dark pull-right font-weight-bold">&nbsp;Create&nbsp;</button>
                                    </Link>
                                </p>
                            </div>
                            <div class="card-body">
                                <div class="datatable table-responsive">
                                    <div class="row">
                                        <div class="col-sm-12 col-md-6 d-sm-none">
                                            <div class="dataTables_length" id="dataTable_length">
                                                <label className="font-weight-bolder">
                                                    Show &nbsp;
                                                    <select name="dataTable_length" aria-controls="dataTable" class="form-control-sm">
                                                        <option value="10">10</option>
                                                        <option value="25">25</option>
                                                        <option value="50">50</option>
                                                        <option value="100">100</option>
                                                    </select>
                                                    &nbsp; entries
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="text-right">
                                                <label className="font-weight-bold">Search:  &nbsp;<input type="search" style={{ width: '30vw' }} class="form-control-sm" placeholder="search records" aria-controls="dataTable" /></label>
                                            </div>
                                        </div>
                                    </div>
                                    <table class="table table-bordered table-hover" id="dataTable" cellSpacing="0">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Amount</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Name</th>
                                                <th>Amount</th>
                                                <th>Actions</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            {
                                                charges.map(charge =>
                                                    <tr>
                                                        <td className="font-weight-bolder">
                                                            <Link to={'charges/view/' + charge.id}>{charge.chargeName}</Link>
                                                        </td>
                                                        <td>{charge.amount}</td>
                                                        <td className="text-left">
                                                            <a href={`/charges/edit/` + charge.id} className="text-dark" title="edit charge">
                                                                <i class="far fa-2x fa-edit"></i>
                                                            </a>
                                                            &nbsp; &nbsp; &nbsp;
                                                            <a href={`/charges/delete/` + charge.id}className="text-danger" title="delete charge">
                                                                <i class="far fa-trash-alt fa-2x"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                )
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row bg-cust-navy pt-2 pb-2">
                                <div class="col-sm-12 col-md-5 ">
                                    {/* <div class="dataTables_info ml-5 color-cust-warm pt-3" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 57 of 57 entries</div> */}
                                </div>
                                <div class="col-sm-12 col-md-7">
                                    <div class="dataTables_paginate paging_simple_numbers float-right  mr-5" id="dataTable_paginate">
                                        <ul class="pagination">
                                            <li class="paginate_button page-item previous disabled" id="dataTable_previous"><a href="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li>
                                            <li class="paginate_button page-item active"><a href="#" aria-controls="dataTable" data-dt-idx="1" tabindex="0" class="page-link">1</a></li>
                                            <li class="paginate_button page-item next disabled" id="dataTable_next"><a href="#" aria-controls="dataTable" data-dt-idx="2" tabindex="0" class="page-link">Next</a></li>
                                        </ul>
                                    </div>
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

export default ListCharges;





