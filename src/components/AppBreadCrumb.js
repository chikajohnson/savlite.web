import React from 'react';

const AppBreadCrumb = (props) => {
    return ( 
        <div className="page-header page-header-light bg-white shadow">
                <div className="container-fluid">
                    <div className="page-header-content py-4">
                        <ol className="breadcrumb mt-4 mb-0 font-weight-bold h5">
                            <li className="breadcrumb-item color-cust-navy"><a href="index.html" className="color-cust-navy">Customers</a></li>
                            <li className="breadcrumb-item active">List</li>
                        </ol>
                    </div>
                </div>
            </div>
     );
}
 
export default AppBreadCrumb;