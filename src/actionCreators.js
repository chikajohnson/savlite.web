import { 
  MODEL_CREATION_FAILED,
  APP_LOAD, USER_LOADED, USER_LOGIN_FAILED, USER_LOGGING_IN, HIDE_MODAL, 
  USER_LOGGED_IN, LOGOUT, SHOW_MODAL, USER_REGISTERING_FAILED, USER_REGISTERING, 
  USER_REGISTERED, LEADERS_LOADING, LEADERS_LOADING_FAILED, LEADERS_LOADED, ERROR_MESSAGE_CLEARED,
  CATEGORIES_LOADED, WALLET_LOADED, PLANS_LOADED, RANK_LOADED,
  SHOW_GLOBAL_HEADER, HIDE_GLOBAL_HEADER, LOAD_PROFILE,
  UPLOADING_AVATAR,
  AVATAR_UPLAODED,
  AVATAR_UPLAOD_FAILED,
  BANKS_LOADED,
  PROFILE_UPDATED, UPDATING_PROFILE, UPDATING_PROFILE_FAILED, PLAN_PURCHASED, PURCHASING_PLAN, PURCHASING_PLAN_FAILED,
  CREATE_CUSTOMER, EDIT_CUSTOMER, VIEW_CUSTOMER,
  CREATE_USER, EDIT_USER, VIEW_USER,
  REQUEST_FETCHED, REQUEST_FETCHING
 } from "./constants/actionTypes";

 export function showModal(modalName){
  return {
    type: SHOW_MODAL, 
    modalProps: { open: true }, 
    modalType: modalName 
  }
}

export function requestFetched(){
  return  { 
    type: REQUEST_FETCHED
  }
}

export function requestFetching(){
  return  { 
    type: REQUEST_FETCHING
  }
}

export function appLoaded(){
  return  { 
    type: APP_LOAD
  }
}

export function userLoggingIn(){
  return  { 
    type: USER_LOGGING_IN, 
  }
}

export function userLoaded(user){
  return  { 
    type: USER_LOADED, 
    user, 
  }
}

export function userLoggedIn(user){
  return  { 
    type: USER_LOGGED_IN, 
    user, 
  }
}

export function userLoginFailed(error){
  return  { 
    type: USER_LOGIN_FAILED, 
    error, 
  }
}

export function userRegistering(){
  return  { 
    type: USER_REGISTERING, 
  }
}

export function userRegistered(user){
  return  { 
    type: USER_REGISTERED,
    user, 
  }
}

export function leadersLoaded(board){
  return  { 
    type: LEADERS_LOADED,
    board: board
  }
}

export function loadingLeaders(){
  return  { 
    type: LEADERS_LOADING,
  }
}

export function loadingLeadersFailed(){
  return  { 
    type: LEADERS_LOADING_FAILED,
  }
}

export function errorMessageCleared(){
  return  { 
    type: ERROR_MESSAGE_CLEARED,
  }
}

export function userRegisterFailed(error){
  return  { 
    type: USER_REGISTERING_FAILED, 
    error
  }
}


export function onModelCreationFailed(error){
  return  { 
    type: MODEL_CREATION_FAILED, 
    error
  }
}

export function categoriesLoaded(data){
  return { 
    type: CATEGORIES_LOADED, 
    payload: data 
  }
}

export function plansLoaded(data){
  return { 
    type: PLANS_LOADED, 
    payload: data 
  }
}

export function walletLoaded(data){
  return { 
    type: WALLET_LOADED, 
    ...data 
  }
}

export function uploadingAvatar(){
  return { 
    type: UPLOADING_AVATAR,
  }
}

export function avatarUploaded(avatar){
  return { 
    type: AVATAR_UPLAODED,
    payload: avatar
  }
}

export function avatarUploadFailed(){
  return { 
    type: AVATAR_UPLAOD_FAILED,
  }
}

export function profileLoaded(data){
  return { 
    type: LOAD_PROFILE,
    payload: data
  }
}


export function profileUpdated(data){
  return { 
    type: PROFILE_UPDATED,
    payload: data
  }
}
export function updatingProfile(){
  return { 
    type: UPDATING_PROFILE,
  }
}

export function updatingProfileFailed(){
  return { 
    type: UPDATING_PROFILE_FAILED,
  }
}

export function update(data){
  return { 
    type: PROFILE_UPDATED,
    payload: data
  }
}


export function rankLoaded(data){
  return { 
    type: RANK_LOADED,
    rank: data
  }
}

export function searchItem(modalName){
  return {
    type: SHOW_MODAL, 
    modalProps: { open: true }, 
    modalType: modalName 
  }
}


export function hideModal(){
  return {
    type: HIDE_MODAL 
  }
}

export function userLogout(){
  return {
    type: LOGOUT 
  }
}

export function showGlobalHeader(){
  return {
    type: SHOW_GLOBAL_HEADER,
  }
}

export function hideGlobalHeader(){
  return {
    type: HIDE_GLOBAL_HEADER,
  }
}

export function showSignUpBonusModal(){
  return { 
    type: SHOW_MODAL, 
    modalProps: { open: true }, 
    modalType: 'SignUpBonusModal' 
  }
}

export function banksLoaded(banks){
  return {
    type: BANKS_LOADED,
    banks
  }
}

export function purchasingPlan(){
  return{
    type: PURCHASING_PLAN
  }
}

export function planPurchased(data){
  return{
    type: PLAN_PURCHASED,
    payload: data
  }
}

export function planPurchaseFailed(){
  return{
    type: PURCHASING_PLAN_FAILED
  }
}