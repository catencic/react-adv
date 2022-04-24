import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { DynamicFormPage } from '../03-forms/pages/DynamicFormPage';
import { FormikAbstraction } from '../03-forms/pages/FormikAbstraction';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikComponents } from '../03-forms/pages/FormikComponents';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
import { RegisterFormikPage } from '../03-forms/pages/RegisterFormikPage';
import { RegisterPage } from '../03-forms/pages/RegisterPage';

import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstraction" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Abstraction</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register-formik-page" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register Formik Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dynamic-formik-page" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Dynamic Formik Page</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="register" element={  <RegisterPage/> } />
                    <Route path="formik-basic" element={ <FormikBasicPage/> } />
                    <Route path="formik-yup" element={ <FormikYupPage/> } />
                    <Route path="formik-components" element={ <FormikComponents/> } />
                    <Route path="formik-abstraction" element={ <FormikAbstraction/> } />
                    <Route path="register-formik-page" element={ <RegisterFormikPage /> } />
                    <Route path="dynamic-formik-page" element={ <DynamicFormPage /> } />
                    <Route path="home" element={ <h1>Home Page</h1> } />
                    
                    <Route path="/*" element={ <Navigate to="/home" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
