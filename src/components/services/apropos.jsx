import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export function Apropos() {
  return (
    <>
      <h1>À propos</h1>
      <nav className="nav2">
        <ul>
          <li><Link to="marketing">Service Marketing</Link></li>
          <li><Link to="developement">Service Développement</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}