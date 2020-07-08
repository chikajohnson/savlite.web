import React from 'react';
// import AppBreadCrumb from './AppBreadCrumb';
import AppSideBar from './AppSideBar';
import AppFooter from './AppFooter';

const AppContentHOC = (HocComponent) => {
    const AppComponent = (props) =>{
        return (
            <React.Fragment>
                <div id="layoutSidenav">
                    <AppSideBar />
                    <div id="layoutSidenav_content">
                        <main>
                            {/* <AppBreadCrumb /> */}
                            <HocComponent />
                        </main>
                        <AppFooter />
                    </div>
                </div>
            </React.Fragment>
        );
    }

    return AppComponent;
    
}

export default AppContentHOC;

