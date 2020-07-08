import React from 'react';
import { useDispatch } from 'react-redux';
 

const AppSearch = ({module, param}) => {
    const dispatch = useDispatch();
    
    return (
        <div class="text-right">
            <label className="font-weight-bold">Search:  &nbsp;<input type="search" style={{ width: '30vw' }} class="form-control-sm" placeholder={"search " + module} aria-controls="dataTable" /></label>
        </div>
    );
}

export default AppSearch;