import React from 'react';
import { useDispatch} from 'react-redux';

import './AppAlert.css';
import { clearErrorMessage } from "../actions";


const AppAlert = ({ isSuccess = false, isError = false, isWarning = false, content }) => {
    const dispatch = useDispatch();
    
    const clearError = () => {
        dispatch(clearErrorMessage());
    }

    return (
        <div class="Alert font-weight-bold text-left">

            {isError && <div class="alert alert-danger alert-dismissible fade show pb-4" role="alert">
                {content}
                <button class="close" type="button"  aria-label="Close" onClick={clearError}>×</button>
            </div>
            }
            {isSuccess && <div class="alert alert-success alert-dismissible fade show pb-4" role="alert">
                {content}
                <button class="close" type="button" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true" onClick={clearError}>×</span>
                </button>
            </div>
            }
            {isWarning && <div class="alert alert-orange alert-dismissible fade show pb-4" role="alert">
                {content}
                <button class="close" type="button" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true" onClick={clearError}>×</span>
                </button>
            </div>
            }
        </div>
    );
}

export default AppAlert;