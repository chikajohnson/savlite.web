import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import agent from '../agent';
import './App.css';
import { loadApp, showBonusAlert } from '../actions';
import AppLoading from './UI/Spinner/AppLoading';

const AppRouter = React.lazy(() => import('./../components/AppRouter'));
toast.configure({
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

function App(props) {
  const showBonus = useSelector(state => state.common.showBonus)

  const dispatch = useDispatch()

  useEffect(() => {
    showBonus && dispatch(showBonusAlert())
  }, [showBonus, dispatch])

  useEffect(() => {
    console.log('useEffect')
    if (agent.Auth.isAuth()) {
      console.log('load app')
      dispatch(loadApp())
    }
  }, [dispatch])

  return (
    <React.Suspense fallback={<AppLoading />}>
      <AppRouter />
    </React.Suspense>
  )
}

export default App