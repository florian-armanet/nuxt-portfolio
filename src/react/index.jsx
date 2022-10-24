import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import store from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PATH_BASE_APP_REACT, PATH_CATEGORIES, PATH_HOME, PATH_PRODUCTS } from './utils/constants'
import App from './App'
import Home from './pages/Home'
import Error from './pages/Error'
import Products from './pages/Products'
import Product from './pages/Product'
import Category from './pages/Category'
import Categories from './pages/Categories'

const nodeInstance = document.getElementById('app-react')

const instance = ReactDOM.createRoot(nodeInstance)

instance.render(
    <Provider store={ store }>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App/> }>
                    <Route path={ PATH_HOME } element={ <Home/> }/>
                    <Route path={ PATH_BASE_APP_REACT + PATH_PRODUCTS } element={ <Products/> }/>
                    <Route path={ `${ PATH_BASE_APP_REACT }${ PATH_PRODUCTS }/:id` } element={ <Product/> }/>
                    <Route path={ PATH_BASE_APP_REACT + PATH_CATEGORIES } element={ <Categories/> }/>
                    <Route path={ `${ PATH_BASE_APP_REACT }${ PATH_CATEGORIES }/:categoryLabelOrigin` } element={ <Category/> }/>
                    <Route path="*" element={ <Error/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
)
