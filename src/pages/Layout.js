import React from "react";
import { Outlet } from "react-router-dom";
import Title from './components/title';
import Footer from './components/footer';
import Navbar from "./components/Navbar";

export default function Layout(){
        return(
            <div>
                <Title></Title>
                <Navbar></Navbar>
                <Outlet />
                <Footer></Footer>
            </div>
        );
    }
