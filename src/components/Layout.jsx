import { Route, Routes } from "react-router-dom";
import {
  NavBar,
  Contact,
  AboutUs,
  Service,
  Blog,
  Property,
  Footer,
  BlogView,
  Login,
  Register,
  Listing,
  ForgotPassword,
  Flow2a,
} from "./index";
import Landing from "./Landing";
import ResetPassword from "./resetpassword/ResetPassword";
import Reviews from "./reviews/Reviews";
import AddProperty from "./property/create-prop/AddProperty";
import CompareProperty from "./property/compare-prop/CompareProperty"
import { useState } from "react";

const Layout = () => {
  const [compareData, setcompareData] = useState([])
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="nav fixed top-0 z-50">
        <NavBar />
      </div>
      <div className="main flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogView />} />
          <Route path="/aboutus" element={<AboutUs  />} />
          <Route path="/property" element={<Property />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
          <Route path="/property-listing" element={<Listing setcompareData = {setcompareData} compareData = {compareData} />} />
          <Route path="/property/:id" element={<Flow2a />} />
          <Route path="/property/reviews" element={<Reviews />} />
          <Route path="/property/add-property" element={<AddProperty />} />
          <Route path="/compare-property" element={<CompareProperty compareData = {compareData} setcompareData = {setcompareData}/>}/>
        </Routes>
      </div>
      <div className="footer bottom-0 mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
