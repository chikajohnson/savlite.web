// import React from 'react'
import agent from "./agent"
import { push } from 'connected-react-router';
import { toast } from 'react-toastify';

// import '@pwabuilder/pwainstall'
import {
  onModelCreationFailed, userLoaded, userLoggedIn, userLoginFailed, userLoggingIn,
  hideModal, appLoaded, userLogout, showSignUpBonusModal, userRegistering,
  userRegisterFailed,
  loadingLeaders,
  leadersLoaded,
  loadingLeadersFailed,
  categoriesLoaded,
  walletLoaded,
  profileLoaded,
  rankLoaded,
  plansLoaded,
  avatarUploaded,
  uploadingAvatar,
  avatarUploadFailed,
  banksLoaded,
  updatingProfile,
  profileUpdated,
  updatingProfileFailed,
  purchasingPlan,
  planPurchased,
  planPurchaseFailed,
  errorMessageCleared,
  requestFetched
} from './actionCreators'

export function loadApp() {
  return dispatch => {
    agent.Auth.setToken()
    // return agent.Auth.current().then(
    //   x => {
    //     dispatch(userLoaded(x.data.user))
    //     dispatch(appLoaded())
    //     dispatch(rankLoaded(x.data.user.rank))
    //     dispatch(walletLoaded(x.data.wallet))
    //     dispatch(plansLoaded(x.data.plans))
    //     dispatch(profileLoaded(x.data.user.profile))
    //     dispatch(loadCategories())

    //   }
    // );
  }
}

export function loginUser(username, password) {
  return dispatch => {
    dispatch(userLoggingIn())
    return agent.Auth.login(username, password).then(
      data => {
        if (data.role === 'IsCashier') {
          notifyError("A Cashier is not allowed to login here. Use the mobile app");
          dispatch(logout());
          dispatch(requestFetched());
        }
        else {
          onLogin(dispatch, data)
        }
      },
      err => {
        dispatch(userLoginFailed(err.response && err.response.body))
      }
    );
  }
}

export function registerUser(data) {
  return dispatch => {
    dispatch(userRegistering())
    return agent.Auth.register(data).then(
      x => {
        onLogin(dispatch, x)
      },
      err => {
        const errors = err.response && err.response.body && err.response.body.errors
        const errorMesages = Object.values(errors, {})
        dispatch(userRegisterFailed(errorMesages[0]))
      }
    );
  }
}


export function createCustomer(customer) {
  return dispatch => {
    // dispatch(userLoggingIn())
    return agent.Customer.save(customer).then(
      response => {
        notifySuccess(response.message);
        dispatch(push('/customers'));
      },
      err => {
        dispatch(onModelCreationFailed(getErrorMessage(err)))
      }
    );
  }
}

export function updateCustomer(customer) {
  return dispatch => {
    // dispatch(userLoggingIn())
    return agent.Customer.edit(customer).then(
      response => {
        notifySuccess(response.message);
        // dispatch(push('/customers'));
      },
      err => {
        dispatch(onModelCreationFailed(getErrorMessage(err)))
      }
    );
  }
}

export function deleteCustomer(id) {
  return dispatch => {
    // dispatch(userLoggingIn())
    return agent.Customer.delete(id).then(
      response => {
        notifySuccess(response.message);
        dispatch(push('/customers'));
      },
      err => {
        dispatch(onModelCreationFailed(getErrorMessage(err)));
      }
    );
  }
}

export function createCharge(charge) {
  return dispatch => {
    // dispatch(userLoggingIn())
    return agent.Charge.save(charge).then(
      response => {
        notifySuccess(response.message);
        dispatch(push('/charges'));
      },
      err => {
        dispatch(onModelCreationFailed(getErrorMessage(err)));
      }
    );
  }
}

export function updateCharge(charge) {
  return dispatch => {
    // dispatch(userLoggingIn())
    return agent.Charge.edit(charge).then(
      response => {
        notifySuccess(response.message);
        // dispatch(push('/charges'));
      },
      err => {
        dispatch(onModelCreationFailed(getErrorMessage(err)));
      }
    );
  }
}

export function deleteCharge(id) {
  return dispatch => {
    // dispatch(userLoggingIn())
    return agent.Charge.delete(id).then(
      response => {
        notifySuccess(response.message);
        dispatch(push('/charges'));
      },
      err => {
        dispatch(onModelCreationFailed(getErrorMessage(err)));
      }
    );
  }
}

export function createUser(user) {
  return dispatch => {
    // dispatch(userLoggingIn())
    return agent.Auth.register(user).then(
      response => {
        notifySuccess(response.message);
        dispatch(push('/users'));
      },
      err => {
        dispatch(onModelCreationFailed(getErrorMessage(err)))
      }
    );
  }
}

export function updateUser(user) {
  return dispatch => {
    // dispatch(userLoggingIn())
    return agent.User.edit(user).then(
      response => {
        notifySuccess(response.message);
        // dispatch(push('/users'));
      },
      err => {
        dispatch(onModelCreationFailed(err.response && err.response.body))
      }
    );
  }
}

export function deleteUser(id) {
  return dispatch => {
    // dispatch(userLoggingIn())
    return agent.User.delete(id).then(
      response => {
        notifySuccess(response.message);
        dispatch(push('/users'));
      },
      err => {
        dispatch(onModelCreationFailed(err.response && err.response.body))
      }
    );
  }
}


export function createTransaction(transaction) {
  return dispatch => {
    // dispatch(transactionLoggingIn())
    return agent.Transaction.save(transaction).then(
      response => {
        notifySuccess(response.message);
        dispatch(push('/transactions'));
      },
      err => {
        dispatch(onModelCreationFailed(getErrorMessage(err)));
      }
    );
  }
}

export function updateTransaction(transaction) {
  return dispatch => {
    // dispatch(transactionLoggingIn())
    return agent.Transaction.edit(transaction).then(
      response => {
        notifySuccess(response.message);
        // dispatch(push('/transactions'));
      },
      err => {
        dispatch(onModelCreationFailed(getErrorMessage(err)));
      }
    );
  }
}


export function approveTransaction(transaction) {
  return dispatch => {
    // dispatch(transactionLoggingIn())
    return agent.Transaction.approve(transaction).then(
      response => {
        notifySuccess(response.message);
        dispatch(push('/transactions'));
      },
      err => {
        dispatch(onModelCreationFailed(getErrorMessage(err)));
      }
    );
  }
}

export function deleteTransaction(id) {
  return dispatch => {
    // dispatch(transactionLoggingIn())
    return agent.Transaction.delete(id).then(
      response => {
        notifySuccess(response.message);
        dispatch(push('/transactions'));
      },
      err => {
        dispatch(onModelCreationFailed(getErrorMessage(err)));
      }
    );
  }
}

export function loadLeaders() {
  return dispatch => {
    dispatch(loadingLeaders())
    return agent.Game.leaders().then(
      x => {
        dispatch(leadersLoaded(x.data))
      },
      err => {
        dispatch(loadingLeadersFailed())
      }
    );
  }
}

export function logout() {
  return dispatch => {
    agent.Auth.logout()
    dispatch(userLogout())
    dispatch(push('/login'))
  }
}

export function showBonusAlert() {
  return dispatch => {
    dispatch(showSignUpBonusModal())
  }
}

export function clearErrorMessage() {
  return dispatch => {
    dispatch(errorMessageCleared())
  }
}

export function loadCategories() {
  return dispatch => {
    // dispatch(loadingLeaders())
    return agent.Category.all().then(
      x => {
        dispatch(categoriesLoaded(x.data))
      },
      err => {
        // dispatch(loadingLeadersFailed())
      }
    );
  }
}

export function loadRank() {
  return dispatch => {
    // dispatch(loadingLeaders())
    return agent.Game.rank().then(
      x => {
        dispatch(rankLoaded(x.data.rank))
      },
      err => {
        // dispatch(loadingLeadersFailed())
      }
    );
  }
}

export function uploadAvatar(file) {

  if (file.size > 2047000) {
    notifyError('Image is too large')
    return;
  }
  const formData = readFormData(file, 'avatar');
  return dispatch => {
    dispatch(uploadingAvatar())
    return agent.Profile.uploadAvatar(formData, { 'Content-Type': 'multipart/form-data;  boundary=c7cbfdd911b4e720f1dd8f479c50bc7f' })
      .then(
        x => {
          notifySuccess("Avatar updated")
          dispatch(avatarUploaded(x.data.avatar))
        },
        err => {
          notifyError("Avatar uplaod failed")
          dispatch(logError(err));
          dispatch(avatarUploadFailed())
        }
      )
  }
}

export function logError(data) {
  return dispatch => {
    return agent.Auth.logError(data)
  }
}

export function updateProfile(data) {

  return dispatch => {
    dispatch(updatingProfile())
    return agent.Profile.edit(data).then(
      x => {
        notifySuccess("Profile updated")
        return dispatch(profileUpdated(x.data.profile))
      },
      err => {
        notifyError("Cannot update profile")
        dispatch(updatingProfileFailed())
      }
    )
  }

}

export function updatePersonalProfile(data) {

  return dispatch => {
    dispatch(updatingProfile())
    return agent.Profile.editPersonal(data).then(
      x => {
        notifySuccess("Profile updated")
        return dispatch(profileUpdated(x.data.profile))
      },
      err => {
        notifyError("Cannot update profile")
        return dispatch(updatingProfileFailed())

      }
    )
  }

}

export function updateBankProfile(data) {

  return dispatch => {
    dispatch(updatingProfile())
    return agent.Profile.editBank(data).then(
      x => {
        notifySuccess("Profile updated")
        return dispatch(profileUpdated(x.data.profile))
      },
      err => {
        return dispatch(updatingProfileFailed())
      }
    )
  }

}

export function fetchBanks() {
  return dispatch => {
    return agent.Wallet.banks().then(
      x => {
        return dispatch(banksLoaded(x.data))
      },
      err => {
        // dispatch(loadingLeadersFailed())
      }
    )
  }
}

export function subscribeToPlan(planId) {
  return dispatch => {
    dispatch(purchasingPlan())
    return agent.Plan.subscribe(planId).then(
      x => {
        dispatch(hideModal())
        dispatch(walletLoaded(x.data.wallet))
        return dispatch(planPurchased(x.data.plans))
      },
      err => {
        return dispatch(planPurchaseFailed())
      }
    )
  }
}


export function getCurrentUser() {
  return agent.Auth.current();
}

function notifySuccess(message) {
  toast.success(message);
}

function notifyError(message) {
  toast.error(message);
}

function onLogin(dispatch, user) {
  agent.Auth.saveAuthData(user)
  // agent.Auth.saveFirstTime()
  dispatch(userLoggedIn(user))
  dispatch(push('/dashboard'))
}

function readFormData(file, name) {
  const reader = new FileReader();
  file.avatar = file.name;
  reader.readAsDataURL(file);

  var formData = new FormData();
  formData.append(name, file);

  return formData;
}

function getErrorMessage(error) {
  let errorMessage = "";
  if (error) {
    if (typeof error === 'string') {
      errorMessage = error;
    }
    else if (error.response && error.response.body) {
      errorMessage = typeof error.response.body === 'string' ? error.response.body : error.response.body[0].description;

    }
  }
  else {
    errorMessage = "error occured while processing this request, try again later";
  }
  return errorMessage;
}
