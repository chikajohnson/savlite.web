import React from 'react';

const AppFooter = (props) => {
    return ( 
        <React.Fragment>
            <footer className="footer mt-auto bg-cust-light ">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 small font-weight-bolder">Copyright &#xA9; SAVLITE ADMIN 2020</div>
                                <div className="col-md-6 text-md-right small font-weight-bolder">
                                    <a href="#!">Privacy Policy</a>
                                &#xB7;
                                <a href="#!">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
        </React.Fragment>
     );
}
 
export default AppFooter;