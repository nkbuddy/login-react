import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import LoginPage from './login/LoginPage'
import RegisterPage from './login/RegisterPage'
import ForgetPasswordPage from './login/ForgetPasswordPage'
import HomePage from './HomePage'
import Report from './report/Report'
import AccountSetting from './profile/AccountSetting'
import Toggle from './shop/Toggle'
import Testing1 from './testing1'

import '../App.css'
import "bootstrap/dist/css/bootstrap.css";
import PendingAccount from './login/PendingAccount'

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={ <LandingPage/> } />
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/register" element={ <RegisterPage/> } />
                    <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
                    <Route path="/home/" element={ <HomePage/> } />
                    <Route path="/report" element={ <Report/> } />
                    <Route path="/account-setting" element={ <AccountSetting/> } />
                    <Route path="/shop/" element={ <Toggle/> } />
                    <Route path="/test" element={ <Testing1/> } />
                    <Route path="/accountmanagement" element={ <PendingAccount/> } />
                </Routes>
            </div>
        </Router>
    )
};