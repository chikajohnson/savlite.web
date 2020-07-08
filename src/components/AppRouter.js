import React, { useEffect,  } from 'react'
import { Switch, Redirect, useLocation } from 'react-router';
import { useDispatch } from 'react-redux';

import { BrowserView } from "react-device-detect"
import { clearErrorMessage } from "../actions";
import AppLoading from './UI/Spinner/AppLoading'
import AnonymousRoute from './AnonymousRoute'
import ProtectedRoute from './ProtectedRoute'

const ListCustomers = React.lazy(() => import('./customers/List'))
const CreateCustomer = React.lazy(() => import('./customers/Create'))
const EditCustomer = React.lazy(() => import('./customers/Update'))
const ViewCustomer = React.lazy(() => import('./customers/View'))
const DeleteCustomer = React.lazy(() => import('./customers/Delete'))

const ListCharges = React.lazy(() => import('./charges/List'));
const CreateCharge = React.lazy(() => import('./charges/Create'));
const EditCharge = React.lazy(() => import('./charges/Update'));
const ViewCharge = React.lazy(() => import('./charges/View'));
const DeleteCharge = React.lazy(() => import('./charges/Delete'));
const ListCards = React.lazy(() => import('./cards/List'));

const ListUsers = React.lazy(() => import('./users/List'));
const CreateUser = React.lazy(() => import('./users/Create'));
const EditUser = React.lazy(() => import('./users/Update'));
const ViewUser = React.lazy(() => import('./users/View'));
const DeleteUser = React.lazy(() => import('./users/Delete'));

const ListTransactions = React.lazy(() => import('./transactions/List'));
const PostCreditTransaction = React.lazy(() => import('./transactions/PostCredit'));
const PostDebitTransaction = React.lazy(() => import('./transactions/PostDebit'));
const EditTransaction = React.lazy(() => import('./transactions/Update'));
const ViewTransaction = React.lazy(() => import('./transactions/View'));
const DeleteTransaction = React.lazy(() => import('./transactions/Delete'));
const ApproveTransaction = React.lazy(() => import('./transactions/Approve'));

const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'))
const Login = React.lazy(() => import('./../components/auth/Login'))
const Register = React.lazy(() => import('./../components/auth/Register'))

const AppRouter = () => {
  const dispatch = useDispatch();
  let location = useLocation()

  useEffect(() => {
    dispatch(clearErrorMessage());
  }, [location, dispatch])
  return (
    <React.Suspense fallback={<AppLoading />}>
      <BrowserView>
        <Switch>
          <AnonymousRoute path="/login" exact component={Login} />
          <AnonymousRoute path="/register" exact component={Register} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />

          <ProtectedRoute path="/customers" exact component={ListCustomers} />
          <ProtectedRoute path="/customers/new" component={CreateCustomer} />
          <ProtectedRoute path="/customers/edit/:id" component={EditCustomer} />
          <ProtectedRoute path="/customers/view/:id" component={ViewCustomer} />
          <ProtectedRoute path="/customers/delete/:id" component={DeleteCustomer} />

          <ProtectedRoute path="/charges" exact component={ListCharges} />
          <ProtectedRoute path="/charges/new" component={CreateCharge} />
          <ProtectedRoute path="/charges/edit/:id" component={EditCharge} />
          <ProtectedRoute path="/charges/view/:id" component={ViewCharge} />
          <ProtectedRoute path="/charges/delete/:id" component={DeleteCharge} />
          <ProtectedRoute path="/cards" exact component={ListCards} />

          <ProtectedRoute path="/users" exact component={ListUsers} />
          <ProtectedRoute path="/users/new" component={CreateUser} />
          <ProtectedRoute path="/users/edit/:id" component={EditUser} />
          <ProtectedRoute path="/users/view/:id" component={ViewUser} />
          <ProtectedRoute path="/users/delete/:id" component={DeleteUser} />

          <ProtectedRoute path="/transactions" exact component={ListTransactions} />
          <ProtectedRoute path="/transactions/credit" component={PostCreditTransaction} />
          <ProtectedRoute path="/transactions/debit" component={PostDebitTransaction} />
          <ProtectedRoute path="/transactions/edit/:id" component={EditTransaction} />
          <ProtectedRoute path="/transactions/view/:id" component={ViewTransaction} />
          <ProtectedRoute path="/transactions/delete/:id" component={DeleteTransaction} />
          <ProtectedRoute path="/transactions/approve/:id" component={ApproveTransaction} />
          <Redirect to="/dashboard" />
        </Switch>
      </BrowserView>
    </React.Suspense>
  )
}

export default AppRouter;