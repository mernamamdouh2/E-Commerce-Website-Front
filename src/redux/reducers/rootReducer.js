import addToWishListReducer from './wishListReducer'
import authReducer from './authReducer'
import brandReducer from './brandReducer'
import cartReducer from './cartReducer'
import categoryReducer from './categoryReducer'
import checkoutReducer from './checkoutReducer'
import { combineReducers } from 'redux'
import couponReducer from './couponReducer'
import productsReducer from './productsReducer'
import reviewReducer from './reviewReducer'
import subcategoryReducer from './subcategoryReducer'
import userAddressesReducer from './userAddressesReducer'
import orderReducer from './orderReducer'

export default combineReducers({
    allCategory: categoryReducer,
    allBrand: brandReducer,
    subCategory: subcategoryReducer,
    allProducts: productsReducer,
    authReducer: authReducer,
    reviewReducer: reviewReducer,
    addToWishListReducer: addToWishListReducer,
    couponReducer: couponReducer,
    userAddressesReducer: userAddressesReducer,
    cartReducer: cartReducer,
    checkoutReducer: checkoutReducer,
    orderReducer:orderReducer,
})