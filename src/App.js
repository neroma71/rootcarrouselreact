import React, { useState, useEffect } from 'react';
import Article from './components/Article';
import './App.css';
import { createBrowserRouter, NavLink, Outlet, RouterProvider } from 'react-router-dom';
import { Blog } from './components/blog';
import { Home } from './components/home';
import { Contact } from './components/contact';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <PageError/>,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'contact',
        element: <Contact/>
      }
    ]
  }
]);
function PageError (){
  return <>
    <h1>Il y a un problème de soucis</h1>
  </>
}
function Root (){
    return <>
    <header>
        <nav>
          <ul>
            <li><NavLink to ="/home">home</NavLink></li>
            <li><NavLink to ="/blog">blog</NavLink></li>
            <li><NavLink to ="/contact">contact</NavLink></li>
            </ul>
        </nav>
    </header>
    <div className="container">
      <Outlet />
    </div>
    </>
}

function App() {
  return <RouterProvider router={router} />
}

export default App;
