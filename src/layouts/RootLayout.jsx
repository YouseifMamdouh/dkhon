// Layout.js
import React from 'react';
import Header from '../assets/Compontes/Header';
import Footer from '../assets/Compontes/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
