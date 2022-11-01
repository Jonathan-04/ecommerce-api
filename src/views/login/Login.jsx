import React from "react";
import "./Login.css";
import PageTop from "../../components/PageTop";
import Footer from "../../components/footer/Footer";
import Register from "./Register";
import ResetPassword from "./ResetPassword";
import LoginAccount from "./LoginAccount";
import { Route, Routes } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Routes>
        <Route path="" element={<LoginAccount />} />
        <Route path="register" element={<Register />} />
        <Route path="resetPassword" element={<ResetPassword />} />
      </Routes>
      <Footer />
      <PageTop />
    </>
  );
}
