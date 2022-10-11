import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  bannerListReducer,
  bannerDetailsReducer,
  bannerDeleteReducer,
  bannerCreateReducer,
  bannerUpdateReducer,
} from './reducers/bannerReducers'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/userReducers'

const reducer = combineReducers({
  bannerList: bannerListReducer,
  bannerDetails: bannerDetailsReducer,
  bannerDelete: bannerDeleteReducer,
  bannerCreate: bannerCreateReducer,
  bannerUpdate: bannerUpdateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = { userLogin: { userInfo: userInfoFromStorage } }

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
