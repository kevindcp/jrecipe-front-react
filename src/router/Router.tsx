import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FC } from "react";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import RecipesPage from "../pages/Recipes";
import Header from "../components/Header";
import RecipeFormPage from "../pages/RecipeForm";
import RecipePage from "../pages/Recipe";
import CategoryPage from "../pages/Category";
import { useAppSelector } from "../hooks/redux";

const Router: FC  = () => {
    const { token }  = useAppSelector((state) => state.user)
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element= { token ? <Navigate replace to='/recipes'/> : <Navigate replace to='/login'/>} />
                <Route path='/login' element={<LoginPage/>} /> 
                <Route path='/register' element={<RegisterPage/>} /> 
                <Route path='/recipes' element={ token ? 
                    <>
                        <Header />
                        <RecipesPage/>
                    </> 
                    : <Navigate replace to='/login'/>
                } />   
                <Route path='/recipes/add' element={ token ?
                    <>
                        <Header />
                        <RecipeFormPage/>
                    </>
                    : <Navigate replace to='/login'/>
                } /> 
                <Route path='/recipes/:id' element={ token ?
                    <>
                        <Header />
                        <RecipePage/>
                    </>
                    : <Navigate replace to='/login'/>
                } />  
                <Route path='/categories/:id' element={ token ?
                    <>
                        <Header />
                        <CategoryPage/>
                    </>
                    : <Navigate replace to='/login'/>
                } />
                <Route path='*' element={token ? <h1> 404 </h1> : <Navigate replace to='/login'/>} />
            </Routes>
        </BrowserRouter>
    )

}

export default Router