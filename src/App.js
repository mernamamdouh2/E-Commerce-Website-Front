import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AdminAddBrandPage from "./Page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Page/Admin/AdminAddCategoryPage";
import AdminAddCouponPage from "./Page/Admin/AdminAddCouponPage";
import AdminAddProductsPage from "./Page/Admin/AdminAddProductsPage";
import AdminAddSubCategoryPage from "./Page/Admin/AdminAddSubCategoryPage";
import AdminAllOrdersPage from "./Page/Admin/AdminAllOrdersPage";
import AdminAllProductsPage from "./Page/Admin/AdminAllProductsPage";
import AdminEditCouponPage from './Page/Admin/AdminEditCouponPage';
import AdminEditProductsPage from './Page/Admin/AdminEditProductsPage';
import AdminOrderDetailsPage from "./Page/Admin/AdminOrderDetailsPage";
import AllBrandPage from "./Page/Brand/AllBrandPage";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import CartPage from "./Page/Cart/CartPage";
import ChoosePayMethodPage from "./Page/Checkout/ChoosePayMethodPage";
import Footer from "./Components/Utility/Footer";
import ForgetPasswordPage from "./Page/Auth/ForgetPasswordPage";
import HomePage from "./Page/Home/HomePage";
import LoginPage from './Page/Auth/LoginPage';
import NavBarLogin from "./Components/Utility/NavBarLogin";
import ProductDetailsPage from "./Page/Products/ProductDetailsPage";
import ProductsByBrand from "./Page/Products/ProductsByBrand";
import ProductsByCategory from "./Page/Products/ProductsByCategory";
import ProtectedRoute from './Components/Utility/ProtectedRoute';
import ProtectedRouteHook from './hook/Auth/protected-route-hook';
import RegisterPage from "./Page/Auth/RegisterPage";
import ResetPasswordPage from "./Page/Auth/ResetPasswordPage";
import ShopProductsPage from "./Page/Products/ShopProductsPage";
import UserAddAddressPage from './Page/User/UserAddAddressPage';
import UserAllAddresPage from './Page/User/UserAllAddresPage';
import UserAllOrdersPage from "./Page/User/UserAllOrdersPage";
import UserEditAddressPage from './Page/User/UserEditAddressPage';
import UserFavoriteProductsPage from "./Page/User/UserFavoriteProductsPage";
import UserProfilePage from "./Page/User/UserProfilePage";
import VerifyPasswordPage from "./Page/Auth/VerifyPasswordPage";

function App() {
  const [isUser, isAdmin, userData] = ProtectedRouteHook()

  return (
    <div className="font" >
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/user/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/user/verify-code" element={<VerifyPasswordPage />} />
          <Route path="/user/reset-password" element={<ResetPasswordPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/products/category/:id" element={<ProductsByCategory />} />
          <Route path="/products/brand/:id" element={<ProductsByBrand />} />
          <Route path="/cart" element={<CartPage />} />

          <Route element={<ProtectedRoute auth={isAdmin} />}>
            <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
            <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
            <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
            <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
            <Route path="/admin/addproduct" element={<AdminAddProductsPage />} />
            <Route path="/admin/editproduct/:id" element={<AdminEditProductsPage />} />
            <Route path="/admin/addcoupon" element={<AdminAddCouponPage />} />
            <Route path="/admin/editcoupon/:id" element={<AdminEditCouponPage />} />
            <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
            <Route path="/admin/orders/:id" element={<AdminOrderDetailsPage />} />
          </Route>

          <Route element={<ProtectedRoute auth={isUser} />}>
            <Route path="/user/profile" element={<UserProfilePage />} />
            <Route path="/user/addresses" element={<UserAllAddresPage />} />
            <Route path="/user/add-address" element={<UserAddAddressPage />} />
            <Route path="/user/edit-address/:id" element={<UserEditAddressPage />} />
            <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
            <Route path="/user/allorders" element={<UserAllOrdersPage />} />
            <Route path="/order/paymethoud" element={<ChoosePayMethodPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;