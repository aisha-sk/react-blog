import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import React from 'react'
import useWindowSize from './hooks/useWindowSize'

const Layout = ({ search, setSearch }) => {
    const { width } = useWindowSize(); // Get the width value from the hook

    return (
        <div className="App">
            <Header title="React JS Blog" width={width}/>
            <Nav search={search} setSearch={setSearch} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout