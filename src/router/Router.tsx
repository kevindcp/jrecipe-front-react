import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FC } from "react";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

const Router: FC  = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage/>} /> 
                <Route path='/register' element={<RegisterPage/>} /> 
            </Routes>
        </BrowserRouter>
    )

}

export default Router