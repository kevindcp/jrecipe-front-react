import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FC } from "react";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import RecipesPage from "../pages/Recipes";
import Header from "../components/Header";
import RecipeFormPage from "../pages/RecipeForm";
import RecipePage from "../pages/Recipe";
import CategoryPage from "../pages/Category";

const Router: FC  = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element= { <Navigate replace to='/recipes'/>} />
                <Route path='/login' element={<LoginPage/>} /> 
                <Route path='/register' element={<RegisterPage/>} /> 
                <Route path='/recipes' element={
                    <>
                        <Header />
                        <RecipesPage/>
                    </>
                } />   
                <Route path='/recipes/add' element={
                    <>
                        <Header />
                        <RecipeFormPage/>
                    </>
                } /> 
                <Route path='/recipes/:id' element={
                    <>
                        <Header />
                        <RecipePage/>
                    </>
                } />  
                <Route path='/categories/:id' element={
                    <>
                        <Header />
                        <CategoryPage/>
                    </>
                } />
                <Route path='*' element={<h1> 404 </h1>} />
            </Routes>
        </BrowserRouter>
    )

}

export default Router